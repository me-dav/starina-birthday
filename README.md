# Bubub's 21st Birthday Scrapbook 💌

Website ucapan ulang tahun personal untuk **Starina Delima Sari (Bubub)**, dari **David**.
Dibangun sebagai website statis: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

Tidak ada backend, database, login, atau API eksternal — semua konten disimpan di file lokal
sehingga aman dan mudah dideploy ke Vercel.

---

## 1. Cara Install Dependency

Pastikan Node.js versi 18 ke atas sudah terpasang, lalu jalankan:

```bash
npm install
```

## 2. Cara Menjalankan Project Secara Lokal

```bash
npm run dev
```

Buka `http://localhost:3000` di browser. Perubahan pada kode akan otomatis ter-refresh.

## 3. Cara Mengganti Foto

1. Masukkan foto baru ke folder `public/images/memories/` (format `.jpg`, `.png`, atau `.webp`).
2. Buka `src/data/memories.ts`.
3. Ubah nilai `image` pada item yang sesuai menjadi path foto baru, misalnya:
   ```ts
   image: "/images/memories/foto-kalian.jpg"
   ```
4. Ganti juga `alt` (deskripsi singkat untuk aksesibilitas), `title`, `caption`, `date`,
   dan `location` sesuai kenangan yang sebenarnya.

Foto hero (di halaman pembuka) ada di `public/images/memories/hero-photo.jpg`, dipanggil dari
`src/components/BirthdayHero.tsx`. Ganti file tersebut dengan foto polaroid kalian berdua.

## 4. Cara Menambah atau Menghapus Kenangan

Semua foto scrapbook diatur lewat array `memories` di `src/data/memories.ts`.

- **Menambah foto**: tambahkan object baru ke dalam array, dengan `id` yang unik.
- **Menghapus foto**: hapus object yang sesuai dari array.
- Jumlah foto sepenuhnya fleksibel — komponen gallery akan menyesuaikan otomatis.

Setiap item punya properti opsional `rotation` (kemiringan polaroid dalam derajat) dan
`pinColor` (`"blue" | "navy" | "cream" | "brown"`) supaya susunan terlihat natural, bukan rapi kaku.

## 5. Cara Mengganti Lagu

1. Masukkan file audio yang legal (milik sendiri atau berlisensi) ke `public/audio/`.
2. Buka `src/data/songs.ts` dan ubah/tambah object lagu:
   ```ts
   {
     id: "nama-unik",
     title: "Judul Lagu",
     artist: "Nama Penyanyi",
     cover: "/images/songs/cover-kamu.jpg",
     audio: "/audio/lagu-kamu.mp3",
     description: "Kenapa lagu ini spesial.",
   }
   ```
3. Cover lagu ditaruh di `public/images/songs/`.
4. Jika `audio` kosong atau file gagal dimuat, card lagu akan menampilkan pesan ramah alih-alih error.

> ⚠️ Jangan gunakan file lagu dari sumber ilegal atau tautan streaming tanpa izin.
> File audio saat ini (`heaven.mp3`, `placeholder.mp3`) hanyalah placeholder senyap
> — **wajib diganti** dengan file yang legal sebelum publish.

## 6. Cara Mengganti Ucapan

Semua teks utama (judul hero, intro, label section, surat ulang tahun, pesan penutup) ada di:

```
src/data/site-content.ts
```

Timeline perjalanan hubungan ada di file terpisah:

```
src/data/timeline.ts
```

Cari bagian yang ingin diubah, edit teksnya langsung — tidak perlu menyentuh file komponen.

## 6b. Cara Mengganti Undangan Dinner

Section undangan dinner (tampil setelah Birthday Letter) diatur lewat object `dinner` di
`src/data/site-content.ts`:

```ts
dinner: {
  place: "Nama restoran / lokasi",
  date: "Tanggal dinner",
  time: "Jam dinner",
  dresscode: "Dresscode",
  mapsUrl: "https://maps.google.com/?q=...",
  qrImage: "/images/dinner-qr.png",
}
```

Setelah mengganti `mapsUrl` ke lokasi yang benar, generate ulang QR code-nya dan simpan sebagai
`public/images/dinner-qr.png` (bisa pakai situs pembuat QR code apa pun, atau library `qrcode`
di Python/Node). QR code saat ini masih mengarah ke lokasi placeholder.

## 7. Cara Mengganti Warna

Semua warna diatur lewat CSS variables di `src/app/globals.css`, pada blok `@theme`:

```css
@theme {
  --color-cream: #F8F1E5;
  --color-navy: #1D3557;
  --color-baby-blue: #BFDCEB;
  /* ...dst */
}
```

Ubah nilai hex-nya, dan seluruh website (button, teks, background, border) akan otomatis
mengikuti karena semua komponen memakai utility class Tailwind seperti `bg-navy`, `text-cream`, dll.

## 8. Cara Build

```bash
npm run build
```

Perintah ini akan mengecek TypeScript, menjalankan ESLint, dan meng-compile website menjadi
build produksi. Pastikan tidak ada error sebelum deploy.

Untuk mencoba hasil build secara lokal:

```bash
npm run start
```

## 9. Cara Deploy ke Vercel

1. Push project ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com) → **New Project** → pilih repository tersebut.
3. Vercel akan otomatis mendeteksi framework Next.js — tidak perlu mengubah konfigurasi apa pun.
4. Klik **Deploy**. Tidak ada environment variable yang dibutuhkan.
5. Setiap kali ada `git push` ke branch utama, Vercel akan otomatis melakukan deployment ulang.

---

## Struktur Folder Penting

```text
src/
├── app/              → layout & halaman utama
├── components/       → semua komponen UI (kecil & reusable)
├── data/              → SEMUA konten yang bisa diedit (foto, lagu, teks, timeline)
├── types/             → tipe data TypeScript
└── lib/               → helper functions (format waktu, dsb.)

public/
├── images/            → foto memories, cover lagu, dekorasi
└── audio/             → file lagu
```

Prinsip utama: **edit konten cukup di folder `src/data/` dan folder `public/`.**
Tidak perlu membuka atau mengubah file komponen hanya untuk mengganti isi website.

## Checklist Sebelum Publish

- [ ] Ganti semua foto dummy di `public/images/memories/` dengan foto asli.
- [ ] Ganti foto hero di `public/images/memories/hero-photo.jpg`.
- [ ] Ganti semua `caption`, `title`, `date` yang masih bertuliskan `TODO` di `src/data/memories.ts`.
- [ ] Ganti file audio placeholder dengan lagu yang legal, dan lengkapi nama penyanyi di `src/data/songs.ts`.
- [ ] Personalisasi ulang teks di `src/data/site-content.ts` dan `src/data/timeline.ts`.
- [ ] Ganti detail undangan dinner (`dinner` di `site-content.ts`) dan regenerate QR code-nya.
- [ ] Jalankan `npm run build` — pastikan tidak ada error.
- [ ] Cek tampilan di HP (mobile) sebelum dikirim ke Bubub. 💙
