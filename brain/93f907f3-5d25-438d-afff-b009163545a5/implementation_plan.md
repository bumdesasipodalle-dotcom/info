# Rencana Implementasi Website BUMDes Modern & Interaktif

Website BUMDes (Badan Usaha Milik Desa) dirancang dengan estetika visual modern, elegan, kekinian (glassmorphism, gradient dinamis, mikro-animasi, dark/light mode), dan responsif penuh di perangkat desktop maupun smartphone.

## 🌟 Fitur Utama & Struktur Menu

1. **Dashboard (Beranda)**
   - **Hero Section**: Slogan interaktif, visual branding BUMDes modern, tombol aksi cepat (Akses Aplikasi Keuangan, Jelajahi Unit Usaha).
   - **Statistik Utama (Live Counter)**: Total Omzet, Tenaga Kerja Desa, Unit Usaha Aktif, Kontribusi PADes (Pendapatan Asli Desa).
   - **Unit Usaha Unggulan**: Kartu showcase unit bisnis BUMDes (Wisata Desa, Toko Pertanian/Saprotan, Pengolahan Sampah, Jasa PPOB/Internet Desa).
   - **Sorotan Berita & Agenda**: Cuplikan informasi terbaru.
   - **Quick CTA & Kontak Cepat**: Akses mudah untuk kemitraan dan informasi warga.

2. **Profil BUMDes**
   - **Tentang & Sejarah Singkat**: Latar belakang pendirian dan legalitas badan hukum Kemenkumham.
   - **Visi & Misi**: Kartu interaktif tujuan strategis BUMDes.
   - **Struktur Organisasi**: Bagan tim kepengurusan (Penasihat/Kades, Pengawas, Direktur BUMDes, Sekretaris, Bendahara, Manajer Unit Usaha) dengan kartu profil dan foto.
   - **Katalog Unit Usaha Lengkap**: Rincian layanan, produk, dan potensi kemitraan.

3. **Berita & Artikel Desa**
   - Daftar berita dan pengumuman dengan filter kategori (Ekonomi, Pemberdayaan, Inovasi, Kerjasama).
   - Pencarian berita interaktif (real-time search).
   - Modal Pembaca Berita (Full Reading Modal) dengan format rapi dan responsif.

4. **Kegiatan & Agenda**
   - Jadwal dan agenda kegiatan mendatang (Pelatihan UMKM, Musyawarah Desa/Musdes, Bazar Produk Desa).
   - Timeline kegiatan yang telah selesai beserta dokumentasi galeri foto interaktif (lightbox view).
   - Status badge kegiatan: *Selesai*, *Berlangsung*, *Mendatang*.

5. **Laporan Keuangan & Integrasi Aplikasi Eksternal**
   - **Transparansi Keuangan**: Grafik interaktif (Chart.js) perkembangan pendapatan, laba bersih, dan alokasi PADes per unit usaha.
   - **Tabel Rekapitulasi**: Ringkasan laporan Laba/Rugi, Arus Kas, dan Neraca publik yang dapat diunduh (Simulasi PDF/Excel).
   - **FITUR KHUSUS - Integrasi Link Aplikasi Keuangan**:
     - Kartu banner khusus & tombol direct link menuju sistem/aplikasi keuangan yang Anda miliki.
     - Fitur konfigurasi link fleksibel (bisa diatur URL tujuan langsung, misal: `https://keuangan.bumdes.id` atau aplikasi lokal/cloud).
     - Modal panduan akses dan autentikasi cepat ke aplikasi keuangan.

---

## 🎨 Desain & Teknologi

- **Bahasa & Framework**: HTML5 Semantik, Vanilla CSS3 Modern (CSS Variables, Flexbox/Grid, Glassmorphism, Micro-interactions), JavaScript Modern (ES6+ modular).
- **Libraries**:
  - `Chart.js` (Visualisasi data transparansi keuangan interaktif).
  - `Lucide Icons` / `FontAwesome` (Ikonografi modern dan tajam).
  - `Google Fonts` (Plus Jakarta Sans & Outfit untuk tipografi elegan).
- **Fitur UX Tambahan**:
  - Dark Mode & Light Mode switcher.
  - Smooth SPA tab switching tanpa reload halaman.
  - Tampilan responsif sempurna (Mobile, Tablet, Desktop).

---

## 📁 Struktur Berkas Proyek (`bumdes-app`)

Lokasi proyek akan dibuat di: `C:\Users\Acer\.gemini\antigravity\scratch\bumdes-app\`

```
bumdes-app/
├── index.html              # Halaman utama dengan arsitektur SPA modular
├── css/
│   ├── style.css           # Styling utama, design system, tema gelap/terang, animasi
│   └── responsive.css      # Aturan tata letak responsif untuk mobile/tablet
├── js/
│   ├── data.js             # Data awal BUMDes (Unit Usaha, Berita, Agenda, Pengurus, Keuangan)
│   ├── charts.js           # Inisialisasi dan logika interaktif grafik keuangan (Chart.js)
│   └── app.js              # Routing menu, event handlers, modal, pencarian & filter, setting link
└── assets/
    └── images/             # Gambar & ikon pendukung visual
```

---

## 🔍 Rencana Verifikasi

1. **Uji Navigasi & Menu**: Memastikan perpindahan antar menu (Dashboard, Profil, Berita, Kegiatan, Laporan Keuangan) berjalan mulus tanpa error.
2. **Uji Fitur Khusus Link Aplikasi Keuangan**: Memastikan tombol link aplikasi keuangan berfungsi membuka URL tujuan serta mendukung penggantian URL melalui modal konfigurasi.
3. **Uji Visualisasi Grafik**: Memverifikasi grafik keuangan (pendapatan, laba, kontribusi) dirender dengan tepat menggunakan Chart.js.
4. **Uji Fitur Interaktif**: Verifikasi pencarian berita, filter kategori kegiatan, modal baca berita, dan tema gelap/terang.
5. **Uji Responsivitas**: Memastikan tampilan optimal di resolusi desktop, tablet, dan smartphone.
