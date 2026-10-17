# Website SMA Nusantara Unggul (HTML, CSS, & JavaScript Murni)

Website profil dan sistem informasi Penerimaan Peserta Didik Baru (PPDB) **SMA Nusantara Unggul**. Proyek ini dibuat menggunakan **HTML5, CSS3, dan Vanilla JavaScript murni tanpa framework backend (tanpa PHP, tanpa Laravel, tanpa database, dan tanpa dependensi build tools seperti Node.js/npm/Vite)** sehingga dapat langsung dibuka di peramban (browser) dan sangat mudah diunggah ke GitHub atau di-hosting melalui GitHub Pages.

---

## 1. Struktur Folder Proyek

```
darel-ilmi-html/
├── index.html           # Halaman Beranda / Home
├── profil.html          # Halaman Profil Sekolah & Visi Misi
├── pendaftaran.html     # Halaman Informasi PPDB, Alur, Syarat, Dokumen, & Jadwal
├── formulir.html        # Halaman Formulir Pendaftaran Siswa Baru (Simulasi)
├── css/
│   └── style.css        # Stylesheet CSS3 murni (Tema Deep Violet, responsif mobile-first)
├── js/
│   ├── main.js          # Skrip global (navigasi sticky, drawer mobile, animasi scroll reveal)
│   └── formulir.js      # Skrip validasi formulir client-side & simulasi receipt sukses
├── assets/
│   ├── icons/
│   │   └── logo.svg     # Logo vektor sekolah
│   └── images/          # Aset gambar lokal (arsitektur & fasilitas sekolah, tanpa manusia)
│       ├── gedung-sekolah.jpg       # Fasad eksterior kampus utama
│       ├── ruang-kelas.jpg          # Ruang kelas modern & meja belajar rapi
│       ├── lab-komputer.jpg         # Laboratorium komputer
│       ├── perpustakaan.jpg         # Perpustakaan sekolah & ruang baca
│       ├── lab-ipa.jpg              # Laboratorium praktikum sains & IPA terpadu
│       ├── gedung-olahraga.jpg      # Gedung olahraga serbaguna indoor
│       ├── ruang-seni.jpg           # Ruang pameran karya seni & studio
│       ├── auditorium.jpg           # Aula & auditorium sekolah
│       ├── ruang-musik.jpg          # Ruang latihan musik & studio akustik
│       └── gedung-administrasi.jpg  # Gedung pelayanan administrasi PPDB
└── README.md            # Dokumentasi proyek & panduan instalasi/hosting
```

---

## 2. Fitur & Halaman Website

1. **`index.html` (Beranda)**
   - **Hero Section**: Tag status PPDB TA 2026/2027, headline utama, deskripsi sekolah, tombol aksi langsung menuju formulir, serta foto gedung sekolah arsitektural tanpa orang.
   - **Panduan Akses Cepat**: 3 kartu navigasi khusus untuk Calon Siswa, Siswa Aktif, dan Tenaga Pendidik.
   - **Keunggulan Sekolah**: 4 kartu pilar keunggulan (Kurikulum STEAM, Pendidik Berdedikasi, Karakter & Disiplin, Pendampingan Belajar).
   - **Profil Singkat**: Narasi komprehensif, kartu visi-misi ringkas, dan tautan ke halaman profil.
   - **Fasilitas Belajar**: 4 kartu foto fasilitas dengan rasio 4:3 (Lab Komputer, Perpustakaan, Lab IPA Terpadu, Gedung Olahraga & Seni).
   - **Kabar Sekolah**: 3 kartu publikasi kegiatan dengan rasio 16:9 dan penanda placeholder transparan.
   - **Call to Action (CTA)**: Ajakan bergabung menuju pendaftaran daring.

2. **`profil.html` (Profil Sekolah)**
   - **Breadcrumb**: Navigasi hirarkis `Beranda / Profil Sekolah`.
   - **Mengenal Sekolah**: Narasi sejarah, komitmen mutu, dan budaya sekolah.
   - **Visi & Misi Terpadu**: Visi utama sekolah dan 4 poin misi pembinaan karakter serta akademik.
   - **Prinsip & Nilai Pembelajaran**: Prestasi Akademik, Pengembangan Karakter, Literasi Digital, dan Kreativitas & Kolaborasi.
   - **Dokumentasi Fasilitas**: Galeri lingkungan belajar bersih dan modern.

3. **`pendaftaran.html` (Informasi Pendaftaran PPDB)**
   - **Pengantar PPDB TA 2026/2027**: Informasi resmi bagi lulusan SMP/MTs sederajat.
   - **Tahapan Alur Pendaftaran**: 4 tahapan berurutan (01 Pengisian Formulir, 02 Verifikasi Berkas, 03 Pemetaan Minat & Bakat, 04 Pengumuman & Daftar Ulang).
   - **Persyaratan Calon Siswa**: Ketentuan kelulusan, batas usia, komitmen tata tertib, dan asesmen.
   - **Dokumen yang Perlu Disiapkan**: 5 daftar dokumen fisik (Ijazah/SKL legalisir, KK & Akta, Rapor SMP sem 1-5, Pas foto, Piagam prestasi).
   - **Jadwal Penerimaan**: Estimasi alur gelombang pendaftaran dengan label transparan *"Informasi jadwal akan diperbarui"*.

4. **`formulir.html` (Formulir Pendaftaran Siswa Baru - Simulasi)**
   - **Bagian A: Data Calon Siswa**: Nama lengkap, Tempat & Tanggal lahir, Jenis kelamin (kartu radio), Alamat tinggal, Asal sekolah, dan Tahun kelulusan (4 digit).
   - **Bagian B: Data Orang Tua / Wali**: Nama wali, Nomor telepon/WhatsApp aktif, Alamat email (opsional).
   - **Bagian C: Peminatan & Konfirmasi**: Pilihan program (MIPA, IPS, Bahasa & Budaya) dan Checkbox persetujuan simulasi tugas sekolah.
   - **Validasi Formulir Interaktif (Client-Side)**:
     - Memeriksa kelengkapan input wajib secara langsung.
     - Memvalidasi format email, nomor telepon (minimal 10 digit angka), dan tahun (4 digit).
     - Menampilkan tanda peringatan merah & pesan kesalahan berbahasa Indonesia tepat di bawah kolom yang bermasalah.
     - Scroll otomatis ke kolom pertama yang keliru.
   - **Simulasi Pengiriman Sukses (Tanpa Database)**:
     - Menyembunyikan form dan menampilkan **Kartu Bukti Pendaftaran (Receipt Demo)** dengan ringkasan data yang diinput pengguna.
     - Menjelaskan secara jujur dan transparan bahwa data tidak disimpan ke basis data permanen.
     - Tombol *"Isi Formulir Lagi"* untuk mereset dan mencoba kembali simulasi.

---

## 3. Desain & Aksesibilitas (Design System)

- **Warna Utama**: Deep Violet (`#6C5CE7`), Hover (`#5848D6`), Aksen Lembut (`#F8F9FE`), Kartu Putih (`#FFFFFF`), Teks Utama (`#25233A`), Teks Sekunder (`#77758B`), Border (`#E8E7F1`).
- **Warna Status**: Sukses (`#20A779`), Peringatan/Placeholder (`#F0A43A`), Error Validasi (`#E45B68`).
- **Tipografi**: *Plus Jakarta Sans* dari Google Fonts (400, 500, 600, 700, 800).
- **Responsif**: Menggunakan media query CSS murni (Smartphone 360px–640px, Tablet 768px, Desktop 1024px–1280px).
- **Aksesibilitas**:
  - Skip link untuk navigasi keyboard (`Lompat ke konten utama`).
  - Label HTML terhubung penuh dengan input melalui atribut `for` dan `id`.
  - Atribut ARIA (`aria-expanded`, `aria-label`) pada tombol navigasi seluler.
  - Mendukung preferensi `@media (prefers-reduced-motion: reduce)`.
- **Foto**: Menggunakan foto Unsplash arsitektur dan fasilitas kosong (tanpa manusia/makhluk hidup) dengan fallback otomatis jika koneksi lambat.

---

## 4. Cara Menjalankan Website Secara Lokal

Website ini bersifat statis murni sehingga **tidak memerlukan instalasi server atau terminal**.

### Cara 1: Buka Langsung (Paling Mudah)
1. Buka File Manager di komputer Anda.
2. Masuk ke dalam folder `darel-ilmi-html`.
3. Klik dua kali (double-click) pada file `index.html`.
4. Website akan langsung terbuka di browser Anda (Google Chrome, Firefox, Safari, Microsoft Edge).

### Cara 2: Menggunakan Ekstensi Live Server (VS Code)
1. Buka folder `darel-ilmi-html` di Visual Studio Code.
2. Klik kanan pada file `index.html`.
3. Pilih **"Open with Live Server"**.

### Cara 3: Menggunakan Python (Opsional)
Jika Anda memiliki Python di komputer:
```bash
cd darel-ilmi-html
python3 -m http.server 8000
```
Buka peramban di `http://localhost:8000`.

---

## 5. Panduan Mengunggah ke GitHub & Mengaktifkan GitHub Pages

Karena proyek ini tidak memiliki folder `vendor/` atau `node_modules/`, Anda dapat mengunggahnya langsung ke GitHub:

### Langkah 1: Inisialisasi Git
Buka terminal di dalam folder `darel-ilmi-html`:
```bash
cd darel-ilmi-html
git init
git add .
git commit -m "Initial commit: Website SMA Nusantara Unggul Pure HTML CSS JS"
```

### Langkah 2: Hubungkan ke Repositori GitHub
1. Buat repositori baru di akun GitHub Anda (misalnya dengan nama `sma-nusantara-unggul`).
2. Jalankan perintah:
```bash
git branch -M main
git remote add origin https://github.com/<username-anda>/<nama-repo-anda>.git
git push -u origin main
```

### Langkah 3: Mengaktifkan GitHub Pages (Hosting Gratis)
1. Buka halaman repositori Anda di GitHub.
2. Masuk ke tab **Settings** > **Pages** (di bilah navigasi sebelah kiri).
3. Pada bagian **Build and deployment** > **Branch**:
   - Pilih branch: `main`
   - Pilih folder: `/ (root)`
4. Klik **Save**.
5. Tunggu sekitar 1–2 menit, GitHub akan memberikan tautan website online Anda (misalnya: `https://<username>.github.io/<nama-repo>/`).

---

## 6. Keterangan Konversi Backend ke Frontend

| Fitur Asli di Laravel | Implementasi di Versi HTML/CSS/JS Murni |
| :--- | :--- |
| **Routing Laravel (`routes/web.php`)** | Digantikan dengan tautan HTML statis murni (`index.html`, `profil.html`, `pendaftaran.html`, `formulir.html`). |
| **Blade Components & Layout (`@extends`, `@include`)** | Digabungkan langsung ke dalam struktur semantik HTML5 di setiap file mandiri. |
| **Tailwind CSS v4 + Vite Build** | Digantikan dengan file `css/style.css` murni dengan variabel CSS yang identik secara visual. |
| **Laravel Form Request Validation (`$request->validate()`)** | Digantikan dengan modul validasi Vanilla JavaScript (`js/formulir.js`) dengan pesan kesalahan dinamis. |
| **Session Flash Success (`with('simulation_success', ...)`)** | Digantikan dengan DOM state switching di JavaScript yang menampilkan kartu bukti pendaftaran instan. |
| **Penyimpanan Database** | Ditangani secara transparan sebagai simulasi demonstrasi antarmuka untuk tugas sekolah tanpa backend. |

---

&copy; 2026 SMA Nusantara Unggul. Dibuat untuk keperluan tugas sekolah.

