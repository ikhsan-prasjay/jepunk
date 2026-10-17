(() => {
    'use strict';

    const SETTINGS_KEY = 'nihongo-studio-jlpt-settings-v1';
    const ERRORS_KEY = 'nihongo-studio-jlpt-errors-v1';
    const LEGACY_REVIEW_KEY = 'nihongo-studio-review-v1';
    const root = document.documentElement;
    const levelSelect = document.getElementById('level');
    const modeSelect = document.getElementById('mode');
    const fontSelect = document.getElementById('font-size');
    const furiganaSelect = document.getElementById('furigana');
    const themeSelect = document.getElementById('theme');
    const startButton = document.getElementById('start-button');
    const reviewToggle = document.getElementById('review-toggle');
    const exercise = document.getElementById('exercise');
    const questionContent = document.getElementById('question-content');
    const answerSheet = document.getElementById('answer-sheet');
    const result = document.getElementById('result');
    const timer = document.getElementById('timer');
    const notice = document.getElementById('notice');
    const hintBox = document.getElementById('hint-box');
    const audioButton = document.getElementById('audio-button');
    const questionTips = {
        'Kanji reading': 'Perhatikan kata dalam konteks dan cocokkan bacaan kanji dengan maknanya.',
        'Kanji writing': 'Pilih penulisan kanji yang sesuai dengan arti kata di dalam kalimat.',
        'Context vocabulary': 'Baca seluruh kalimat, lalu gunakan petunjuk situasi untuk memilih kosakata.',
        'Paraphrase': 'Cari pilihan dengan makna paling dekat dalam konteks kalimat.',
        'Word usage': 'Pilih contoh yang menggunakan kata dengan pasangan kata dan situasi alami.',
        'Grammar form': 'Periksa fungsi partikel, bentuk kata, dan hubungan antarbagian kalimat.',
        'Sentence composition': 'Susun topik dan keterangan terlebih dahulu; predikat umumnya berada di akhir.',
        'Text grammar': 'Gunakan hubungan makna antarfrasa: alasan, urutan, kontras, atau simpulan.',
        'Short reading': 'Baca pertanyaan dahulu dan cari satu informasi yang menjawabnya.',
        'Medium reading': 'Ikuti urutan gagasan; perhatikan しかし untuk kontras dan つまり untuk simpulan.',
        'Information search': 'Cocokkan semua syarat waktu, tempat, dan biaya dengan informasi yang diberikan.',
        'Task comprehension': 'Tangkap permintaan atau tujuan utama dari percakapan.',
        'Key point': 'Fokus pada detail yang ditanyakan, misalnya waktu, tempat, angka, atau perubahan rencana.',
        'Utterance expression': 'Bayangkan situasinya dan pilih ungkapan yang sesuai dengan lawan bicara.',
        'Quick response': 'Kenali fungsi ujaran, lalu pilih respons singkat yang alami.'
    };
    const furigana = [
        ['日本語', 'にほんご', 'N5'], ['学校', 'がっこう', 'N5'], ['水', 'みず', 'N5'],
        ['山', 'やま', 'N5'], ['本屋', 'ほんや', 'N5'], ['本', 'ほん', 'N5'],
        ['友達', 'ともだち', 'N5'], ['学生', 'がくせい', 'N5'], ['先生', 'せんせい', 'N5'],
        ['毎朝', 'まいあさ', 'N5'], ['毎日', 'まいにち', 'N5'], ['明日', 'あした', 'N5'],
        ['日曜日', 'にちようび', 'N5'], ['月曜日', 'げつようび', 'N5'], ['火曜日', 'かようび', 'N5'],
        ['土曜日', 'どようび', 'N5'], ['図書館', 'としょかん', 'N5'], ['駅', 'えき', 'N5'],
        ['母', 'はは', 'N5'], ['父', 'ちち', 'N5'], ['兄', 'あに', 'N5'],
        ['妹', 'いもうと', 'N5'], ['雨', 'あめ', 'N5'], ['午後', 'ごご', 'N5'],
        ['午前', 'ごぜん', 'N5'], ['学校', 'がっこう', 'N5'], ['先生', 'せんせい', 'N5'],
        ['毎朝', 'まいあさ', 'N5'], ['料理', 'りょうり', 'N4'], ['予定', 'よてい', 'N4'],
        ['近く', 'ちかく', 'N4'], ['駅前', 'えきまえ', 'N4'], ['会社', 'かいしゃ', 'N4'],
        ['電車', 'でんしゃ', 'N5'], ['引っ越し', 'ひっこし', 'N4'], ['薬', 'くすり', 'N4'],
        ['運転', 'うんてん', 'N4'], ['説明', 'せつめい', 'N4'], ['理解', 'りかい', 'N4'],
        ['会議', 'かいぎ', 'N4'], ['資料', 'しりょう', 'N4'], ['準備', 'じゅんび', 'N4'],
        ['改札口', 'かいさつぐち', 'N4'], ['荷物', 'にもつ', 'N4'], ['受付', 'うけつけ', 'N4'],
        ['漢字', 'かんじ', 'N5'], ['読み方', 'よみかた', 'N4'], ['熱', 'ねつ', 'N4'],
        ['先週', 'せんしゅう', 'N5'], ['来週', 'らいしゅう', 'N4'], ['旅行', 'りょこう', 'N4'],
        ['町', 'まち', 'N4'], ['前', 'まえ', 'N5'], ['掃除', 'そうじ', 'N4'],
        ['危ない', 'あぶない', 'N4'], ['簡単', 'かんたん', 'N4'], ['遅れ', 'おくれ', 'N4'],
        ['静か', 'しずか', 'N5'], ['必要', 'ひつよう', 'N4'], ['連絡', 'れんらく', 'N4'],
        ['問題', 'もんだい', 'N5'], ['友人', 'ゆうじん', 'N4'], ['家族', 'かぞく', 'N5'],
        ['環境', 'かんきょう', 'N4'], ['参加', 'さんか', 'N4'], ['公園', 'こうえん', 'N5'],
        ['毎月', 'まいつき', 'N4'], ['日曜日', 'にちようび', 'N5'], ['病院', 'びょういん', 'N5'],
        ['診察', 'しんさつ', 'N4'], ['午後', 'ごご', 'N5'], ['料金', 'りょうきん', 'N4'],
        ['予約', 'よやく', 'N4'], ['同僚', 'どうりょう', 'N4'], ['図書館', 'としょかん', 'N5'],
        ['友だち', 'ともだち', 'N5'], ['電気', 'でんき', 'N5'], ['学校', 'がっこう', 'N5'],
        ['動物園', 'どうぶつえん', 'N4'], ['映画館', 'えいがかん', 'N4'], ['開園', 'かいえん', 'N4'],
        ['入場', 'にゅうじょう', 'N4'], ['学生料金', 'がくせいりょうきん', 'N4'], ['毎週', 'まいしゅう', 'N5'],
        ['会話', 'かいわ', 'N4'], ['練習', 'れんしゅう', 'N5'], ['夕方', 'ゆうがた', 'N4'],
        ['買い物', 'かいもの', 'N5'], ['時間', 'じかん', 'N5'], ['自転車', 'じてんしゃ', 'N5'],
        ['映画', 'えいが', 'N5'], ['店', 'みせ', 'N5'], ['家', 'いえ', 'N5'],
        ['授業', 'じゅぎょう', 'N5'], ['健康', 'けんこう', 'N4'], ['文化祭', 'ぶんかさい', 'N4'],
        ['階', 'かい', 'N5'], ['方向', 'ほうこう', 'N4'], ['試験', 'しけん', 'N4'],
        ['同じ', 'おなじ', 'N5'], ['今月', 'こんげつ', 'N5'], ['日記', 'にっき', 'N4'],
        ['入場料', 'にゅうじょうりょう', 'N4'], ['全品', 'ぜんぴん', 'N4'], ['市民', 'しみん', 'N4'],
        ['喫茶店', 'きっさてん', 'N4'], ['店員', 'てんいん', 'N4'], ['大学生', 'だいがくせい', 'N5'],
        ['意味', 'いみ', 'N5'], ['許可', 'きょか', 'N4'], ['自然', 'しぜん', 'N4'],
        ['質問', 'しつもん', 'N4'], ['郵便局', 'ゆうびんきょく', 'N4'], ['入場', 'にゅうじょう', 'N4'],
        ['開店', 'かいてん', 'N4'], ['閉店', 'へいてん', 'N4'], ['平日', 'へいじつ', 'N4'],
        ['動物', 'どうぶつ', 'N4'], ['文化祭', 'ぶんかさい', 'N4'], ['各駅停車', 'かくえきていしゃ', 'N3'],
        ['身分証明書', 'みぶんしょうめいしょ', 'N3'], ['軍手', 'ぐんて', 'N3'], ['祝日', 'しゅくじつ', 'N4']
    ];
    const furiganaByWord = new Map(furigana.map(([word, reading, level]) => [word, { reading, level }]));
    const furiganaPattern = new RegExp(furigana
        .map(([word]) => word)
        .sort((a, b) => b.length - a.length)
        .filter((word, index, words) => words.indexOf(word) === index)
        .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('|'), 'g');

    let questions = [];
    let currentIndex = 0;
    let answers = [];
    let active = false;
    let reviewOnly = false;
    let remainingSeconds = 0;
    let timerHandle = null;
    let errors = [];
    let legacyReview = [];
    let sourceVocabCards = [];

    function setNotice(message, isError = false) {
        notice.textContent = message;
        notice.classList.toggle('error', isError);
    }

    function readStorage(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : JSON.parse(value);
        } catch (error) {
            console.error(`Data ${key} tidak dapat dibaca dari penyimpanan lokal.`, error);
            setNotice('Pengaturan atau catatan lokal tidak dapat dibaca. Periksa izin penyimpanan browser; sesi tetap dapat digunakan sementara.', true);
            return fallback;
        }
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Data ${key} tidak dapat disimpan ke penyimpanan lokal.`, error);
            setNotice('Browser tidak dapat menyimpan perubahan. Periksa ruang penyimpanan atau izin situs.', true);
            return false;
        }
    }

    function loadPreferences() {
        const saved = readStorage(SETTINGS_KEY, {});
        if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
            if (['N5', 'N4'].includes(saved.level)) levelSelect.value = saved.level;
            if (['exam', 'guided'].includes(saved.mode)) modeSelect.value = saved.mode;
            if (['16', '18', '20'].includes(String(saved.fontSize))) fontSelect.value = String(saved.fontSize);
            if (['on', 'off'].includes(saved.furigana)) furiganaSelect.value = saved.furigana;
            if (['light', 'dark'].includes(saved.theme)) themeSelect.value = saved.theme;
        }
        applyPreferences();
    }

    function applyPreferences() {
        root.dataset.theme = themeSelect.value;
        root.dataset.currentLevel = levelSelect.value;
        root.classList.toggle('furigana-off', furiganaSelect.value === 'off');
        root.style.fontSize = `${fontSelect.value}px`;
        writeStorage(SETTINGS_KEY, {
            level: levelSelect.value,
            mode: modeSelect.value,
            fontSize: fontSelect.value,
            furigana: furiganaSelect.value,
            theme: themeSelect.value
        });
    }

    function loadErrorRecords() {
        const savedErrors = readStorage(ERRORS_KEY, []);
        errors = Array.isArray(savedErrors) ? savedErrors.filter(item =>
            item && ['N5', 'N4'].includes(item.level) && typeof item.id === 'string'
        ) : [];
        const savedLegacy = readStorage(LEGACY_REVIEW_KEY, []);
        legacyReview = Array.isArray(savedLegacy) ? savedLegacy.filter(item => typeof item === 'string') : [];
        updateReviewLabel();
    }

    function updateReviewLabel() {
        const levelErrors = errors.filter(item => item.level === levelSelect.value).length;
        reviewToggle.textContent = reviewOnly
            ? `Tampilkan semua soal ${levelSelect.value}`
            : `Catatan Kesalahan ${levelSelect.value} (${levelErrors})`;
        reviewToggle.setAttribute('aria-pressed', String(reviewOnly));
        reviewToggle.disabled = !reviewOnly && levelErrors === 0;
    }

    function getQuestionSet() {
        const bank = jlptQuestionBank[levelSelect.value];
        const errorIds = new Set(errors.filter(item => item.level === levelSelect.value).map(item => item.id));
        return bank.groups.map(group => ({
            ...group,
            questions: group.questions.filter(question => !reviewOnly || errorIds.has(question.id))
        })).filter(group => group.questions.length > 0);
    }

    function flattenGroups(groups) {
        return groups.flatMap(group => group.questions.map(question => ({ ...question, group })));
    }

    function stopTimer() {
        if (timerHandle !== null) {
            window.clearInterval(timerHandle);
            timerHandle = null;
        }
    }

    function beginSession() {
        stopTimer();
        loadErrorRecords();
        const groups = getQuestionSet();
        questions = flattenGroups(groups);
        if (questions.length === 0) {
            active = false;
            exercise.hidden = true;
            result.hidden = true;
            timer.hidden = true;
            setNotice(`Belum ada soal ${levelSelect.value} yang tercatat salah. Selesaikan latihan penuh terlebih dahulu.`, false);
            return;
        }
        answers = Array(questions.length).fill(null);
        currentIndex = 0;
        active = true;
        result.hidden = true;
        exercise.hidden = false;
        hintBox.hidden = true;
        startButton.textContent = 'Mulai ulang';
        if (modeSelect.value === 'exam') {
            remainingSeconds = jlptQuestionBank[levelSelect.value].durationMinutes * 60;
            timer.hidden = false;
            updateTimerDisplay();
            timerHandle = window.setInterval(tickTimer, 1000);
            setNotice(`Mode Ujian ${levelSelect.value}: durasi ${jlptQuestionBank[levelSelect.value].durationMinutes} menit. Jawaban bisa diubah sampai kamu menekan Selesai.`);
        } else {
            timer.hidden = true;
            setNotice(`Latihan Terpandu ${levelSelect.value}: tanpa timer, pembahasan muncul setelah memilih jawaban.`);
        }
        renderQuestion();
    }

    function tickTimer() {
        remainingSeconds -= 1;
        updateTimerDisplay();
        if (remainingSeconds <= 0) {
            stopTimer();
            setNotice('Waktu latihan habis. Jawaban yang sudah dipilih sedang dinilai.');
            finishSession(true);
        }
    }

    function updateTimerDisplay() {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        timer.textContent = [hours, minutes, seconds].map(value => String(value).padStart(2, '0')).join(':');
    }

    function escapeHtml(text) {
        return String(text).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[character]));
    }

    function decorateJapanese(text) {
        return escapeHtml(text).replace(furiganaPattern, word => {
            const entry = furiganaByWord.get(word);
            return `<ruby data-level="${entry.level}">${word}<rt>${escapeHtml(entry.reading)}</rt></ruby>`;
        });
    }

    function renderQuestion() {
        if (!active || questions.length === 0) return;
        const item = questions[currentIndex];
        const group = item.group;
        const answer = answers[currentIndex];
        const guidedAnswered = modeSelect.value === 'guided' && answer !== null;
        const answerClass = choiceIndex => {
            if (!guidedAnswered) return '';
            if (choiceIndex === item.answer) return ' correct';
            if (choiceIndex === answer) return ' incorrect';
            return '';
        };
        questionContent.innerHTML = `
            <div class="question-head">
                <div><span class="question-type">${escapeHtml(group.type)} · ${escapeHtml(group.title)}</span>
                    <h2>${escapeHtml(levelSelect.value)} · Soal ${currentIndex + 1} dari ${questions.length}</h2></div>
                <span class="question-meta">${group.section === 'listening' ? '聴解' : '言語知識・読解'}</span>
            </div>
            ${item.passage ? `<div class="passage" lang="ja">${decorateJapanese(item.passage)}</div>` : ''}
            <div class="prompt" lang="ja">${decorateJapanese(item.prompt)}</div>
            <fieldset class="choices" aria-label="Pilihan jawaban">
                ${item.choices.map((choice, index) => `<label class="choice${answerClass(index)}">
                    <input type="radio" name="answer" value="${index}" ${answer === index ? 'checked' : ''} ${guidedAnswered ? 'disabled' : ''}>
                    <span>${decorateJapanese(choice)}</span>
                </label>`).join('')}
            </fieldset>
            ${guidedAnswered ? `<div class="feedback ${answer === item.answer ? 'correct' : 'incorrect'}" role="status">
                <strong>${answer === item.answer ? 'Benar!' : `Belum tepat. Jawaban: ${decorateJapanese(item.choices[item.answer])}`}</strong>
                <div>${escapeHtml(item.explain)}</div></div>` : ''}
        `;
        questionContent.querySelectorAll('input[name="answer"]').forEach(input => {
            input.addEventListener('change', event => {
                answers[currentIndex] = Number(event.target.value);
                if (modeSelect.value === 'guided') renderQuestion();
                renderAnswerSheet();
            });
        });
        audioButton.hidden = !item.audioText;
        hintBox.hidden = true;
        renderAnswerSheet();
        document.getElementById('previous-button').disabled = currentIndex === 0;
        document.getElementById('next-button').disabled = currentIndex === questions.length - 1;
    }

    function renderAnswerSheet() {
        let previousGroup = '';
        answerSheet.innerHTML = questions.map((item, index) => {
            const groupId = item.group.id;
            const heading = groupId !== previousGroup ? `<span class="section-label">${escapeHtml(item.group.title)}</span>` : '';
            previousGroup = groupId;
            const classes = [
                'sheet-btn',
                answers[index] !== null ? 'answered' : '',
                index === currentIndex ? 'current' : '',
                reviewOnly ? 'flagged' : ''
            ].filter(Boolean).join(' ');
            return `${heading}<button type="button" class="${classes}" aria-label="Soal ${index + 1}${answers[index] !== null ? ', sudah dijawab' : ', belum dijawab'}" aria-current="${index === currentIndex ? 'step' : 'false'}" data-index="${index}">${index + 1}</button>`;
        }).join('');
        answerSheet.querySelectorAll('button[data-index]').forEach(button => {
            button.addEventListener('click', () => {
                currentIndex = Number(button.dataset.index);
                renderQuestion();
            });
        });
    }

    function renderResult(wasTimedOut) {
        const languageQuestions = questions.filter(question => question.group.section === 'language');
        const listeningQuestions = questions.filter(question => question.group.section === 'listening');
        const correctLanguage = languageQuestions.filter((question, index) => answers[questions.indexOf(question)] === question.answer).length;
        const correctListening = listeningQuestions.filter((question, index) => answers[questions.indexOf(question)] === question.answer).length;
        const languageScore = questions.some(question => question.group.section === 'language')
            ? Math.round(correctLanguage / languageQuestions.length * 120) : 0;
        const listeningScore = questions.some(question => question.group.section === 'listening')
            ? Math.round(correctListening / listeningQuestions.length * 60) : 0;
        const total = languageScore + listeningScore;
        const bank = jlptQuestionBank[levelSelect.value];
        const passed = !reviewOnly && languageScore >= 38 && listeningScore >= 19 && total >= bank.passTotal;
        const totalCorrect = correctLanguage + correctListening;
        const wrongCount = questions.length - totalCorrect;
        result.innerHTML = `<h2>${reviewOnly ? 'Hasil latihan ulang' : `Hasil latihan ${escapeHtml(levelSelect.value)}`}</h2>
            <p>${wasTimedOut ? 'Waktu habis. ' : ''}${totalCorrect} dari ${questions.length} jawaban benar.</p>
            ${reviewOnly ? '<p>Mode latihan ulang tidak dihitung sebagai estimasi nilai ujian.</p>' : `<div class="score-grid">
                <div class="score"><span>言語知識・読解</span><strong>${languageScore} / 120</strong><span>${correctLanguage}/${languageQuestions.length} benar · perkiraan proporsional</span></div>
                <div class="score"><span>聴解</span><strong>${listeningScore} / 60</strong><span>${correctListening}/${listeningQuestions.length} benar · perkiraan proporsional</span></div>
                <div class="score"><span>Total</span><strong>${total} / 180</strong><span>Ambang total ${bank.passTotal}/180</span></div>
            </div>
            <div class="pass-badge ${passed ? 'pass' : 'fail'}">${passed ? 'Perkiraan memenuhi ambang lulus' : 'Perkiraan belum memenuhi semua ambang lulus'}</div>
            <p>Ambang per bagian: 言語知識・読解 minimal 38/120 dan 聴解 minimal 19/60. Penilaian lulus juga memerlukan total minimal ${bank.passTotal}/180.</p>
            <small>Estimasi ini pembagian proporsional berdasarkan mini set, bukan skor berskala resmi. Hasil JLPT memakai metode penskalaan resmi yang tidak dapat dihitung dari set latihan ini.</small>`}
            <div class="question-actions"><button class="button primary" id="review-errors-button" type="button" ${wrongCount === 0 ? 'disabled' : ''}>Latih catatan kesalahan (${wrongCount})</button><button class="button" id="again-button" type="button">Kerjakan lagi</button></div>`;
        result.hidden = false;
        document.getElementById('review-errors-button').addEventListener('click', () => {
            reviewOnly = true;
            updateReviewLabel();
            beginSession();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.getElementById('again-button').addEventListener('click', beginSession);
    }

    function cardKey(card) {
        return JSON.stringify([card.kategori, card.sisi_depan, card.sisi_belakang_romaji, card.arti_indonesia]);
    }

    function updateErrorRecords() {
        const level = levelSelect.value;
        const currentIds = new Set(questions.map(question => question.id));
        const incorrectIds = new Set(questions.filter((question, index) => answers[index] !== question.answer).map(question => question.id));
        errors = errors.filter(item => !(item.level === level && currentIds.has(item.id)));
        for (const id of incorrectIds) errors.push({ level, id });
        errors = [...new Map(errors.map(item => [`${item.level}:${item.id}`, item])).values()];
        writeStorage(ERRORS_KEY, errors);

        const cardByReading = new Map(sourceVocabCards.map(card => [card.sisi_depan, card]));
        const sourceKeys = new Set(questions.map(question => question.vocabSource && cardByReading.get(question.vocabSource))
            .filter(Boolean).map(cardKey));
        if (sourceKeys.size > 0) {
            legacyReview = legacyReview.filter(key => !sourceKeys.has(key));
            for (const question of questions) {
                if (question.vocabSource && incorrectIds.has(question.id)) {
                    const sourceCard = cardByReading.get(question.vocabSource);
                    if (sourceCard) legacyReview.push(cardKey(sourceCard));
                }
            }
            legacyReview = [...new Set(legacyReview)];
            writeStorage(LEGACY_REVIEW_KEY, legacyReview);
        }
        updateReviewLabel();
    }

    function finishSession(wasTimedOut = false) {
        if (!active) return;
        stopTimer();
        active = false;
        updateErrorRecords();
        exercise.hidden = true;
        timer.hidden = true;
        startButton.textContent = 'Mulai latihan';
        renderResult(wasTimedOut);
        setNotice('Sesi selesai. Soal yang salah atau belum dijawab tersimpan di Catatan Kesalahan.');
        result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function speakCurrentQuestion() {
        const item = questions[currentIndex];
        if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
            setNotice('Web Speech API tidak tersedia di browser ini. Coba browser yang mendukung sintesis suara Jepang.', true);
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(item.audioText);
        utterance.lang = 'ja-JP';
        utterance.rate = levelSelect.value === 'N5' ? 0.82 : 0.9;
        utterance.onerror = event => {
            console.error('Audio Web Speech API gagal diputar.', event.error);
            setNotice('Suara Jepang gagal diputar. Periksa dukungan suara pada browser/perangkat ini.', true);
        };
        window.speechSynthesis.speak(utterance);
    }

    loadPreferences();
    loadErrorRecords();
    if (typeof semuaKata !== 'undefined' && Array.isArray(semuaKata)) {
        sourceVocabCards = semuaKata.filter(card => typeof card.sisi_depan === 'string' && typeof card.kategori === 'string');
    } else {
        setNotice('Sumber flashcard tidak tersedia. Pastikan data.js berada di folder yang sama.', true);
    }

    startButton.addEventListener('click', () => {
        if (active && !window.confirm('Mulai ulang akan menghapus jawaban sesi saat ini. Lanjutkan?')) return;
        beginSession();
    });
    reviewToggle.addEventListener('click', () => {
        reviewOnly = !reviewOnly;
        updateReviewLabel();
        if (active) beginSession();
        else if (reviewOnly) beginSession();
        else setNotice('Mode semua soal dipilih. Tekan Mulai latihan untuk memulai.');
    });
    document.getElementById('theme-toggle').addEventListener('click', () => {
        themeSelect.value = themeSelect.value === 'light' ? 'dark' : 'light';
        applyPreferences();
    });
    [levelSelect, modeSelect].forEach(select => select.addEventListener('change', () => {
        applyPreferences();
        stopTimer();
        active = false;
        exercise.hidden = true;
        result.hidden = true;
        timer.hidden = true;
        startButton.textContent = 'Mulai latihan';
        if (reviewOnly && errors.every(item => item.level !== levelSelect.value)) reviewOnly = false;
        updateReviewLabel();
        setNotice(`Pilihan ${select === levelSelect ? 'level' : 'mode'} diperbarui. Mulai sesi baru untuk menerapkannya.`);
    }));
    [fontSelect, furiganaSelect, themeSelect].forEach(select => select.addEventListener('change', () => {
        applyPreferences();
        if (active) renderQuestion();
    }));
    document.getElementById('hint-button').addEventListener('click', () => {
        if (!active) return;
        const item = questions[currentIndex];
        hintBox.textContent = modeSelect.value === 'guided'
            ? item.hint
            : questionTips[item.group.type] || item.group.tip;
        hintBox.hidden = false;
    });
    document.getElementById('previous-button').addEventListener('click', () => {
        if (active && currentIndex > 0) { currentIndex--; renderQuestion(); }
    });
    document.getElementById('next-button').addEventListener('click', () => {
        if (active && currentIndex < questions.length - 1) { currentIndex++; renderQuestion(); }
    });
    document.getElementById('finish-button').addEventListener('click', () => {
        if (active && window.confirm('Selesaikan latihan dan hitung skor sekarang? Jawaban tidak bisa diubah setelah selesai.')) finishSession(false);
    });
    audioButton.addEventListener('click', speakCurrentQuestion);
    document.addEventListener('keydown', event => {
        if (!active || ['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        if (event.key === 'ArrowRight' && currentIndex < questions.length - 1) {
            currentIndex++;
            renderQuestion();
        } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    });
})();
