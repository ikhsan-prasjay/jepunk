const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const voiceBtn = document.getElementById('voiceBtn');
const messages = document.getElementById('messages');

const kaiwaReadings = new Map([
  ['自己紹介', 'じこしょうかい'], ['買い物', 'かいもの'], ['道案内', 'みちあんない'],
  ['練習', 'れんしゅう'], ['手伝います', 'てつだいます'], ['お願いします', 'おねがいします'],
  ['今日', 'きょう'], ['詳しく', 'くわしく'],
  ['日本語', 'にほんご'], ['五百円', 'ごひゃくえん'], ['一千円', 'いっせんえん'],
  ['商品', 'しょうひん'], ['八百円', 'はっぴゃくえん'], ['料金', 'りょうきん'], ['二千円', 'にせんえん'],
  ['買いたい', 'かいたい'], ['お茶', 'おちゃ'], ['見ています', 'みています'], ['駅前', 'えきまえ'],
  ['行って', 'いって'], ['曲がる', 'まがる'], ['話して', 'はなして'], ['音声認識', 'おんせいにんしき'],
  ['失敗', 'しっぱい'], ['文字', 'もじ'], ['変換', 'へんかん'], ['入力', 'にゅうりょく'], ['利用', 'りよう'], ['使って', 'つかって'],
  ['一緒', 'いっしょ'], ['友達', 'ともだち'], ['名前', 'なまえ'], ['学校', 'がっこう'], ['学生', 'がくせい'],
  ['買う', 'かう'], ['見ます', 'みます'], ['左', 'ひだり'], ['右', 'みぎ'], ['前', 'まえ'],
  ['五百', 'ごひゃく'], ['八百', 'はっぴゃく'], ['一千', 'いっせん'], ['二千', 'にせん']
]);
const kaiwaSingleReadings = new Map([
  ['私', 'わたし'], ['自', 'じ'], ['紹', 'しょう'], ['介', 'かい'], ['買', 'か'], ['物', 'もの'],
  ['道', 'みち'], ['案', 'あん'], ['内', 'ない'], ['練', 'れん'], ['習', 'しゅう'], ['手', 'て'],
  ['伝', 'つた'], ['願', 'ねが'], ['日', 'にち'], ['本', 'ほん'], ['語', 'ご'], ['五', 'ご'],
  ['百', 'ひゃく'], ['円', 'えん'], ['一', 'いち'], ['千', 'せん'], ['商', 'しょう'], ['品', 'ひん'],
  ['八', 'はち'], ['料', 'りょう'], ['金', 'かね'], ['二', 'に'], ['何', 'なに'], ['茶', 'ちゃ'],
  ['見', 'み'], ['駅', 'えき'], ['前', 'まえ'], ['行', 'い'], ['左', 'ひだり'], ['曲', 'ま'],
  ['話', 'はな'], ['音', 'おと'], ['声', 'こえ'], ['認', 'にん'], ['失', 'しつ'], ['敗', 'ぱい'],
  ['文', 'もじ'], ['字', 'じ'], ['変', 'へん'], ['換', 'かん'], ['入', 'はい'], ['力', 'りょく'],
  ['使', 'つか'], ['少', 'すこ'], ['学', 'がく'], ['校', 'こう'], ['生', 'せい'], ['友', 'とも'],
  ['名', 'な'], ['時', 'じ'], ['安', 'やす'], ['店', 'みせ'], ['食', 'た'], ['飲', 'の']
]);

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

function formatKaiwaReading(word, reading) {
  const pieces = word.match(/[一-龯]+|[^一-龯]+/g) || [word];
  if (pieces.length === 1) return `<ruby>${escapeHtml(word)}<rt>${escapeHtml(reading)}</rt></ruby>`;
  let cursor = 0;
  const html = [];
  for (let index = 0; index < pieces.length; index += 1) {
    const piece = pieces[index];
    if (!/[一-龯]/.test(piece)) {
      if (reading.startsWith(piece, cursor)) cursor += piece.length;
      html.push(escapeHtml(piece));
      continue;
    }
    const nextKana = pieces[index + 1] && !/[一-龯]/.test(pieces[index + 1]) ? pieces[index + 1] : '';
    const nextIndex = nextKana ? reading.indexOf(nextKana, cursor) : reading.length;
    if (nextIndex <= cursor) return null;
    html.push(`<ruby>${escapeHtml(piece)}<rt>${escapeHtml(reading.slice(cursor, nextIndex))}</rt></ruby>`);
    cursor = nextIndex;
  }
  return html.join('');
}

function decorateJapaneseMessage(text) {
  const tokens = [];
  let html = escapeHtml(text);
  [...kaiwaReadings.keys()]
    .filter((word) => /[一-龯]/.test(word))
    .sort((a, b) => b.length - a.length)
    .forEach((word) => {
      html = html.replace(new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), (match) => {
        const ruby = formatKaiwaReading(match, kaiwaReadings.get(match));
        if (!ruby) return match;
        const token = `__KAIWA_RUBY_${tokens.length}__`;
        tokens.push(ruby);
        return token;
      });
    });
  html = html.replace(/[一-龯]/g, (kanji) => {
    const reading = kaiwaSingleReadings.get(kanji);
    if (!reading) return kanji;
    const token = `__KAIWA_RUBY_${tokens.length}__`;
    tokens.push(`<ruby>${escapeHtml(kanji)}<rt>${escapeHtml(reading)}</rt></ruby>`);
    return token;
  });
  return tokens.reduce((result, ruby, index) => result.replace(`__KAIWA_RUBY_${index}__`, ruby), html);
}

const state = {
  history: [
    { role: 'bot', text: 'こんにちは！私は AI Kaiwa です。自己紹介や買い物、道案内の練習をできます。' }
  ]
};

function appendMessage(role, text) {
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  div.innerHTML = decorateJapaneseMessage(text);
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function renderHistory() {
  messages.innerHTML = '';
  state.history.forEach(({ role, text }) => appendMessage(role, text));
}

function speakJapanese(text) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.96;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function randomPriceReply() {
  const prices = [
    'それは五百円です。',
    '一千円で買えます。',
    'この商品は八百円です。',
    '料金は二千円です。'
  ];
  return prices[Math.floor(Math.random() * prices.length)];
}

function offlineIntentResponse(userMessage) {
  const text = userMessage.toLowerCase();

  if (/jiko|自己紹介|じこしょうかい|self/i.test(userMessage)) {
    return '私はNihongo StudioのAIです。私は日本語の練習を手伝います。よろしくお願いします。';
  }

  if (/ikura|nedan|price|harga|berapa/i.test(userMessage)) {
    return randomPriceReply();
  }

  if (/shopping|kaitai|buy|kaimono|shop|mau beli|membeli/i.test(userMessage)) {
    return '何を買いたいですか？お茶、パン、または本を見ていますか？';
  }

  if (/michi|directions|どうやって|どこ|path|arah|道|みち/i.test(userMessage)) {
    return '駅の前をまっすぐ行って、左に曲がると、コンビニがあります。';
  }

  if (/konnichiwa|hello|こんにちは|こんばんは|おはよう/i.test(userMessage)) {
    return 'こんにちは！今日はどんな練習をしたいですか？';
  }

  if (/sore|それ|hai|はい|いいえ|un|うん|いいよ/i.test(userMessage)) {
    return 'わかりました。もう少し詳しく話してみましょう。';
  }

  return 'もう少しゆっくり話してみてください。たとえば、自己紹介、買い物、道案内のどれかを練習できます。';
}

async function fetchAIResponse(userMessage, contextHistory) {
  // Gemini hook for future integration.
  // const requestBody = { contents: [{ role: 'user', parts: [{ text: ... }] }] };
  // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_KEY', {
  //   method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody)
  // });
  // const data = await response.json();
  // return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? offlineIntentResponse(userMessage);
  return offlineIntentResponse(userMessage);
}

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  state.history.push({ role: 'user', text });
  renderHistory();

  const reply = await fetchAIResponse(text, state.history);
  state.history.push({ role: 'bot', text: reply });
  renderHistory();
  speakJapanese(reply);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') sendMessage();
});

let recognition = null;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'ja-JP';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    chatInput.value = transcript;
    appendMessage('system', '音声を文字に変換しました。');
  };

  recognition.onerror = () => {
    appendMessage('system', '音声認識に失敗しました。テキスト入力をお使いください。');
  };

  let holding = false;
  voiceBtn.addEventListener('mousedown', () => {
    holding = true;
    voiceBtn.classList.add('active');
    voiceBtn.textContent = '話しています...';
    recognition.start();
  });

  voiceBtn.addEventListener('mouseup', () => {
    if (!holding) return;
    holding = false;
    voiceBtn.classList.remove('active');
    voiceBtn.textContent = 'Push-to-talk';
    recognition.stop();
  });

  voiceBtn.addEventListener('touchstart', (event) => {
    event.preventDefault();
    holding = true;
    voiceBtn.classList.add('active');
    voiceBtn.textContent = '話しています...';
    recognition.start();
  });

  voiceBtn.addEventListener('touchend', (event) => {
    event.preventDefault();
    if (!holding) return;
    holding = false;
    voiceBtn.classList.remove('active');
    voiceBtn.textContent = 'Push-to-talk';
    recognition.stop();
  });
} else {
  voiceBtn.textContent = '音声未対応';
  voiceBtn.disabled = true;
  appendMessage('system', 'このブラウザは音声認識に対応していません。テキスト入力をご利用ください。');
}

renderHistory();
