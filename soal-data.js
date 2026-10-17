/* Original mini JLPT practice questions. Extend only N5/N4 in this release.
   TODO: Add N3/N2/N1 data only when those levels are explicitly in scope. */
const jlptQuestionBank = {
    N5: {
        durationMinutes: 90,
        passTotal: 80,
        groups: [
            { id: 'n5-vocab-reading', section: 'language', title: '文字・語彙 · 問題1 漢字読み', type: 'Kanji reading', tip: 'Perhatikan bagian kata yang ditulis dengan kanji, lalu cocokkan bacaannya dengan konteks.', questions: [
                { id: 'n5-vr-1', prompt: '毎朝、学校へ行きます。 「学校」の読み方はどれですか。', choices: ['がっこう', 'がこう', 'がっこ', 'かっこう'], answer: 0, explain: '学校 dibaca がっこう. っ menandai konsonan rangkap.', hint: 'Kata ini berarti tempat untuk belajar.', vocabSource: 'がっこう' },
                { id: 'n5-vr-2', prompt: '水を飲みます。 「水」の読み方はどれですか。', choices: ['みず', 'みつ', 'すい', 'みづ'], answer: 0, explain: '水 dibaca みず dalam kata ini.', hint: 'Benda yang diminum saat haus.', vocabSource: 'みず' },
                { id: 'n5-vr-3', prompt: '山の上は寒いです。 「山」の読み方はどれですか。', choices: ['やま', 'かわ', 'しま', 'そら'], answer: 0, explain: '山 dibaca やま, artinya gunung.', hint: 'Tempat tinggi yang bisa didaki.' }
            ]},
            { id: 'n5-vocab-writing', section: 'language', title: '文字・語彙 · 問題2 表記', type: 'Kanji writing', tip: 'Ubah kata yang ditulis dengan kana ke kanji yang memiliki arti sama.', questions: [
                { id: 'n5-vw-1', prompt: '「きょうは あめです。」の「あめ」を表す漢字はどれですか。', choices: ['雨', '雪', '雲', '風'], answer: 0, explain: 'あめ (hujan) ditulis 雨.', hint: 'Cuaca yang membuat payung diperlukan.' },
                { id: 'n5-vw-2', prompt: '「ともだちと はなします。」の「ともだち」はどれですか。', choices: ['友達', '先生', '学生', '家族'], answer: 0, explain: 'ともだち berarti teman dan ditulis 友達.', hint: 'Orang yang akrab denganmu.' },
                { id: 'n5-vw-3', prompt: '「まいにち ほんを よみます。」の「ほん」はどれですか。', choices: ['本', '木', '休', '体'], answer: 0, explain: 'ほん (buku) ditulis 本.', hint: 'Benda yang dibaca.' , vocabSource: 'ほん' }
            ]},
            { id: 'n5-vocab-context', section: 'language', title: '文字・語彙 · 問題3 文脈規定', type: 'Context vocabulary', tip: 'Baca seluruh kalimat; pilih kata yang paling alami untuk melengkapi situasi.', questions: [
                { id: 'n5-vc-1', prompt: 'のどがかわきましたから、＿＿を飲みます。', choices: ['水', '本', '靴', '駅'], answer: 0, explain: 'Saat haus, kita minum air: 水を飲みます。', hint: 'Cari benda yang biasa diminum.', vocabSource: 'みず' },
                { id: 'n5-vc-2', prompt: '毎朝、七時に＿＿ます。それから朝ごはんを食べます。', choices: ['起き', '寝', '泳ぎ', '買い'], answer: 0, explain: 'Rutinitas pagi: 七時に起きます (bangun pukul tujuh).', hint: 'Kegiatan yang dilakukan setelah tidur.' , vocabSource: 'おきる' },
                { id: 'n5-vc-3', prompt: '本を買いたいです。駅の近くの＿＿へ行きます。', choices: ['本屋', '病院', '学校', '銀行'], answer: 0, explain: '本屋 adalah toko buku.', hint: 'Pilih toko yang menjual buku.' , vocabSource: 'ほんや' }
            ]},
            { id: 'n5-vocab-paraphrase', section: 'language', title: '文字・語彙 · 問題4 言い換え類義', type: 'Paraphrase', tip: 'Cari pilihan yang maknanya paling dekat, bukan sekadar memiliki kanji yang sama.', questions: [
                { id: 'n5-vp-1', prompt: '「この店は大きいです。」の「大きい」と近い意味の言葉はどれですか。', choices: ['広い', '小さい', '高い', '新しい'], answer: 0, explain: 'Dalam konteks ukuran tempat, 広い (luas) paling dekat dengan 大きい.', hint: 'Pikirkan ukuran ruang toko.' },
                { id: 'n5-vp-2', prompt: '「母は毎日料理をします。」の「料理をします」と同じ意味に近いものはどれですか。', choices: ['ごはんを作ります', 'ごはんを食べます', '店へ行きます', '本を読みます'], answer: 0, explain: '料理をする berarti memasak / membuat makanan.', hint: 'Apa yang dilakukan sebelum makanan dimakan?' },
                { id: 'n5-vp-3', prompt: '「私は歩いて学校へ行きます。」の「歩いて」と同じ意味に近いものはどれですか。', choices: ['足で行って', '車で行って', '電車で行って', '泳いで'], answer: 0, explain: '歩いて berarti dengan berjalan kaki.', hint: 'Gunakan kaki, bukan kendaraan.' }
            ]},
            { id: 'n5-grammar-form', section: 'language', title: '文法 · 文法形式の判断', type: 'Grammar form', tip: 'Tentukan fungsi partikel atau bentuk kata kerja dari hubungan antarkata.', questions: [
                { id: 'n5-gf-1', prompt: 'わたしは毎朝六時＿＿起きます。', choices: ['に', 'を', 'で', 'へ'], answer: 0, explain: 'に menandai waktu tertentu: 六時に起きます。', hint: 'Pilih partikel untuk waktu spesifik. Bab 4/8.' },
                { id: 'n5-gf-2', prompt: '日曜日は学校へ＿＿。', choices: ['行きません', '行きませんでしたか', '行くないです', '行きないです'], answer: 0, explain: 'Bentuk negatif sopan dari 行きます adalah 行きません. Bab 5.', hint: 'Negatif sopan verba ます: hilangkan ます, lalu ません.' },
                { id: 'n5-gf-3', prompt: 'これはわたし＿＿本です。', choices: ['の', 'に', 'を', 'が'], answer: 0, explain: 'の menghubungkan kepemilikan: わたしの本. Bab 1/6.', hint: 'Partikel yang menyatakan kepemilikan.' }
            ]},
            { id: 'n5-grammar-order', section: 'language', title: '文法 · 文の組み立て', type: 'Sentence composition', tip: 'Susun potongan menurut pola Jepang: topik, keterangan, objek, lalu predikat.', questions: [
                { id: 'n5-go-1', prompt: 'Susun potongan menjadi kalimat alami: ①を ②わたしは ③飲みます ④水', choices: ['②④①③', '④②①③', '②①④③', '④①③②'], answer: 0, explain: 'わたしは 水を 飲みます。Urutannya topik + objek + predikat.', hint: 'Predikat verba biasanya berada di akhir.' },
                { id: 'n5-go-2', prompt: 'Susun potongan: ①です ②学生 ③田中さん ④は', choices: ['③④②①', '④③②①', '③②④①', '②③④①'], answer: 0, explain: '田中さんは学生です。Topik + は + nomina + です.', hint: 'Topik + は + keterangan + です.' },
                { id: 'n5-go-3', prompt: 'Susun potongan: ①へ ②行きます ③明日 ④学校', choices: ['③④①②', '④③①②', '③①④②', '④①②③'], answer: 0, explain: '明日学校へ行きます。Keterangan waktu dapat mendahului tempat tujuan.', hint: 'へ mengikuti tujuan, 行きます di akhir.' }
            ]},
            { id: 'n5-grammar-text', section: 'language', title: '文法 · 文章の文法', type: 'Text grammar', tip: 'Perhatikan hubungan antar kalimat, misalnya alasan, urutan waktu, atau kata penghubung.', questions: [
                { id: 'n5-gt-1', prompt: 'きのうは雨でした。＿＿、うちで本を読みました。', choices: ['ですから', 'しかし', 'それから', 'でも'], answer: 0, explain: 'Hujan menjadi alasan membaca di rumah; ですから menyatakan akibat.', hint: 'Hubungan yang dicari adalah sebab-akibat.' },
                { id: 'n5-gt-2', prompt: '朝ごはんを食べました。＿＿、学校へ行きました。', choices: ['それから', 'でも', 'なぜ', 'けれど'], answer: 0, explain: 'それから menghubungkan dua kegiatan berurutan.', hint: 'Kegiatan kedua terjadi sesudah yang pertama.' },
                { id: 'n5-gt-3', prompt: 'このかばんは安いです。＿＿、とてもじょうぶです。', choices: ['そして', 'だから', 'でも', 'それでは'], answer: 0, explain: 'そして menambahkan informasi yang sejalan.', hint: 'Informasi kedua melengkapi informasi pertama.' }
            ]},
            { id: 'n5-reading-short', section: 'language', title: '読解 · 短文', type: 'Short reading', tip: 'Baca pertanyaan terlebih dahulu, lalu cari informasi yang langsung menjawabnya.', questions: [
                { id: 'n5-rs-1', passage: 'わたしは毎朝六時に起きます。七時に朝ごはんを食べて、七時半に家を出ます。', prompt: 'この人は何時に家を出ますか。', choices: ['六時', '七時', '七時半', '八時'], answer: 2, explain: 'Teks menyebut 七時半に家を出ます。', hint: 'Cari frasa 家を出ます。' },
                { id: 'n5-rs-2', passage: 'きょうは日曜日です。午前は母と買い物をしました。午後は友だちの家で映画を見ます。', prompt: '午後、何をしますか。', choices: ['買い物をします', '映画を見ます', '学校へ行きます', '母と料理します'], answer: 1, explain: 'Pada sore hari, penulis menonton film di rumah teman.', hint: 'Temukan kalimat yang diawali 午後.' },
                { id: 'n5-rs-3', passage: '図書館は月曜日から金曜日まで、午前九時から午後六時までです。土曜日と日曜日は休みです。', prompt: '図書館は日曜日に開いていますか。', choices: ['はい、午前中だけです', 'はい、午後だけです', 'いいえ、休みです', 'いいえ、月曜日です'], answer: 2, explain: 'Akhir pekan, termasuk hari Minggu, tutup.', hint: 'Periksa keterangan 土曜日と日曜日.' }
            ]},
            { id: 'n5-reading-medium', section: 'language', title: '読解 · 中文', type: 'Medium reading', tip: 'Tangkap tujuan dan urutan peristiwa; kata sambung seperti しかし/それから mengubah arah informasi.', questions: [
                { id: 'n5-rm-1', passage: 'ゆきさんは土曜日に友だちと海へ行く予定でした。しかし、朝から雨が降りました。二人は駅で会って、駅の近くの喫茶店で昼ごはんを食べました。それから、本屋で本を買って、午後三時に家へ帰りました。', prompt: 'ゆきさんたちは、どうして海へ行きませんでしたか。', choices: ['友だちが来なかったから', '朝から雨だったから', '本を忘れたから', '店が休みだったから'], answer: 1, explain: 'しかしの後に、朝から雨だったことが予定変更の理由として示されています。', hint: 'Cari alasan setelah しかし.' },
                { id: 'n5-rm-2', passage: 'わたしの兄は大学生です。毎朝自転車で大学へ行きます。大学は家から少し遠いですが、兄は歩くより自転車のほうが好きです。雨の日はバスに乗ります。', prompt: '雨の日、兄は何で大学へ行きますか。', choices: ['歩いて', '自転車で', 'バスで', '電車で'], answer: 2, explain: 'Teks secara langsung mengatakan 雨の日はバスに乗ります。', hint: 'Cari kata 雨の日.' },
                { id: 'n5-rm-3', passage: 'あしたは父の誕生日です。わたしはケーキを作りたいですが、料理はまだ上手ではありません。母に作り方を教えてもらいます。父が帰る前に、妹と部屋を掃除します。', prompt: '父が帰る前に、だれと何をしますか。', choices: ['母とケーキを食べます', '妹と部屋を掃除します', '一人で買い物をします', '妹に料理を教えます'], answer: 1, explain: '帰る前に妹と部屋を掃除するとあります.', hint: 'Cari frasa 父が帰る前に.' }
            ]},
            { id: 'n5-reading-search', section: 'language', title: '読解 · 情報検索', type: 'Information search', tip: 'Cocokkan syarat pada pertanyaan (hari, jam, harga) langsung dengan tabel/jadwal.', questions: [
                { id: 'n5-ri-1', passage: '【日本語クラス】月・水・金 18:00–19:00 / 火・木 17:00–18:00 / 土・日 休み', prompt: '木曜日にクラスへ行く人は、何時に始まるクラスに行きますか。', choices: ['17時', '18時', '19時', '休み'], answer: 0, explain: '木曜日の枠は17:00開始です。', hint: '木曜日の行を探しましょう.' },
                { id: 'n5-ri-2', passage: '【パン屋】食パン 200円 / あんパン 130円 / ケーキ 350円。火曜日は全品10%引き。', prompt: '火曜日にあんパンを買います。いくらですか。', choices: ['100円', '117円', '130円', '180円'], answer: 1, explain: '130円の10%引きは117円です。', hint: '130円から13円引きます.' },
                { id: 'n5-ri-3', passage: '【市民プール】平日 10:00–20:00 / 土曜日 9:00–18:00 / 日曜日 休み。入場料：大人500円、子ども200円。', prompt: '日曜日の午後、大人はプールに入れますか。', choices: ['はい、500円です', 'はい、200円です', 'いいえ、休みです', 'いいえ、午前だけです'], answer: 2, explain: '市民プールは日曜日が休みです。', hint: 'Pertama cocokkan harinya.' }
            ]},
            { id: 'n5-listening-task', section: 'listening', title: '聴解 · 課題理解', type: 'Task comprehension', tip: 'Dengarkan tujuan atau permintaan utama, bukan semua detail kecil.', questions: [
                { id: 'n5-lt-1', audioText: 'すみません、窓を開けてください。', prompt: '男の人は何をしてくださいと言っていますか。', choices: ['窓を開ける', '窓を閉める', '電気を消す', 'ドアを開ける'], answer: 0, explain: 'Permintaannya adalah membuka jendela.', hint: 'Dengarkan kata kerja setelah 窓を.' },
                { id: 'n5-lt-2', audioText: '駅で友だちに会います。', prompt: '女の人はどこへ行きますか。', choices: ['学校', '駅', '銀行', '店'], answer: 1, explain: 'Ia akan menemui teman di stasiun.', hint: 'Tangkap lokasi yang disebut.' },
                { id: 'n5-lt-3', audioText: '牛乳を二本と、りんごを三つ買ってください。', prompt: '何を買いますか。', choices: ['牛乳二本とりんご三つ', '牛乳三本とりんご二つ', '水二本とりんご三つ', '牛乳二本とみかん三つ'], answer: 0, explain: 'Instruksi menyebut dua botol susu dan tiga apel.', hint: 'Dengarkan benda dan jumlahnya.' }
            ]},
            { id: 'n5-listening-point', section: 'listening', title: '聴解 · ポイント理解', type: 'Key point', tip: 'Fokus pada informasi yang ditanyakan—terutama angka, waktu, tempat, atau perubahan rencana.', questions: [
                { id: 'n5-lp-1', audioText: 'バスは三時十五分に出ます。', prompt: 'バスは何時に出ますか。', choices: ['三時', '三時十五分', '三時五十分', '四時十五分'], answer: 1, explain: 'Keberangkatan bus pukul 3.15.', hint: 'Perhatikan menit setelah jam.' },
                { id: 'n5-lp-2', audioText: 'きょうは寒いですから、コートを着ます。', prompt: '女の人は何を着ますか。', choices: ['シャツ', 'コート', 'ぼうし', 'くつ'], answer: 1, explain: 'Karena dingin, ia memakai mantel.', hint: 'Dengarkan benda yang dipakai.' },
                { id: 'n5-lp-3', audioText: '田中さんは月曜日ではなく、火曜日に来ます。', prompt: '田中さんはいつ来ますか。', choices: ['月曜日', '火曜日', '水曜日', '日曜日'], answer: 1, explain: 'ではなく membetulkan hari: datang hari Selasa.', hint: 'Hari setelah ではなく adalah jawaban.' }
            ]},
            { id: 'n5-listening-expression', section: 'listening', title: '聴解 · 発話表現', type: 'Utterance expression', tip: 'Bayangkan situasinya dan pilih ungkapan sopan yang sesuai dengan lawan bicara.', questions: [
                { id: 'n5-le-1', audioText: '店で店員に聞きます。', prompt: '店で、トイレの場所を聞きたいです。何と言いますか。', choices: ['トイレはどこですか', 'トイレへ行きました', 'トイレが好きです', 'トイレを食べます'], answer: 0, explain: 'どこですか adalah cara bertanya lokasi dengan sopan.', hint: 'Cari kalimat tanya lokasi.' },
                { id: 'n5-le-2', audioText: '友だちに本を借りました。', prompt: '本を借りたあと、何と言いますか。', choices: ['ありがとうございます', 'いただきます', 'おやすみなさい', 'いってきます'], answer: 0, explain: 'Ucapkan terima kasih setelah menerima pinjaman.', hint: 'Pilih ucapan terima kasih.' },
                { id: 'n5-le-3', audioText: '朝、学校で先生に会いました。', prompt: '朝、先生に会ったとき、何と言いますか。', choices: ['おはようございます', 'こんばんは', 'おやすみなさい', 'さようなら'], answer: 0, explain: 'Pagi hari, salam yang tepat adalah おはようございます.', hint: 'Pilih salam pagi yang sopan.' }
            ]},
            { id: 'n5-listening-response', section: 'listening', title: '聴解 · 即時応答', type: 'Quick response', tip: 'Dengarkan fungsi kalimat (ajakan, tawaran, pertanyaan) lalu jawab dengan respons yang wajar.', questions: [
                { id: 'n5-lr-1', audioText: 'いっしょに昼ごはんを食べませんか。', prompt: '誘いへの自然な返事はどれですか。', choices: ['ええ、食べましょう', 'いいえ、食べました', '昼ごはんは三時です', 'ごちそうさまでした'], answer: 0, explain: 'Ajakan dapat diterima dengan 食べましょう.', hint: 'Pilih respons menerima ajakan.' },
                { id: 'n5-lr-2', audioText: 'これはだれのかばんですか。', prompt: '質問への自然な返事はどれですか。', choices: ['わたしのです', '駅にあります', '三つあります', 'きのうです'], answer: 0, explain: 'Pertanyaan だれの menanyakan pemilik; jawab わたしのです.', hint: 'Jawab tentang kepemilikan.' },
                { id: 'n5-lr-3', audioText: '窓を閉めてもいいですか。', prompt: '許可を求める質問への自然な返事はどれですか。', choices: ['はい、いいですよ', '窓は大きいです', 'いいえ、閉めました', 'どういたしまして'], answer: 0, explain: 'いいですよ memberi izin.', hint: 'Pilih jawaban yang mengizinkan.' }
            ]}
        ]
    },
    N4: {
        durationMinutes: 115,
        passTotal: 90,
        groups: [
            { id: 'n4-vocab-reading', section: 'language', title: '文字・語彙 · 問題1 漢字読み', type: 'Kanji reading', tip: 'Periksa gabungan kanjinya; bacaan majemuk dapat berubah dari bacaan tiap kanji.', questions: [
                { id: 'n4-vr-1', prompt: 'この町は店が多くて便利です。 「町」の読み方はどれですか。', choices: ['まち', 'むら', 'みち', 'まど'], answer: 0, explain: '町 dibaca まち, artinya kota kecil/daerah.', hint: 'Tempat yang memiliki banyak toko.', vocabSource: 'まち' },
                { id: 'n4-vr-2', prompt: '来週、旅行に行きます。 「旅行」の読み方はどれですか。', choices: ['りょこう', 'りょうこ', 'りゅこう', 'りょこ'], answer: 0, explain: '旅行 dibaca りょこう.', hint: 'Kegiatan pergi berwisata.' },
                { id: 'n4-vr-3', prompt: '駅の前で友人を待っています。 「前」の読み方はどれですか。', choices: ['まえ', 'あと', 'なか', 'うえ'], answer: 0, explain: '前 dibaca まえ, berarti depan/sebelum.', hint: 'Lawan dari 後ろ.' }
            ]},
            { id: 'n4-vocab-writing', section: 'language', title: '文字・語彙 · 問題2 表記', type: 'Kanji writing', tip: 'Perhatikan makna kata dalam kalimat agar tidak tertukar dengan homofon.', questions: [
                { id: 'n4-vw-1', prompt: '「らいしゅう、りょこうします。」の「らいしゅう」はどれですか。', choices: ['来週', '先週', '毎週', '今週'], answer: 0, explain: 'らいしゅう berarti minggu depan: 来週.', hint: 'Periode sesudah minggu ini.' },
                { id: 'n4-vw-2', prompt: '「へやを そうじしました。」の「そうじ」はどれですか。', choices: ['掃除', '料理', '洗濯', '買物'], answer: 0, explain: 'そうじ ditulis 掃除, artinya bersih-bersih.', hint: 'Kegiatan merapikan dan membersihkan kamar.', vocabSource: 'そうじする' },
                { id: 'n4-vw-3', prompt: '「この道は あぶないです。」の「あぶない」はどれですか。', choices: ['危ない', '安全', '静か', '不便'], answer: 0, explain: 'あぶない berarti berbahaya: 危ない.', hint: 'Pilih kata yang berarti berbahaya.' }
            ]},
            { id: 'n4-vocab-context', section: 'language', title: '文字・語彙 · 問題3 文脈規定', type: 'Context vocabulary', tip: 'Gunakan petunjuk sebab-akibat dan kolokasi; kata yang benar harus cocok dengan seluruh situasi.', questions: [
                { id: 'n4-vc-1', prompt: '電車にかさを＿＿しまいました。駅に電話して聞いてみます。', choices: ['忘れて', '決めて', '直して', '始めて'], answer: 0, explain: 'Barang tertinggal di kereta: かさを忘れてしまいました。', hint: 'Sesuatu tidak terbawa saat turun.' },
                { id: 'n4-vc-2', prompt: '熱があるので、今日は会社を＿＿ことにしました。', choices: ['休む', '集める', '運ぶ', '続ける'], answer: 0, explain: 'Karena demam, ia memutuskan tidak masuk kerja.', hint: 'Pilih tindakan yang wajar ketika sakit.', vocabSource: 'やすむ' },
                { id: 'n4-vc-3', prompt: 'この説明は少し難しいですが、先生の話を聞いて＿＿できました。', choices: ['理解', '連絡', '運転', '用意'], answer: 0, explain: 'Penjelasan menjadi dapat dipahami: 理解できました.', hint: 'Pilih kata yang berarti memahami.' }
            ]},
            { id: 'n4-vocab-paraphrase', section: 'language', title: '文字・語彙 · 問題4 言い換え類義', type: 'Paraphrase', tip: 'Bandingkan nuansa makna pada konteks kalimat, bukan hanya terjemahan kata per kata.', questions: [
                { id: 'n4-vp-1', prompt: '「この問題は簡単です。」の「簡単」と近い意味の言葉はどれですか。', choices: ['やさしい', '危ない', '必要な', '特別な'], answer: 0, explain: '簡単 berarti mudah; やさしい memiliki makna dekat dalam konteks soal.', hint: 'Lawan maknanya adalah 難しい.' },
                { id: 'n4-vp-2', prompt: '「電車が遅れています。」の「遅れています」と同じ意味に近いものはどれですか。', choices: ['予定よりあとになっています', '予定より早く来ています', 'もう出発しました', '運転していません'], answer: 0, explain: '遅れる berarti terlambat dari jadwal.', hint: 'Bandingkan waktu aktual dengan jadwal.' },
                { id: 'n4-vp-3', prompt: '「この町は静かです。」の「静か」と反対の意味に近いものはどれですか。', choices: ['にぎやか', '便利', '安全', '親切'], answer: 0, explain: 'にぎやか (ramai) adalah lawan makna 静か (tenang).', hint: 'Cari suasana yang ramai.' }
            ]},
            { id: 'n4-vocab-usage', section: 'language', title: '文字・語彙 · 問題5 用法', type: 'Word usage', tip: 'Pilih kalimat yang menggunakan kata dengan pasangan dan konteks yang alami.', questions: [
                { id: 'n4-vu-1', prompt: '「間に合う」の使い方が正しい文はどれですか。', choices: ['急げば、電車に間に合います。', '毎日、友だちに間に合います。', '水を間に合って飲みます。', 'この本は間に合うです。'], answer: 0, explain: '間に合う digunakan untuk sempat/tidak terlambat pada waktu atau jadwal.', hint: 'Kata ini sering dipasangkan dengan jadwal atau kereta.' },
                { id: 'n4-vu-2', prompt: '「連絡する」の使い方が正しい文はどれですか。', choices: ['着いたら、電話で連絡してください。', '連絡を食べてから出かけます。', 'この部屋は連絡です。', '毎朝、駅を連絡します。'], answer: 0, explain: '連絡する berarti menghubungi; telepon adalah cara yang wajar.', hint: 'Pilih penggunaan yang berhubungan dengan komunikasi.' },
                { id: 'n4-vu-3', prompt: '「必要」の使い方が正しい文はどれですか。', choices: ['申し込みには身分証明書が必要です。', '必要を駅で買いました。', 'この魚は必要に泳ぎます。', '毎日必要を聞きます。'], answer: 0, explain: '必要です menyatakan sesuatu diperlukan.', hint: 'Cari benda yang wajib dibawa/dipakai.' }
            ]},
            { id: 'n4-grammar-form', section: 'language', title: '文法 · 文法形式の判断', type: 'Grammar form', tip: 'Tentukan bentuk yang cocok dengan waktu, alasan, dan tingkat kesopanan pada kalimat.', questions: [
                { id: 'n4-gf-1', prompt: '日本へ行く＿＿、日本語を勉強しています。', choices: ['ために', 'そうに', 'ながらで', 'しかに'], answer: 0, explain: 'ために menyatakan tujuan: belajar bahasa Jepang demi pergi ke Jepang.', hint: 'Pola tujuan: V bentuk kamus + ために.' },
                { id: 'n4-gf-2', prompt: '窓が開いて＿＿から、寒いです。', choices: ['いる', 'ある', 'おく', 'みる'], answer: 0, explain: '自動詞 開く + ている menyatakan keadaan jendela sedang terbuka.', hint: 'Keadaan hasil dari intransitif memakai ている.' },
                { id: 'n4-gf-3', prompt: '薬を飲んだ＿＿、まだ熱があります。', choices: ['のに', 'ので', 'ため', 'ながら'], answer: 0, explain: 'のに menunjukkan hasil yang berlawanan dengan harapan.', hint: 'Sudah minum obat, tetapi demam masih ada.' }
            ]},
            { id: 'n4-grammar-order', section: 'language', title: '文法 · 文の組み立て', type: 'Sentence composition', tip: 'Cari klausa yang harus muncul sebelum nomina dan pastikan predikat utama ada di akhir.', questions: [
                { id: 'n4-go-1', prompt: 'Susun: ①買った ②きのう ③本を ④読みました', choices: ['②①③④', '①②③④', '②③①④', '③②①④'], answer: 0, explain: 'きのう買った本を読みました。Klausa relatif menerangkan 本.', hint: 'Keterangan waktu mendahului klausa yang menerangkan 本.' },
                { id: 'n4-go-2', prompt: 'Susun: ①から ②雨が ③出かけませんでした ④降っていた', choices: ['②④①③', '④②①③', '②①④③', '①②④③'], answer: 0, explain: '雨が降っていたから、出かけませんでした。Alasan + から + hasil.', hint: 'から menempel setelah alasan.' },
                { id: 'n4-go-3', prompt: 'Susun: ①ことが ②日本語で ③話す ④できます', choices: ['②③①④', '③②①④', '②①③④', '③①②④'], answer: 0, explain: '日本語で話すことができます。Bentuk kamus + ことができます.', hint: 'Pola kemampuan berakhir dengan できます.' }
            ]},
            { id: 'n4-grammar-text', section: 'language', title: '文法 · 文章の文法', type: 'Text grammar', tip: 'Perhatikan apakah kalimat kedua menyatakan alasan, kontras, urutan, atau kesimpulan.', questions: [
                { id: 'n4-gt-1', prompt: 'この店は少し高いです。＿＿、料理がおいしいので、よく来ます。', choices: ['しかし', 'つまり', 'それに', 'それで'], answer: 0, explain: 'Harga mahal berkontras dengan alasan tetap datang; しかし tepat.', hint: 'Kalimat kedua berlawanan dengan dugaan dari kalimat pertama.' },
                { id: 'n4-gt-2', prompt: '駅に着きました。＿＿、友だちに電話しました。', choices: ['それから', 'ところで', 'しかし', 'なぜなら'], answer: 0, explain: 'それから menandai kegiatan berikutnya dalam urutan.', hint: 'Perhatikan urutan dua tindakan.' },
                { id: 'n4-gt-3', prompt: '毎日練習しました。＿＿、大会で一位になりました。', choices: ['その結果', 'ところが', 'それとも', 'たとえば'], answer: 0, explain: 'その結果 merangkum hasil dari latihan.', hint: 'Kalimat kedua adalah hasil latihan.' }
            ]},
            { id: 'n4-reading-short', section: 'language', title: '読解 · 短文', type: 'Short reading', tip: 'Tandai kata kunci pertanyaan, lalu cocokkan dengan kalimat yang memuat informasi itu.', questions: [
                { id: 'n4-rs-1', passage: '山田さんは先月この町に引っ越してきました。会社まで電車で三十分かかります。駅から会社までは歩いて十分です。', prompt: '山田さんは駅から会社まで何で行きますか。', choices: ['電車で', 'バスで', '歩いて', '自転車で'], answer: 2, explain: '駅から会社までは歩いて十分です。', hint: 'Cari informasi setelah 駅から.' },
                { id: 'n4-rs-2', passage: '今日は図書館で勉強するつもりでしたが、休館日でした。それで、駅前の喫茶店でレポートを書きました。', prompt: 'どうして喫茶店へ行きましたか。', choices: ['図書館が休みだったから', '友だちに会うため', '本を借りるため', '駅へ行きたかったから'], answer: 0, explain: '図書館が休館日だったため、喫茶店で勉強しました.', hint: 'それでの前に理由があります.' },
                { id: 'n4-rs-3', passage: 'この薬は、一日に三回、食事のあとで飲んでください。飲んだあと、車を運転しないでください。', prompt: '薬を飲んだあと、してはいけないことは何ですか。', choices: ['食事をすること', '水を飲むこと', '車を運転すること', '薬を買うこと'], answer: 2, explain: 'Instruksi melarang mengemudi setelah minum obat.', hint: 'Cari bentuk ないでください.' }
            ]},
            { id: 'n4-reading-medium', section: 'language', title: '読解 · 中文', type: 'Medium reading', tip: 'Baca pertanyaan dulu; kata sambung seperti しかし, つまり, そのため menunjukkan kontras atau kesimpulan.', questions: [
                { id: 'n4-rm-1', passage: '先週、家族で新しいレストランへ行きました。駅から近くて便利ですが、夕方はとても混んでいました。予約をしなかったので、三十分ほど待ちました。しかし、料理は安くておいしかったです。次に行くときは、電話で予約してから行こうと思います。', prompt: '次に行くとき、何をするつもりですか。', choices: ['別の店を探す', '電話で予約する', '駅で三十分待つ', '夕方に行く'], answer: 1, explain: '最後に、次回は電話で予約してから行くと述べています.', hint: 'Cari rencana di kalimat terakhir.' },
                { id: 'n4-rm-2', passage: 'ミラーさんは日本語を勉強し始めて一年になります。最初は漢字が難しくて、読むのに時間がかかりました。毎日短い記事を読むようにしたところ、少しずつ速く読めるようになりました。今は分からない言葉をノートに書いて、週末に復習しています。', prompt: 'ミラーさんは漢字を読むのが速くなるために、何をしましたか。', choices: ['勉強をやめた', '毎日短い記事を読んだ', '記事を全部暗記した', '週末だけ勉強した'], answer: 1, explain: '毎日短い記事を読むようにしたとあります.', hint: 'Perhatikan tindakan sebelum 少しずつ速く.' },
                { id: 'n4-rm-3', passage: '町の環境をよくするため、来月から毎月第一日曜日に公園を掃除します。参加できる人は、午前九時に公園の入口に集まってください。ごみ袋はこちらで用意しますが、軍手は自分で持ってきてください。雨の場合は、次の週の日曜日に行います。', prompt: '参加する人が自分で持っていくものは何ですか。', choices: ['ごみ袋', '軍手', '掃除道具全部', '食べ物'], answer: 1, explain: 'ごみ袋は主催者が用意し、軍手は自分で持参します.', hint: 'Cari kontras antara 用意します dan 持ってきて.' }
            ]},
            { id: 'n4-reading-search', section: 'language', title: '読解 · 情報検索', type: 'Information search', tip: 'Cocokkan beberapa syarat sekaligus. Jangan memilih jadwal yang hanya memenuhi satu syarat.', questions: [
                { id: 'n4-ri-1', passage: '【市民講座】料理：火曜 18:30–20:00 4,000円 / 写真：土曜 10:00–12:00 3,000円 / 日本語：土曜 13:00–14:30 2,500円。申込締切：各講座の一週間前。', prompt: '土曜日の午前に参加できて、いちばん安い講座はどれですか。', choices: ['料理', '写真', '日本語', '火曜の講座'], answer: 1, explain: '土曜午前は写真講座で、料金は3,000円です。日本語は午後。', hint: 'Gabungkan syarat hari, waktu pagi, dan biaya.' },
                { id: 'n4-ri-2', passage: '【病院の診察時間】月–金 9:00–12:00 / 14:00–18:00。土 9:00–12:00。日・祝日休診。受付は診察終了の30分前まで。', prompt: '金曜日の午後、受付は何時までですか。', choices: ['17:00', '17:30', '18:00', '18:30'], answer: 1, explain: '診察は18:00まで、受付は30分前までなので17:30です。', hint: 'Waktu tutup dikurangi 30 menit.' },
                { id: 'n4-ri-3', passage: '【ホテル】シングル 7,000円（朝食なし） / ツイン 12,000円（朝食付き）。インターネット予約は一部屋500円引き。料金は一部屋一泊です。', prompt: 'インターネットでシングルを一部屋予約すると、いくらですか。', choices: ['6,000円', '6,500円', '7,000円', '11,500円'], answer: 1, explain: '7,000円から500円割引で6,500円です。', hint: 'シングル料金から割引を引きます.' }
            ]},
            { id: 'n4-listening-task', section: 'listening', title: '聴解 · 課題理解', type: 'Task comprehension', tip: 'Dengarkan tindakan yang diminta dan urutannya; kata seperti まず/それから penting.', questions: [
                { id: 'n4-lt-1', audioText: '会議の前に、資料をコピーして、机の上に置いておいてください。', prompt: '会議の前に何をしますか。', choices: ['資料をコピーして机に置く', '机を運んで資料を読む', '会議のあとでコピーする', '資料を家へ持って帰る'], answer: 0, explain: 'Sebelum rapat, fotokopi materi lalu letakkan di meja.', hint: 'Perhatikan dua tindakan sebelum 会議.' },
                { id: 'n4-lt-2', audioText: '駅に着いたら、改札口の前で待っていてください。', prompt: 'どこで待ちますか。', choices: ['駅のホーム', '改札口の前', '駅の外の店', 'バス停'], answer: 1, explain: 'Tempat menunggu adalah di depan gerbang tiket.', hint: 'Tangkap lokasi setelah 前で.' },
                { id: 'n4-lt-3', audioText: 'この荷物を受付に持って行ってから、会議室に来てください。', prompt: '会議室へ行く前に何をしますか。', choices: ['荷物を受付に持って行く', '受付で会議をする', '荷物を家に置く', '会議室を掃除する'], answer: 0, explain: '持って行ってから menunjukkan urutan: serahkan barang dahulu.', hint: 'Dengarkan tindakan sebelum から.' }
            ]},
            { id: 'n4-listening-point', section: 'listening', title: '聴解 · ポイント理解', type: 'Key point', tip: 'Catat poin yang secara khusus ditanyakan dan abaikan detail yang tidak menjawabnya.', questions: [
                { id: 'n4-lp-1', audioText: '会議は二時からの予定でしたが、準備が早く終わったので、一時半に始めます。', prompt: '会議は何時に始まりますか。', choices: ['一時', '一時半', '二時', '二時半'], answer: 1, explain: 'Jadwal berubah dari pukul dua menjadi pukul setengah dua.', hint: 'Perhatikan perubahan setelah が.' },
                { id: 'n4-lp-2', audioText: '姉は料理が好きで、週末によくケーキを作ります。私は食べるのが好きです。', prompt: 'ケーキを作るのはだれですか。', choices: ['話している人', '姉', '母', '友だち'], answer: 1, explain: '姉が週末によくケーキを作ります。', hint: 'Bedakan 姉 dan 私.' },
                { id: 'n4-lp-3', audioText: 'この電車は新宿に止まりません。次の駅で各駅停車に乗り換えてください。', prompt: '新宿へ行くにはどうしますか。', choices: ['この電車に乗り続ける', '次の駅で乗り換える', '新宿で降りて待つ', 'バスに乗る'], answer: 1, explain: 'Kereta ini tidak berhenti di Shinjuku; ganti kereta di stasiun berikutnya.', hint: 'Tangkap instruksi setelah ません.' }
            ]},
            { id: 'n4-listening-expression', section: 'listening', title: '聴解 · 発話表現', type: 'Utterance expression', tip: 'Sesuaikan ungkapan dengan relasi dan situasi; gunakan bentuk sopan untuk permintaan kepada orang lain.', questions: [
                { id: 'n4-le-1', audioText: '仕事を手伝ってくれた同僚に、お礼を言います。', prompt: '同僚に何と言いますか。', choices: ['手伝ってくれて、ありがとう', '手伝ってもいいですか', '手伝わないでください', '手伝うつもりです'], answer: 0, explain: 'Ungkapan terima kasih atas bantuan adalah 手伝ってくれて、ありがとう.', hint: 'Pilih ucapan terima kasih atas tindakan lampau.' },
                { id: 'n4-le-2', audioText: '図書館で、隣の人に静かにしてほしいです。', prompt: '隣の人に何と言いますか。', choices: ['すみません、少し静かにしていただけませんか', '大きな声で話してください', 'ここで本を借りたいです', '静かな本を読みます'], answer: 0, explain: 'Permintaan sopan dapat memakai していただけませんか.', hint: 'Gunakan permintaan halus dan sopan.' },
                { id: 'n4-le-3', audioText: '友だちの家に招待されました。帰るときにお礼を言います。', prompt: '帰るとき、何と言うのが自然ですか。', choices: ['今日はありがとうございました', 'いってらっしゃい', 'お先にどうぞ', 'いただきます'], answer: 0, explain: 'Setelah dijamu, ucapkan terima kasih atas hari tersebut.', hint: 'Pilih ungkapan terima kasih sebelum pulang.' }
            ]},
            { id: 'n4-listening-response', section: 'listening', title: '聴解 · 即時応答', type: 'Quick response', tip: 'Jawab inti pertanyaan atau berikan respons langsung yang sesuai, tanpa mengulang informasi.', questions: [
                { id: 'n4-lr-1', audioText: 'すみません、この漢字の読み方を教えていただけませんか。', prompt: '依頼への自然な返事はどれですか。', choices: ['ええ、いいですよ', '漢字は難しいです', '昨日読みました', '図書館へ行きます'], answer: 0, explain: 'いいですよ menerima permintaan bantuan.', hint: 'Pilih respons bersedia membantu.' },
                { id: 'n4-lr-2', audioText: 'どうして昨日の会議に来なかったんですか。', prompt: '理由を答える自然な返事はどれですか。', choices: ['熱があって、休んでいたんです', '会議は三時からです', 'はい、来ました', '駅の近くです'], answer: 0, explain: 'Pertanyaan どうして meminta alasan; demam adalah jawaban yang sesuai.', hint: 'Jawab dengan alasan.' },
                { id: 'n4-lr-3', audioText: 'この資料、あとで見てもらえますか。', prompt: '依頼への自然な返事はどれですか。', choices: ['はい、あとで確認します', '資料は机の上ですか', 'もう見ませんでした', 'あとで雨が降ります'], answer: 0, explain: '確認します menerima permintaan untuk memeriksa nanti.', hint: 'Pilih jawaban yang menyanggupi.' }
            ]}
        ]
    }
};

const additionalPracticeQuestions = {
    N5: {
        'n5-vocab-reading': [
            ['n5-vr-4', '毎晩、家で本を読みます。 「家」の読み方はどれですか。', ['いえ', 'やま', 'みせ', 'へや'], 0, '家 dibaca いえ dalam kalimat ini.', 'Tempat tinggal seseorang.'],
            ['n5-vr-5', '父は車で会社へ行きます。 「車」の読み方はどれですか。', ['くるま', 'でんしゃ', 'じてんしゃ', 'ひこうき'], 0, '車 dibaca くるま, artinya mobil.', 'Kendaraan beroda empat.']
        ],
        'n5-vocab-writing': [
            ['n5-vw-4', '「あした、ともだちに あいます。」の「あした」はどれですか。', ['明日', '昨日', '毎日', '今'], 0, 'あした ditulis 明日.', 'Hari setelah hari ini.'],
            ['n5-vw-5', '「やまださんは がくせいです。」の「がくせい」はどれですか。', ['学生', '先生', '会社', '学校'], 0, 'がくせい ditulis 学生.', 'Orang yang belajar di sekolah atau universitas.']
        ],
        'n5-vocab-context': [
            ['n5-vc-4', 'この店でパンを＿＿。', ['買います', '泳ぎます', '寝ます', '聞きます'], 0, 'Di toko, kita membeli roti: パンを買います.', 'Pilih kata kerja untuk bertransaksi.'],
            ['n5-vc-5', 'つかれましたから、少し＿＿。', ['休みます', '走ります', '働きます', '起きます'], 0, 'Karena lelah, beristirahat sebentar adalah pilihan alami.', 'Pilih tindakan yang dilakukan saat lelah.']
        ],
        'n5-vocab-paraphrase': [
            ['n5-vp-4', '「毎晩、十時に寝ます。」の「毎晩」と近い意味はどれですか。', ['毎日の夜', '毎日の朝', '先週の夜', '今週の朝'], 0, '毎晩 berarti setiap malam.', '毎 (setiap) + 晩 (malam).'],
            ['n5-vp-5', '「このかばんは軽いです。」の「軽い」と反対の意味はどれですか。', ['重い', '小さい', '安い', '古い'], 0, '重い (berat) adalah lawan kata 軽い (ringan).', 'Lawan kata sifat untuk bobot ringan.']
        ],
        'n5-grammar-form': [
            ['n5-gf-4', '友だち＿＿映画を見ました。', ['と', 'を', 'へ', 'が'], 0, 'と menandai teman yang melakukan kegiatan bersama.', 'Pilih partikel yang berarti “bersama”. Bab 6.'],
            ['n5-gf-5', '教室に学生が五人＿＿。', ['います', 'あります', 'です', 'します'], 0, 'います digunakan untuk keberadaan makhluk hidup.', 'Subjeknya manusia. Cocokkan dengan pola keberadaan di panduan materi.']
        ],
        'n5-grammar-order': [
            ['n5-go-4', 'Susun: ①で ②ごはんを ③食べます ④レストラン', ['④①②③', '②④①③', '④②①③', '①④③②'], 0, 'レストランでごはんを食べます。Tempat kegiatan + で.', 'で mengikuti tempat berlangsungnya kegiatan.'],
            ['n5-go-5', 'Susun: ①きれい ②この ③です ④花は', ['②④①③', '④②①③', '②①④③', '①②④③'], 0, 'この花はきれいです。Kata tunjuk + nomina + predikat.', 'この harus langsung diikuti nomina.']
        ],
        'n5-grammar-text': [
            ['n5-gt-4', '日本語は少し難しいです。＿＿、毎日勉強しています。', ['でも', 'だから', 'それから', 'それでは'], 0, 'でも menunjukkan kontras antara kesulitan dan tetap belajar.', 'Kalimat kedua berlawanan dengan perkiraan.'],
            ['n5-gt-5', '日曜日に友だちに会います。＿＿、いっしょに昼ごはんを食べます。', ['それから', 'しかし', 'ですから', 'ところで'], 0, 'それから menyambungkan kegiatan berikutnya.', 'Pertemuan terjadi sebelum makan siang.']
        ],
        'n5-reading-short': [
            ['n5-rs-4', 'けんさんは月曜日から金曜日まで会社で働きます。土曜日は休みです。', 'けんさんは土曜日に何をしますか。', ['会社で働きます', '休みます', '学校へ行きます', '友だちに会います'], 1, 'Teks menyatakan bahwa Sabtu adalah hari libur.', 'Cari kalimat yang menyebut 土曜日.'],
            ['n5-rs-5', 'この店は午前十時に開きます。午後八時に閉まります。', '店は何時に閉まりますか。', ['午前十時', '午後十時', '午後八時', '午前八時'], 2, 'Toko tutup pukul delapan malam.', 'Cari kata 閉まります.']
        ],
        'n5-reading-medium': [
            ['n5-rm-4', 'わたしは毎週土曜日に日本語を勉強します。午前中は家で漢字を練習して、午後は図書館へ行きます。図書館では友だちと会話の練習をします。夕方、母と買い物をしてから帰ります。', '午後、どこで何をしますか。', ['家で漢字を練習します', '図書館で会話を練習します', '店で本を買います', '学校で買い物をします'], 1, '午後は図書館で友だちと会話の練習をします.', '時間と場所を含む文を見つけましょう.'],
            ['n5-rm-5', 'あきさんは新しい自転車を買いました。家から駅まで歩くと二十分かかりますが、自転車なら十分です。雨の日は自転車を使わず、バスで駅へ行きます。', '雨の日、あきさんはどうやって駅へ行きますか。', ['歩いて', '自転車で', 'バスで', '電車で'], 2, '雨の日はバスで駅へ行きます.', 'Bandingkan informasi hari hujan dengan hari biasa.']
        ],
        'n5-reading-search': [
            ['n5-ri-4', '【映画館】午前 10:00 / 12:00 / 午後 14:00 / 16:00。学生料金 1,000円、一般 1,800円。火曜日は学生200円引き。', '火曜日の午後、学生が14時の映画を見ると、いくらですか。', ['800円', '1,000円', '1,200円', '1,800円'], 0, '学生料金1,000円から200円引きで800円です。', 'Cocokkan hari, waktu, lalu diskon.'],
            ['n5-ri-5', '【動物園】開園 9:00–17:00（入場は16:00まで）。月曜日休み。大人600円、子ども300円。', '月曜日の午前十時に入れますか。', ['はい、大人600円です', 'はい、子ども300円です', 'いいえ、休みです', 'いいえ、16時です'], 2, 'Kebun binatang tutup setiap hari Senin.', 'Hari yang ditanyakan adalah hari libur.']
        ],
        'n5-listening-task': [
            ['n5-lt-4', 'ノートを開いて、名前を書いてください。', 'まず何をしますか。', ['ノートを開く', '名前を消す', '本を閉じる', '名前を読む'], 0, 'Instruksi menyebut membuka buku catatan terlebih dahulu.', 'Dengarkan tindakan pertama.', 'ノートを開いて、名前を書いてください。'],
            ['n5-lt-5', '帰る前に、教室の電気を消してください。', '帰る前に何をしますか。', ['電気を消す', '窓を開ける', '教室へ来る', '電気をつける'], 0, 'Sebelum pulang, matikan lampu kelas.', 'Tangkap tindakan sebelum pulang.', '帰る前に、教室の電気を消してください。']
        ],
        'n5-listening-point': [
            ['n5-lp-4', 'きょうの午後、三時に郵便局へ行きます。', '何時に郵便局へ行きますか。', ['二時', '三時', '四時', '午後五時'], 1, 'Waktunya pukul tiga sore.', 'Fokus pada jam.'],
            ['n5-lp-5', 'このシャツは千円です。あのシャツは千五百円です。', '安いシャツはいくらですか。', ['500円', '1,000円', '1,500円', '2,000円'], 1, 'Kemeja yang lebih murah harganya seribu yen.', 'Bandingkan kedua harga.']
        ],
        'n5-listening-expression': [
            ['n5-le-4', '友だちが「お誕生日おめでとう」と言いました。', '何と答えますか。', ['ありがとう', 'お帰りなさい', 'いただきます', 'ごめんなさい'], 0, 'Ucapan selamat ulang tahun dijawab dengan terima kasih.', 'Pilih respons untuk ucapan selamat.'],
            ['n5-le-5', '授業が終わって、先生が帰ります。', '先生に何と言いますか。', ['さようなら', 'おはようございます', 'いただきます', 'ただいま'], 0, 'Saat berpisah, ucapkan さようなら.', 'Situasinya adalah berpamitan.']
        ],
        'n5-listening-response': [
            ['n5-lr-4', 'すみません、駅はどこですか。', '質問への自然な返事はどれですか。', ['あそこです', '三時です', '二人です', '本です'], 0, 'Pertanyaan lokasi dijawab dengan lokasi: あそこです.', 'Jawab pertanyaan “di mana?”.'],
            ['n5-lr-5', 'コーヒーを飲みますか。', '質問への自然な返事はどれですか。', ['はい、お願いします', '駅で飲みます', '三本です', 'きのうでした'], 0, 'Tawaran minuman dapat diterima dengan はい、お願いします.', 'Pilih respons menerima tawaran.']
        ]
    },
    N4: {
        'n4-vocab-reading': [
            ['n4-vr-4', '来月、試験を受けます。 「来月」の読み方はどれですか。', ['らいげつ', 'せんげつ', 'こんげつ', 'まいげつ'], 0, '来月 dibaca らいげつ, artinya bulan depan.', 'Bulan setelah bulan ini.'],
            ['n4-vr-5', '毎晩、日記を書いています。 「日記」の読み方はどれですか。', ['にっき', 'にちき', 'ひき', 'にき'], 0, '日記 dibaca にっき.', 'Catatan yang ditulis setiap hari.']
        ],
        'n4-vocab-writing': [
            ['n4-vw-4', '「しごとのあとで、友人に れんらくします。」の「れんらく」はどれですか。', ['連絡', '相談', '説明', '約束'], 0, 'れんらく ditulis 連絡.', 'Kata ini berarti menghubungi atau memberi kabar.'],
            ['n4-vw-5', '「旅行の前に、ホテルを よやくしました。」の「よやく」はどれですか。', ['予約', '用意', '予定', '理由'], 0, 'よやく ditulis 予約.', 'Memesan tempat sebelum perjalanan.']
        ],
        'n4-vocab-context': [
            ['n4-vc-4', '出かける前に、明日のホテルを＿＿しておきました。', ['予約', '運転', '説明', '掃除'], 0, 'Hotel dipesan sebelum pergi: 予約しておきました.', 'Pilih tindakan untuk memastikan tempat menginap.'],
            ['n4-vc-5', '道が分からなくなったので、近くの人に＿＿しました。', ['質問', '出発', '到着', '練習'], 0, 'Saat tidak tahu jalan, bertanya kepada orang sekitar adalah wajar.', 'Pilih kata kerja yang berarti bertanya.']
        ],
        'n4-vocab-paraphrase': [
            ['n4-vp-4', '「この町は交通が便利です。」の「便利」と近い意味はどれですか。', ['使いやすい', '危険が多い', '人が少ない', '値段が高い'], 0, '便利 berarti praktis/mudah digunakan.', 'Pikirkan arti “praktis”.'],
            ['n4-vp-5', '「会議は予定どおりに始まりました。」の「予定どおり」と近い意味はどれですか。', ['決めた時間に', '遅れて', '早く終わって', '別の日に'], 0, '予定どおり berarti sesuai rencana.', 'Bandingkan dengan jadwal yang sudah ditetapkan.']
        ],
        'n4-vocab-usage': [
            ['n4-vu-4', '「間違える」の使い方が正しい文はどれですか。', ['答えを間違えたので、もう一度考えます。', '友だちを間違えて食べました。', '駅に間違えて泳ぎます。', 'この本は間違えます。'], 0, '間違える digunakan untuk membuat kesalahan pada jawaban atau pilihan.', 'Pasangkan kata dengan jawaban.'],
            ['n4-vu-5', '「続ける」の使い方が正しい文はどれですか。', ['毎日練習を続けています。', '続けるを机に置きました。', '電車で続けて食べました。', 'この町は続けるです。'], 0, '練習を続ける berarti meneruskan latihan.', 'Pilih kegiatan yang dapat diteruskan.']
        ],
        'n4-grammar-form': [
            ['n4-gf-4', '音楽を聞き＿＿、宿題をしました。', ['ながら', 'ために', 'そうで', 'ので'], 0, 'ながら menghubungkan dua kegiatan yang dilakukan bersamaan.', 'Dua tindakan berlangsung pada waktu yang sama.'],
            ['n4-gf-5', '明日は雨が降る＿＿です。傘を持って行きます。', ['そう', 'ように', 'ため', 'ながら'], 0, '降りそうです menyatakan dugaan berdasarkan tanda yang terlihat.', 'Pola dugaan: bentuk masu tanpa ます + そうです.']
        ],
        'n4-grammar-order': [
            ['n4-go-4', 'Susun: ①間に合うように ②早く ③家を ④出ました', ['①②③④', '②③④①', '②④③①', '④③②①'], 0, '間に合うように早く家を出ました。Tujuan + keterangan + tindakan.', 'Tujuan dengan ように mendahului tindakan yang direncanakan.'],
            ['n4-go-5', 'Susun: ①雨が降りましたので ②試合は ③中止に ④なりました', ['①②③④', '②①④③', '①②④③', '④①②③'], 0, '雨が降りましたので、試合は中止になりました。Klausa sebab mendahului hasil.', 'Klausa sebab dengan ので mendahului hasil.']
        ],
        'n4-grammar-text': [
            ['n4-gt-4', '時間がなかったので、タクシーに乗りました。＿＿、約束の時間に間に合いました。', ['そのため', 'ところで', 'しかし', 'それとも'], 0, 'そのため memperkenalkan akibat dari naik taksi.', 'Kalimat kedua adalah hasil tindakan sebelumnya.'],
            ['n4-gt-5', 'この機械は古いです。＿＿、まだ問題なく使えます。', ['それでも', 'だから', 'つまり', 'たとえば'], 0, 'それでも menyatakan kontras: meskipun tua, masih berfungsi.', 'Makna kalimat kedua berlawanan dengan dugaan.']
        ],
        'n4-reading-short': [
            ['n4-rs-4', '会議室は二階です。エレベーターを出て、右へ曲がってください。', '会議室はどこにありますか。', ['一階の左', '二階の右', '二階の左', '一階の右'], 1, 'Ruang rapat ada di lantai dua; setelah lift, belok kanan.', 'Gabungkan lantai dan arah.'],
            ['n4-rs-5', '田中さんは先月から新しい会社で働いています。家から会社までバスで四十分かかります。', '田中さんはいつから新しい会社で働いていますか。', ['先月から', '今月から', '去年から', '来月から'], 0, 'Teks menyebut 先月から.', 'Cari keterangan waktu dengan から.']
        ],
        'n4-reading-medium': [
            ['n4-rm-4', '佐藤さんは健康のために、三か月前から毎朝歩いています。初めは十分歩くだけでしたが、今は三十分歩けるようになりました。雨の日は家で体操をします。歩く時間ができてから、よく眠れるようになったそうです。', '雨の日、佐藤さんは何をしますか。', ['三十分歩きます', '家で体操します', '何もしません', '早く寝ます'], 1, '雨の日は家で体操をするとあります.', 'Cari informasi yang mengikuti 雨の日.'],
            ['n4-rm-5', '来週、学校で文化祭があります。クラスでは喫茶店を開くことにしました。準備のため、金曜日の放課後に教室へ集まります。飲み物は学校で買いますが、お菓子は学生が一人一つ持ってくることになっています。', '学生は準備の日に何を持ってきますか。', ['飲み物', '教室', 'お菓子', '文化祭の案内'], 2, 'お菓子は学生が一人一つ持ってくる決まりです.', 'Perhatikan hal yang kontras dengan 学校で買います.']
        ],
        'n4-reading-search': [
            ['n4-ri-4', '【図書館イベント】読み聞かせ：水曜 15:00 無料 / 映画会：金曜 18:00 500円 / 日本語相談：土曜 10:00 無料。申込が必要。', '土曜日の午前に、無料で参加できるものはどれですか。', ['読み聞かせ', '映画会', '日本語相談', 'どれも参加できない'], 2, '土曜日の午前は日本語相談で、料金は無料です。', 'Cocokkan hari, waktu, dan harga sekaligus.'],
            ['n4-ri-5', '【高速バス】東京発 8:00→大阪 12:30 5,000円 / 10:00→大阪 14:30 4,500円 / 13:00→大阪 17:30 4,000円。予約は出発前日まで。', 'いちばん安いバスは何時に出ますか。', ['8時', '10時', '12時', '13時'], 3, 'Tarif termurah 4,000 yen adalah keberangkatan pukul 13.00.', 'Cari tarif termurah, lalu lihat waktu keberangkatannya.']
        ],
        'n4-listening-task': [
            ['n4-lt-4', 'まず申込書に名前を書いてください。それから、受付の人に出してください。', '最初に何をしますか。', ['申込書に名前を書く', '受付で名前を聞く', '申込書を持って帰る', '受付を掃除する'], 0, 'まず menunjukkan tindakan pertama: menulis nama di formulir.', 'Dengarkan kata まず.', 'まず申込書に名前を書いてください。それから、受付の人に出してください。'],
            ['n4-lt-5', '資料をメールで送りました。届いたかどうか、確認してもらえますか。', '何を頼んでいますか。', ['資料が届いたか確認する', '資料を印刷して送る', 'メールの書き方を教える', '会議を始める'], 0, 'Pembicara meminta lawan bicara memastikan materi sudah diterima.', 'Fokus pada permintaan terakhir.', '資料をメールで送りました。届いたかどうか、確認してもらえますか。']
        ],
        'n4-listening-point': [
            ['n4-lp-4', '山本さんは会議のあとで、部長に報告書を渡します。', '山本さんはだれに報告書を渡しますか。', ['会議の参加者', '部長', '友だち', '受付の人'], 1, '報告書 dibagikan kepada 部長.', 'Tangkap orang setelah に.'],
            ['n4-lp-5', '店は九時に開きますが、パンは八時半から買えます。', 'パンは何時から買えますか。', ['八時', '八時半', '九時', '九時半'], 1, 'パンは八時半から membeli meski toko buka pukul sembilan.', 'Bedakan waktu toko buka dari waktu layanan roti.', '店は九時に開きますが、パンは八時半から買えます。']
        ],
        'n4-listening-expression': [
            ['n4-le-4', '友だちに写真を見せてもらいたいです。', '友だちに何と言いますか。', ['その写真を見せてもらえますか', '写真を見せてくれてありがとう', '写真を見てはいけません', '写真を見せるつもりです'], 0, 'Permintaan dapat memakai 見せてもらえますか.', 'Gunakan bentuk permintaan yang sopan.'],
            ['n4-le-5', '会議に遅れて、先に来ていた人たちを待たせました。', '会議室に入るとき、何と言いますか。', ['遅れてすみません', 'お先に失礼します', 'おめでとうございます', 'いただきます'], 0, 'Minta maaf karena terlambat: 遅れてすみません.', 'Pilih ungkapan permintaan maaf.']
        ],
        'n4-listening-response': [
            ['n4-lr-4', 'この仕事、今日中に終わりそうですか。', '質問への自然な返事はどれですか。', ['はい、あと少しで終わりそうです', '仕事は駅にあります', 'きのう終わりましたか', '今日中に雨です'], 0, 'Jawaban yang wajar menyatakan perkiraan penyelesaian pekerjaan.', 'Jawab pertanyaan tentang kemungkinan selesai.'],
            ['n4-lr-5', '駅まで車で送りましょうか。', '申し出への自然な返事はどれですか。', ['ありがとうございます。お願いします', '駅は二つあります', '車を買いました', '送りませんでした'], 0, 'Tawaran untuk mengantar dapat diterima dengan ucapan terima kasih.', 'Pilih respons menerima tawaran bantuan.']
        ]
    }
};

for (const level of ['N5', 'N4']) {
    const extras = additionalPracticeQuestions[level];
    for (const group of jlptQuestionBank[level].groups) {
        const additions = extras[group.id];
        if (!additions || additions.length !== 2) {
            throw new Error(`Data tambahan untuk ${group.id} tidak lengkap.`);
        }
        group.questions.push(...additions.map(item => {
            const [id, first, second, third, fourth, fifth, sixth, seventh] = item;
            const hasPassage = Array.isArray(second);
            const question = hasPassage
                ? { id, prompt: first, choices: second, answer: third, explain: fourth, hint: fifth }
                : group.section === 'listening'
                    ? { id, prompt: second, choices: third, answer: fourth, explain: fifth, hint: sixth, audioText: seventh || first }
                    : { id, passage: first, prompt: second, choices: third, answer: fourth, explain: fifth, hint: sixth };
            return question;
        }));
    }
}
