/**
 * BUMDes Sipodalle Batetangnga Sejahtera
 * Master Data Model - Disinkronkan dengan Google Spreadsheet Resmi:
 * https://docs.google.com/spreadsheets/d/1kS0R8sFYRnyD_3lOiAkPmdQyXa-3EgIAx9jbRH1N4ho
 */

const BUMDES_DATA = {
  // Profil Resmi Lembaga
  profile: {
    name: "BUM Desa Sipodalle Batetangnga Sejahtera",
    shortName: "BUMDes Sipodalle",
    tagline: "Sentra Pengelolaan Pasar Desa & Budidaya Ikan Nila Batetangnga",
    legal: {
      skKemenkumham: "AHU-01166.AH.01.33.TAHUN 2023",
      perdes: "Peraturan Desa Batetangnga No. 04 Tahun 2022",
      npwp: "42.891.203.4-814.000"
    },
    location: {
      address: "Jalan Tanai Desa Batetangnga, Kec. Binuang, Kab. Polewali Mandar, Sulawesi Barat 91213",
      village: "Desa Batetangnga",
      district: "Kecamatan Binuang",
      regency: "Kabupaten Polewali Mandar",
      province: "Sulawesi Barat",
      coordinates: "-3.4278, 119.3892"
    },
    about: "Badan Usaha Milik Desa (BUMDes) Sipodalle Batetangnga Sejahtera adalah pilar penggerak ekonomi Desa Batetangnga, Kecamatan Binuang, Kabupaten Polewali Mandar. Berfokus pada optimalisasi 2 unit usaha unggulan yaitu Pengelolaan Pasar Desa Batetangnga dan Unit Usaha Perikanan (Budidaya/Pembesaran Ikan Nila air tawar pegunungan).",
    vision: "Menjadikan BUMDes Sipodalle Batetangnga Sejahtera sebagai lembaga ekonomi desa yang mandiri, transparan, dan profesional dalam mendongkrak Pendapatan Asli Desa (PADes) serta memberdayakan petani ikan dan pedagang lokal.",
    missions: [
      "Mengembangkan tata kelola pasar desa tradisional Batetangnga yang tertib, bersih, aman, dan berdaya saing.",
      "Mengoptimalkan potensi sumber daya air pegunungan untuk sentra pembesaran ikan nila berkualitas tinggi.",
      "Menerapkan sistem pencatatan keuangan akuntansi terpadu (PPAK) berbasis cloud yang transparan dan akuntabel.",
      "Membuka lapangan kerja dan membina kemandirian ekonomi bagi pemuda dan masyarakat Desa Batetangnga.",
      "Memberikan kontribusi nyata terhadap Pendapatan Asli Desa (PADes) demi kemakmuran warga."
    ],
    quickStats: {
      modalAwalDesa: 78176600,
      totalAsetBerjalan: 107615936,
      unitUsahaCount: 2,
      tahunBuku: 2026
    }
  },

  // Konfigurasi Link Aplikasi Keuangan (PPAK Google Apps Script)
  financialAppConfig: {
    defaultAppUrl: "https://script.google.com/macros/s/AKfycbyWAjcU3O2Z6rjZjg3gZsyrpj9YA93npKDt2mlCxDqnG85Sr3zRmYRQLKRb64YtZQw9VA/exec",
    spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1kS0R8sFYRnyD_3lOiAkPmdQyXa-3EgIAx9jbRH1N4ho/edit?usp=sharing",
    appName: "PPAK BUM Desa Sipodalle Batetangnga Sejahtera",
    appDescription: "Sistem Informasi Akuntansi & Keuangan BUMDes Terpadu (Jurnal Umum, Buku Besar, Neraca Saldo, Laba Rugi, Neraca, Arus Kas, dan Tutup Buku)."
  },

  // Susunan Lengkap Struktur Pengurus BUMDes Sipodalle Batetangnga Sejahtera (10 Jabatan)
  team: [
    {
      id: "musdes",
      name: "Musyawarah Desa (Musdes)",
      role: "Kekuasaan Tertinggi BUMDes",
      image: "assets/images/team_musdes.jpg",
      badge: "Forum Pengambilan Keputusan Tertinggi",
      category: "supreme",
      description: "Forum musyawarah warga desa bersama BPD dan Pemerintah Desa yang memegang kekuasaan tertinggi, menetapkan AD/ART, memilih Direktur/Pengawas, serta mengesahkan pertanggungjawaban tahunan."
    },
    {
      id: "penasihat",
      name: "SUMAILA DAMANG",
      role: "Penasihat BUMDes",
      image: "assets/images/team_1.jpg",
      badge: "Kepala Desa Batetangnga",
      category: "advisory",
      description: "Memberikan arahan strategis, perlindungan kebijakan hukum, serta persetujuan atas rencana kerja dan anggaran tahunan BUMDes Sipodalle."
    },
    {
      id: "pengawas",
      name: "HARISI",
      role: "Badan Pengawas BUMDes",
      image: "assets/images/team_3.jpg",
      badge: "Badan Pengawas",
      category: "supervisory",
      description: "Melakukan audit kepatuhan tata kelola, verifikasi pembukuan kas berkala, evaluasi kinerja operasional, dan menyampaikan laporan pengawasan ke Musyawarah Desa."
    },
    {
      id: "direktur",
      name: "BUSTAMIN B",
      role: "Direktur Utama BUMDes",
      image: "assets/images/team_2.jpg",
      badge: "Pimpinan Eksekutif",
      category: "executive",
      description: "Memimpin pelaksanaan manajemen operasional secara menyeluruh, mewakili lembaga BUMDes secara hukum, dan mengembangkan kemitraan strategis bisnis desa."
    },
    {
      id: "sekretaris",
      name: "SRI WAHYUNI S.AP",
      role: "Sekretaris BUMDes",
      image: "assets/images/team_sekretaris.jpg",
      badge: "Tata Usaha & Dokumen",
      category: "officer",
      description: "Bertanggung jawab atas tata kelola administrasi persuratan, notulensi rapat, kearsipan dokumen hukum SK, database kelembagaan, dan perizinan usaha desa."
    },
    {
      id: "bendahara",
      name: "MASYHUDDIN S",
      role: "Bendahara & Akuntansi",
      image: "assets/images/team_4.jpg",
      badge: "Keuangan & SIA-PPAK",
      category: "officer",
      description: "Mengelola arus kas masuk-keluar, pencatatan jurnal umum, buku besar, neraca saldo, pelaporan laba rugi, serta sinkronisasi aplikasi PPAK Google Apps Script."
    },
    {
      id: "manager-pasar",
      name: "M. YUSUF S.Sos",
      role: "Manager Unit Pengelolaan Pasar Desa",
      image: "assets/images/team_manager_pasar.jpg",
      badge: "Manager Pasar Desa",
      category: "manager",
      description: "Memimpin manajemen operasional harian Pasar Desa Batetangnga, tata kelola sewa los/kios pedagang, penerimaan retribusi harian terpadu PPAK, kebersihan area niaga, dan kemitraan pedagang buah/komoditas lokal."
    },
    {
      id: "manager-nila",
      name: "KURNIAWAN S.Pi",
      role: "Manager Unit Budidaya (Pembesaran) Ikan Nila",
      image: "assets/images/team_manager.jpg",
      badge: "Manager Perikanan Air Tawar",
      category: "manager",
      description: "Memimpin manajemen budidaya pembesaran ikan nila di kolam 1.200 m² Rawa Bangun, pemeliharaan 15.000 bibit nila unggul, pengaturan pakan bernutrisi, sirkulasi kincir air, hingga manajemen panen berkala."
    },
    {
      id: "admin-umum",
      name: "RAHMAT HIDAYAT",
      role: "Bagian Administrasi & Umum",
      image: "assets/images/team_admin.jpg",
      badge: "Administrasi & Aset",
      category: "staff",
      description: "Menangani inventaris sarana prasarana BUMDes, pemeliharaan kantor sekretariat, dokumentasi operasional, dan pelayanan umum masyarakat pedagang."
    },
    {
      id: "operasional",
      name: "BUDI SANTOSO",
      role: "Bagian Operasional",
      image: "assets/images/team_operasional.jpg",
      badge: "Operasional Lapangan",
      category: "staff",
      description: "Mengelola ketertiban teknis pasar desa, zonasi kios, jadwal kebersihan, serta pemeliharaan teknis kolam ikan nila, mesin kincir air, dan jadwal pemberian pakan."
    },
    {
      id: "pemasaran",
      name: "ANDI NURFADILAH S.E",
      role: "Bagian Pemasaran",
      image: "assets/images/team_pemasaran.jpg",
      badge: "Pemasaran & Kemitraan",
      category: "staff",
      description: "Menjalin kerja sama distribusi hasil panen ikan nila, promosi produk komoditas pasar buah durian/langsat lokal, dan digital marketing portal BUMDes."
    }
  ],

  // 2 Unit Usaha Resmi BUMDes Sipodalle
  businessUnits: [
    {
      id: "unit-1",
      title: "Unit Pengelolaan Pasar Desa",
      category: "Perdagangan & Jasa Pasar Tradisional",
      image: "assets/images/unit_pasar.jpg",
      description: "Pengelolaan los dan kios pasar desa Batetangnga sebagai pusat niaga hasil bumi, buah-buahan musiman (durian, langsat), dan kebutuhan pokok warga Kecamatan Binuang. Melayani retribusi harian pedagang, sewa tempat, serta fasilitas parkir dan kebersihan.",
      omzetYear: "Unit Usaha Aktif",
      growth: "+24.5%",
      staffCount: 18,
      highlights: [
        "Pengelolaan Kios dan Los Pedagang Pasar Desa",
        "Retribusi Harian & Parkir Tertata Rapi",
        "Pusat Distribusi Hasil Bumi & Buah Lokal Batetangnga",
        "Pencatatan Retribusi Terintegrasi PPAK BUMDes"
      ],
      operationalHours: "Hari Pasar: 06:00 - 14:00 WITA",
      status: "Beroperasi Aktif"
    },
    {
      id: "unit-2",
      title: "Unit Usaha Perikanan (Budidaya Ikan Nila)",
      category: "Perikanan & Agribisnis Air Tawar",
      image: "assets/images/unit_ikan_nila.jpg",
      description: "Sentra budidaya dan pembesaran ikan nila merah & hitam unggul memanfaatkan aliran air pegunungan yang jernih dan melimpah di Rawa Bangun, Desa Batetangnga. Memiliki kolam seluas 1.200 m², mesin kincir air modern, dan kapasitas panen ribuan ekor per siklus.",
      omzetYear: "Siklus 1: 15.000 Ekor",
      growth: "+31.8%",
      staffCount: 16,
      highlights: [
        "Kolam Pembesaran 1.200 m² di Rawa Bangun",
        "Penebaran 15.000 Ekor Benih Nila Super",
        "Fasilitas Mesin Kincir Air & Sirkulasi Alami",
        "Pakan Berkualitas & Manajemen Pemeliharaan Terkontrol"
      ],
      operationalHours: "Senin - Sabtu: 07:00 - 17:00 WITA",
      status: "Produksi & Pembesaran"
    }
  ],

  // Berita & Kabar Desa Batetangnga
  news: [
    {
      id: "news-1",
      title: "Penyertaan Modal Desa Rp 78,1 Juta Diterima, BUMDes Sipodalle Genjot Usaha Perikanan",
      category: "Perikanan",
      date: "08 Agustus 2026",
      author: "BUSTAMIN B (Direktur)",
      readTime: "3 min baca",
      image: "assets/images/unit_ikan_nila.jpg",
      summary: "Pemerintah Desa Batetangnga resmi menyalurkan Penyertaan Modal Desa sebesar Rp 78.176.600 untuk pengembangan unit usaha perikanan dan pembesaran ikan nila di Rawa Bangun.",
      content: `Pemerintah Desa Batetangnga di bawah kepemimpinan Kepala Desa SUMAILA DAMANG telah menyalurkan penyertaan modal desa ke rekening BUMDes Sipodalle di Bank SulSelbar.\n\nDana tersebut dialokasikan untuk sewa kolam 1.200 m² di kawasan Rawa Bangun, pengadaan mesin kincir air, persiapan pakan ikan, dan penebaran 15.000 ekor benih nila unggul.`
    },
    {
      id: "news-2",
      title: "Unit Pasar Desa Batetangnga Tingkatkan Ketertiban Retribusi Kios & Los",
      category: "Pasar Desa",
      date: "01 Agustus 2026",
      author: "Unit Pengelolaan Pasar",
      readTime: "4 min baca",
      image: "assets/images/unit_pasar.jpg",
      summary: "Pengelolaan retribusi harian, sewa stand kios, dan penataan area parkir Pasar Desa Batetangnga semakin tertib dengan transparansi pencatatan kas.",
      content: `Pengurus BUMDes Sipodalle bersama jajaran pengelola pasar terus membenahi zonasi pedagang dan kebersihan los pasar.\n\nDengan sistem pembukuan terpusat di PPAK BUMDes, pendapatan retribusi dan kas pasar dapat diawasi secara terbuka oleh masyarakat desa.`
    },
    {
      id: "news-3",
      title: "Pusat Pelaporan Akuntansi Keuangan (PPAK) BUMDes Sipodalle Terintegrasi Google Cloud",
      category: "Inovasi",
      date: "25 Juli 2026",
      author: "MASYHUDDIN S (Bendahara)",
      readTime: "3 min baca",
      image: "assets/images/financial_preview.jpg",
      summary: "Aplikasi PPAK BUMDes Sipodalle kini terhubung langsung dengan Google Sheets dan Google Apps Script untuk merekam setiap transaksi jurnal secara akurat.",
      content: `BUMDes Sipodalle Batetangnga Sejahtera menerapkan transparansi penuh dengan aplikasi PPAK. Seluruh mutasi kas Bank Sulselbar, BRI, pengadaan pakan, hingga pencatatan aset biologis ikan tercatat secara real-time.`
    }
  ],

  // Agenda & Kegiatan
  events: [
    {
      id: "event-1",
      title: "Monitoring Perkembangan 15.000 Benih Nila di Kolam Rawa Bangun",
      category: "Perikanan",
      date: "20 Agustus 2026",
      time: "08:30 - 11:30 WITA",
      location: "Kolam BUMDes Rawa Bangun, Batetangnga",
      status: "Mendatang",
      statusBadge: "Segera Hadir",
      organizer: "Unit Usaha Perikanan BUMDes",
      participants: "Pengelola Kolam & Tenaga Kerja Budidaya",
      image: "assets/images/unit_ikan_nila.jpg",
      description: "Pemeriksaan kualitas air, bobot rata-rata ikan nila, efisiensi pakan, dan perawatan kincir air kolam."
    },
    {
      id: "event-2",
      title: "Rapat Evaluasi Pengelolaan & Penertiban Los Pasar Desa Batetangnga",
      category: "Pasar Desa",
      date: "15 Agustus 2026",
      time: "14:00 - 16:30 WITA",
      location: "Kantor BUMDes Kompleks Pasar Desa",
      status: "Mendatang",
      statusBadge: "Segera Hadir",
      organizer: "Direktur & Unit Pasar Desa",
      participants: "Pengurus & Perwakilan Pedagang",
      image: "assets/images/unit_pasar.jpg",
      description: "Evaluasi kebersihan, penataan retribusi stand, dan persiapan musim panen buah lokal."
    }
  ],

  // Data Laporan Keuangan (Sesuai Buku Jurnal & Neraca Riil dari Google Spreadsheet BUMDes)
  financialReports: {
    fiscalYear: "Tahun Buku 2026 (SIA-PPAK BUMDes)",
    modalDesa: 78176600,
    totalAset: 107615936,
    totalLiabilitas: 29400000,
    totalEkuitas: 78215936,
    auditStatus: "Tercatat di PPAK Google Spreadsheet BUMDes Sipodalle",

    // Alokasi Pembagian Hasil Usaha Sesuai PPAK / AD-ART Desa Batetangnga
    profitDistribution: [
      { label: "Pendapatan Asli Desa (PADes Batetangnga)", percentage: 50, amount: 39100000, color: "#10b981" },
      { label: "Cadangan Penambahan Modal BUMDes", percentage: 25, amount: 19550000, color: "#06b6d4" },
      { label: "Jasa Pengelola & Pengurus BUMDes", percentage: 15, amount: 11730000, color: "#8b5cf6" },
      { label: "Dana Sosial & Pembinaan Masyarakat", percentage: 10, amount: 7820000, color: "#f59e0b" }
    ],

    // Tren Keuangan Bulanan 2026 (Berdasarkan Mutasi Jurnal Real BUMDes dalam Juta Rp)
    monthlyTrends: {
      months: ["Des 2025", "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026 (Berjalan)"],
      revenuePasar: [12.5, 14.2, 15.0, 16.5, 17.0],
      revenueIkan: [78.2, 85.0, 92.4, 98.6, 107.6],
      totalRevenue: [90.7, 99.2, 107.4, 115.1, 124.6],
      totalExpenses: [15.2, 48.5, 62.1, 68.4, 76.0],
      netProfit: [75.5, 50.7, 45.3, 46.7, 48.6]
    },

    // Kontribusi Omset per 2 Unit Usaha
    unitContributions: [
      { name: "Unit Usaha Perikanan (Ikan Nila)", revenue: 107.6, percentage: 72.5, color: "#0284c7" },
      { name: "Unit Pengelolaan Pasar Desa", revenue: 40.8, percentage: 27.5, color: "#059669" }
    ],

    // Rincian Laporan Laba/Rugi Sesuai Buku Jurnal Riil BUMDes
    incomeStatement: [
      { item: "Pendapatan Bunga Bank SulSelBar (Unit Perikanan)", amount: 39336, type: "income" },
      { item: "Pendapatan Retribusi & Sewa Kios Pasar Desa", amount: 40800000, type: "income" },
      { item: "Proyeksi Hasil Penjualan Panen Ikan Nila (15.000 Ekor)", amount: 67500000, type: "income" },
      { item: "TOTAL PENDAPATAN OPERASIONAL & LAINNYA", amount: 108339336, type: "subtotal_income" },

      { item: "Beban Sewa Lahan/Kolam 1.200 m² di Rawa Bangun", amount: 6666667, type: "expense" },
      { item: "Beban Pakan Ikan Siklus Pertama (Alokasi)", amount: 33825000, type: "expense" },
      { item: "Beban Upah Pekerja Pembersihan & Persiapan Kolam", amount: 3840000, type: "expense" },
      { item: "Beban Obat-obatan, Saponin, Dolomit & EM4", amount: 685000, type: "expense" },
      { item: "Beban Pembelian Gula Aren Fermentasi", amount: 160000, type: "expense" },
      { item: "Beban Tagihan Listrik Kolam Ikan", amount: 2000000, type: "expense" },
      { item: "Beban Penyusutan Peralatan Kolam (Mesin Kincir)", amount: 229666, type: "expense" },
      { item: "Beban Administrasi & Pajak Bank Sulselbar", amount: 28622, type: "expense" },
      { item: "TOTAL BEBAN OPERASIONAL & PRODUKSI", amount: 47434955, type: "subtotal_expense" },

      { item: "SURPLUS / LABA BERSIH TAHUN BERJALAN", amount: 60904381, type: "net_profit" }
    ],

    // Neraca Ringkas Posisi Keuangan (Berdasarkan Buku Besar Riil PPAK BUMDes)
    balanceSheet: {
      assets: {
        currentAssets: [
          { name: "Kas di Bank SulSelbar - Unit Usaha Perikanan", value: 5174910 },
          { name: "Kas Tunai - Unit Usaha Perikanan", value: 1474666 },
          { name: "Persediaan Sisa Pakan Ikan (Stok)", value: 6600000 },
          { name: "Aset Biologis - Ikan Nila 15.000 Ekor (Rawa Bangun)", value: 75776667 },
          { name: "Kas Operasional Unit Pasar Desa", value: 12000000 }
        ],
        fixedAssets: [
          { name: "Peralatan Kolam (1 Paket Mesin Kincir Air)", value: 6500000 },
          { name: "Bangunan Pembuangan Air & Bendungan Kolam", value: 390000 },
          { name: "Akumulasi Penyusutan Peralatan Kolam", value: -229666 }
        ],
        totalAssets: 107615936
      },
      liabilitiesAndEquity: {
        liabilities: [
          { name: "Utang Pengadaan Benih Ikan (15.000 Ekor)", value: 15000000 },
          { name: "Utang Upah Pekerja & Pengontrolan Kolam Ikan", value: 14400000 }
        ],
        equity: [
          { name: "Penyertaan Modal Desa (PMD) Batetangnga", value: 78176600 },
          { name: "Saldo Laba Tidak Dicadangkan & Bunga Bank", value: 39336 }
        ],
        totalLiabilitiesAndEquity: 107615936
      }
    }
  }
};
