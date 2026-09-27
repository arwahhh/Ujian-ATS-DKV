const questionsData = [
  // ==========================================
  // MATERI 1: Technopreneur, Peluang Usaha & Profesi DKV (Soal 1 - 20)
  // ==========================================
  {
    id: 1,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Budi dan Citra adalah dua lulusan SMK DKV yang memiliki visi bisnis berbeda. Budi membangun perusahaan percetakan konvensional dengan menginvestasikan seluruh modalnya untuk membeli mesin cetak offset, mesin potong, dan finishing fisik guna memproduksi brosur, poster, serta kemasan. Di sisi lain, Citra mengembangkan platform web marketplace digital bernama DesainHub yang menghubungkan langsung desainer lepas lokal dengan ratusan UMKM yang membutuhkan identitas visual. Platform Citra tidak memproduksi barang fisik, melainkan mengelola aliran transaksi digital, lisensi aset visual, komunikasi revisi, serta sistem pembayaran otomatis. Kedua bisnis ini bertumbuh di daerahnya masing-masing, namun dengan karakteristik biaya operasional yang sangat bertolak belakang.",
    question: "Berdasarkan analisis model bisnis di atas, manakah kesimpulan yang paling tepat mengenai perbedaan peran kewirausahaan Budi dan Citra?",
    options: [
      "A. Keduanya adalah technopreneur sejati karena sama-sama menggunakan alat elektronik dalam operasional harian.",
      "B. Budi adalah technopreneur karena memiliki aset fisik mesin canggih, sedangkan Citra hanyalah perantara jasa biasa.",
      "C. Citra menerapkan prinsip technopreneurship karena memanfaatkan platform digital sebagai inti skalabilitas bisnis, sedangkan Budi adalah wirausahawan konvensional yang menggunakan teknologi hanya sebagai alat produksi.",
      "D. Budi terbukti lebih sukses sebagai pengusaha DKV karena menghasilkan produk fisik yang bernilai jual nyata bagi pasar.",
      "E. Citra tidak dapat dikategorikan sebagai wirausahawan DKV karena tidak memproses cetakan di media kertas secara langsung."
    ],
    answer: ["C"],
    explanation: "Technopreneurship menitikberatkan pada inovasi platform/sistem digital yang scalable, bukan sekadar pemanfaatan mesin fisik sebagai alat produksi."
  },
  {
    id: 2,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Studio animasi Nusantara Animation sedang menggarap proyek film serial edukasi nasional. Pada alur kerjanya, Maya bertugas meriset visual, menentukan proporsi karakter, dan membuat rancangan warna awal untuk karakter utama. Setelah visual disetujui, Riko menerjemahkan naskah cerita menjadi urutan sketsa panel adegan yang mengatur sudut kamera serta alur aksi pementasan adegan. Selanjutnya, Dani bertugas menggerakkan aset karakter digital sesuai panduan alur gambar tersebut. Pada tahap akhir, Gani menggabungkan seluruh elemen visual, latar belakang, pencahayaan, dan efek khusus menjadi satu bingkai video final yang utuh dan siap tayang.",
    question: "Pilihlah dua pernyataan yang BENAR mengenai analisis pembagian peran profesi di studio animasi tersebut!",
    options: [
      "A. Maya bertugas sebagai Concept Artist yang menyusun rancangan visual awal karakter.",
      "B. Riko memegang posisi Compositor yang menggabungkan seluruh efek visual akhir.",
      "C. Dani bertugas sebagai Storyboard Artist yang menyusun sketsa alur cerita.",
      "D. Gani menjabat sebagai Compositor yang menyatukan elemen visual dan efek menjadi video utuh.",
      "E. Maya dan Dani memiliki deskripsi pekerjaan yang sama dalam rantai produksi animasi."
    ],
    answer: ["A", "D"],
    explanation: "Maya = Concept Artist; Riko = Storyboard Artist; Dani = Animator; Gani = Compositor."
  },
  {
    id: 3,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Kesadaran masyarakat terhadap kesehatan mental mengalami peningkatan signifikan dalam beberapa tahun terakhir. Banyak lembaga psikologi berusaha menyampaikan materi edukasi kepada publik, namun sering menghadapi kendala: materi yang disajikan terlalu panjang, penuh istilah medis rumit, dan membosankan bagi kalangan remaja. Melihat fenomena sosial ini, Danang seorang lulusan DKV bermaksud membuka peluang usaha studio kreatif yang fokus memecahkan masalah komunikasi visual di sektor kesehatan publik dengan mengoptimalkan platform media sosial terkini.",
    question: "Langkah inovasi produk DKV yang paling bernilai tinggi dan relevan untuk menjawab tantangan tersebut adalah...",
    options: [
      "A. Menjual cetakan poster kata-kata motivasi impor secara borongan ke sekolah-sekolah.",
      "B. Menyediakan jasa pembuatan mikro-konten visual seperti komik edukasi interaktif, infografis ringkas, dan mikro-animasi untuk media sosial.",
      "C. Membuka toko perlengkapan alat tulis dan kertas gambar untuk mahasiswa psikologi.",
      "D. Menawarkan jasa fotografi wisuda bagi sarjana lulusan fakultas psikologi.",
      "E. Membuka kursus menggambar cat air tanpa fokus pada konten edukasi spesifik."
    ],
    answer: ["B"],
    explanation: "Peluang usaha DKV yang bernilai tinggi terletak pada penyederhanaan informasi kompleks menjadi media visual interaktif dan komunikatif."
  },
  {
    id: 4,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Sebuah perusahaan percetakan kemasan skala besar membagi alur kerja menjadi dua departemen utama: Pre-press (Pra-cetak) dan Printing (Pencetakan). Di bagian Pre-press, Sinta bertugas memeriksa file desain dari klien, memastikan warna menggunakan mode CMYK, mengonversi font menjadi vector outline, memeriksa resolusi gambar (300 dpi), dan mencetak dummy proof warna. Sementara di bagian Printing, Agus bertugas mengoperasikan mesin cetak offset, mengatur debit tinta pada cylinder, serta memantau konsistensi warna pada ribuan lembaran cetak produksi massal.",
    question: "Pilihlah dua pernyataan BENAR terkait evaluasi tanggung jawab profesi Sinta dan Agus di industri percetakan!",
    options: [
      "A. Sinta bertanggung jawab memastikan file secara teknis siap cetak tanpa error layout maupun color profile.",
      "B. Agus bertugas membuat ulang desain dari nol apabila terjadi kesalahan warna di mesin cetak.",
      "C. Agus bertanggung jawab menjaga stabilitas kualitas hasil cetakan massal agar sesuai dengan contoh proofing.",
      "D. Sinta dan Agus memiliki wewenang penuh untuk mengubah konsep logo klien secara sepihak.",
      "E. Pekerjaan Pre-press dan Printing dapat digabungkan tanpa memerlukan pemahaman teknis khusus."
    ],
    answer: ["A", "C"],
    explanation: "Pre-press fokus pada kesiapan teknis file (CMYK, DPI, Font), sedangkan Print Operator fokus pada presisi dan stabilitas produksi massal."
  },
  {
    id: 5,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Roni ingin mengembangkan aplikasi digital marketplace bagi perajin ukiran kayu lokal di daerahnya agar bisa menjangkau pembeli nasional. Sebelum merancang tampilan antarmuka (UI), Roni turun langsung mewawancarai para perajin yang mayoritas berusia di atas 50 tahun. Hasil wawancara menunjukkan: sebagian besar perajin tidak terbiasa mengetik teks di smartphone, kesulitan memahami istilah bahasa Inggris, dan takut salah menekan tombol transaksi. Namun, mereka sangat mahir merekam pesan suara dan mengambil foto karya menggunakan kamera smartphone.",
    question: "Berdasarkan pendekatan Design Thinking, fitur UI/UX aplikasi yang paling tepat dirancang oleh Roni adalah...",
    options: [
      "A. Antarmuka bergaya futuristik dengan istilah navigasi bahasa Inggris modern dan menu tersembunyi.",
      "B. Layar pendaftaran yang mewajibkan input formulir teks panjang dan otentikasi dua langkah rumit.",
      "C. Antarmuka berbasis ikon visual yang jelas, navigasi berbahasa Indonesia sederhana, serta fitur input pendaftaran barang via pesan suara.",
      "D. Tampilan penuh animasi 3D berat yang membutuhkan smartphone spesifikasi tinggi.",
      "E. Sistem checkout yang hanya menerima pembayaran dompet kripto internasional."
    ],
    answer: ["C"],
    explanation: "UI/UX yang efektif harus berpusat pada pengguna (User-Centered Design) dengan menyesuaikan karakteristik dan keterbatasan target penggunanya."
  },
  {
    id: 6,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Perusahaan Startup KopiKita ingin meluncurkan produk kopi kaleng siap minum untuk kalangan Gen-Z. Tim pemasaran meminta tim DKV merancang desain kemasan yang mampu bersaing di rak supermarket. Hasil analisis menunjukkan bahwa konsumen muda hanya menghabiskan waktu sekitar 3 detik untuk melirik produk di rak sebelum mengambil keputusan membeli. Oleh karena itu, kemasan harus memiliki daya pikat visual yang kuat, menyampaikan identitas rasa secara instan, dan membedakan diri dari kompetitor kawakan yang menggunakan warna-warna cokelat gelap konvensional.",
    question: "Strategi elemen visual kemasan manakah yang paling efektif untuk mencapai tujuan tersebut?",
    options: [
      "A. Menggunakan teks komposisi bahan yang sangat tebal dan memenuhi seluruh bagian depan kemasan.",
      "B. Menerapkan warna latar kontras yang cerah, ilustrasi karakter unik bergaya pop-art, serta tipografi nama varian yang singkat dan tegas.",
      "C. Menghilangkan logo merek dan hanya menampilkan foto biji kopi secara realistis tanpa warna tambahan.",
      "D. Meniru seluruh tata letak dan skema warna dari kemasan merek pesaing terlaris.",
      "E. Menggunakan kertas daur ulang polos tanpa cetakan tulisan sama sekali demi menghemat biaya."
    ],
    answer: ["B"],
    explanation: "Daya tarik visual 3 detik pertama membutuhkan warna kontras, elemen ilustrasi ikonik, dan tipografi yang jelas dipahami."
  },
  {
    id: 7,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Agus adalah desainer grafis pemula yang menerima proyek pembuatan identitas visual untuk restoran makanan laut. Dalam kontrak kerja, disepakati bahwa Agus menyerahkan hak guna logo untuk penggunaan media cetak dan digital restoran tersebut. Setelah 6 bulan, Agus terkejut melihat logonya dicetak pada ribuan produk kaos yang dijual secara terpisah oleh pemilik restoran di toko merchandise resmi, tanpa ada pemberitahuan atau kompensasi tambahan. Agus merasa hak kekayaan intelektualnya telah dilanggar.",
    question: "Pilihlah dua analisis yang BENAR mengenai masalah Hak Kekayaan Intelektual (HKI) pada kasus Agus!",
    options: [
      "A. Pemilik restoran berhak menggunakan logo di media apa pun tanpa batas karena telah membayar biaya desain awal.",
      "B. Agus memegang Hak Cipta atas karya desainnya, dan lisensi yang dijual awal harus memperjelas cakupan penggunaan media.",
      "C. Komersialisasi logo menjadi produk komoditas baru (merchandise) di luar kesepakatan awal membutuhkan perjanjian lisensi baru/royalti.",
      "D. Desainer grafis tidak memiliki hak cipta atas logo yang sudah diserahkan kepada klien dalam bentuk file digital.",
      "E. Agus tidak dapat menuntut apa pun karena logo restoran secara otomatis menjadi milik publik setelah dipublikasikan."
    ],
    answer: ["B", "C"],
    explanation: "Hak cipta awal berada pada pencipta. Penggunaan di luar klausul kontrak (seperti merchandise komersial) memerlukan kesepakatan lisensi tambahan."
  },
  {
    id: 8,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Sebuah agensi periklanan digital membuat kampanye sosial untuk mengurangi sampah plastik di lautan. Target audiens kampanye adalah masyarakat perkotaan usia 20-35 tahun. Tim desainer menciptakan dua versi konten: Versi A berisi infografis data statistik jumlah ton sampah di laut dengan grafik batang formal; Versi B berisi ilustrasi naratif seekor penyu laut yang membawa pesan emosional tentang dampaknya pada ekosistem, dipadu warna kontras dan ajakan bertindak (Call to Action) yang jelas.",
    question: "Berdasarkan efektivitas komunikasi visual di media sosial, mengapa Versi B diprediksi akan menghasilkan tingkat engagement yang lebih tinggi?",
    options: [
      "A. Versi B menggunakan lebih sedikit teks sehingga murah biaya cetaknya.",
      "B. Versi B memanfaatkan pendekatan penceritaan visual (visual storytelling) yang mampu menggugah emosi dan mempermudah pemahaman audiens.",
      "C. Versi A terlalu berwarna-warni sehingga menyakitkan mata pengguna media sosial.",
      "D. Versi B memuat angka statistik yang lebih rumit sehingga tampak lebih ilmiah.",
      "E. Versi A tidak dapat diunggah ke platform media sosial karena ukuran file yang terlalu besar."
    ],
    answer: ["B"],
    explanation: "Visual storytelling memicu resonansi emosional yang meningkatkan keterikatan (engagement) dibandingkan sekadar data statistik mentah."
  },
  {
    id: 9,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Dina adalah seorang Illustrator freelance yang memanfaatkan platform global seperti Behance dan ArtStation untuk membangun portofolio digitalnya. Untuk meningkatkan nilai jual jasanya, Dina tidak hanya menampilkan hasil gambar akhir, tetapi juga menyertakan tahapan proses kerja: mulai dari sketsa kasar, eksplorasi palet warna, konsep awal yang ditolak, hingga penerapan ilustrasi pada mockup produk nyata. Strategi penyajian portofolio ini ternyata mendatangkan banyak klien internasional berbayar tinggi.",
    question: "Mengapa strategi penyajian proses kerja (design process) dalam portofolio Dina sangat efektif menarik klien profesional?",
    options: [
      "A. Klien menyukai portofolio yang penuh dengan gambar kotor dan belum selesai.",
      "B. Menunjukkan proses kerja membuktikan metode pemikiran kritis, profesionalisme, dan pemecahan masalah desainer secara transparan.",
      "C. Klien dapat mencuri sketsa kasar tersebut untuk digambar ulang oleh desainer lain yang lebih murah.",
      "D. Memenuhi syarat wajib dari platform Behance agar akun tidak diblokir oleh sistem.",
      "E. Menunjukkan bahwa desainer membutuhkan waktu sangat lama untuk menyelesaikan satu karya."
    ],
    answer: ["B"],
    explanation: "Klien profesional menilai desainer dari metodologi berpikir dan pemecahan masalah (design process), bukan sekadar hasil visual akhir."
  },
  {
    id: 10,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Sebuah studio game lokal sedang merancang game edukasi sejarah Indonesia. Dalam tim pengembangan, terdapat beberapa spesialisasi DKV: Farhan merancang antarmuka tombol, menu, dan HUD (Heads-Up Display); Siska merancang tampilan bentuk fisik karakter prajurit dan latar tempat kerajaan; sedangkan Bowo merancang pergerakan kerangka digital karakter agar dapat berjalan dan bertarung secara alami dalam dunia 3D.",
    question: "Pilihlah dua pasang pencocokan profesi dan tugas yang BENAR berdasarkan deskripsi di atas!",
    options: [
      "A. Farhan bertugas sebagai UI/UX Designer yang menangani antarmuka interaksi pemain.",
      "B. Siska bertugas sebagai 3D Animator yang menggerakkan kerangka karakter.",
      "C. Bowo bertugas sebagai 3D Rigger / Animator yang membuat sistem pergerakan karakter.",
      "D. Farhan bertugas sebagai Concept Artist yang merancang latar kerajaan.",
      "E. Siska dan Bowo memiliki peran yang sepenuhnya sama dalam alur kerja game."
    ],
    answer: ["A", "C"],
    explanation: "Farhan = UI/UX Designer; Siska = Environment/Character Concept Artist; Bowo = 3D Rigger/Animator."
  },
  {
    id: 11,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Seorang desainer grafis diminta merancang sistem petunjuk arah (wayfinding system) dan papan penanda (signage) untuk rumah sakit umum yang baru dibangun. Rumah sakit tersebut memiliki area yang sangat luas dengan pengunjung yang bervariasi, mulai dari anak-anak, lansia, hingga penyandang disabilitas. Tantangan utamanya adalah mencegah pengunjung tersesat serta memastikan informasi dapat dipahami dengan cepat dalam kondisi darurat tanpa bergantung pada teks bacaan yang panjang.",
    question: "Prinsip DKV manakah yang paling krusial diterapkan dalam perancangan wayfinding system tersebut?",
    options: [
      "A. Menggunakan jenis huruf dekoratif bergaya kaligrafi rumit agar terkesan mewah.",
      "B. Menerapkan piktogram yang universal, kode warna area yang konsisten, dan ukuran piktogram yang mudah dibaca dari jarak jauh.",
      "C. Menuliskan seluruh petunjuk dalam kalimat panjang menggunakan tiga bahasa asing sekaligus.",
      "D. Menempelkan iklan promosi sponsor di setiap papan penanda arah.",
      "E. Menggunakan warna-warna gelap yang samar agar tidak mengganggu estetika dinding."
    ],
    answer: ["B"],
    explanation: "Wayfinding system mengutamakan kejelasan fungsi melalui piktogram universal, keterbacaan tinggi, dan kodifikasi warna."
  },
  {
    id: 12,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Rahmat mendirikan usaha jilid dan percetakan cepat di area dekat kampus. Pada tahun pertama, usahanya sangat laris. Namun pada tahun ketiga, banyak mahasiswa beralih ke format dokumen digital (PDF/E-book) dan pengumpulan tugas secara daring, sehingga omzet cetak kertas Rahmat menurun drastis hingga 50%. Rahmat harus segera melakukan reorientasi peluang usaha agar bisnisnya tidak bangkrut.",
    question: "Langkah transformasi bisnis terbaik yang dapat diambil Rahmat berbekal aset dan keahlian DKV adalah...",
    options: [
      "A. Menutup toko secara permanen dan menjual seluruh mesin cetaknya dengan harga murah.",
      "B. Beralih menawarkan jasa cetak merchandise kustom (merchandise UV/Sublimasi), pembuatan portofolio fisik eksklusif, dan cetak kemasan UMKM.",
      "C. Memaksa dosen untuk tetap mewajibkan mahasiswa mencetak tugas dalam bentuk kertas.",
      "D. Menurunkan harga cetak kertas hingga di bawah harga modal tanpa mengubah jenis layanan.",
      "E. Membuka warung makan di dalam area percetakan tanpa mengolah bisnis DKV."
    ],
    answer: ["B"],
    explanation: "Diversifikasi produk ke ranah merchandise kustom dan cetak kemasan memanfaatkan mesin dan keahlian cetak untuk segmen pasar baru."
  },
  {
    id: 13,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Dalam industri penerbitan buku ilustrasi, proses pra-produksi hingga pasca-produksi melibatkan kerja sama erat antara Art Director, Layouter, dan Percetakan. Art Director bertugas menjaga konsistensi gaya visual dan konsep artistik buku. Layouter mengatur tata letak teks dan gambar menggunakan software perataan paragraf (InDesign). Percetakan memastikan hasil cetak akhir tidak mengalami kesalahan potong (bleed) dan penyimpangan warna.",
    question: "Manakah dua langkah teknis DKV yang wajib dilakukan Layouter sebelum mengirimkan file ke percetakan?",
    options: [
      "A. Menambahkan area Bleed dan Crop Marks pada dokumen layout.",
      "B. Mengubah mode warna dokumen dari CMYK menjadi RGB.",
      "C. Memastikan semua gambar yang disematkan memiliki resolusi minimal 300 dpi.",
      "D. Menggunakan resolusi gambar 72 dpi agar ukuran file menjadi sangat kecil.",
      "E. Menghapus seluruh halaman teks dan hanya menyisakan ilustrasi saja."
    ],
    answer: ["A", "C"],
    explanation: "Persiapan pra-cetak (pre-press) mewajibkan penggunaan resolusi tinggi (300 dpi) dan penambahan area potong (bleed/crop marks)."
  },
  {
    id: 14,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Lani merancang logo untuk merek fashion minimalis. Ia memilih menggunakan bentuk geometris sederhana dengan warna hitam dan putih. Ketika disajikan kepada klien, klien merasa logo tersebut terlalu sepi dan meminta Lani menambahkan banyak ornamen garis, efek bayangan 3D, gradasi warna-warni, serta gambar pakaian secara utuh ke dalam logo tersebut agar terlihat ramai.",
    question: "Bagaimana sikap profesional Lani sebagai desainer DKV dalam merespons permintaan klien tersebut?",
    options: [
      "A. Langsung menuruti semua keinginan klien tanpa memberikan masukan teknis.",
      "B. Marah dan membatalkan kontrak kerja secara sepihak karena merasa karya seni diejek.",
      "C. Menjelaskan secara edukatif fungsi fleksibilitas logo, keterbacaan di berbagai ukuran media, serta memberikan opsi kompromi yang menjaga identitas minimalis merek.",
      "D. Menghapus logo lama dan memberikan file gambar dari internet tanpa diolah.",
      "E. Mengabaikan pesan klien dan langsung mencetak logo asli tanpa persetujuan."
    ],
    answer: ["C"],
    explanation: "Desainer profesional bertindak sebagai konsultan visual yang mengedukasi klien dengan argumentasi teknis dan fungsi desain."
  },
  {
    id: 15,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Perkembangan Artificial Intelligence (AI) Image Generator seperti Midjourney dan DALL-E menimbulkan kekhawatiran di kalangan desainer pemula bahwa profesi DKV akan punah. Namun, seorang technopreneur DKV justru melihat hadirnya AI sebagai alat bantu efisiensi (tools) untuk mempercepat proses pembuatan ide kasar (brainstorming/moodboard) dan rendering aset awal, sementara eksekusi konsep akhir, strategi brand, dan kedalaman emosi desain tetap membutuhkan sentuhan manusia.",
    question: "Sikap adaptif yang paling tepat bagi seorang siswa DKV dalam menghadapi era AI adalah...",
    options: [
      "A. Berhenti belajar menggambar dan mendesain karena semua sudah bisa dikerjakan oleh mesin.",
      "B. Menolak keras penggunaan komputer dan kembali menggunakan teknik manual sepenuhnya.",
      "C. Mempelajari cara kerja AI sebagai alat bantu riset ide, sambil mengasah kemampuan berpikir kritis, pemecahan masalah visual, dan originalitas konsep.",
      "D. Mengutip hasil karya AI secara utuh dan mengklaimnya sebagai hak cipta pribadi tanpa pengolahan.",
      "E. Beralih profesi ke bidang yang sama sekali tidak berhubungan dengan teknologi visual."
    ],
    answer: ["C"],
    explanation: "Teknologi AI adalah alat akselerasi; nilai utama desainer tetap terletak pada critical thinking, pemecahan masalah, dan keaslian konsep."
  },
  {
    id: 16,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Studio Kreatif 'Visi Utama' merancang strategi identitas merek (brand identity) untuk produk sabun organik lokal. Proses yang mereka jalankan meliputi: 1) Meriset perilaku target konsumen; 2) Menentukan nilai utama merek (brand values); 3) Membuat logo, palet warna, dan tipografi; 4) Merancang kemasan ramah lingkungan; 5) Menyusun panduan penggunaan merek (Brand Guidelines) untuk klien.",
    question: "Pilihlah dua alasan utama mengapa pemuatan 'Brand Guidelines' sangat penting bagi klien!",
    options: [
      "A. Agar merek memiliki aturan konsistensi penerapannya di berbagai media di masa depan.",
      "B. Agar klien tidak bisa mengubah warna logo meskipun diproduksi oleh vendor media cetak berbeda.",
      "C. Sebagai dokumen hukum resmi untuk menjual hak cipta merek ke studio lain.",
      "D. Untuk meningkatkan harga jual cetakan buku panduan agar studio mendapat untung berlipat.",
      "E. Mencegah penyimpangan visual yang dapat merusak persepsi citra merek di mata konsumen."
    ],
    answer: ["A", "E"],
    explanation: "Brand Guidelines menjamin konsistensi visual dan mencegah penyimpangan citra merek saat diaplikasikan oleh pihak lain."
  },
  {
    id: 17,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Sebuah perusahaan jasa ekspedisi ingin memperbarui logo mereka (rebranding). Logo lama berbentuk gambar burung merpati yang detail dan memiliki banyak gradasi warna rumit. Logo baru dirancang ulang menjadi bentuk panah geometris sederhana yang dinamis dengan warna oranye dan biru tegas. Perubahan ini bertujuan agar logo baru mudah diterapkan pada berbagai ukuran media, mulai dari aplikasi seluler, stiker armada truk, hingga bordir seragam kurir.",
    question: "Prinsip desain identitas visual manakah yang mendasari keputusan rebranding perusahaan ekspedisi tersebut?",
    options: [
      "A. Kompleksitas dan kerumitan detail.",
      "B. Kesederhanaan (Simplicity) dan Fleksibilitas Penerapan Media (Scalability).",
      "C. Penggunaan warna gradasi sebanyak mungkin.",
      "D. Mengikuti tren animasi bergerak di televisi.",
      "E. Menghilangkan unsur kejelasan simbol komunikasi."
    ],
    answer: ["B"],
    explanation: "Simplicity dan scalability memastikan identitas visual dapat diaplikasikan secara konsisten di media berukuran mikroskopis hingga raksasa."
  },
  {
    id: 18,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Toko Buku 'Cendekia' mencetak katalog produk bulanan sebanyak 10.000 eksemplar. Saat hasil cetak selesai, ditemukan kesalahan fatal: seluruh foto buku tampak pecah (kabur/pixelated) dan tulisan harga yang berwarna hitam tampak berbayang kemerahan (tidak presisi/out of register). Setelah ditelusuri, file desain yang dikirim desainer menggunakan gambar beresolusi 72 dpi dan warna teks menggunakan format RGB padat.",
    question: "Langkah koreksi pra-cetak (pre-press) manakah yang seharusnya dilakukan desainer sebelum mencetak massal?",
    options: [
      "A. Membiarkan file apa adanya karena kesalahan ada pada mesin cetak.",
      "B. Mengubah semua gambar ke resolusi 300 dpi serta menetapkan warna teks hitam ke K-100 (Single Black) pada mode CMYK.",
      "C. Mengubah mode file menjadi Grayscale dan menurunkan kualitas gambar menjadi 50 dpi.",
      "D. Mencetak menggunakan kertas yang lebih tebal agar gambar pecah tidak terlihat.",
      "E. Mengirimkan file dalam bentuk format JPEG berkualitas rendah."
    ],
    answer: ["B"],
    explanation: "Standar cetak offset memerlukan gambar 300 dpi dan teks hitam murni K-100 pada mode CMYK agar tidak berbayang."
  },
  {
    id: 19,
    category: "Technopreneur & Profesi DKV",
    type: "complex",
    stimulus: "Di sebuah agensi periklanan digital, tim kreatif terdiri dari Copywriter, Art Director, dan Creative Director. Dalam menggarap kampanye ikhlas donasi, Copywriter menyusun kalimat ajakan yang menyentuh hati, Art Director menerjemahkan kalimat tersebut menjadi tata letak visual visual yang dramatis, sedangkan Creative Director mengawasi arah konsep keseluruhan serta memastikan pesan sesuai dengan brief klien.",
    question: "Pilihlah dua pernyataan BENAR mengenai sinergi peran tim kreatif di atas!",
    options: [
      "A. Copywriter bertanggung jawab atas pembuatan elemen narasi dan teks pesan verbal.",
      "B. Art Director bertugas memprogram kode coding aplikasi web kampanye.",
      "C. Creative Director bertanggung jawab memimpin keselarasan estetika dan strategi kampanye.",
      "D. Copywriter dan Art Director bekerja secara terpisah tanpa perlu berkoordinasi.",
      "E. Art Director hanya bertugas mencetak dokumen hasil akhir di kertas."
    ],
    answer: ["A", "C"],
    explanation: "Copywriter menangani pesan verbal (teks); Art Director menangani estetika visual; Creative Director memimpin konsep secara komprehensif."
  },
  {
    id: 20,
    category: "Technopreneur & Profesi DKV",
    type: "pg",
    stimulus: "Eko adalah seorang komikus digital (webtoonist). Ia berhasil menarik 100.000 pembaca setia setiap minggu. Selain mendapatkan penghasilan dari royalti platform, Eko mengembangkan monetisasi bisnisnya dengan menjual stiker digital, lisensi karakter untuk produk tempat minum, serta membuka keanggotaan eksklusif bagi penggemar yang ingin membaca bab terbaru lebih awal.",
    question: "Berdasarkan prinsip Technopreneurship DKV, strategi yang dilakukan Eko dikategorikan sebagai...",
    options: [
      "A. Pembajakan karya cipta digital.",
      "B. Monetisasi Intellectual Property (IP) secara terintegrasi.",
      "C. Ketergantungan pada satu sumber pendapatan pasif.",
      "D. Penipuan terhadap pembaca setia.",
      "E. Kegiatan produksi barang konvensional tanpa nilai tambah."
    ],
    answer: ["B"],
    explanation: "Pengembangan karakter menjadi berbagai produk komersial (stiker, merchandise, lisensi) adalah strategi monetisasi Kekayaan Intelektual (IP)."
  },

  // ==========================================
  // MATERI 2: Pengenalan Sketsa & Ilustrasi (Soal 21 - 35)
  // ==========================================
  {
    id: 21,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Seorang ilustrator diminta merancang latar tempat (environment design) untuk komik bergenre futuristik distopia tahun 2150. Gedung-gedung pencakar langit digambarkan sangat tinggi, padat, dan menyempit di bagian atas dari sudut pandang manusia yang berdiri di jalan raya. Untuk memberikan kesan megah, dramatis, dan sangat tinggi, ilustrator harus menentukan teknik perspektif yang tepat agar proporsi bangunan tidak terlihat mendatar atau janggal.",
    question: "Teknik menggambar perspektif manakah yang paling tepat digunakan untuk menciptakan kesan sudut pandang dari bawah ke atas (worm's-eye view) secara dramatis tersebut?",
    options: [
      "A. Perspektif Satu Titik Hilang.",
      "B. Perspektif Dua Titik Hilang.",
      "C. Perspektif Tiga Titik Hilang (dengan titik hilang ketiga di atas horizon).",
      "D. Perspektif Tanpa Titik Hilang (Isometrik).",
      "E. Perspektif Burung (Bird's-eye view) satu titik."
    ],
    answer: ["C"],
    explanation: "Perspektif Tiga Titik Hilang digunakan untuk sudut pandang ekstrem (worm's eye/bird's eye) guna memberikan kesan tinggi/kedalaman mendalam."
  },
  {
    id: 22,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "complex",
    stimulus: "Dalam menggambar bentuk manusia (anatomi) untuk keperluan sketsa fashion dan ilustrasi komik aksi, desainer menggunakan pendekatan proporsi ideal tubuh yang diukur berdasarkan satuan ukuran tinggi kepala. Pada gambar fashion figuratif, proporsi tubuh sering dimodifikasi (stilasi) menjadi lebih tinggi (misal 9-10 tinggi kepala) untuk memberikan kesan elegan dan jenjang. Sedangkan pada gambar komik realis, proporsi standar manusia dewasa biasanya menggunakan 7,5 hingga 8 tinggi kepala.",
    question: "Pilihlah dua pernyataan BENAR mengenai prinsip menggambar anatomi dan stilasi di atas!",
    options: [
      "A. Satuan tinggi kepala digunakan sebagai tolok ukur proporsi panjang bagian tubuh manusia.",
      "B. Stilasi anatomi pada gambar fashion dilakukan untuk merepresentasikan ukuran manusia nyata secara medis.",
      "C. Pemanjangan proporsi tubuh menjadi 9-10 tinggi kepala bertujuan memperkuat nilai estetika dan keanggunan busana.",
      "D. Gambar anatomi komik tidak membutuhkan acuan tinggi kepala sama sekali.",
      "E. Proporsi tubuh anak-anak memiliki satuan tinggi kepala yang lebih banyak dibanding manusia dewasa."
    ],
    answer: ["A", "C"],
    explanation: "Tinggi kepala adalah acuan proporsi anatomi. Pada sketsa fashion, stilasi pemanjangan (9-10 head) digunakan untuk daya tarik estetika busana."
  },
  {
    id: 23,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Siti merancang ilustrasi editorial untuk sampul majalah lingkungan hidup. Tema artikel utama adalah 'Ancaman Perubahan Iklim Terhadap Es Kutub'. Siti membuat sketsa awal dengan menggambarkan sesosok beruang kutub berdiri di atas bongkahan es kecil yang terapung di tengah lautan luas. Untuk memperkuat kesan kesepian, terisolasi, dan ketidakberdayaan, Siti ingin mengatur komposisi objek beruang es tersebut terhadap bidang gambar secara tepat.",
    question: "Penerapan prinsip komposisi tata letak visual manakah yang paling kuat mendukung pesan emosional tersebut?",
    options: [
      "A. Menggambar beruang kutub memenuhi 90% bidang gambar dengan warna-warna hangat cerah.",
      "B. Menempatkan beruang kutub berukuran kecil pada sepertiga bidang bawah (Rule of Thirds) dengan menyisakan ruang kosong (negative space) lautan gelap yang luas.",
      "C. Menggambar lima ekor beruang kutub saling bertumpukan di tengah-tengah bidang gambar.",
      "D. Meletakkan gambar beruang secara terbalik di sudut kanan atas bidang.",
      "E. Mengisi seluruh ruang kosong latar belakang dengan pola tekstur garis batik berulang."
    ],
    answer: ["B"],
    explanation: "Pemanfaatan negative space (ruang kosong) yang luas dan skala objek kecil memperkuat penekanan emosi terisolasi dan kesepian."
  },
  {
    id: 24,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "complex",
    stimulus: "Seorang desainer karakter sedang merancang pahlawan super lokal untuk serial komik digital. Sebelum membuat ilustrasi detail, ia membuat belasan 'thumbail sketches' (sketsa siluet kasar berukuran kecil). Melalui bentuk siluet tersebut, desainer ingin memastikan bahwa karakter pahlawan supernya tetap dapat dikenali secara instan oleh pembaca hanya dari bentuk bayangannya saja, meskipun tanpa bantuan warna atau detail wajah.",
    question: "Pilihlah dua alasan teknis mengapa tahap eksplorasi siluet (thumbnail sketch) sangat vital dalam desain karakter!",
    options: [
      "A. Siluet yang kuat memicu keterbacaan bentuk (readability) karakter dari jarak jauh atau saat aksi cepat.",
      "B. Siluet digunakan untuk menentukan harga jual komik kepada penerbit.",
      "C. Membantu desainer menguji keseimbangan pose dan keunikan ciri khas fisik karakter secara efisien.",
      "D. Siluet dapat menggantikan seluruh proses pewarnaan pada tahap produksi akhir.",
      "E. Siluet mewajibkan penggunaan software animasi 3D berlisensi mahal."
    ],
    answer: ["A", "C"],
    explanation: "Siluet yang unik menjamin keterbacaan karakter (iconic readiness) serta membantu mengevaluasi pose dinamis secara cepat."
  },
  {
    id: 25,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Deni mendesain ilustrasi kemasan teh herbal alami. Ia ingin menyampaikan nuansa yang menenangkan, segar, dan organik. Dalam menentukan garis (line art) pada sketsa ilustrasinya, Deni bingung memilih antara menggunakan garis-garis patah lurus yang tajam/kaku atau menggunakan garis lengkung organik yang mengalir lembut.",
    question: "Berdasarkan psikologi garis dalam ilustrasi DKV, jenis garis manakah yang paling tepat digunakan Deni?",
    options: [
      "A. Garis zig-zag tajam karena melambangkan kekuatan dan keharuman yang menyengat.",
      "B. Garis vertikal tebal kaku karena memberikan kesan ketegasan industri modern.",
      "C. Garis lengkung mengalir (curvilinear) karena memberikan kesan alami, lembut, menenangkan, dan fleksibel.",
      "D. Garis putus-putus acak untuk memberikan kesan tidak beraturan.",
      "E. Garis melingkar tebal penuh untuk menutupi seluruh objek daun."
    ],
    answer: ["C"],
    explanation: "Garis lengkung mengalir (curvilinear) secara psikologis mengomunikasikan kelembutan, ketenangan, dan sifat organik alam."
  },
  {
    id: 26,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Dalam sketsa arsitektural dan ilustrasi ruang interior, desainer sering menggunakan teknik arsir (hatching dan cross-hatching) untuk memberikan kesan volume tiga dimensi, pencahayaan, dan tekstur bahan pada gambar dua dimensi. Saat bayangan jatuh pada area yang sangat gelap dan dalam, kerapatan serta arah garis arsir harus diatur sedemikian rupa.",
    question: "Bagaimana cara menghasilkan value tone warna yang sangat gelap menggunakan teknik cross-hatching?",
    options: [
      "A. Mengerjakan garis sejajar dengan jarak antar garis yang sangat renggang.",
      "B. Membuat tumpukan garis bersilangan beberapa lapis (layer) dengan kerapatan tinggi.",
      "C. Menggunakan penghapus untuk membersihkan seluruh sisa pensil di area tersebut.",
      "D. Menggambar satu garis lurus tebal di tengah-tengah kertas.",
      "E. Menggosok kertas menggunakan kain wet tissue hingga basah."
    ],
    answer: ["B"],
    explanation: "Nilai kegelapan (tone value) pada cross-hatching ditentukan oleh kerapatan dan jumlah lapisan persilangan garis."
  },
  {
    id: 27,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "complex",
    stimulus: "Perbedaan antara sketsa (sketch) dan ilustrasi (illustration) sering kali membingungkan pemula. Sketsa umumnya bersifat eksploratif, cepat, sebagai studi bentuk awal, dan belum final. Sebaliknya, ilustrasi merupakan karya seni visual utuh yang memiliki fungsi spesifik untuk memperjelas, menerjemahkan, atau menghias suatu pesan/teks dalam media komunikasi visual.",
    question: "Pilihlah dua pernyataan BENAR yang membedakan sketsa dan ilustrasi dalam konteks DKV!",
    options: [
      "A. Sketsa berfungsi sebagai sarana ideasi awal, sedangkan ilustrasi adalah hasil visual akhir yang mengomunikasikan pesan spesifik.",
      "B. Sketsa wajib dibuat menggunakan cat minyak, sedangkan ilustrasi hanya boleh menggunakan pensil 2B.",
      "C. Ilustrasi selalu terikat pada konteks cerita, informasi, atau media tempat ia diterapkan.",
      "D. Sketsa dan ilustrasi memiliki nilai jual dan fungsi penerapan yang identik di pasaran.",
      "E. Ilustrasi tidak boleh dibuat secara digital menggunakan komputer."
    ],
    answer: ["A", "C"],
    explanation: "Sketsa adalah proses awal riset bentuk; ilustrasi adalah karya terstruktur final yang membawa pesan bagi media tertentu."
  },
  {
    id: 28,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Seorang komikus membuat panel adegan ketika sang tokoh utama berlari kencang menghindari ledakan di belakangnya. Untuk memperkuat kesan kecepatan dan gerakan yang sangat dinamis pada gambar dua dimensi yang diam tersebut, komikus menerapkan elemen teknik ilustrasi berupa 'motion lines' (garis gerak) serta deformasi bentuk objek menyeret ke arah belakang.",
    question: "Prinsip menggambar ilustrasi manakah yang sedang diterapkan komikus tersebut?",
    options: [
      "A. Keseimbangan Simetris (Symmetrical Balance).",
      "B. Penekanan Gerak dan Dinamika (Action & Motion Suggestion).",
      "C. Proporsi Anatomi Realis Kaku.",
      "D. Tekstur Semu Bahan Kayu.",
      "E. Perspektif Isometrik Murni."
    ],
    answer: ["B"],
    explanation: "Motion lines dan deformasi bentuk (squash & stretch) adalah teknik ilustrasi untuk menyampaikan sensasi dinamika pergerakan."
  },
  {
    id: 29,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Rini menggambar sketsa wajah (portret) menggunakan pensil grafit. Namun, hasil gambarnya terlihat 'pipih/rata' (flat) dan kurang bernyawa, meskipun bentuk garis tepi (outline) mata, hidung, dan mulut sudah sangat akurat. Setelah dievaluasi oleh gurunya, Rini menyadari bahwa ia lupa menerapkan gradasi gelap-terang (chiaroscuro) serta penentuan arah sumber cahaya (light source) yang konsisten.",
    question: "Langkah teknis apa yang harus dilakukan Rini untuk memberikan volume tiga dimensi pada sketsa wajah tersebut?",
    options: [
      "A. Mempertebal seluruh garis tepi (outline) dengan spidol hitam pekat.",
      "B. Menentukan arah datangnya cahaya, lalu memberi highlight pada bagian yang menonjol serta arsir gradasi halus pada bagian yang tertutup bayangan.",
      "C. Menghapus seluruh bagian dalam wajah dan menyisakan bentuk lonjong kepala saja.",
      "D. Mengganti kertas gambar dengan kertas berwarna merah terang.",
      "E. Mewarnai seluruh bagian wajah dengan hitam pekat tanpa sisa."
    ],
    answer: ["B"],
    explanation: "Volume 3D dibentuk melalui permainan valuen gelap-terang (chiaroscuro) yang konsisten mengikuti arah sumber cahaya."
  },
  {
    id: 30,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "complex",
    stimulus: "Gambar ilustrasi teknik atau desain produk elektronik sering menggunakan teknik menggambar sketsa Isometrik. Pada proyeksi isometrik, sumbu x dan y membentuk sudut 30 derajat terhadap garis horizontal. Keunggulan dari teknik isometrik ini adalah objek tidak mengalami distorsi ukuran akibat jarak titik hilang, sehingga seluruh garis yang sejajar tetap tampak sejajar dan presisi.",
    question: "Pilihlah dua karakteristik BENAR dari gambar sketsa isometrik!",
    options: [
      "A. Menggunakan titik hilang di ujung garis horizon seperti perspektif nyata.",
      "B. Sumbu sudut kemiringan garis samping menggunakan sudut 30 derajat.",
      "C. Garis-garis sejajar pada objek asli akan tetap digambar sejajar tanpa mengecil ke ujung.",
      "D. Digunakan khusus untuk membuat animasi komik horor dramatis.",
      "E. Objek tampak semakin mengecil apabila posisinya semakin jauh dari mata."
    ],
    answer: ["B", "C"],
    explanation: "Isometrik menggunakan sudut 30° tanpa titik hilang, sehingga ukuran objek konsisten untuk keperluan teknis/presisi."
  },
  {
    id: 31,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Bintang ingin merancang karakter maskot untuk produk susu anak-anak. Maskot tersebut berbentuk seekor sapi. Bintang melakukan teknik pengubahan bentuk asal (deformasi visual) dengan cara memperbesar ukuran kepala dan mata maskot, memperpendek badan dan kakinya, serta membulatkan sudut-sudut tubuhnya agar terlihat sangat lucu, ramah, dan menggemaskan (chibi/stylized style).",
    question: "Proses stilasi visual yang dilakukan Bintang dalam perancangan karakter tersebut dinamakan...",
    options: [
      "A. Penggambaran Anatomi Realistis.",
      "B. Eksagerasi (Exaggeration) dan Penyederhanaan Bentuk (Simplification).",
      "C. Gambar Proyeksi Teknik Arsitektur.",
      "D. Penjelakan Bentuk (Distorsi Horor).",
      "E. Gambar Perspektif Tiga Titik Hilang."
    ],
    answer: ["B"],
    explanation: "Exaggeration (melebih-lebihkan fitur seperti kepala besar) dan simplification digunakan untuk menciptakan kesan lucu (cute/appealing)."
  },
  {
    id: 32,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Saat membuat sketsa suasana pasar tradisional yang ramai, desainer ingin memfokuskan perhatian penikmat gambar langsung pada sosok nenek penjual jamu di sudut kiri depan. Meskipun ada puluhan objek orang lain di latar belakang, sang desainer berhasil mengarahkan pandangan mata (eye tracking) audiens melalui teknik penekanan (emphasis/focal point).",
    question: "Metode visual manakah yang paling efektif menciptakan focal point pada nenek penjual jamu tersebut?",
    options: [
      "A. Menggambar nenek tersebut dengan kontras detail paling tinggi dan warna paling mencolok dibanding latar belakang yang kabur/halus.",
      "B. Menggambar seluruh orang di pasar dengan tingkat detail dan warna yang sama persis.",
      "C. Menutup sosok nenek jamu dengan bayangan hitam pekat tanpa detail.",
      "D. Menggambar nenek tersebut di bagian paling belakang luar kertas.",
      "E. Menghapus objek nenek jamu dari sketsa pasar."
    ],
    answer: ["A"],
    explanation: "Focal point dibuat melalui kontras (detail tinggi vs kabur, warna mencolok vs redup) untuk menarik perhatian utama mata."
  },
  {
    id: 33,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "complex",
    stimulus: "Software ilustrasi digital saat ini menyediakan fitur 'Layers' (lapisan kerja) yang memisahkan elemen-elemen gambar. Dalam sketsa pewarnaan digital, workflow yang efisien umumnya memisahkan: Layer 1 (Sketsa Kasar/Draft), Layer 2 (Line Art/Garis Bersih), Layer 3 (Base Color/Warna Dasar), dan Layer 4 (Shading & Highlight/Bayangan dan Kilau).",
    question: "Pilihlah dua keuntungan utama menggunakan sistem 'Layers' dalam pembuatan ilustrasi digital!",
    options: [
      "A. Memudahkan proses revisi pada satu elemen (misal merubah warna baju) tanpa merusak garis atau latar belakang.",
      "B. Mengubah komputer biasa secara otomatis menjadi tablet grafis mahal.",
      "C. Memungkinkan desainer menyembunyikan atau mengatur transparansi sketsa awal saat proses line art.",
      "D. Menghilangkan kebutuhan desainer untuk memahami teori warna dan pencahayaan.",
      "E. Membuat hasil gambar cetak menjadi timbul tiga dimensi di atas kertas."
    ],
    answer: ["A", "C"],
    explanation: "Sistem layer memberikan fleksibilitas revisi non-destruktif dan kontrol transparansi antar elemen gambar."
  },
  {
    id: 34,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Seorang ilustrator buku cerita anak membuat ilustrasi pemandangan hutan di pagi hari. Untuk menciptakan kedalaman ruang (spatial depth) dalam bidang dua dimensi, ia menggunakan teknik Perspektif Atmosfer (Atmospheric Perspective). Objek pohon yang dekat digambar dengan warna hijau pekat dan detail tajam, sedangkan pohon yang sangat jauh digambar semakin pudar, bernuansa kebiruan, dan berkurang detailnya.",
    question: "Mengapa pohon di jarak jauh digambar semakin pudar dan kebiruan dalam perspektif atmosfer?",
    options: [
      "A. Karena pohon di jauh tertutup oleh cat warna desainer yang habis.",
      "B. Karena simulasi pembiasan cahaya oleh partikel udara dan atmosfer bumi yang makin tebal pada jarak jauh.",
      "C. Karena pohon di jauh selalu berukuran lebih besar dari pohon di depan.",
      "D. Karena kesalahan teknis saat mencetak buku.",
      "E. Agar gambar terlihat seperti sketsa yang belum selesai."
    ],
    answer: ["B"],
    explanation: "Perspektif atmosfer meniru fenomena alam di mana partikel udara membiaskan cahaya sehingga objek jauh tampak pudar dan bernuansa dingin/biru."
  },
  {
    id: 35,
    category: "Pengenalan Sketsa & Ilustrasi",
    type: "pg",
    stimulus: "Seorang siswa SMK sedang mengkritik sketsa karya temannya. Ia mengamati bahwa gambar cangkir minum di atas meja tampak aneh: lingkar atas cangkir (ellips) digambar sebagai lingkaran bulat sempurna, padahal cangkir tersebut dilihat dari sudut pandang agak samping-atas (eye-level di atas meja). Kesalahan ini membuat cangkir tampak 'berdiri tidak datar' di permukaan meja.",
    question: "Konsep menggambar perspektif lingkaran manakah yang dilanggar dalam sketsa cangkir tersebut?",
    options: [
      "A. Lingkaran yang dilihat dari sudut miring akan mengalami distorsi perspektif menjadi bentuk elips (lonjong).",
      "B. Lingkaran harus selalu digambar menggunakan jangka bulat sempurna di sudut mana pun.",
      "C. Cangkir tidak memiliki hubungan dengan garis horizon.",
      "D. Semua objek bundar wajib digambar berbentuk kotak.",
      "E. Garis horizon harus diletakkan di bawah dasar cangkir."
    ],
    answer: ["A"],
    explanation: "Bentuk lingkaran asli jika dilihat dari sudut kemiringan mata akan terdistorsi secara perspektif menjadi bentuk elips."
  },

  // ==========================================
  // MATERI 3: Dasar-Dasar Fotografi, Alat, & K3LH (Soal 36 - 50)
  // ==========================================
  {
    id: 36,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Seorang fotografer diminta mengambil foto pertandingan sepak bola pada malam hari di stadion dengan pencahayaan lampu penerangan yang terbatas. Para pemain bergerak sangat cepat. Fotografer harus membekukan gerakan (freeze action) pemain saat menendang bola agar hasil foto tidak kabur (motion blur). Namun, ketika kecepatan rana (Shutter Speed) dinaikkan ke 1/1000 detik, foto menjadi sangat gelap karena waktu masuknya cahaya sangat singkat.",
    question: "Kombinasi pengaturan Segitiga Exposure (Aperture & ISO) manakah yang paling tepat untuk mengatasi masalah foto gelap tersebut?",
    options: [
      "A. Membuka diafragma sebesar mungkin (f-number terkecil, misal f/2.8) dan menaikkan nilai ISO ke tingkat lebih tinggi (misal ISO 3200-6400).",
      "B. Menutup diafragma sekecil mungkin (f/22) dan menurunkan ISO ke 100.",
      "C. Menggunakan Shutter Speed 1/2 detik dan mematikan kamera.",
      "D. Menurunkan nilai ISO ke 50 dan memasang filter ND gelap.",
      "E. Mengatur Aperture pada f/16 dan membiarkan ISO pada posisi Auto terendah."
    ],
    answer: ["A"],
    explanation: "Aperture lebar (f/2.8) memasukkan banyak cahaya, dan ISO tinggi meningkatkan sensitivitas sensor untuk mengimbangi shutter speed cepat (1/1000s)."
  },
  {
    id: 37,
    category: "Dasar Fotografi & K3LH",
    type: "complex",
    stimulus: "Seorang fotografer komersial menggarap foto studio untuk produk perhiasan cincin emas. Ia menginginkan seluruh bagian cincin, mulai dari permata depan hingga lingkaran belakang, tampak tajam dan detail. Di samping itu, saat pengambilan foto portrait model busana di luar ruangan, fotografer tersebut ingin agar wajah model tampak tajam mendetail sedangkan latar belakang pemandangan di belakangnya menjadi blur/kabur secara lembut (bokeh).",
    question: "Pilihlah dua pengaturan Aperture (Diafragma/f-number) yang BENAR untuk mencapai kedua tujuan foto di atas!",
    options: [
      "A. Foto perhiasan cincin menggunakan Aperture sempit (f-number besar, misal f/11 atau f/16) untuk ruang tajam luas (Large Depth of Field).",
      "B. Foto portrait model menggunakan Aperture lebar (f-number kecil, misal f/1.8 atau f/2.8) untuk ruang tajam sempit (Shallow Depth of Field).",
      "C. Foto perhiasan cincin wajib menggunakan f/1.4 agar seluruh bagian terlihat jelas.",
      "D. Foto portrait model menggunakan f/22 agar latar belakang menjadi blur penuh.",
      "E. Pengaturan f-number tidak berpengaruh terhadap ketajaman latar belakang."
    ],
    answer: ["A", "B"],
    explanation: "f-number besar (f/11-f/16) = Depth of Field luas (semua tajam). f-number kecil (f/1.8-f/2.8) = Depth of Field sempit (latar belakang blur/bokeh)."
  },
  {
    id: 38,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Rudi melakukan sesi pemotretan pemandangan air terjun di siang hari yang terik. Rudi ingin memotret dengan teknik 'Slow Shutter Speed' (misal 2 detik) agar aliran air terjun tampak lembut seperti sutra (silky water effect). Namun, karena cahaya matahari siang sangat kuat, foto yang dihasilkan selalu menjadi putih murni / terlalu terang (overexposed), meskipun diafragma sudah ditutup penuh di f/22 dan ISO sudah paling rendah di 100.",
    question: "Aksesori/Filter kamera manakah yang wajib dipasang Rudi pada lensa untuk menyerap sebagian cahaya masuk tanpa mengubah warna alami objek?",
    options: [
      "A. Filter UV (Ultraviolet).",
      "B. Filter ND (Neutral Density).",
      "C. Filter Color Gradient Red.",
      "D. Macro Extension Tube.",
      "E. Lens Hood Plastik."
    ],
    answer: ["B"],
    explanation: "Filter ND berfungsi seperti 'kacamata hitam' bagi lensa, mengurangi intensitas cahaya yang masuk agar fotografer dapat memakai shutter speed lambat di siang hari."
  },
  {
    id: 39,
    category: "Dasar Fotografi & K3LH",
    type: "complex",
    stimulus: "Di dalam studio fotografi SMK DKV, siswa sedang belajar menata sistem pencahayaan 3-Point Lighting untuk pemotretan portret formal. Tiga lampu studio dipasang pada posisi berbeda: Lampu A dipasang di depan-samping sebagai sumber cahaya utama; Lampu B dipasang di sisi berlawanan untuk bayangan lembut fill-in; dan Lampu C dipasang di belakang subjek mengarah ke rambut/pundak untuk memisahkan subjek dari latar belakang.",
    question: "Pilihlah dua penamaan pilar lampu yang TEPAT sesuai fungsi 3-Point Lighting di atas!",
    options: [
      "A. Lampu A dinamakan Key Light.",
      "B. Lampu B dinamakan Hair/Back Light.",
      "C. Lampu C dinamakan Hair Light / Rim Light.",
      "D. Lampu A dinamakan Softbox Light.",
      "E. Lampu C dinamakan Key Light."
    ],
    answer: ["A", "C"],
    explanation: "Key Light = sumber cahaya utama (A); Fill Light = pengisi bayangan (B); Hair Light/Rim Light = pencahayaan pemisah latar belakang dari belakang subjek (C)."
  },
  {
    id: 40,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Seorang fotografer meliput kegiatan acara indoor di aula sekolah yang menggunakan lampu pijar berwarna kuning kecokelatan. Saat foto diambil dengan pengaturan White Balance (WB) mode 'Direct Sunlight', hasil kulit wajah orang-orang tampak sangat oranye merona kusam. Fotografer perlu mengubah pengaturan White Balance di kamera agar warna kulit kembali netral dan alami sesuai kondisi aslinya.",
    question: "Pengaturan White Balance (atau nilai Kelvin) manakah yang harus dipilih fotografer?",
    options: [
      "A. Mengubah mode WB ke Tungsten/Incandescent (atau menurunkan suhu Kelvin ke kisaran 3000K).",
      "B. Mengubah mode WB ke Shade (menaikkan Kelvin ke 7500K).",
      "C. Mengubah mode WB ke Flash (6000K).",
      "D. Mematikan fitur sensor kamera.",
      "E. Mengatur nilai Kelvin ke tingkat maksimum 10.000K."
    ],
    answer: ["A"],
    explanation: "Lampu pijar (kuning) diimbangi dengan pilihan WB Tungsten/Kelvin rendah (~3000K) yang menambahkan nada kebiruan untuk menetralkan warna."
  },
  {
    id: 41,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Di lab studio fotografi, banyak kabel lampu kilat (flash strobo) melintang di lantai tanpa dirapikan. Seorang siswa yang berjalan cepat sambil membawa kamera DSLRs dan lensa mahal tersandung kabel tersebut hingga jatuh terjungkal. Kamera yang dipegangnya terlempar hingga pecah, dan pergelangan tangan siswa tersebut terkilir parah. Kejadian ini merupakan bentuk kelalaian terhadap prosedur Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup (K3LH).",
    question: "Langkah pencegahan K3LH standar yang wajib diterapkan di studio fotografi untuk menghindari kecelakaan tersebut adalah...",
    options: [
      "A. Melarang siswa memasuki studio fotografi selamanya.",
      "B. Memasang pelindung kabel (cable protector/floor ducting) atau merekatkan kabel ke lantai menggunakan gaffer tape serta menjaga kerapian jalur lalu lintas berjalan.",
      "C. Menyiram lantai studio dengan air sabun agar licin.",
      "D. Mematikan semua penerangan studio agar kabel tidak terlihat.",
      "E. Mengganti semua kamera SLR dengan kamera smartphone tanpa lampu."
    ],
    answer: ["B"],
    explanation: "Penerapan K3LH studio mewajibkan pengamanan kabel melintang menggunakan ducting/gaffer tape guna mencegah risiko tersandung (tripping hazard)."
  },
  {
    id: 42,
    category: "Dasar Fotografi & K3LH",
    type: "complex",
    stimulus: "Saat bekerja dalam sesi pemotretan luar ruangan (outdoor) di kawasan terik matahari pantai selama 8 jam penuh, fotografer dan asistennya menghadapi risiko dehidrasi, sengatan panas (heat stroke), serta kelelahan mata akibat pantulan sinar ultraviolet yang kuat dari pasir pantai.",
    question: "Pilihlah dua tindakan pencegahan ergonomi dan K3LH yang relevan bagi fotografer saat bertugas di lokasi tersebut!",
    options: [
      "A. Menggunakan topi lapangan, kacamata hitam anti-UV saat tidak membidik, serta rajin mengonsumsi air mineral.",
      "B. Menggunakan pakaian serba hitam tebal berbahan wol kaku agar terlihat gagah.",
      "C. Mengatur jeda istirahat bertahap di area teduh untuk memulihkan kondisi fisik dan kesegaran mata.",
      "D. Meminum minuman beralkohol tinggi agar suhu tubuh dingin.",
      "E. Berdiri tanpa bergerak sama sekali selama 8 jam tanpa minum."
    ],
    answer: ["A", "C"],
    explanation: "K3LH pemotretan outdoor ekstrem mencakup APD (topi, kacamata UV), hidrasi cukup, dan jeda istirahat teratur untuk mencegah heat stroke."
  },
  {
    id: 43,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Fotografer spesialis foto keanekaragaman hayati bertugas memotret serangga kecil (seperti belalang dan embun daun) di hutan. Ia membutuhkan lensa yang mampu melakukan pembesaran rasio 1:1 sehingga detail mata majemuk serangga terpotret sangat jelas dari jarak dekat tanpa membuat lensa menyentuh objek.",
    question: "Jenis lensa khusus manakah yang wajib digunakan fotografer tersebut?",
    options: [
      "A. Lensa Ultra Wide Angle (10-18mm).",
      "B. Lensa Telephoto Zoom (70-200mm).",
      "C. Lensa Macro (misal 100mm f/2.8 Macro).",
      "D. Lensa Fisheye 8mm.",
      "E. Lensa Tilt-Shift."
    ],
    answer: ["C"],
    explanation: "Lensa Macro dirancang khusus untuk jarak fokus sangat dekat dengan rasio pembesaran hingga 1:1 (life-size) bagi objek kecil."
  },
  {
    id: 44,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Seorang siswa mengamati histogram foto pada layar LCD kameranya setelah memotret lanskap gunung. Grafik histogram menunjukkan gumpalan garis menumpuk sangat tinggi di dinding paling sebelah kiri grafik, sementara di sisi kanan grafik tampak kosong melompong.",
    question: "Bagaimanakah analisis evaluasi kualitas pencahayaan (exposure) foto berdasarkan data histogram tersebut?",
    options: [
      "A. Foto mengalami overexposure parah (terlalu terang hingga detail highlight hilang).",
      "B. Foto mengalami underexposure parah (terlalu gelap / detail bayangan hilang menjadi hitam pekat).",
      "C. Foto memiliki ketajaman warna sempurna dan exposure berimbang.",
      "D. Kamera mengalami kerusakan pada sensor piksel warna hijau.",
      "E. Lensa kamera terpasang secara terbalik."
    ],
    answer: ["B"],
    explanation: "Histogram menumpuk di dinding kiri menandakan dominasi piksel gelap tanpa detail (shadow clipping / underexposure)."
  },
  {
    id: 45,
    category: "Dasar Fotografi & K3LH",
    type: "complex",
    stimulus: "Selesai melakukan pemotretan di area pantai berangin dan berdebu garam tinggi, peralatan kamera dan lensa harus segera dibersihkan sebelum disimpan. Penyimpanan peralatan fotografi di daerah tropis berkelembapan tinggi tanpa perawatan memicu tumbuhnya jamur lensa (fungus) yang dapat merusak lapisan coating kaca lensa.",
    question: "Pilihlah dua prosedur perawatan alat dan penyimpanan kamera yang TEPAT sesuai standar K3LH perlengkapan!",
    options: [
      "A. Membersihkan debu pasir dengan Blower angin khusus, lalu menyapu kaca lensa dengan blower brush dan kain microfiber khusus.",
      "B. Mencuci kamera dan lensa di bawah kran air mengalir hingga bersih dari garam.",
      "C. Menyimpan kamera dan lensa di dalam Dry Box / Dry Cabinet yang terjaga kelembapannya (RH 45-50%).",
      "D. Menyimpan kamera di dalam tas kain lembap yang ditutup rapat di bawah tempat tidur.",
      "E. Menyemprotkan cairan pembersih kaca jendela rumah langsung ke bagian dalam sensor kamera."
    ],
    answer: ["A", "C"],
    explanation: "Pembersihan dengan blower/microfiber dan penyimpanan dalam Dry Cabinet (RH 45-50%) mencegah tumbuhnya jamur lensa."
  },
  {
    id: 46,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Seorang pembuat konten video DKV sedang mengambil gambar video bergerak mengikuti langkah kaki orang berjalan (walking shot). Ketika menggunakan kamera genggam (handheld) tanpa alat bantu, hasil rekaman videonya sangat guncang (shaky) dan membuat pusing penonton. Ia membutuhkan alat penyeimbang fisik mekanis berbasis motor 3-axis untuk meredam guncangan gerakan tubuhnya.",
    question: "Aksesori pendukung fotografi/videografi manakah yang paling tepat digunakan?",
    options: [
      "A. Tripod Monopod standar.",
      "B. Gimbal / Motorized 3-Axis Stabilizer.",
      "C. Reflector Disc 5-in-1.",
      "D. Softbox Octabox.",
      "E. Flash Speedlite On-Camera."
    ],
    answer: ["B"],
    explanation: "Gimbal 3-axis stabilizer menggunakan motor giroskopik untuk menyeimbangkan kamera dan meredam guncangan pergerakan secara aktif."
  },
  {
    id: 47,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Penggunaan komputer dan monitor laboratorium DKV dalam jangka waktu lama tanpa memperhatikan prinsip Ergonomi K3LH sering menyebabkan keluhan kesehatan siswa, seperti mata lelah/kering, nyeri leher, dan sakit pada pergelangan tangan (Repetitive Strain Injury / RSI).",
    question: "Penataan posisi kerja ergonomis manakah yang TEPAT untuk mencegah gangguan kesehatan tersebut?",
    options: [
      "A. Posisi monitor lebih tinggi dari kepala sehingga mata harus mendongak ke atas 45 derajat.",
      "B. Jarak pandang layar monitor sekitar 50-70 cm, bagian atas monitor sejajar ketinggian mata, dan posisi siku membentuk sudut 90 derajat rileks.",
      "C. Duduk membungkuk tanpa sandaran kursi dengan keyboard diletakkan di pangkuan paha.",
      "D. Menggunakan layar dengan tingkat kecerahan 100% di dalam ruangan yang gelap gulita.",
      "E. Bekerja terus menerus selama 12 jam tanpa mengedipkan mata atau beristirahat."
    ],
    answer: ["B"],
    explanation: "Ergonomi komputer yang benar: jarak monitor 50-70 cm, sejajar ketinggian mata, siku 90°, dan pencahayaan ruangan seimbang."
  },
  {
    id: 48,
    category: "Dasar Fotografi & K3LH",
    type: "complex",
    stimulus: "Seorang fotografer menggunakan mode manual (M) saat memotret panggung konser musik. Lampu sorot panggung mendadak berganti warna dengan sangat cepat dari merah gelap ke putih terang. Fotografer tidak sempat menyesuaikan tombol Shutter Speed dan Aperture secara cepat sehingga banyak momen emas penyanyi yang luput atau terlalu gelap.",
    question: "Pilihlah dua saran penggunaan mode semi-otomatis kamera yang paling cerdas untuk situasi konser dinamis tersebut!",
    options: [
      "A. Menggunakan mode Aperture Priority (Av/A) agar aperture tetap lebar, sementara shutter speed diatur otomatis oleh kamera.",
      "B. Menggunakan mode Shutter Priority (Tv/S) dengan menetapkan batas aman gerakan, serta mengaktifkan fitur Auto ISO.",
      "C. Tetap bertahan pada Mode Manual penuh dan membiarkan foto salah exposure.",
      "D. Mematikan kamera dan menggunakan kamera instan sekali pakai.",
      "E. Menggunakan mode Bulb dengan durasi pencahayaan 10 detik per foto."
    ],
    answer: ["A", "B"],
    explanation: "Mode Av atau Tv yang dipadu Auto ISO memungkinkan fotografer mengontrol satu parameter krusial sementara parameter lain beradaptasi cepat."
  },
  {
    id: 49,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Seorang desainer grafis memotret aset foto produk baju kaos di studio menggunakan kamera digital dengan format simpan file RAW. Klien meminta warna baju pada hasil cetak nanti harus 100% sama presisi dengan kain aslinya di dunia nyata. Rekan desainer menyarankan agar fotografer menempatkan alat pembanding warna standar (Color Checker Chart) pada foto sampel awal sebelum pemotretan dimulai.",
    question: "Mengapa pemotretan alat Color Checker Chart dan format file RAW sangat krusial untuk kalibrasi warna produk tersebut?",
    options: [
      "A. Agar ukuran file foto menjadi kecil sehingga mudah dikirim via WhatsApp.",
      "B. File RAW menyimpan data warna mentah tanpa kompresi, dan Color Checker menjadi acuan profil koreksi warna (White Balance & Color Profile) yang presisi di software komputer.",
      "C. Supaya foto baju otomatis terhapus jika warnanya salah.",
      "D. Agar latar belakang foto baju otomatis menjadi transparan tanpa diedit.",
      "E. Karena aturan standar wajib dari pemerintah bagi pemilik usaha konveksi."
    ],
    answer: ["B"],
    explanation: "Format RAW + Color Checker menyediakan acuan ilmiah mentah untuk mencocokkan profil warna nyata (color accuracy) saat proses post-processing."
  },
  {
    id: 50,
    category: "Dasar Fotografi & K3LH",
    type: "pg",
    stimulus: "Di ruang lab komputer DKV, terjadi korsleting listrik pada salah satu unit CPU yang memercikkan kobaran api kecil pada kabel dan meja kayu. Siswa di dalam lab panik. Sebagai penerapan K3LH kesiapsiagaan tanggap darurat kebakaran (Fire Safety), terdapat tabung Alat Pemadam Api Ringan (APAR) yang terpasang di dinding lab.",
    question: "Jenis APAR manakah yang aman dan tepat digunakan untuk memadamkan kebakaran akibat korsleting peralatan listrik (Kebakaran Kelas C) tersebut?",
    options: [
      "A. APAR Jenis Air (Water Extinguisher) karena mudah menyerap panas.",
      "B. APAR Jenis Busa (Foam Extinguisher) yang berbahan cair basah.",
      "C. APAR Jenis CO2 (Karbon Dioksida) atau Powder Kering (Dry Chemical Powder) yang tidak menghantarkan arus listrik.",
      "D. Menyiramkan ember berisi air dingin ke arah CPU yang menyala.",
      "E. Meniup api menggunakan kipas angin listrik."
    ],
    answer: ["C"],
    explanation: "Kebakaran listrik (Kelas C) wajib diatasi dengan APAR CO2 atau Dry Powder yang bersifat non-konduktif agar tidak memicu sengatan listrik parah."
  }
];