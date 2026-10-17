$content = Get-Content "c:\web jepun\data.js" -Encoding UTF8 -Raw

function Expand-Array {
    param(
        [string]$text,
        [string]$arrayName
    )
    
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

$content = Expand-Array -text $content -arrayName "rawVerbs"
$content = Expand-Array -text $content -arrayName "rawNouns"
$content = Expand-Array -text $content -arrayName "rawAdjectives"

Set-Content "c:\web jepun\data.js" -Value $content -Encoding UTF8
Write-Output "Done"