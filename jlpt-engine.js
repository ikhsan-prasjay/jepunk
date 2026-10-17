const N5_BANK = {
  N5: {
    goi: [
      { id: 'N5-GOI-001', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">本<rt>ほん</rt></ruby>」の読みはどれですか。', options: ['ほん', 'もと', 'ほんこ', 'ほんぢ'], correctAnswer: 0, explanation: '「本」は文脈によって「ほん」になることが多く、読書や教材の意味で使われます。', hint: '本を読むときの「ほん」に注目しましょう。' },
      { id: 'N5-GOI-002', type: 'goi', subType: 'vocab-context', label: '文字・語彙', questionText: '「えきでバスを________。」に入る言葉はどれですか。', options: ['のる', 'よむ', 'かう', 'はなす'], correctAnswer: 0, explanation: '乗り物に乗る時は「のる」が自然です。', hint: 'バスや電車に関係する動詞を選びましょう。' },
      { id: 'N5-GOI-003', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">学校<rt>がっこう</rt></ruby>」の読みとして正しいものはどれですか。', options: ['がっこう', 'がっこ', 'がくえん', 'がっき'], correctAnswer: 0, explanation: '「学校」は「がっこう」と読むのが一般的です。', hint: '学校に行くのは「がっこう」ですね。' },
      { id: 'N5-GOI-004', type: 'goi', subType: 'vocab-context', label: '文字・語彙', questionText: '「わたしは毎朝、パンを________。」に入る言葉はどれですか。', options: ['たべます', 'とります', 'しります', 'みます'], correctAnswer: 0, explanation: '朝食にパンを食べるのが自然です。', hint: '食べ物に使う動詞を考えましょう。' },
      { id: 'N5-GOI-005', type: 'goi', subType: 'word-choice', label: '文字・語彙', questionText: '「これはすごくいい________です。」に入る言葉はどれですか。', options: ['こと', 'もの', 'ところ', 'はたらき'], correctAnswer: 1, explanation: '物を指すときは「もの」が自然です。', hint: '指示対象の名詞として使う語を選びましょう。' },
      { id: 'N5-GOI-006', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">雨<rt>あめ</rt></ruby>」の読みはどれですか。', options: ['あめ', 'くも', 'ゆき', 'てんき'], correctAnswer: 0, explanation: '雨は「あめ」と読むのが基本です。', hint: '天気の言葉を思い出しましょう。' },
      { id: 'N5-GOI-007', type: 'goi', subType: 'word-choice', label: '文字・語彙', questionText: '「先生に________」と書くのに最も自然な言葉はどれですか。', options: ['ききました', 'はなしました', 'おしえました', 'みました'], correctAnswer: 1, explanation: '「先生に話しました」は相手に伝えた意味が自然です。', hint: '人に対して伝える動作を選びましょう。' },
      { id: 'N5-GOI-008', type: 'goi', subType: 'context', label: '文字・語彙', questionText: '「店でパンを買う」時に入る言葉として最も自然なのはどれですか。', options: ['みせでパンをかいます', 'みせでパンをはなします', 'みせでパンをみます', 'みせでパンをねます'], correctAnswer: 0, explanation: '物を購入する動詞は「買う」＝「かう」です。', hint: 'お店での行為を考えましょう。' },
      { id: 'N5-GOI-009', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">駅<rt>えき</rt></ruby>」の読みはどれですか。', options: ['えき', 'はた', 'つえ', 'みち'], correctAnswer: 0, explanation: '駅は「えき」と読むのが一般的です。', hint: '電車に乗る場所です。' },
      { id: 'N5-GOI-010', type: 'goi', subType: 'word-choice', label: '文字・語彙', questionText: '「きれいな人」ではなく、「きれいな」後ろに続く言葉として最も自然なのはどれですか。', options: ['へや', 'おんな', 'かさ', 'おかね'], correctAnswer: 1, explanation: '「きれいな女性」はよく使う表現です。', hint: '形容詞の後にくる名詞を考えましょう。' },
      { id: 'N5-GOI-011', type: 'goi', subType: 'context', label: '文字・語彙', questionText: '「このかばんは________です。」に入る言葉として最も自然なのはどれですか。', options: ['やすい', 'はやい', 'あかい', 'おおきい'], correctAnswer: 0, explanation: '価格が安いときは「やすい」が自然です。', hint: '値段に関係する形容詞です。' },
      { id: 'N5-GOI-012', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">友達<rt>ともだち</rt></ruby>」の読みとして正しいものはどれですか。', options: ['ともだち', 'ともやく', 'ともし', 'ともない'], correctAnswer: 0, explanation: '「友達」は「ともだち」と読むのが自然です。', hint: '学校でよく使う人に関する語です。' },
      { id: 'N5-GOI-013', type: 'goi', subType: 'vocab-context', label: '文字・語彙', questionText: '「私は学生です。よく________。」に入る語として最も自然なのはどれですか。', options: ['べんきょうします', 'ねます', 'あそびます', 'およぎます'], correctAnswer: 0, explanation: '学生には「勉強する」が自然です。', hint: '学校生活に関係する動作です。' },
      { id: 'N5-GOI-014', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">電車<rt>でんしゃ</rt></ruby>」の読みはどれですか。', options: ['でんしゃ', 'でんか', 'かでん', 'でんち'], correctAnswer: 0, explanation: '列車を指す語は「電車」で「でんしゃ」です。', hint: '乗り物の名前を思い出しましょう。' },
      { id: 'N5-GOI-015', type: 'goi', subType: 'word-choice', label: '文字・語彙', questionText: '「あしたは________です。」に入る言葉として自然なのはどれですか。', options: ['やすみ', 'はたらき', 'いえ', 'くうこう'], correctAnswer: 0, explanation: '明日は休みという可能性が最も自然です。', hint: '予定や休みと関連する語です。' },
      { id: 'N5-GOI-016', type: 'goi', subType: 'context', label: '文字・語彙', questionText: '「部屋が________です。」に入る言葉として最も自然なのはどれですか。', options: ['きれい', 'あめ', 'かぜ', 'はやい'], correctAnswer: 0, explanation: '部屋の状態を表すには「きれい」が自然です。', hint: '部屋の様子に関する形容詞です。' },
      { id: 'N5-GOI-017', type: 'goi', subType: 'kanji-yomi', label: '文字・語彙', questionText: '「<ruby class="furigana furigana-advanced">朝<rt>あさ</rt></ruby>」の読みはどれですか。', options: ['あさ', 'まえ', 'ひる', 'よる'], correctAnswer: 0, explanation: '朝は「あさ」です。', hint: '一日の最初の時間帯です。' },
      { id: 'N5-GOI-018', type: 'goi', subType: 'vocab-context', label: '文字・語彙', questionText: '「じてんしゃに________」にはどれが入りますか。', options: ['のります', 'よみます', 'かきます', 'かえります'], correctAnswer: 0, explanation: '乗り物にのるのが自然です。', hint: '自転車に乗るのは「のる」です。' }
    ],
    bunpou: [
      { id: 'N5-BUN-001', type: 'bunpou', subType: 'time-particle', label: '文法', questionText: 'わたしは七時＿＿起きます。', options: ['に', 'で', 'を', 'へ'], correctAnswer: 0, explanation: '時間を表すときは「に」を使います。', hint: '時間に使う格助詞を選びましょう。' },
      { id: 'N5-BUN-002', type: 'bunpou', subType: 'te-form', label: '文法', questionText: 'テレビを見て、＿＿。', options: ['ごはんを食べます', '学校へ行きます', '駅にいます', '電車を待ちます'], correctAnswer: 0, explanation: '「見て、食べます」は自然な順番です。', hint: 'できごとの流れを考えましょう。' },
      { id: 'N5-BUN-003', type: 'bunpou', subType: 'descriptive', label: '文法', questionText: 'この部屋は＿＿きれいです。', options: ['とても', 'でも', 'から', 'へ'], correctAnswer: 0, explanation: '程度を表す副詞として「とても」が自然です。', hint: '程度を強く表す語を選びましょう。' },
      { id: 'N5-BUN-004', type: 'bunpou', subType: 'particle', label: '文法', questionText: 'わたしはお母さん＿＿料理を作ります。', options: ['と', 'に', 'へ', 'で'], correctAnswer: 0, explanation: '一緒に行う相手には「と」を使います。', hint: '相手と一緒の意味を表す助詞です。' },
      { id: 'N5-BUN-005', type: 'bunpou', subType: 'asking-time', label: '文法', questionText: 'きょうのばんごはんは何＿＿食べますか。', options: ['を', 'が', 'へ', 'で'], correctAnswer: 0, explanation: '食べるものを表すときは「を」を使います。', hint: '食べ物に直接つく格助詞を選びましょう。' },
      { id: 'N5-BUN-006', type: 'bunpou', subType: 'negation', label: '文法', questionText: '私は牛乳を________。', options: ['飲みません', '飲みます', '飲みましょう', '飲み'], correctAnswer: 0, explanation: '否定形は「飲みません」です。', hint: '「〜ません」を使って否定にしましょう。' },
      { id: 'N5-BUN-007', type: 'bunpou', subType: 'te-form', label: '文法', questionText: '駅でお弁当を買って、＿＿。', options: ['公園へ行きます', '学校を見ます', 'お金を休みます', '食べてください'], correctAnswer: 0, explanation: '買ってから公園へ行く流れが自然です。', hint: '時間の流れに合う文を選びましょう。' },
      { id: 'N5-BUN-008', type: 'bunpou', subType: 'adjective', label: '文法', questionText: 'このケーキは＿＿おいしいです。', options: ['とても', 'が', 'へ', 'から'], correctAnswer: 0, explanation: '程度を表すのは「とても」です。', hint: '味の程度を強く言う語を選びましょう。' },
      { id: 'N5-BUN-009', type: 'bunpou', subType: 'verb-form', label: '文法', questionText: 'わたしは毎日、七時に＿＿。', options: ['おきます', 'おきました', 'おきましょう', 'おき'], correctAnswer: 0, explanation: '毎日行う習慣は現在形の「おきます」が自然です。', hint: '習慣を述べるときは現在形です。' },
      { id: 'N5-BUN-010', type: 'bunpou', subType: 'where', label: '文法', questionText: '友達は駅で＿＿待っています。', options: ['まって', 'で', 'へ', 'と'], correctAnswer: 1, explanation: '場所を表すときは「で」を使います。', hint: 'ところを表す格助詞は「で」です。' },
      { id: 'N5-BUN-011', type: 'bunpou', subType: 'direction', label: '文法', questionText: '学校＿＿は駅の前です。', options: ['の', 'へ', 'で', 'に'], correctAnswer: 0, explanation: '場所の説明には「の」を使います。', hint: '連体修飾の助詞を考えましょう。' },
      { id: 'N5-BUN-012', type: 'bunpou', subType: 'question', label: '文法', questionText: 'この店は何時＿＿ですか。', options: ['まで', 'から', 'で', 'へ'], correctAnswer: 1, explanation: '開店時間を尋ねる時は「から」が使われます。', hint: '開始時刻を表す語を選びましょう。' },
      { id: 'N5-BUN-013', type: 'bunpou', subType: 'subject', label: '文法', questionText: 'きのう、わたしは兄弟＿＿ごはんを作りました。', options: ['と', 'で', 'に', 'へ'], correctAnswer: 0, explanation: '一緒に食事をした相手には「と」が自然です。', hint: '仲間との関係を表す助詞です。' },
      { id: 'N5-BUN-014', type: 'bunpou', subType: 'descriptive', label: '文法', questionText: 'この本は____________。', options: ['おもしろいです', 'おもしろくありません', 'おもしろくて', 'おもしろいまで'], correctAnswer: 0, explanation: '形容詞は「〜です」で文を完成させられます。', hint: '状態を述べる言い方です。' },
      { id: 'N5-BUN-015', type: 'bunpou', subType: 'te-form', label: '文法', questionText: 'わたしは宿題をして、＿＿。', options: ['テレビを見ました', 'テレビを見ます', 'テレビを見て', 'テレビが見えます'], correctAnswer: 0, explanation: '文の流れを整えると「しまして、テレビを見ました」が自然です。', hint: '順番に起きた動作の結びつきに注目しましょう。' },
      { id: 'N5-BUN-016', type: 'bunpou', subType: 'expressing-intent', label: '文法', questionText: '今日は早く寝て、明日＿＿。', options: ['がんばります', 'がんばって', 'がんばり', 'がんばりましょう'], correctAnswer: 3, explanation: '「明日がんばりましょう」は自然な勧めです。', hint: '相手に言うときは「〜ましょう」が使いやすいです。' },
      { id: 'N5-BUN-017', type: 'bunpou', subType: 'location', label: '文法', questionText: 'わたしは家で＿＿勉強します。', options: ['よく', 'から', 'へ', 'を'], correctAnswer: 0, explanation: '頻度や程度を表す副詞「よく」が自然です。', hint: '場所の後に置く程度の語を選びましょう。' },
      { id: 'N5-BUN-018', type: 'bunpou', subType: 'giving-direction', label: '文法', questionText: '駅の前にコンビニがあり、＿＿。', options: ['右に曲がります', '右に曲がりません', '右を見ます', '右へ行きません'], correctAnswer: 0, explanation: '道案内では「右に曲がります」が自然です。', hint: '進行方向の指示に注目しましょう。' }
    ],
    dokkai: [
      { id: 'N5-DOK-001', type: 'dokkai', subType: 'short-text', label: '読解', passage: 'まいあさ、あさごはんを食べてから学校へ行きます。家から学校までバスで十五分です。', questionText: 'この人は家から学校まで何で行きますか。', options: ['バス', '車', '電車', '歩き'], correctAnswer: 0, explanation: '本文に「家から学校までバスで十五分です」とあるため、バスで行くとわかります。', hint: '本文で移動手段が明示されている箇所を探しましょう。' },
      { id: 'N5-DOK-002', type: 'dokkai', subType: 'information-search', label: '読解', passage: '今日は日曜日です。図書館は休みです。私は家で本を読みます。', questionText: '今日は図書館は開いていますか。', options: ['はい、開いています', 'いいえ、休みです', '午後だけ開いています', '午前だけ開いています'], correctAnswer: 1, explanation: '「図書館は休みです」と直接書かれているので、今日は閉まっています。', hint: '開館・休館の表現を探しましょう。' },
      { id: 'N5-DOK-003', type: 'dokkai', subType: 'short-text', label: '読解', passage: '私は毎日、七時に起きます。顔を洗って、学校へ行きます。', questionText: 'この人は何時に起きますか。', options: ['七時', '八時', '六時', '五時'], correctAnswer: 0, explanation: '文章の最初に「七時に起きます」とあります。', hint: '最初の文に出てくる時間を確認しましょう。' },
      { id: 'N5-DOK-004', type: 'dokkai', subType: 'vocabulary', label: '読解', passage: '店では、パンとお茶を買いました。おいしいので、また来ます。', questionText: 'この人は店で何を買いましたか。', options: ['パンとお茶', '本と雑誌', '牛乳とご飯', 'お菓子と水'], correctAnswer: 0, explanation: '本文の「パンとお茶を買いました」が答えです。', hint: '買った物を文の中から拾いましょう。' },
      { id: 'N5-DOK-005', type: 'dokkai', subType: 'information-search', label: '読解', passage: '私は先週、山へ行きました。天気がよくて、景色がきれいでした。', questionText: '山へ行った時の天気はどうでしたか。', options: ['よかった', '悪かった', '雪だった', '雨だった'], correctAnswer: 0, explanation: '「天気がよくて」とあるので、良かったとわかります。', hint: '天気の形容詞を探しましょう。' },
      { id: 'N5-DOK-006', type: 'dokkai', subType: 'short-text', label: '読解', passage: '田中さんは毎晩、八時に寝ます。朝は六時に起きます。', questionText: '田中さんは朝何時に起きますか。', options: ['六時', '七時', '八時', '九時'], correctAnswer: 0, explanation: '本文に「朝は六時に起きます」とあります。', hint: '最後の文に注目しましょう。' },
      { id: 'N5-DOK-007', type: 'dokkai', subType: 'information-search', label: '読解', passage: 'この店のケーキはとてもおいしいです。私はよくここで昼ごはんを食べます。', questionText: 'この人はここでよく何をしますか。', options: ['昼ごはんを食べます', '本を買います', '映画を見ます', '電車に乗ります'], correctAnswer: 0, explanation: '最後の文に「昼ごはんを食べます」とあるので、ここで食事をしています。', hint: 'この店での行動を本文から探しましょう。' },
      { id: 'N5-DOK-008', type: 'dokkai', subType: 'short-text', label: '読解', passage: '私は駅の前に住んでいます。会社は駅から歩いて五分です。', questionText: '会社から駅まではどのくらいですか。', options: ['歩いて五分', 'バスで十分', '車で三十分', '電車で二十分'], correctAnswer: 0, explanation: '「駅から歩いて五分」とあるので、歩いて五分です。', hint: '移動距離を示す表現を見つけましょう。' },
      { id: 'N5-DOK-009', type: 'dokkai', subType: 'short-text', label: '読解', passage: '先生は学生に宿題を出しました。今日の宿題は漢字の練習です。', questionText: '今日の宿題は何ですか。', options: ['漢字の練習', '作文', '宿題なし', '英語の発表'], correctAnswer: 0, explanation: '本文に「漢字の練習」と書いてあります。', hint: '先生が出した宿題の内容を見つけましょう。' },
      { id: 'N5-DOK-010', type: 'dokkai', subType: 'information-search', label: '読解', passage: 'あしたは雨です。私は傘を持って行きます。', questionText: 'この人は何を持っていきますか。', options: ['傘', '本', 'ゲーム', '財布'], correctAnswer: 0, explanation: '「雨です。私は傘を持って行きます」とあるため、傘が必要です。', hint: '天気と関連する道具を探しましょう。' },
      { id: 'N5-DOK-011', type: 'dokkai', subType: 'short-text', label: '読解', passage: '私の弟は高校生です。毎日、コンビニでお弁当を買います。', questionText: '弟は何を買いますか。', options: ['お弁当', 'パン', '本', 'お茶'], correctAnswer: 0, explanation: '「コンビニでお弁当を買います」とあるので、答えはお弁当です。', hint: '買うものを本文から取ります。' },
      { id: 'N5-DOK-012', type: 'dokkai', subType: 'information-search', label: '読解', passage: '学校の近くに新しい本屋があります。私はよくそこで本を読みます。', questionText: 'この人はどこで本を読みますか。', options: ['本屋', '駅', '学校', 'コンビニ'], correctAnswer: 0, explanation: '本文に「新しい本屋があります。私はよくそこで本を読みます」とあり、そこで読むとわかります。', hint: '場所を特定する表現を見つけましょう。' },
      { id: 'N5-DOK-013', type: 'dokkai', subType: 'short-text', label: '読解', passage: '私は母と買い物に行きました。あめがふったので、帰りはタクシーでした。', questionText: '帰りは何でしたか。', options: ['タクシー', '電車', '歩き', '自転車'], correctAnswer: 0, explanation: '本文に「帰りはタクシーでした」とあるため、答えはタクシーです。', hint: '帰りの移動手段を探しましょう。' },
      { id: 'N5-DOK-014', type: 'dokkai', subType: 'information-search', label: '読解', passage: 'わたしは明日、友達と公園へ行きます。そこでおやつを食べて、写真を撮ります。', questionText: 'この人は公園で何をしますか。', options: ['おやつを食べて写真を撮る', '勉強する', '宿題をする', '買い物をする'], correctAnswer: 0, explanation: '「おやつを食べて、写真を撮ります」とあるので、これが正解です。', hint: '公園で行う二つの行動を探しましょう。' },
      { id: 'N5-DOK-015', type: 'dokkai', subType: 'short-text', label: '読解', passage: 'あしたは休みです。朝はゆっくり寝て、午後から買い物に行きます。', questionText: 'あしたの午後は何をしますか。', options: ['買い物に行きます', '学校へ行きます', '仕事をします', '勉強を始めます'], correctAnswer: 0, explanation: '本文に「午後から買い物に行きます」とあるので、答えは買い物です。', hint: '午後の予定を見つけましょう。' },
      { id: 'N5-DOK-016', type: 'dokkai', subType: 'information-search', label: '読解', passage: '私の部屋は小さいですが、きれいです。机の上には本が二冊あります。', questionText: '部屋はどうですか。', options: ['小さいですが、きれいです', '大きくて、きれいです', 'ほこりが多いです', '暗いです'], correctAnswer: 0, explanation: '最初の文に「小さいですが、きれいです」とあり、状態がわかります。', hint: '部屋の状態を表す文を最初に探しましょう。' },
      { id: 'N5-DOK-017', type: 'dokkai', subType: 'short-text', label: '読解', passage: '私は毎週、土曜日に公園を走ります。朝の空気がとてもいいです。', questionText: 'この人は何をしますか。', options: ['公園を走ります', '映画を見ます', '学校へ行きます', '寝ます'], correctAnswer: 0, explanation: '一文目に「公園を走ります」とあるので、この人の習慣がわかります。', hint: '毎週行う動作を選びましょう。' }
    ],
    choukai: [
      { id: 'N5-CHO-001', type: 'choukai', subType: 'kadai-rikai', label: '聴解', questionText: '<ruby>二人<rt>ふたり</rt></ruby>はどこで<ruby>昼ごはん<rt>ひるごはん</rt></ruby>を<ruby>食べる<rt>たべる</rt></ruby>と<ruby>言って<rt>いって</rt></ruby>いますか。', options: ['<ruby>駅前<rt>えきまえ</rt></ruby>のパン屋', '<ruby>学校<rt>がっこう</rt></ruby>の食堂', '<ruby>家<rt>いえ</rt></ruby>', '<ruby>レストラン<rt>れすとらん</rt></ruby>'], correctAnswer: 0, explanation: '会話の最後で「駅前のパン屋さんに行きませんか」と提案されています。', hint: '最後に伝えられた場所に注目しましょう。', audioScript: [{ speaker: 'M', text: 'ねえ、今日はどこで昼ごはんを食べますか。', delay: 500 }, { speaker: 'F', text: '駅前のパン屋さんに行きませんか。', delay: 700 }] },
      { id: 'N5-CHO-002', type: 'choukai', subType: 'quick-response', label: '聴解', questionText: '<ruby>買う<rt>かう</rt></ruby>ものは<ruby>何<rt>なに</rt></ruby>ですか。', options: ['<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>二本', '<ruby>パン<rt>パン</rt></ruby>二個', '<ruby>水<rt>みず</rt></ruby>一本', '<ruby>お茶<rt>おちゃ</rt></ruby>'], correctAnswer: 0, explanation: '女性が「牛乳を二本ください」と言っているので、買うものは牛乳です。', hint: '「をください」の後ろに来るものを聞き取りましょう。', audioScript: [{ speaker: 'F', text: 'すみません、牛乳を二本ください。', delay: 600 }, { speaker: 'M', text: 'はい、かしこまりました。', delay: 500 }] },
      { id: 'N5-CHO-003', type: 'choukai', subType: 'task-comprehension', label: '聴解', questionText: '<ruby>先生<rt>せんせい</rt></ruby>は<ruby>いつ<rt>いつ</rt></ruby><ruby>試験<rt>しけん</rt></ruby>を<ruby>始める<rt>はじめる</rt></ruby>と<ruby>言いました<rt>いいました</rt></ruby>か。', options: ['<ruby>三時<rt>さんじ</rt></ruby>に始めます', '<ruby>五時<rt>ごじ</rt></ruby>に始めます', '<ruby>午後<rt>ごご</rt></ruby>四時です', '<ruby>明日<rt>あした</rt></ruby>です'], correctAnswer: 0, explanation: '音声で「三時に始めます」と聞こえるので、答えは三時です。', hint: '時間を示す語を聞き分けましょう。', audioScript: [{ speaker: 'M', text: '先生、試験はいつ始めますか。', delay: 450 }, { speaker: 'F', text: '三時に始めます。', delay: 500 }] },
      { id: 'N5-CHO-004', type: 'choukai', subType: 'utterance-expression', label: '聴解', questionText: '<ruby>お店<rt>おみせ</rt></ruby>で<ruby>何<rt>なに</rt></ruby>を<ruby>言えば<rt>いえば</rt></ruby>いいですか。', options: ['<ruby>これ<rt>これ</rt></ruby>をください', '<ruby>駅<rt>えき</rt></ruby>はどこですか', '<ruby>行きましょう<rt>いきましょう</rt></ruby>', '<ruby>早く<rt>はやく</rt></ruby>帰ります'], correctAnswer: 0, explanation: '買う時に自然なのは「これをください」です。', hint: '物を求める表現として最も自然なものを選びましょう。', audioScript: [{ speaker: 'M', text: 'あのう、このかばんを見せてください。', delay: 550 }, { speaker: 'F', text: 'これは一万円です。', delay: 450 }] },
      { id: 'N5-CHO-005', type: 'choukai', subType: 'key-point', label: '聴解', questionText: '<ruby>会話<rt>かいわ</rt></ruby>で<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>ですか。', options: ['<ruby>場所<rt>ばしょ</rt></ruby>は<ruby>駅前<rt>えきまえ</rt></ruby>', '<ruby>名前<rt>なまえ</rt></ruby>だけ', '<ruby>天気<rt>てんき</rt></ruby>のこと', '<ruby>映画<rt>えいが</rt></ruby>のタイトル'], correctAnswer: 0, explanation: '会話の中で、会議の場所が駅前のビルであると伝えられています。', hint: '大事な情報は場所や時間です。', audioScript: [{ speaker: 'F', text: '会議は駅前のビルで始まります。', delay: 650 }, { speaker: 'M', text: 'わかりました。時間も確認します。', delay: 600 }] },
      { id: 'N5-CHO-006', type: 'choukai', subType: 'task-comprehension', label: '聴解', questionText: '<ruby>二人<rt>ふたり</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>買う<rt>かう</rt></ruby>と<ruby>言っています<rt>いっています</rt></ruby>か。', options: ['<ruby>りんご<rt>りんご</rt></ruby>', '<ruby>本<rt>ほん</rt></ruby>', '<ruby>水<rt>みず</rt></ruby>', '<ruby>パン<rt>パン</rt></ruby>'], correctAnswer: 3, explanation: '会話では「パンを買いましょう」と言っているので、答えはパンです。', hint: '「買いましょう」の後に出る名詞を聞き取ります。', audioScript: [{ speaker: 'M', text: 'お昼にパンを買いましょう。', delay: 500 }, { speaker: 'F', text: 'いいですね。じゃあ、三個ください。', delay: 650 }] },
      { id: 'N5-CHO-007', type: 'choukai', subType: 'key-point', label: '聴解', questionText: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>しに<rt>しに</rt></ruby>行きますか。', options: ['<ruby>図書館<rt>としょかん</rt></ruby>へ行く', '<ruby>駅<rt>えき</rt></ruby>へ行く', '<ruby>学校<rt>がっこう</rt></ruby>へ行く', '<ruby>店<rt>みせ</rt></ruby>へ行く'], correctAnswer: 0, explanation: '「図書館で本を借りる」と言っているので、答えは図書館です。', hint: '目的地を聞き取ってください。', audioScript: [{ speaker: 'M', text: '今日は図書館で本を借りに行きます。', delay: 600 }, { speaker: 'F', text: 'いいですね。', delay: 300 }] },
      { id: 'N5-CHO-008', type: 'choukai', subType: 'quick-response', label: '聴解', questionText: '<ruby>返事<rt>へんじ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>ですか。', options: ['はい、行きます', 'いいえ、帰ります', 'いいえ、寝ます', 'はい、食べます'], correctAnswer: 0, explanation: '音声では「はい、行きます」と返答しているので、答えは行く意向です。', hint: '相手の依頼への返事を聞き取ってください。', audioScript: [{ speaker: 'M', text: '明日、駅で会いませんか。', delay: 600 }, { speaker: 'F', text: 'はい、行きます。', delay: 500 }] },
      { id: 'N5-CHO-009', type: 'choukai', subType: 'task-comprehension', label: '聴解', questionText: '<ruby>何時<rt>なんじ</rt></ruby>に<ruby>会います<rt>あいます</rt></ruby>か。', options: ['<ruby>三時<rt>さんじ</rt></ruby>', '<ruby>四時<rt>よじ</rt></ruby>', '<ruby>五時<rt>ごじ</rt></ruby>', '<ruby>六時<rt>ろくじ</rt></ruby>'], correctAnswer: 0, explanation: '「三時に会いましょう」と聞こえるので、三時です。', hint: '会う時間を確認しましょう。', audioScript: [{ speaker: 'F', text: 'じゃあ、三時に駅前で会いましょう。', delay: 700 }, { speaker: 'M', text: 'わかりました。', delay: 350 }] },
      { id: 'N5-CHO-010', type: 'choukai', subType: 'key-point', label: '聴解', questionText: '<ruby>会話<rt>かいわ</rt></ruby>で<ruby>重要<rt>じゅうよう</rt></ruby>なのは<ruby>何<rt>なに</rt></ruby>ですか。', options: ['<ruby>場所<rt>ばしょ</rt></ruby>が<ruby>駅前<rt>えきまえ</rt></ruby>だということ', '<ruby>名前<rt>なまえ</rt></ruby>が<ruby>田中<rt>たなか</rt></ruby>だということ', '<ruby>雨<rt>あめ</rt></ruby>のこと', '<ruby>買う量<rt>かうりょう</rt></ruby>のこと'], correctAnswer: 0, explanation: '会話の要点は会う場所が駅前であるということです。', hint: '聞かれた情報が場所か時間かを判断しましょう。', audioScript: [{ speaker: 'M', text: '駅前で会いましょう。', delay: 500 }, { speaker: 'F', text: 'はい、そこがいいです。', delay: 450 }] },
      { id: 'N5-CHO-011', type: 'choukai', subType: 'utterance-expression', label: '聴解', questionText: '<ruby>何<rt>なに</rt></ruby>を<ruby>頼みます<rt>たのみます</rt></ruby>か。', options: ['<ruby>お水<rt>おみず</rt></ruby>をください', '<ruby>電話<rt>でんわ</rt></ruby>をします', '<ruby>車<rt>くるま</rt></ruby>に乗ります', '<ruby>休み<rt>やすみ</rt></ruby>です'], correctAnswer: 0, explanation: '「お水をください」と頼んでいるので、答えは水の要請です。', hint: '店での依頼表現に注目しましょう。', audioScript: [{ speaker: 'M', text: 'すみません、お水をください。', delay: 650 }] },
      { id: 'N5-CHO-012', type: 'choukai', subType: 'quick-response', label: '聴解', questionText: '<ruby>話している人<rt>はなしているひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>しよう<rt>しよう</rt></ruby>としていますか。', options: ['<ruby>寝る<rt>ねる</rt></ruby>', '<ruby>勉強する<rt>べんきょうする</rt></ruby>', '<ruby>買い物する<rt>かいものする</rt></ruby>', '<ruby>遊ぶ<rt>あそぶ</rt></ruby>'], correctAnswer: 2, explanation: '「買い物に行きましょう」と言っているので、買い物の意思が表れています。', hint: '目的を表す語を聞き取りましょう。', audioScript: [{ speaker: 'F', text: '今日は買い物に行きましょう。', delay: 600 }, { speaker: 'M', text: 'いいですね。', delay: 400 }] },
      { id: 'N5-CHO-013', type: 'choukai', subType: 'task-comprehension', label: '聴解', questionText: '<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起きます<rt>おきます</rt></ruby>か。', options: ['<ruby>六時<rt>ろくじ</rt></ruby>', '<ruby>七時<rt>しちじ</rt></ruby>', '<ruby>八時<rt>はちじ</rt></ruby>', '<ruby>九時<rt>くじ</rt></ruby>'], correctAnswer: 1, explanation: '「七時に起きます」と言っているので、七時が正解です。', hint: '時間をよく聞いてください。', audioScript: [{ speaker: 'M', text: '私は毎日七時に起きます。', delay: 700 }] },
      { id: 'N5-CHO-014', type: 'choukai', subType: 'key-point', label: '聴解', questionText: '<ruby>どこ<rt>どこ</rt></ruby>で<ruby>会う<rt>あう</rt></ruby>と<ruby>言って<rt>いって</rt></ruby>いますか。', options: ['<ruby>駅前<rt>えきまえ</rt></ruby>', '<ruby>学校<rt>がっこう</rt></ruby>', '<ruby>駅<rt>えき</rt></ruby>', '<ruby>公園<rt>こうえん</rt></ruby>'], correctAnswer: 0, explanation: '「駅前で会いましょう」と言っているので、ここです。', hint: '場所を表す語に注意しましょう。', audioScript: [{ speaker: 'M', text: '駅前で会いましょう。', delay: 500 }, { speaker: 'F', text: 'はい、待っています。', delay: 500 }] },
      { id: 'N5-CHO-015', type: 'choukai', subType: 'quick-response', label: '聴解', questionText: '<ruby>何<rt>なに</rt></ruby>が<ruby>不便<rt>ふべん</rt></ruby>ですか。', options: ['<ruby>雨<rt>あめ</rt></ruby>', '<ruby>電車<rt>でんしゃ</rt></ruby>', '<ruby>先生<rt>せんせい</rt></ruby>', '<ruby>時間<rt>じかん</rt></ruby>'], correctAnswer: 1, explanation: '会話は電車が遅れて不便だと述べています。', hint: '状況の原因を聞き取ってください。', audioScript: [{ speaker: 'F', text: '電車が遅れてとても不便です。', delay: 650 }, { speaker: 'M', text: 'そうですね。', delay: 450 }] },
      { id: 'N5-CHO-016', type: 'choukai', subType: 'key-point', label: '聴解', questionText: '<ruby>何<rt>なに</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好き<rt>すき</rt></ruby>ですか。', options: ['<ruby>お茶<rt>おちゃ</rt></ruby>', '<ruby>パン<rt>パン</rt></ruby>', '<ruby>ケーキ<rt>ケーキ</rt></ruby>', '<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>'], correctAnswer: 2, explanation: '会話では「ケーキが一番好き」と言っていました。', hint: '好みを表す語を聞き取ってください。', audioScript: [{ speaker: 'M', text: 'ケーキが一番好きです。', delay: 600 }, { speaker: 'F', text: 'わかりました。', delay: 300 }] },
      { id: 'N5-CHO-017', type: 'choukai', subType: 'task-comprehension', label: '聴解', questionText: '<ruby>二人<rt>ふたり</rt></ruby>は<ruby>何を<rt>なにを</rt></ruby><ruby>する<rt>する</rt></ruby>ことに<ruby>決めました<rt>きめました</rt></ruby>か。', options: ['<ruby>映画<rt>えいが</rt></ruby>をみる', '<ruby>買い物<rt>かいもの</rt></ruby>する', '<ruby>勉強<rt>べんきょう</rt></ruby>する', '<ruby>散歩<rt>さんぽ</rt></ruby>する'], correctAnswer: 0, explanation: '会話では映画を見ることに決めたと言われています。', hint: '目的の行動を聞き分けましょう。', audioScript: [{ speaker: 'M', text: '今日は映画を見ませんか。', delay: 500 }, { speaker: 'F', text: 'いいですね。決めましょう。', delay: 600 }] }
    ]
  },
  N4: {
    goi: [],
    bunpou: [],
    dokkai: [],
    choukai: []
  }
};

const DEFAULT_SETTINGS = {
  level: 'N5',
  mode: 'Ujian',
  fontSize: 'normal',
  furigana: 'show',
  section: 'all',
  theme: 'light'
};

class JLPTEngine {
  constructor() {
    this.settings = { ...DEFAULT_SETTINGS };
    this.currentIndex = 0;
    this.answers = {};
    this.questions = [];
    this.timerSeconds = 900;
    this.timerId = null;
    this.isRunning = false;
    this.isFinished = false;
    this.audioLocked = false;
    this.dom = {
      questionRenderer: document.getElementById('questionRenderer'),
      answerSheet: document.getElementById('answerSheet'),
      timerDisplay: document.getElementById('timerDisplay'),
      statusBar: document.getElementById('statusBar'),
      themeToggle: document.getElementById('themeToggle'),
      levelSelect: document.getElementById('levelSelect'),
      modeSelect: document.getElementById('modeSelect'),
      fontSize: document.getElementById('fontSize'),
      furiganaToggle: document.getElementById('furiganaToggle'),
      sectionSelect: document.getElementById('sectionSelect'),
      startBtn: document.getElementById('startBtn'),
      resetBtn: document.getElementById('resetBtn'),
      guideBtn: document.getElementById('guideBtn'),
      prevBtn: document.getElementById('prevBtn'),
      nextBtn: document.getElementById('nextBtn'),
      finishBtn: document.getElementById('finishBtn'),
      questionType: document.getElementById('questionType'),
      questionMeta: document.getElementById('questionMeta'),
      resultBox: document.getElementById('resultBox'),
      scoreGoi: document.getElementById('scoreGoi'),
      scoreBunpou: document.getElementById('scoreBunpou'),
      scoreDokkai: document.getElementById('scoreDokkai'),
      scoreChoukai: document.getElementById('scoreChoukai'),
      passBadge: document.getElementById('passBadge')
    };
    this.loadSettings();
    this.bindEvents();
    this.refreshQuestions();
    this.render();
  }

  normalizeMode(value) {
    if (value === 'Mode Ujian' || value === 'EXAM') return 'Ujian';
    if (value === 'Mode Latihan' || value === 'Latihan Terpandu' || value === 'PRACTICE') return 'Latihan';
    return value || 'Ujian';
  }

  loadSettings() {
    try {
      const raw = localStorage.getItem('nihongo-studio-jlpt-settings-v1');
      if (raw) {
        const saved = JSON.parse(raw);
        this.settings = { ...DEFAULT_SETTINGS, ...saved, mode: this.normalizeMode(saved.mode) };
      }
    } catch (error) {
      console.warn('Settings could not be restored', error);
    }
  }

  saveSettings() {
    this.settings.mode = this.normalizeMode(this.settings.mode);
    localStorage.setItem('nihongo-studio-jlpt-settings-v1', JSON.stringify(this.settings));
  }

  refreshQuestions() {
    const bank = N5_BANK[this.settings.level] || N5_BANK.N5;
    const selected = this.settings.section === 'all'
      ? Object.values(bank).flat()
      : (bank[this.settings.section] || []);
    this.questions = selected.length ? selected : Object.values(bank).flat();
    this.currentIndex = 0;
    this.answers = {};
    this.isFinished = false;
    this.timerSeconds = 900;
    this.audioLocked = false;
    this.updateTimerDisplay();
    this.renderAnswerSheet();
    this.renderQuestion();
  }

  applyTheme() {
    const theme = this.settings.theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    if (this.dom.themeToggle) this.dom.themeToggle.textContent = theme === 'dark' ? 'Tema terang' : 'Tema gelap';
  }

  applyFontSize() {
    const size = this.settings.fontSize;
    document.documentElement.style.setProperty('--font-base', size === 'small' ? '15px' : size === 'large' ? '17px' : '16px');
  }

  applyFurigana() {
    document.body.classList.toggle('hide-n4-furigana', this.settings.furigana === 'hide');
  }

  isGuidedMode() {
    const mode = this.normalizeMode(this.settings.mode);
    return mode === 'Latihan';
  }

  syncControls() {
    this.dom.levelSelect.value = this.settings.level;
    this.dom.modeSelect.value = this.settings.mode;
    this.dom.fontSize.value = this.settings.fontSize;
    this.dom.furiganaToggle.value = this.settings.furigana;
    this.dom.sectionSelect.value = this.settings.section;
    this.applyTheme();
    this.applyFontSize();
    this.applyFurigana();
  }

  setStatus(message, variant = '') {
    this.dom.statusBar.textContent = message;
    this.dom.statusBar.className = 'status-bar';
    if (variant) this.dom.statusBar.classList.add(variant);
  }

  updateTimerDisplay() {
    const mm = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const ss = String(this.timerSeconds % 60).padStart(2, '0');
    this.dom.timerDisplay.textContent = `${mm}:${ss}`;
    this.dom.timerDisplay.style.color = this.timerSeconds <= 60 && this.isRunning ? 'var(--danger)' : 'var(--ink)';
  }

  startTimer() {
    clearInterval(this.timerId);
    this.isRunning = true;
    this.timerId = setInterval(() => {
      if (!this.isRunning) return;
      this.timerSeconds -= 1;
      this.updateTimerDisplay();
      if (this.timerSeconds <= 0) {
        clearInterval(this.timerId);
        this.isRunning = false;
        this.finishTest(true);
      }
    }, 1000);
  }

  renderAnswerSheet() {
    this.dom.answerSheet.innerHTML = '';
    this.questions.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sheet-btn';
      btn.textContent = String(index + 1);
      if (index === this.currentIndex) btn.classList.add('current');
      if (Object.prototype.hasOwnProperty.call(this.answers, index)) btn.classList.add('answered');
      btn.addEventListener('click', () => {
        this.currentIndex = index;
        this.renderQuestion();
        this.renderAnswerSheet();
      });
      this.dom.answerSheet.appendChild(btn);
    });
  }

  escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  renderRubyText(value) {
    if (!value || typeof value !== 'string') return '';

    const wordMap = new Map([
      ['毎朝', 'まいあさ'], ['朝ごはん', 'あさごはん'], ['日曜日', 'にちようび'], ['土曜日', 'にちようび'], ['学校', 'がっこう'], ['駅前', 'えきまえ'], ['駅', 'えき'], ['先生', 'せんせい'], ['試験', 'しけん'], ['始める', 'はじめる'], ['買う', 'かう'], ['何', 'なに'], ['お店', 'おみせ'], ['言えば', 'いえば'], ['雨', 'あめ'], ['朝', 'あさ'], ['昼ごはん', 'ひるごはん'], ['食べる', 'たべる'], ['言って', 'いって'], ['友達', 'ともだち'], ['部屋', 'へや'], ['電車', 'でんしゃ'], ['映画', 'えいが'], ['図書館', 'としょかん'], ['お茶', 'おちゃ'], ['天気', 'てんき'], ['本', 'ほん'], ['時間', 'じかん'], ['会話', 'かいわ'], ['場所', 'ばしょ'], ['重要', 'じゅうよう'], ['情報', 'じょうほう'], ['二人', 'ふたり'], ['店', 'みせ'], ['私', 'わたし'], ['家', 'いえ'], ['道', 'みち'], ['傘', 'かさ'], ['公園', 'こうえん'], ['パン', 'パン'], ['牛乳', 'ぎゅうにゅう'], ['いいえ', 'いいえ'], ['写真', 'しゃしん'], ['宿題', 'しゅくだい'], ['漢字', 'かんじ'], ['今日', 'きょう'], ['明日', 'あした'], ['午後', 'ごご'], ['休み', 'やすみ'], ['買い物', 'かいもの'], ['行きます', 'いきます'], ['行く', 'いく'], ['帰る', 'かえる'], ['読む', 'よむ'], ['食べます', 'たべます'], ['見ます', 'みます'], ['待ちます', 'まちます'], ['寝ます', 'ねます'], ['歩き', 'あるき'], ['車', 'くるま'], ['コンビニ', 'コンビニ'], ['本屋', 'ほんや'], ['会社', 'かいしゃ'], ['学生', 'がくせい'], ['教室', 'きょうしつ'], ['勉強', 'べんきょう'], ['辞書', 'じしょ'], ['新聞', 'しんぶん'], ['雑誌', 'ざっし'], ['質問', 'しつもん'], ['返事', 'へんじ'], ['問題', 'もんだい'], ['答え', 'こたえ'], ['出します', 'だします'], ['帰ります', 'かえります'], ['出発', 'しゅっぱつ'], ['入口', 'いりぐち'], ['出口', 'でぐち'], ['右', 'みぎ'], ['左', 'ひだり'], ['前', 'まえ'], ['後ろ', 'うしろ'], ['下', 'した'], ['上', 'うえ'], ['近い', 'ちかい'], ['遠い', 'とおい'], ['大きい', 'おおきい'], ['小さい', 'ちいさい'], ['多い', 'おおい'], ['少ない', 'すくない'], ['新しい', 'あたらしい'], ['古い', 'ふるい'], ['明るい', 'あかるい'], ['暗い', 'くらい'], ['便利', 'べんり'], ['不便', 'ふべん'], ['安い', 'やすい'], ['高い', 'たかい'], ['良い', 'いい'], ['悪い', 'わるい'], ['大人', 'おとな'], ['子供', 'こども'], ['毎日', 'まいにち'], ['出かけます', 'でかけます'], ['来ます', 'きます'], ['持っています', 'もっています'], ['持って', 'もって'], ['待っています', 'まっています'], ['見えます', 'みえます'], ['聞きます', 'ききます'], ['言います', 'いいます'], ['話します', 'はなします'], ['作ります', 'つくります'], ['使います', 'つかいます'], ['歩きます', 'あるきます'], ['走ります', 'はしります'], ['書きます', 'かきます'], ['覚えます', 'おぼえます'], ['分かります', 'わかります'], ['本文', 'ほんぶん'], ['移動', 'いどう'], ['手段', 'しゅだん'], ['明示', 'めいじ'], ['示す', 'しめす'], ['示されている', 'しめされている'], ['箇所', 'かしょ'], ['探す', 'さがす'], ['探しましょう', 'さがしましょう'], ['文', 'ぶん'], ['十五', 'じゅうご']
    ]);

    const singleMap = new Map([
      ['学', 'がく'], ['校', 'こう'], ['駅', 'えき'], ['先', 'せん'], ['生', 'せい'], ['試', 'し'], ['験', 'けん'], ['始', 'はじ'], ['買', 'か'], ['何', 'なに'], ['店', 'みせ'], ['言', 'い'], ['雨', 'あめ'], ['朝', 'あさ'], ['昼', 'ひる'], ['食', 'しょく'], ['友', 'とも'], ['達', 'だち'], ['部', 'ぶ'], ['屋', 'や'], ['電', 'でん'], ['車', 'しゃ'], ['映', 'えい'], ['画', 'が'], ['図', 'と'], ['書', 'しょ'], ['館', 'かん'], ['茶', 'ちゃ'], ['天', 'てん'], ['気', 'き'], ['本', 'ほん'], ['時', 'じ'], ['間', 'かん'], ['会', 'かい'], ['話', 'わ'], ['場', 'ば'], ['所', 'しょ'], ['重', 'じゅう'], ['要', 'よう'], ['情', 'じょう'], ['報', 'ほう'], ['二', 'ふた'], ['人', 'り'], ['私', 'わたし'], ['家', 'いえ'], ['傘', 'かさ'], ['公', 'こう'], ['園', 'えん'], ['牛', 'ぎゅう'], ['乳', 'にゅう'], ['写', 'しゃ'], ['真', 'しん'], ['宿', 'しゅく'], ['題', 'だい'], ['漢', 'かん'], ['字', 'じ'], ['今', 'きょう'], ['明', 'あ'], ['日', 'た'], ['午', 'ご'], ['後', 'ご'], ['休', 'やす'], ['行', 'い'], ['帰', 'かえ'], ['読', 'よ'], ['見', 'み'], ['待', 'ま'], ['寝', 'ね'], ['歩', 'ある'], ['車', 'くるま'], ['道', 'みち'], ['買', 'か'], ['物', 'もの'], ['持', 'も'], ['返', 'へん'], ['問', 'もん'], ['答', 'こた'], ['出', 'だ'], ['発', 'はつ'], ['入', 'い'], ['口', 'ぐち'], ['左', 'ひだり'], ['右', 'みぎ'], ['前', 'まえ'], ['後', 'うしろ'], ['上', 'うえ'], ['下', 'した'], ['近', 'ちか'], ['遠', 'とお'], ['大', 'おお'], ['小', 'ちい'], ['多', 'おお'], ['少', 'すく'], ['新', 'あたら'], ['古', 'ふる'], ['明', 'あか'], ['暗', 'くら'], ['便', 'べん'], ['安', 'やす'], ['高', 'たか'], ['良', 'よ'], ['悪', 'わる'], ['子', 'こ'], ['供', 'ども'], ['毎', 'まい'], ['来', 'き'], ['使', 'つか'], ['作', 'つく'], ['走', 'はし'], ['書', 'か'], ['覚', 'おぼ'], ['分', 'わ'], ['気', 'き']
    ]);

    const supplementalWords = new Map([
      ['依頼表現', 'いらいひょうげん'], ['指示対象', 'しじたいしょう'], ['連体修飾', 'れんたいしゅうしょく'], ['一般的', 'いっぱんてき'],
      ['一番', 'いちばん'], ['一万円', 'いちまんえん'], ['可能性', 'かのうせい'], ['格助詞', 'かくじょし'],
      ['形容詞', 'けいようし'], ['現在形', 'げんざいけい'], ['否定形', 'ひていけい'], ['目的地', 'もくてきち'],
      ['案内', 'あんない'], ['依頼', 'いらい'], ['意向', 'いこう'], ['意思', 'いし'], ['意味', 'いみ'], ['一緒', 'いっしょ'],
      ['英語', 'えいご'], ['音声', 'おんせい'], ['価格', 'かかく'], ['確認', 'かくにん'], ['完成', 'かんせい'],
      ['関係', 'かんけい'], ['関連', 'かんれん'], ['距離', 'きょり'], ['教材', 'きょうざい'], ['兄弟', 'きょうだい'],
      ['景色', 'けしき'], ['原因', 'げんいん'], ['最初', 'さいしょ'], ['財布', 'さいふ'], ['三個', 'さんこ'],
      ['三十', 'さんじゅう'], ['仕事', 'しごと'], ['指示', 'しじ'], ['自然', 'しぜん'], ['自転車', 'じてんしゃ'],
      ['習慣', 'しゅうかん'], ['順番', 'じゅんばん'], ['助詞', 'じょし'], ['女性', 'じょせい'], ['状況', 'じょうきょう'],
      ['状態', 'じょうたい'], ['正解', 'せいかい'], ['相手', 'あいて'], ['値段', 'ねだん'], ['注意', 'ちゅうい'],
      ['注目', 'ちゅうもく'], ['直接', 'ちょくせつ'], ['提案', 'ていあん'], ['程度', 'ていど'], ['田中', 'たなか'],
      ['動詞', 'どうし'], ['特定', 'とくてい'], ['内容', 'ないよう'], ['判断', 'はんだん'], ['否定', 'ひてい'],
      ['表現', 'ひょうげん'], ['頻度', 'ひんど'], ['副詞', 'ふくし'], ['弁当', 'べんとう'], ['方向', 'ほうこう'],
      ['名詞', 'めいし'], ['目的', 'もくてき'], ['予定', 'よてい'], ['料理', 'りょうり'], ['練習', 'れんしゅう'],
      ['言葉', 'ことば'], ['購入', 'こうにゅう'], ['開店', 'かいてん'], ['休館日', 'きゅうかんび'], ['自転', 'じてん'],
      ['乗り物', 'のりもの'], ['一番好き', 'いちばんすき'], ['一緒に', 'いっしょに'], ['七時', 'しちじ'],
      ['八時', 'はちじ'], ['九時', 'くじ'], ['朝食', 'ちょうしょく'], ['三十分', 'さんじゅっぷん'],
      ['十分', 'じゅっぷん'], ['十五分', 'じゅうごふん'], ['二千円', 'にせんえん'], ['千円', 'せんえん'],
      ['何時', 'なんじ'], ['何人', 'なんにん'], ['何円', 'なんえん'], ['今日中', 'きょうじゅう'],
      ['今日', 'きょう'], ['明日', 'あした'], ['昨日', 'きのう'], ['毎日', 'まいにち'], ['毎週', 'まいしゅう'],
      ['毎月', 'まいつき'], ['毎年', 'まいとし'], ['今週', 'こんしゅう'], ['先週', 'せんしゅう'],
      ['来週', 'らいしゅう'], ['今月', 'こんげつ'], ['先月', 'せんげつ'], ['来月', 'らいげつ'],
      ['金曜日', 'きんようび'], ['水曜日', 'すいようび'], ['土曜日', 'どようび'], ['日曜日', 'にちようび'],
      ['顔', 'かお'], ['洗う', 'あらう'], ['菓子', 'かし'], ['食べ物', 'たべもの'], ['飲み物', 'のみもの'],
      ['飲む', 'のむ'], ['飲みます', 'のみます'], ['起きる', 'おきる'], ['起きます', 'おきます'],
      ['乗る', 'のる'], ['乗ります', 'のります'], ['曲がる', 'まがる'], ['考える', 'かんがえる'],
      ['思い出す', 'おもいだす'], ['習う', 'ならう'], ['聞く', 'きく'], ['歩く', 'あるく'], ['閉まる', 'しまる'],
      ['閉める', 'しめる'], ['開く', 'あく'], ['開ける', 'あける'], ['住む', 'すむ'], ['続ける', 'つづける'],
      ['一人', 'ひとり'], ['二人', 'ふたり'], ['三人', 'さんにん'], ['四人', 'よにん'], ['五人', 'ごにん'],
      ['六人', 'ろくにん'], ['七人', 'しちにん'], ['八人', 'はちにん'], ['九人', 'きゅうにん'], ['十人', 'じゅうにん'],
      ['一個', 'いっこ'], ['二個', 'にこ'], ['四個', 'よんこ'], ['五個', 'ごこ'], ['一冊', 'いっさつ'],
      ['二冊', 'にさつ'], ['三冊', 'さんさつ'], ['一枚', 'いちまい'], ['二枚', 'にまい'], ['三枚', 'さんまい'],
      ['五百円', 'ごひゃくえん'], ['七百円', 'ななひゃくえん'], ['八百円', 'はっぴゃくえん'], ['九百円', 'きゅうひゃくえん'],
      ['一時', 'いちじ'], ['二時', 'にじ'], ['三時', 'さんじ'], ['四時', 'よじ'], ['五時', 'ごじ'],
      ['六時', 'ろくじ'], ['八時', 'はちじ'], ['九時', 'くじ'], ['十時', 'じゅうじ'],
      ['一分', 'いっぷん'], ['二分', 'にふん'], ['三分', 'さんぷん'], ['五分', 'ごふん'], ['六分', 'ろっぷん'],
      ['八分', 'はっぷん'], ['九分', 'きゅうふん'], ['一月', 'いちがつ'], ['二月', 'にがつ'], ['三月', 'さんがつ'],
      ['四月', 'しがつ'], ['五月', 'ごがつ'], ['六月', 'ろくがつ'], ['七月', 'しちがつ'], ['八月', 'はちがつ'],
      ['九月', 'くがつ'], ['十月', 'じゅうがつ'], ['十一月', 'じゅういちがつ'], ['十二月', 'じゅうにがつ'],
      ['一日', 'ついたち'], ['二日', 'ふつか'], ['三日', 'みっか'], ['四日', 'よっか'], ['五日', 'いつか'],
      ['六日', 'むいか'], ['七日', 'なのか'], ['八日', 'ようか'], ['九日', 'ここのか'], ['十日', 'とおか'],
      ['二十日', 'はつか'], ['一週間', 'いっしゅうかん'], ['一ヶ月', 'いっかげつ'], ['一か月', 'いっかげつ'],
      ['二ヶ月', 'にかげつ'], ['二か月', 'にかげつ'], ['一年', 'いちねん'], ['二年', 'にねん'],
      ['三年', 'さんねん'], ['四年', 'よねん'], ['五年', 'ごねん'], ['六年', 'ろくねん'], ['七年', 'ななねん'],
      ['八年', 'はちねん'], ['九年', 'きゅうねん'], ['十年', 'じゅうねん'], ['何年', 'なんねん'],
      ['何月', 'なんがつ'], ['何日', 'なんにち'], ['何曜日', 'なんようび'], ['何分', 'なんぷん'],
      ['本文', 'ほんぶん'], ['移動', 'いどう'], ['手段', 'しゅだん'], ['明示', 'めいじ'], ['箇所', 'かしょ'],
      ['文章', 'ぶんしょう'], ['短文', 'たんぶん'], ['中文', 'ちゅうぶん'], ['読解', 'どっかい'],
      ['文法', 'ぶんぽう'], ['文字', 'もじ'], ['語彙', 'ごい'], ['聴解', 'ちょうかい'],
      ['課題理解', 'かだいりかい'], ['即時応答', 'そくじおうとう'], ['選択肢', 'せんたくし'],
      ['言語知識', 'げんごちしき'], ['天気予報', 'てんきよほう'], ['第一日曜日', 'だいいちにちようび'],
      ['午後五時', 'ごごごじ'], ['午後三時', 'ごごさんじ'], ['午前九時', 'ごぜんくじ'],
      ['三十分前', 'さんじゅっぷんまえ'], ['一週間前', 'いっしゅうかんまえ'],
      ['思い出す', 'おもいだす'], ['思い', 'おもい'], ['最も', 'もっとも'], ['伝える', 'つたえる'],
      ['伝えます', 'つたえます'], ['行為', 'こうい'], ['様子', 'ようす'], ['強い', 'つよい'], ['強く', 'つよく'],
      ['合う', 'あう'], ['合わせる', 'あわせる'], ['開いて', 'あいて'], ['開いています', 'あいています'],
      ['時刻', 'じこく'], ['尋ねる', 'たずねる'], ['仲間', 'なかま'], ['出来事', 'できごと'],
      ['事', 'こと'], ['方法', 'ほうほう'], ['入る', 'はいる'], ['入ります', 'はいります'],
      ['起き', 'おき'], ['整える', 'ととのえる'],
      ['整えて', 'ととのえて'], ['早く', 'はやく'], ['勧める', 'すすめる'], ['勧め', 'すすめ'],
      ['置いて', 'おいて'], ['置く', 'おく'], ['進行', 'しんこう'], ['進む', 'すすむ'],
      ['曲がります', 'まがります'], ['閉まっています', 'しまっています'], ['洗って', 'あらって'],
      ['必要', 'ひつよう'], ['聞いて', 'きいて']
    ]);
    supplementalWords.forEach((reading, word) => wordMap.set(word, reading));

    const supplementalSingle = new Map([
      ['注', 'ちゅう'], ['目', 'め'], ['脈', 'みゃく'], ['教', 'おし'], ['材', 'ざい'], ['意', 'い'], ['味', 'あじ'],
      ['葉', 'は'], ['関', 'かん'], ['係', 'かかり'], ['動', 'うご'], ['詞', 'し'], ['選', 'えら'], ['正', 'ただ'],
      ['一', 'いち'], ['般', 'ぱん'], ['的', 'てき'], ['考', 'かんが'], ['指', 'ゆび'], ['示', 'しめ'], ['対', 'たい'],
      ['象', 'しょう'], ['名', 'な'], ['語', 'ご'], ['基', 'もと'], ['列', 'れつ'], ['購', 'こう'], ['続', 'つづ'],
      ['形', 'かたち'], ['容', 'よう'], ['女', 'おんな'], ['性', 'せい'], ['表', 'ひょう'], ['値', 'ね'], ['段', 'だん'],
      ['価', 'あたい'], ['格', 'かく'], ['活', 'かつ'], ['状', 'じょう'], ['態', 'たい'], ['帯', 'おび'], ['自', 'じ'],
      ['転', 'てん'], ['助', 'じょ'], ['流', 'なが'], ['順', 'じゅん'], ['程', 'ほど'], ['度', 'ど'], ['副', 'ふく'],
      ['母', 'はは'], ['緒', 'お'], ['直', 'なお'], ['接', 'せつ'], ['否', 'ひ'], ['定', 'てい'], ['飲', 'の'],
      ['弁', 'べん'], ['当', 'とう'], ['金', 'かね'], ['慣', 'な'], ['述', 'の'], ['在', 'ざい'], ['修', 'しゅう'],
      ['飾', 'かざ'], ['説', 'せつ'], ['章', 'しょう'], ['拾', 'ひろ'], ['飯', 'めし'], ['菓', 'か'], ['山', 'やま'],
      ['週', 'しゅう'], ['景', 'けい'], ['色', 'いろ'], ['雪', 'ゆき'], ['田', 'た'], ['晩', 'ばん'], ['九', 'きゅう'],
      ['住', 'す'], ['距', 'きょ'], ['離', 'はな'], ['練', 'れん'], ['英', 'えい'], ['具', 'ぐ'], ['財', 'ざい'],
      ['布', 'ぬの'], ['取', 'と'], ['特', 'とく'], ['撮', 'と'], ['解', 'と'], ['仕', 'し'], ['机', 'つくえ'],
      ['冊', 'さつ'], ['空', 'そら'], ['提', 'てい'], ['堂', 'どう'], ['音', 'おと'], ['声', 'こえ'], ['四', 'よん'],
      ['求', 'もと'], ['万', 'まん'], ['円', 'えん'], ['議', 'ぎ'], ['地', 'ち'], ['借', 'か'], ['依', 'い'],
      ['頼', 'たよ'], ['点', 'てん'], ['請', 'せい'], ['原', 'げん'], ['因', 'いん'], ['遅', 'おく'], ['決', 'き'],
      ['結', 'むす'], ['果', 'か'],       ['入', 'はい'], ['出', 'で'], ['年', 'ねん'], ['階', 'かい'], ['好', 'す'], ['思', 'おも'],
      ['最', 'もっと'], ['伝', 'つた'], ['為', 'ため'], ['様', 'よう'], ['強', 'つよ'], ['合', 'あ'],
      ['開', 'あ'], ['刻', 'こく'], ['尋', 'たず'], ['仲', 'なか'], ['事', 'こと'], ['方', 'かた'],
      ['起', 'お'], ['整', 'ととの'], ['早', 'はや'], ['勧', 'すす'], ['置', 'お'], ['進', 'すす'],
      ['曲', 'ま'], ['閉', 'し'], ['洗', 'あら'], ['中', 'なか'], ['水', 'みず'], ['必', 'ひつ'],
      ['弟', 'おとうと'], ['聞', 'き']
    ]);
    supplementalSingle.forEach((reading, kanji) => singleMap.set(kanji, reading));

    const formatKnownWord = (word, reading) => {
      const pieces = word.match(/[一-龯]+|[^一-龯]+/g) || [word];
      if (pieces.length === 1) return `<ruby class="furigana furigana-advanced">${word}<rt>${reading}</rt></ruby>`;

      let cursor = 0;
      let html = '';
      for (let index = 0; index < pieces.length; index += 1) {
        const piece = pieces[index];
        if (!/[一-龯]/.test(piece)) {
          if (reading.startsWith(piece, cursor)) cursor += piece.length;
          html += this.escapeHtml(piece);
          continue;
        }
        const nextKana = pieces.slice(index + 1).find((part) => !/[一-龯]/.test(part));
        const nextIndex = nextKana ? reading.indexOf(nextKana, cursor) : reading.length;
        if (nextIndex < cursor || nextIndex === cursor) return null;
        const kanjiReading = reading.slice(cursor, nextIndex);
        cursor = nextIndex;
        html += `<ruby class="furigana furigana-advanced">${piece}<rt>${kanjiReading}</rt></ruby>`;
      }
      return html;
    };

    const decorateText = (text) => {
      if (!/[一-龯]/.test(text)) return this.escapeHtml(text);
      const tokens = [];
      let result = this.escapeHtml(text);
      const kanjiWords = [...wordMap.keys()]
        .filter((word) => /[一-龯]/.test(word))
        .sort((a, b) => b.length - a.length);

      kanjiWords.forEach((key) => {
        const pattern = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        result = result.replace(pattern, (match) => {
          const reading = wordMap.get(match);
          if (!reading) return match;
          const formatted = formatKnownWord(match, reading);
          if (!formatted) return match;
          const token = `__FURIGANA_${tokens.length}__`;
          tokens.push(formatted);
          return token;
        });
      });

      result = result.replace(/[一-龯]/g, (char) => {
        const reading = singleMap.get(char);
        if (!reading) return char;
        const token = `__FURIGANA_${tokens.length}__`;
        tokens.push(`<ruby class="furigana furigana-advanced">${char}<rt>${reading}</rt></ruby>`);
        return token;
      });

      return tokens.reduce((acc, html, index) => acc.replace(`__FURIGANA_${index}__`, html), result);
    };

    const template = document.createElement('template');
    template.innerHTML = value;
    template.content.querySelectorAll('ruby').forEach((ruby) => {
      const source = ruby.cloneNode(true);
      source.querySelectorAll('rt, rp').forEach((annotation) => annotation.remove());
      const baseText = source.textContent || '';
      const reading = ruby.querySelector('rt')?.textContent || '';

      if (!/[一-龯]/.test(baseText)) {
        ruby.replaceWith(document.createTextNode(baseText));
        return;
      }
      if (!/[ぁ-ゖァ-ヺ]/.test(baseText)) return;

      const formatted = reading ? formatKnownWord(baseText, reading) : null;
      if (formatted) {
        const replacement = document.createElement('span');
        replacement.innerHTML = formatted;
        ruby.replaceWith(...replacement.childNodes);
      } else {
        ruby.replaceWith(document.createTextNode(baseText));
      }
    });

    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement?.closest('ruby')) textNodes.push(node);
    }

    textNodes.forEach((textNode) => {
      const replacement = document.createElement('span');
      replacement.innerHTML = decorateText(textNode.textContent || '');
      textNode.replaceWith(...replacement.childNodes);
    });

    return template.innerHTML;
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    this.dom.questionType.innerHTML = this.renderRubyText(q.label || q.type);
    this.dom.questionMeta.textContent = `${this.currentIndex + 1} / ${this.questions.length}`;

    if (q.type === 'dokkai') {
      this.renderDokkaiQuestion(q);
      return;
    }

    if (q.type === 'choukai') {
      this.renderChoukaiQuestion(q);
      return;
    }

    let selected = this.answers[this.currentIndex];
    const explanationHtml = this.isFinished ? `<div class="explain-box"><strong>Pembahasan</strong>${this.renderRubyText(q.explanation)}</div>` : '';
    const hintHtml = q.hint ? `<div class="hint-box"><strong>Tips strategi</strong>${this.renderRubyText(q.hint)}</div>` : '';
    const optionHtml = q.options.map((option, index) => {
      const isSelected = selected === index;
      const classes = ['answer-item'];
      if (isSelected) classes.push('selected');
      if (this.isFinished && q.correctAnswer === index) classes.push('correct');
      if (this.isFinished && isSelected && q.correctAnswer !== index) classes.push('incorrect');
      return `
        <label class="${classes.join(' ')}">
          <input type="radio" name="option-${q.id}" value="${index}" ${isSelected ? 'checked' : ''}>
          <span class="answer-label">${String.fromCharCode(65 + index)}.</span>
        <span>${this.renderRubyText(option)}</span>
        </label>
      `;
    }).join('');

    this.dom.questionRenderer.innerHTML = `
      <div class="meta">${this.renderRubyText(q.label || q.type)} · ${this.currentIndex + 1} / ${this.questions.length}</div>
    <div class="question-text">${this.renderRubyText(q.questionText)}</div>
      ${hintHtml}
      <div class="answer-list">${optionHtml}</div>
      ${explanationHtml}
    `;

    this.dom.questionRenderer.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        this.answers[this.currentIndex] = Number(event.target.value);
        this.renderAnswerSheet();
        if (this.isGuidedMode()) this.setStatus('Jawaban tersimpan. Lihat pembahasan di bawah.', 'success');
      });
    });

    this.dom.prevBtn.disabled = this.currentIndex === 0;
    this.dom.nextBtn.textContent = this.currentIndex === this.questions.length - 1 ? 'Akhiri' : 'Berikutnya';
  }

  renderDokkaiQuestion(q) {
    const selected = this.answers[this.currentIndex];
    const mainHtml = `
      <div class="dokkai-shell">
        <div class="dokkai-area passage-pane">
          <div class="passage-text">${this.renderRubyText(q.passage)}</div>
        </div>
        <div class="dokkai-area question-pane">
          <div class="meta">${this.renderRubyText(q.label || q.type)} · ${this.currentIndex + 1} / ${this.questions.length}</div>
          <div class="question-text">${this.renderRubyText(q.questionText)}</div>
          ${q.hint ? `<div class="hint-box"><strong>Tips strategi</strong>${this.renderRubyText(q.hint)}</div>` : ''}
          <div class="answer-list">
            ${q.options.map((option, index) => {
              const isSelected = selected === index;
              const classes = ['answer-item'];
              if (isSelected) classes.push('selected');
              if (this.isFinished && q.correctAnswer === index) classes.push('correct');
              if (this.isFinished && isSelected && q.correctAnswer !== index) classes.push('incorrect');
              return `
                <label class="${classes.join(' ')}">
                  <input type="radio" name="dokkai-${q.id}" value="${index}" ${isSelected ? 'checked' : ''}>
                  <span class="answer-label">${String.fromCharCode(65 + index)}.</span>
                  <span>${this.renderRubyText(option)}</span>
                </label>
              `;
            }).join('')}
          </div>
          ${this.isFinished ? `<div class="explain-box"><strong>Pembahasan</strong>${this.renderRubyText(q.explanation)}</div>` : ''}
        </div>
      </div>
    `;
    this.dom.questionRenderer.innerHTML = mainHtml;
    this.dom.questionRenderer.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        this.answers[this.currentIndex] = Number(event.target.value);
        this.renderAnswerSheet();
        if (this.isGuidedMode()) this.setStatus('Jawaban tersimpan. Cek pembahasan.', 'success');
      });
    });
    this.dom.prevBtn.disabled = this.currentIndex === 0;
    this.dom.nextBtn.textContent = this.currentIndex === this.questions.length - 1 ? 'Akhiri' : 'Berikutnya';
  }

  async playChoukaiAudio(scriptArray) {
    if (!window.speechSynthesis) {
      return Promise.resolve();
    }

    const queue = scriptArray.map((line) => ({
      text: line.text,
      delay: line.delay || 300,
      speaker: line.speaker || 'M'
    }));

    await new Promise((resolve) => {
      let index = 0;
      const sayNext = () => {
        if (index >= queue.length) {
          resolve();
          return;
        }
        const line = queue[index];
        const utterance = new SpeechSynthesisUtterance(line.text);
        utterance.rate = 1.0;
        utterance.pitch = line.speaker === 'F' ? 1.2 : 0.9;
        utterance.lang = 'ja-JP';
        utterance.onend = () => {
          index += 1;
          setTimeout(sayNext, line.delay);
        };
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      };
      sayNext();
    });
  }

  renderChoukaiQuestion(q) {
    const selected = this.answers[this.currentIndex];
    const script = q.audioScript || [];
    let audioHtml = '';
    if (script.length) {
      audioHtml = `
        <div class="action-row">
          <button class="primary-btn" id="playChoukaiBtn" type="button">Putar audio</button>
        </div>
      `;
    }

    this.dom.questionRenderer.innerHTML = `
      <div class="meta">${this.renderRubyText(q.label || q.type)} · ${this.currentIndex + 1} / ${this.questions.length}</div>
      <div class="question-text">${this.renderRubyText(q.questionText)}</div>
      ${audioHtml}
      ${q.hint ? `<div class="hint-box"><strong>Tips strategi</strong>${this.renderRubyText(q.hint)}</div>` : ''}
      <div class="answer-list">
        ${q.options.map((option, index) => {
          const isSelected = selected === index;
          const classes = ['answer-item'];
          if (isSelected) classes.push('selected');
          if (this.isFinished && q.correctAnswer === index) classes.push('correct');
          if (this.isFinished && isSelected && q.correctAnswer !== index) classes.push('incorrect');
          return `
            <label class="${classes.join(' ')}">
              <input type="radio" name="choukai-${q.id}" value="${index}" ${isSelected ? 'checked' : ''}>
              <span class="answer-label">${String.fromCharCode(65 + index)}.</span>
              <span>${this.renderRubyText(option)}</span>
            </label>
          `;
        }).join('')}
      </div>
      ${this.isFinished ? `<div class="explain-box"><strong>Pembahasan</strong>${this.renderRubyText(q.explanation)}</div>` : ''}
    `;

    const audioBtn = document.getElementById('playChoukaiBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', async () => {
        if (this.settings.mode === 'Ujian' && this.audioLocked) return;
        this.audioLocked = true;
        audioBtn.disabled = true;
        audioBtn.textContent = 'Memutar...';
        await this.playChoukaiAudio(script);
        audioBtn.disabled = false;
        audioBtn.textContent = 'Putar audio';
      });
    }

    this.dom.questionRenderer.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        this.answers[this.currentIndex] = Number(event.target.value);
        this.renderAnswerSheet();
      });
    });

    this.dom.prevBtn.disabled = this.currentIndex === 0;
    this.dom.nextBtn.textContent = this.currentIndex === this.questions.length - 1 ? 'Akhiri' : 'Berikutnya';
  }

  finishTest(wasTimedOut = false) {
    this.isFinished = true;
    this.isRunning = false;
    clearInterval(this.timerId);

    let goi = 0;
    let bunpou = 0;
    let dokkai = 0;
    let choukai = 0;

    this.questions.forEach((q, index) => {
      const answer = this.answers[index];
      if (answer === undefined) return;
      if (answer === q.correctAnswer) {
        if (q.type === 'goi') goi += 24;
        if (q.type === 'bunpou') bunpou += 24;
        if (q.type === 'dokkai') dokkai += 24;
        if (q.type === 'choukai') choukai += 12;
      }
    });

    this.dom.scoreGoi.textContent = `${goi} / 120`;
    this.dom.scoreBunpou.textContent = `${bunpou} / 120`;
    this.dom.scoreDokkai.textContent = `${dokkai} / 120`;
    this.dom.scoreChoukai.textContent = `${choukai} / 60`;
    const total = goi + bunpou + dokkai + choukai;
    const pass = goi >= 60 && bunpou >= 60 && dokkai >= 60 && choukai >= 30;
    this.dom.passBadge.textContent = `Status: ${pass ? 'Lulus estimasi' : 'Belum lolos'}`;
    this.dom.passBadge.classList.toggle('fail', !pass);
    this.dom.resultBox.classList.add('show');
    this.setStatus(wasTimedOut ? 'Waktu habis. Hasil terkumpul.' : (pass ? 'Estimasi kelulusan: Lulus.' : 'Estimasi kelulusan: Belum lolos.'), pass ? 'success' : 'error');
    this.renderQuestion();
    this.renderAnswerSheet();
  }

  startPractice() {
    this.isFinished = false;
    this.isRunning = true;
    const mode = this.normalizeMode(this.settings.mode);
    if (mode === 'Ujian') {
      this.timerSeconds = 900;
      this.updateTimerDisplay();
      this.startTimer();
    }
    this.setStatus('Mode aktif. Kerjakan soal satu per satu.', 'success');
  }

  resetTest() {
    this.answers = {};
    this.currentIndex = 0;
    this.isFinished = false;
    this.isRunning = false;
    clearInterval(this.timerId);
    this.timerSeconds = 900;
    this.audioLocked = false;
    this.dom.resultBox.classList.remove('show');
    this.updateTimerDisplay();
    this.renderQuestion();
    this.renderAnswerSheet();
    this.setStatus('Siap memulai latihan.', '');
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex += 1;
      this.renderQuestion();
      this.renderAnswerSheet();
      return;
    }
    this.finishTest();
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.renderQuestion();
      this.renderAnswerSheet();
    }
  }

  bindEvents() {
    this.dom.themeToggle.addEventListener('click', () => {
      this.settings.theme = this.settings.theme === 'dark' ? 'light' : 'dark';
      this.saveSettings();
      this.applyTheme();
    });

    this.dom.levelSelect.addEventListener('change', (event) => {
      this.settings.level = event.target.value;
      this.saveSettings();
      this.refreshQuestions();
    });

    this.dom.modeSelect.addEventListener('change', (event) => {
      this.settings.mode = event.target.value;
      this.saveSettings();
      this.syncControls();
    });

    this.dom.fontSize.addEventListener('change', (event) => {
      this.settings.fontSize = event.target.value;
      this.saveSettings();
      this.applyFontSize();
    });

    this.dom.furiganaToggle.addEventListener('change', (event) => {
      this.settings.furigana = event.target.value;
      this.saveSettings();
      this.applyFurigana();
    });

    this.dom.sectionSelect.addEventListener('change', (event) => {
      this.settings.section = event.target.value;
      this.saveSettings();
      this.refreshQuestions();
    });

    this.dom.startBtn.addEventListener('click', () => this.startPractice());
    this.dom.resetBtn.addEventListener('click', () => this.resetTest());
    this.dom.guideBtn.addEventListener('click', () => {
      const isGuide = this.isGuidedMode();
      this.setStatus(isGuide ? 'Panduan aktif: baca pertanyaan dulu, lalu cari kata sambung seperti しかし/つまり.' : 'Panduan non-aktif.', isGuide ? 'success' : '');
    });
    this.dom.prevBtn.addEventListener('click', () => this.prevQuestion());
    this.dom.nextBtn.addEventListener('click', () => this.nextQuestion());
    this.dom.finishBtn.addEventListener('click', () => this.finishTest());
  }

  render() {
    this.syncControls();
    this.updateTimerDisplay();
    this.renderAnswerSheet();
    this.renderQuestion();
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('questionRenderer')) {
      window.__JLPT_ENGINE__ = new JLPTEngine();
    }
  });
} else if (document.getElementById('questionRenderer')) {
  window.__JLPT_ENGINE__ = new JLPTEngine();
}

export { N5_BANK, JLPTEngine };
