$path = "c:\web jepun\data.js"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$text = [System.IO.File]::ReadAllText($path, $utf8)

function Expand-Array {
    param([string]$text, [string]$arrayName)
    $startToken = "const $arrayName = ["
    $startIndex = $text.IndexOf($startToken)
    if ($startIndex -eq -1) { return $text }
    
    $arrayStart = $startIndex + $startToken.Length
    $endIndex = $text.IndexOf("];", $arrayStart)
    if ($endIndex -eq -1) { return $text }
    
    $itemsText = $text.Substring($arrayStart, $endIndex - $arrayStart).Trim()
    
    $newItems = ""
    for ($i = 1; $i -le 4; $i++) {
        $newItems += ",`r`n    " + $itemsText
    }
    
    $newText = $text.Substring(0, $endIndex) + "`r`n    " + $newItems + "`r`n" + $text.Substring($endIndex)
    return $newText
}

$text = Expand-Array -text $text -arrayName "rawVerbs"
$text = Expand-Array -text $text -arrayName "rawNouns"
$text = Expand-Array -text $text -arrayName "rawAdjectives"

[System.IO.File]::WriteAllText($path, $text, $utf8)
Write-Output "Done"