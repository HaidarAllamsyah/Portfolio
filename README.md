# Panduan Website Portfolio Haidar Allamsyah

Dokumen ini menjelaskan isi website, lokasi file yang perlu diedit, dan langkah untuk mengubah, menambah, atau menghapus konten. Website dibuat dengan React, TypeScript, Vite, Tailwind CSS, React Router, dan Framer Motion. Data proyek, profil, pengalaman, dan skill disimpan terpisah dari tampilan agar mudah diperbarui.

## Daftar isi

- [Mulai mengedit](#mulai-mengedit)
- [Peta struktur project](#peta-struktur-project)
- [Mengubah isi website](#mengubah-isi-website)
- [Menambah, mengubah, dan menghapus proyek](#menambah-mengubah-dan-menghapus-proyek)
- [Mengubah navigasi](#mengubah-navigasi)
- [Menambah atau menghapus halaman](#menambah-atau-menghapus-halaman)
- [Mengubah tampilan](#mengubah-tampilan)
- [Menjalankan dan membuat file HTML](#menjalankan-dan-membuat-file-html)
- [Hosting di GitHub Pages](#hosting-di-github-pages)
- [Catatan penting](#catatan-penting)

## Mulai mengedit

1. Buka folder project ini di VS Code.
2. Edit file sumber di dalam folder `src/` atau aset di dalam `public/`.
3. Jangan mengedit `dist/portfolio.html` secara langsung. File itu adalah hasil build dan perubahan di dalamnya akan tertimpa saat dibuat ulang.
4. Setelah mengubah konten, jalankan website lokal untuk memeriksa hasilnya. Jika ingin memperbarui versi yang dibuka langsung, buat ulang HTML standalone.

## Peta struktur project

| Lokasi | Isi dan kegunaan |
| --- | --- |
| `src/config/site.ts` | Sumber utama nama, gelar, bio, pendidikan, minat, email, media sosial, CV, metadata, dan tautan navigasi. |
| `src/data/projects.ts` | Semua data proyek. Satu data proyek dipakai oleh galeri, pencarian, filter, proyek pilihan di Home, serta halaman detail. |
| `src/data/skills.ts` | Daftar kategori skill dan tingkat kemampuan yang ditampilkan di About. |
| `src/data/experience.ts` | Daftar pengalaman yang ditampilkan di halaman Experience. |
| `src/types/` | Aturan bentuk data TypeScript. Contohnya kategori proyek dan jenis pengalaman yang diizinkan. |
| `src/pages/` | Isi dan susunan setiap halaman website. |
| `src/components/layout/` | Bagian layout bersama seperti Navbar, Footer, dan pembungkus halaman. |
| `src/components/projects/` | Komponen kartu, grid, dan filter proyek. |
| `src/components/ui/` | Komponen UI umum seperti tombol, card, tag, dan judul section. |
| `src/app/router.tsx` | Daftar route/URL dan halaman yang ditampilkan untuk setiap route. |
| `src/index.css` | Warna global, font, latar belakang, efek glass, dan style dasar. |
| `src/App.css` | Style tambahan aplikasi. |
| `public/` | Aset publik, termasuk gambar proyek. File di sini dirujuk dengan path seperti `/images/projects/nama-proyek/cover.jpg`. |
| `index.html` | Kerangka HTML dan metadata dasar yang dipakai saat build. |
| `vite.config.ts`, `vite.standalone.config.ts` | Konfigurasi build website biasa dan build HTML standalone. |
| `scripts/build-standalone.mjs` | Menggabungkan JavaScript dan CSS menjadi `dist/portfolio.html`, serta menyesuaikan path aset publik. |
| `dist/` | Hasil build; dibuat otomatis dan tidak digunakan untuk mengedit konten. |

## Mengubah isi website

### Profil, Home, dan About

Buka `src/config/site.ts` untuk mengubah informasi yang dipakai di beberapa halaman:

- `name`, `firstName`, `lastName`: nama di Navbar, footer, dan profil.
- `title`: gelar atau profesi.
- `tagline`: kalimat pendek di Home dan About.
- `heroHeadline`: baris judul besar di hero Home.
- `bio`: biografi di halaman About. Pisahkan paragraf dengan satu baris kosong.
- `education`: pendidikan, institusi, lokasi, dan perkiraan kelulusan.
- `interests`: daftar minat di About.
- `email`: alamat email untuk tombol kontak. Isi dengan alamat aktif agar tautan email dan form berfungsi.
- `social`: tautan GitHub, LinkedIn, Instagram, Behance, dan ArtStation. Isi URL lengkap, misalnya `https://...`; tautan yang kosong tidak ditampilkan.
- `cvPath`: path CV di dalam `public/`, misalnya `/files/cv.pdf`. Tambahkan file CV ke lokasi itu juga.
- `siteTitle`, `siteDescription`, `siteUrl`, `ogImage`: informasi metadata website.

Home juga menampilkan proyek dengan `featured: true` dari `src/data/projects.ts` dan pengalaman dari `src/data/experience.ts`. Isi deskripsi section/markup dan susunan section Home di `src/pages/HomePage.tsx`. Daftar minat yang memiliki ikon dan keterangan tambahan di Home ada di konstanta `interestDetails` pada file yang sama.

### Projects dan halaman detail

Ubah daftar proyek di `src/data/projects.ts`; panduan lengkapnya ada di [Menambah, mengubah, dan menghapus proyek](#menambah-mengubah-dan-menghapus-proyek). Judul/subjudul halaman galeri dan susunan filternya berada di `src/pages/ProjectsPage.tsx`. Galeri Projects memakai `src/components/projects/CinematicProjectGallery.tsx`: scroll menggerakkan rangkaian kartu, hover/fokus menonjolkan kartu, dan klik membuka detail proyek dengan transisi visual. Di layar sentuh, ketuk kartu sekali untuk memilih lalu ketuk lagi untuk membuka. Preferensi reduced-motion mengganti susunan bergerak menjadi daftar kartu statis yang tetap dapat dibuka. Filter, pencarian, dan urutan proyek tetap berasal dari data yang sama. Halaman detail bersama berada di `src/pages/ProjectDetailPage.tsx`.

### Skills

Edit `src/data/skills.ts`:

- Ubah `label` untuk mengganti nama kategori.
- Ubah `skills` untuk menambah, mengedit, atau menghapus skill.
- `level` dapat berupa `learning`, `familiar`, `proficient`, atau `advanced`.
- Untuk menambah kategori baru, tambahkan objek baru ke array `skillCategories`. Gunakan `id` unik.

### Experience

Edit `src/data/experience.ts`. Setiap objek dalam array `experiences` menjadi satu kartu di halaman Experience. Buka `src/pages/ExperiencePage.tsx` hanya jika ingin mengubah susunan tampilan atau interaksi accordion; konten pengalaman diubah di file data, bukan di komponen.

```ts
{
  id: 'internship-studio',
  type: 'internship',
  position: '3D Artist Intern',
  organization: 'Nama Studio',
  location: 'Surabaya, Indonesia',
  startDate: 'January 2025',
  endDate: 'June 2025',
  description: 'Ringkasan pengalaman.',
  responsibilities: ['Membuat aset 3D untuk proyek.'],
  achievements: ['Menyelesaikan aset sesuai target.'],
  tags: ['Blender', '3D Art'],
}
```

`type` yang tersedia: `internship`, `organization`, `event`, `volunteer`, `freelance`, atau `academic`. Isi `responsibilities` dengan detail yang ditampilkan saat kartu dibuka dan `tags` dengan highlight/fokus. Untuk pengalaman yang masih berjalan, gunakan `current: true` dan hilangkan `endDate`; jika periode hanya satu tahun, cukup isi `startDate` dan hilangkan `endDate`. Hapus satu objek dari array untuk menghapus pengalaman tersebut. Data awal sudah mencakup Immersive Fiesta 2026 dan 2025, 3MT 2026–2027, serta internship CV New Idea Indonesia.

### Contact, Navbar, dan Footer

- Ubah judul, teks, atau susunan halaman Contact di `src/pages/ContactPage.tsx`. Alamat email dan sosialnya berasal dari `src/config/site.ts`.
- Form Contact hanya membuka aplikasi email pengunjung dengan pesan yang sudah diisi. Website ini tidak menyimpan atau mengirim pesan melalui server.
- Tautan menu di Navbar dan Footer berasal dari `navLinks` di `src/config/site.ts`.
- Tombol “Let's talk” Navbar mengarah ke `/contact` dan ditulis langsung di `src/components/layout/Navbar.tsx`.
- Isi footer dan ikon sosial dirender di `src/components/layout/Footer.tsx`.

### Halaman lain dan teks antarmuka

- `src/pages/AboutPage.tsx`: susunan bagian About.
- `src/pages/ExperiencePage.tsx`: susunan editorial, animasi, dan accordion Experience.
- `src/pages/NotFoundPage.tsx`: tampilan URL yang tidak ditemukan.
- Teks, tombol, dan section statis diubah pada file halaman/komponen yang menampilkannya. Untuk menemukan pemilik teks, cari teks tersebut melalui pencarian global VS Code (`Ctrl+Shift+F`).

## Menambah, mengubah, dan menghapus proyek

### Menambahkan proyek

1. Siapkan media di folder proyek dalam `public/images/projects/`. Untuk 11 proyek yang sudah ada, gunakan path pada tabel [Folder media proyek yang tersedia](#folder-media-proyek-yang-tersedia); untuk proyek baru, Anda bisa membuat `public/images/projects/<slug>/`. Buat subfolder yang dibutuhkan lalu salin media menggunakan Explorer atau VS Code.
2. Tambahkan satu objek ke array `projects` di `src/data/projects.ts`.
3. Isi `thumbnail` dengan path dari folder `public`, diawali `/`. Path yang benar untuk contoh tadi: `/images/projects/robot-arm/cover.jpg`.
4. Isi `gallery` jika proyek memiliki foto atau video tambahan. Contoh untuk file lokal dan gambar online ada di bagian [Menambahkan foto dan video proyek](#menambahkan-foto-dan-video-proyek).
5. Atur `featured: true` bila proyek perlu muncul di Home. Atur `featuredOrder` untuk menentukan urutan proyek unggulan (angka kecil muncul lebih dahulu).
6. Jalankan build untuk memastikan tidak ada kesalahan TypeScript.

Contoh data minimal:

```ts
{
  id: 'robot-arm',
  slug: 'robot-arm',
  title: 'Robot Arm',
  shortDescription: 'Desain dan animasi lengan robot 3D.',
  overview: 'Deskripsi proyek yang lebih lengkap.',
  categories: ['3D Art & Modeling'],
  technologies: ['Blender'],
  thumbnail: '/images/projects/robot-arm/cover.jpg',
  gallery: [
    {
      type: 'image',
      src: '/images/projects/robot-arm/detail.jpg',
      alt: 'Detail model lengan robot',
      caption: 'Detail model',
    },
  ],
  featured: true,
  featuredOrder: 1,
  coverStyle: 'dark',
}
```

Setiap `id` dan `slug` harus unik. `slug` hanya boleh berisi huruf kecil, angka, dan tanda hubung, tanpa spasi; slug menjadi alamat detail seperti `/projects/robot-arm`. Kategori harus cocok dengan salah satu tipe di `src/types/project.ts`. Untuk menambahkan kategori baru, tambahkan juga nilainya ke `ProjectCategory` di file tersebut.

Properti lain yang dapat digunakan antara lain `subtitle`, `year`, `role`, `contributions`, `status` (`completed`, `in-progress`, atau `archived`), `process`, `challenge`, `objective`, `outcome`, `detailSections`, `heroImage`, `video`, `videoThumbnail`, `sortOrder`, `collaborators`, dan `externalLinks`. Lihat tipe lengkap di `src/types/project.ts`. Hanya isi informasi yang benar dan tautan yang masih aktif.

Untuk thumbnail yang berotasi otomatis, isi `thumbnailSlides` dengan daftar path gambar. Saat ini hanya kartu Gotcha yang memakai dua banner; kartu proyek lain tetap memakai `thumbnail` tunggal.

Saat ini ada 11 proyek di gallery. Detail setiap proyek tersedia otomatis di `/projects/<slug>` (standalone: `portfolio.html#/projects/<slug>`). Proyek unggulan Home dipilih dengan `featured: true` di data; urutannya diatur dengan `featuredOrder`. Semua kartu, category filters, search, dan rekomendasi proyek menggunakan data yang sama. Informasi yang belum diketahui dibiarkan kosong agar tidak menampilkan tahun, teknologi, link, atau kontribusi rekaan.

### Folder media proyek yang tersedia

Folder berikut sudah dibuat di dalam repository. Foto dan video lokal bisa disimpan di folder proyek yang sesuai; file `.gitkeep` hanya menjaga folder kosong tetap tercatat sampai media ditambahkan.

| Proyek | Slug halaman detail | Folder media |
| --- | --- | --- |
| Red Threshold | `red-threshold` | `public/images/projects/red-threshold/` |
| Lho Awas | `lho-awas` | `public/images/projects/lho-awas/` |
| VirtuCare | `virtucare` | `public/images/projects/virtucare/` |
| Galaxy Mall Treasure Hunt | `galaxy-mall-treasure-hunt` | `public/images/projects/galaxy-mall-treasure-hunt/` |
| Antigravity Marketplace / Lapak 3D | `antigravity-marketplace` | `public/images/projects/lapak-3d/` |
| Gotcha | `gotcha` | `public/images/projects/gotcha/` |
| Nasihat Mau di Pos Ronda | `nasihat-mau-di-pos-ronda` | `public/images/projects/nasihat-mau-di-pos-ronda/` |
| Cut Nyak Dien — Projection Mapping | `cut-nyak-dien-projection-mapping` | `public/images/projects/cut-nyak-dien/` |
| 360° Virtual Tour — Taman Harmoni | `taman-harmoni-virtual-tour` | `public/images/projects/taman-harmoni-virtual-tour/` |
| 3D Product Modeling — Bottle / Tumbler | `3d-product-modeling-bottle-tumbler` | `public/images/projects/3d-product-bottle/` |
| SMK Senopati — AI Promotional Video | `smk-senopati-ai-promo` | `public/images/projects/smk-senopati-ai-promo/` |

Folder media dapat berbeda dari slug halaman detail. Gunakan path folder yang tercantum di tabel saat menaruh file. Untuk contoh Red Threshold, thumbnail yang sudah tersedia ada di `public/images/projects/red-threshold/Thumbnail_Red.jpeg`; path data-nya adalah `/images/projects/red-threshold/Thumbnail_Red.jpeg`. Video Nasihat Mau di Pos Ronda saat ini ada di `public/images/projects/nasihat-mau-di-pos-ronda/jadi nichh.mp4` dan direferensikan dari `gallery` proyek tersebut.

### Menambahkan foto dan video proyek

Data media proyek diatur pada objek proyek di `src/data/projects.ts`: `thumbnail` adalah gambar cover kartu/detail, `gallery` adalah daftar foto atau video tambahan, dan properti `video` (jika dipakai oleh tampilan proyek) adalah video proyek utama. Video pada `gallery` muncul di halaman detail proyek, bukan sebagai pemutar pada kartu di halaman `/projects`; kartu tetap menggunakan `thumbnail`. Gunakan path lokal atau URL online pada properti tersebut sesuai contoh di bawah. File lokal diletakkan di `public/`; file di folder ini ikut tersalin saat build.

**Foto lokal di repository**

Simpan foto di folder proyek, misalnya:

```text
public/
└── images/
    └── projects/
        └── robot-arm/
            ├── cover.jpg
            ├── detail.jpg
            └── process.png
```

Di `src/data/projects.ts`, gunakan path mulai dari `/` (jangan menulis `public` di dalam path). Foto di galeri dapat diklik untuk membuka tampilan besar; gunakan tombol panah kiri/kanan untuk berpindah dan Escape atau tombol X untuk menutup:

```ts
thumbnail: '/images/projects/robot-arm/cover.jpg',
gallery: [
  {
    type: 'image',
    src: '/images/projects/robot-arm/detail.jpg',
    alt: 'Tampilan detail robot arm',
    caption: 'Detail model',
  },
  {
    type: 'image',
    src: '/images/projects/robot-arm/process.png',
    alt: 'Proses pembuatan model',
  },
],
```

Misalnya file berada di `public/images/projects/robot-arm/cover.jpg`, nilai `src`/`thumbnail`-nya adalah `/images/projects/robot-arm/cover.jpg`. Nama file dan folder harus sama persis, termasuk huruf besar-kecil. Format foto umum seperti `.jpg`, `.png`, dan `.webp` dapat dipakai. Untuk thumbnail, pilih gambar yang masih terlihat jelas saat dipotong menjadi kartu.

**Foto online**

Gunakan URL langsung ke file gambar, bukan URL halaman web yang menampilkan gambar:

```ts
thumbnail: 'https://contoh.com/gambar/robot-arm-cover.jpg',
gallery: [
  {
    type: 'image',
    src: 'https://contoh.com/gambar/robot-arm-detail.jpg',
    alt: 'Tampilan detail robot arm',
  },
],
```

Pastikan layanan sumber mengizinkan gambar ditampilkan dari website lain dan URL-nya dapat diakses publik. Gambar online memerlukan koneksi internet. Untuk kontrol dan keandalan jangka panjang, lebih baik unduh gambar yang memang Anda miliki atau berhak gunakan, lalu simpan di `public/images/projects/<slug>/`.

**Video lokal**

Simpan video di dalam folder proyek, misalnya `public/images/projects/robot-arm/animation.mp4`, kemudian tambahkan item video ke `gallery`:

```ts
gallery: [
  {
    type: 'video',
    src: '/images/projects/robot-arm/animation.mp4',
    poster: '/images/projects/robot-arm/cover.jpg',
    caption: 'Animasi robot arm',
  },
],
```

Gunakan format video web seperti `.mp4` (H.264) agar lebih banyak browser dapat memutarnya. File video berukuran besar membuat repository dan hasil build lebih besar; kompres video sebelum memasukkannya. Properti `poster` opsional dan menunjuk ke gambar pratinjau. Saat menjalankan `pnpm build:standalone`, aset di `public/` disalin ke folder `dist/` dan path-nya disesuaikan agar bisa dibuka dari `file://`. Karena itu, jangan memindahkan `portfolio.html` sendirian: pertahankan folder `dist/images/` (dan folder aset lain yang dihasilkan) di samping HTML. Untuk video lokal, salin/bagikan folder `dist/` beserta HTML-nya.

**Video YouTube**

Jangan masukkan URL halaman video biasa (seperti URL YouTube `watch` atau link Google Drive `/view`) sebagai `type: 'video'`: itu bukan file video langsung. `type: 'video'` hanya untuk file media seperti MP4. Untuk menampilkan pemutar video pihak ketiga langsung di galeri, gunakan `type: 'embed'` dengan URL embed resminya. Contoh Google Drive:

```ts
gallery: [
  {
    type: 'embed',
    src: 'https://drive.google.com/file/d/FILE_ID/preview',
    alt: 'Video proyek',
    caption: 'Video proyek',
  },
],
```

Untuk YouTube, gunakan URL embed `https://www.youtube.com/embed/VIDEO_ID`. Pastikan video dapat diakses dan pemiliknya mengizinkan embedding. Embed memerlukan internet. Video dari Google Drive harus memiliki izin berbagi yang mengizinkan pengunjung melihatnya; path `/preview` akan menampilkan player Drive di galeri.

Jika menghapus atau mengganti media, ubah/hapus item terkait dari `thumbnail`, `gallery`, `video`, atau `externalLinks` di objek proyek `src/data/projects.ts`. File lokal tidak dihapus otomatis: hapus file dari `public/images/projects/<slug>/` hanya jika sudah tidak dipakai oleh proyek lain.

### Mengubah proyek

Cari objek dengan `id` atau `slug` yang sesuai di `src/data/projects.ts`, lalu ubah nilai yang diperlukan. `heroImage` opsional untuk gambar detail yang berbeda dari `thumbnail`; jika kosong, halaman detail menggunakan thumbnail. `detailSections` opsional untuk bagian bernama khusus. `video` dan `videoThumbnail` opsional untuk menampilkan video pada galeri. Jika belum memiliki file media, biarkan `thumbnail` kosong dan `gallery` kosong; website menampilkan placeholder kartu dan menyembunyikan galeri. Jika mengubah `slug`, URL detail proyek juga berubah; perbarui tautan lain yang mengarah ke slug lama.

### Menghapus proyek

Hapus objek proyek yang bersangkutan dari array `projects` di `src/data/projects.ts`. Kartu di galeri, hasil pencarian/filter, proyek unggulan Home, dan halaman detail akan mengikuti data yang tersisa secara otomatis. File gambar tidak terhapus otomatis: setelah memastikan gambar itu tidak dipakai di tempat lain, hapus secara manual folder proyek terkait di `public/images/projects/`.

## Mengubah navigasi

Edit array `navLinks` di `src/config/site.ts`. Setiap item berbentuk `{ label, href }`; misalnya `{ label: 'About', href: '/about' }`. Daftar ini dipakai oleh Navbar dan Footer.

Menghapus tautan dari `navLinks` hanya menyembunyikan link dari menu, **bukan** menghapus route/halamannya. Sebaliknya, menambahkan link ke sini saja tidak membuat halaman baru. Untuk menghapus atau menambah halaman secara keseluruhan, ikuti langkah pada bagian berikutnya. Jika menghapus halaman Contact, periksa juga tombol CTA Navbar yang ditulis di `src/components/layout/Navbar.tsx`.

## Menambah atau menghapus halaman

Halaman terdiri dari file tampilan dan route yang didaftarkan di `src/app/router.tsx`.

### Menambah halaman

1. Buat komponen halaman baru di `src/pages/`, misalnya `PortfolioPage.tsx`.
2. Tambahkan lazy import dan route URL yang sesuai di `src/app/router.tsx`.
3. Tambahkan `{ label: 'Portfolio', href: '/portfolio' }` ke `navLinks` di `src/config/site.ts` jika halaman perlu muncul di menu dan footer.
4. Jalankan `pnpm build` dan `pnpm build:standalone`, lalu buka URL halaman untuk memeriksa hasilnya. File standalone memakai URL hash (contoh `portfolio.html#/portfolio`).

### Menghapus halaman

1. Hapus entri route dan lazy import-nya dari `src/app/router.tsx`.
2. Hapus tautannya dari `navLinks` di `src/config/site.ts`.
3. Hapus file halaman hanya jika tidak dipakai oleh import lain.
4. Periksa tautan/tombol yang masih menuju URL tersebut, lalu jalankan build.

Jangan hapus route tanpa menghapus tautan yang masih mengarah ke sana. Jangan menghapus hanya tautan menu jika tujuannya adalah benar-benar meniadakan halaman.

## Mengubah tampilan

- Warna global, font, latar belakang berlapis, tekstur, dan style dasar: `src/index.css`.
- Layout dan ukuran responsif pada halaman: file terkait di `src/pages/` dan `src/components/`.
- Navbar: `src/components/layout/Navbar.tsx`.
- Footer: `src/components/layout/Footer.tsx`.
- Kartu, tombol, tag, dan komponen bersama: `src/components/ui/` atau `src/components/projects/`.
- Gambar hero yang sudah ada: `src/assets/hero.png`.
- Seluruh halaman memakai tema terang warm-neutral secara default. Halaman detail proyek memiliki palet khusus yang ditentukan berdasarkan slug di `src/pages/ProjectDetailPage.tsx`: Red Threshold merah, Nasihat Mau di Pos Ronda bernuansa malam berbintang, Bottle/Tumbler biru muda, Lapak 3D ungu, dan Gotcha lime. Aturan warna per halaman berada di `src/index.css`; halaman lain memakai latar terang dan permukaan glass yang lembut.
- Aksen detail proyek diambil otomatis dari warna dominan gambar `heroImage`, `thumbnail`, slide thumbnail pertama, atau foto galeri pertama. Jika proyek belum punya gambar, file tidak dapat dibaca, atau sumber online tidak mengizinkan pembacaan pixel, aksen kembali ke lime default. Pastikan gambar lokal disimpan di `public/` agar bisa dianalisis saat HTML standalone dibuka.
- Halaman detail menggunakan cover besar berdampingan dengan ringkasan editorial. Halaman Projects memakai rangkaian kartu tanpa bingkai/mask container, berukuran lebih ringkas, bergerak mengikuti scroll, dan memakai layout statis yang responsif untuk reduced-motion; data tetap di `src/data/projects.ts`.
- Semua halaman detail memakai permukaan liquid glass dan warna teks dengan kontras konsisten; jangan menambahkan override umum berbasis substring class seperti `[class*="text-white"]`.
- Transisi shared visual dari kartu galeri ke cover detail memakai `layoutId` yang sama di `src/components/projects/CinematicProjectGallery.tsx` dan `src/pages/ProjectDetailPage.tsx`, dikelompokkan di `src/app/App.tsx`. `src/app/RouteTransitionLayout.tsx` mengatur layout route; jangan menambahkan `AnimatePresence` yang membuat beberapa halaman tetap terpasang bersamaan.

Saat mengubah tampilan, cek juga ukuran layar ponsel dan desktop agar layout adaptive tetap nyaman dan tidak menimbulkan scroll horizontal.

## Menjalankan dan membuat file HTML

Project menggunakan pnpm (terdapat `pnpm-lock.yaml`) dan membutuhkan Node.js 20.19+ atau 22.12+.

```sh
pnpm install
pnpm dev
```

Buka alamat lokal yang ditampilkan Vite di terminal. Perubahan kode akan terlihat saat development server berjalan. Pemeriksaan:

```sh
pnpm build
pnpm lint
```

Untuk membuat website yang dapat dibuka langsung tanpa development server:

```sh
pnpm build:standalone
```

Setelah proses berhasil, buka `dist/portfolio.html` dengan browser. Jika file itu sudah pernah dibuat, build standalone akan memperbaruinya dengan isi terbaru. Pertahankan aset dalam folder `dist/` di samping HTML agar foto/video lokal tetap tampil. Route internal di file ini menggunakan hash (misalnya `portfolio.html#/projects` dan `portfolio.html#/about`). Google Fonts memerlukan koneksi internet.

## Hosting di GitHub Pages

Website ini menggunakan Vite dan React, sehingga `index.html` di root adalah kerangka sumber dan tidak bisa dipublikasikan langsung sebagai halaman jadi. Workflow `.github/workflows/deploy-pages.yml` membangun versi standalone, menyalinnya menjadi `dist/index.html`, lalu menerbitkan seluruh folder `dist/` ke GitHub Pages.

Untuk mengaktifkan deployment:

1. Push project ke branch `main`.
2. Buka **Settings → Pages** di repository GitHub.
3. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
4. Buka tab **Actions** dan tunggu workflow **Deploy portfolio to GitHub Pages** berhasil.

Setiap push berikutnya ke `main` akan memicu deployment baru. Versi HTML standalone menggunakan route hash, jadi navigasi dan halaman detail tetap bekerja pada GitHub Pages tanpa aturan rewrite tambahan.

## Catatan penting

- Edit sumber di `src/` dan `public/`, bukan file hasil build di `dist/`.
- Data proyek terpusat di satu array; jangan membuat salinan data proyek terpisah untuk Home atau galeri.
- Jika satu perubahan konten tidak terlihat, pastikan file yang diedit benar dan jalankan ulang build standalone sebelum membuka `dist/portfolio.html`.
- Jangan memasukkan kredensial, kata sandi, atau API key rahasia ke konfigurasi frontend; semua isi yang dibundel ke website dapat dilihat pengunjung.
