// TODO: Ini bisa diganti sesuai preferensi kamu.
// Semua teks utama website ada di sini, jadi tidak perlu masuk ke komponen
// hanya untuk mengganti nama, tanggal, atau ucapan.

export const siteContent = {
  recipientName: "Starina Delima Sari",
  nickname: "Bubub",
  senderName: "David",
  birthdayAge: 21,
  relationshipDate: "28 Juni 2025",
  relationshipDateShort: "28.06.2025",

  // --- Navigation ---
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#timeline" },
    { label: "Memories", href: "#memories" },
    { label: "Songs", href: "#songs" },
    { label: "Letter", href: "#letter" },
  ],

  // --- 1. Hero ---
  hero: {
    eyebrow: "A little scrapbook of us",
    titleLine1: "Happy 21st Birthday,",
    titleLine2: "Starina Delima Sari",
    forLine: "Untuk Bubub,",
    fromLine: "dari David",
    ctaLabel: "Buka Kenangan",
  },

  // --- 2. Intro ---
  intro: {
    label: "A small letter from David",
    paragraphs: [
      "Hari ini adalah hari spesial untuk seseorang yang sangat berarti buatku.",
      "Selamat ulang tahun yang ke-21, Bubub. Aku membuat halaman kecil ini untuk menyimpan beberapa kenangan, cerita, dan perasaan yang mungkin tidak selalu bisa aku sampaikan dengan sempurna secara langsung.",
    ],
  },

  // --- 3. Timeline ---
  timeline: {
    label: "Our Story",
    title: "Perjalanan Kita",
  },

  // --- 4. Memories ---
  memories: {
    label: "Scrapbook",
    title: "Memory Gallery",
    subtitle: "Beberapa kepingan kecil yang aku simpan baik-baik.",
  },

  // --- 5. Songs ---
  songs: {
    label: "Playlist",
    title: "Favorite Songs",
    subtitle: "Lagu yang selalu berhasil mengingatkanku padamu.",
  },

  // --- 6. Letter ---
  letter: {
    label: "For Bubub",
    title: "Birthday Letter",
    signature: "Dengan cinta,\nDavid",
    body: [
      "Selamat ulang tahun yang ke-21, Bubub.",
      "Terima kasih karena sudah menjadi bagian dari hari-hariku. Mungkin tidak semua hari berjalan sempurna, dan mungkin aku juga belum selalu menjadi seseorang yang paling sempurna untukmu.",
      "Tapi aku ingin kamu tahu bahwa kehadiranmu sangat berarti buatku. Ada banyak hal kecil tentang kamu yang selalu berhasil membuat hari-hariku terasa lebih baik.",
      "Di usia yang baru ini, aku berharap kamu selalu dikelilingi hal-hal baik, diberi kesehatan, dimudahkan dalam mengejar semua impianmu, dan tetap menjadi Starina yang aku kenal.",
      "Semoga kita masih bisa membuat lebih banyak cerita, melewati lebih banyak hari, dan menyimpan lebih banyak kenangan bersama.",
      "Sekali lagi, selamat ulang tahun, Bubub.",
    ],
  },

  // --- Dinner Invitation (tampil setelah Birthday Letter) ---
  // TODO: Ganti place, date, time, dresscode, dan mapsUrl sesuai rencana dinner sebenarnya.
  dinner: {
    label: "You're Invited",
    title: "Fine Dinning",
    message:
      "Sebagai penutup hari ini, aku ingin mengajakmu makan malam berdua. Cuma kita berdua, seperti biasa.",
    place: "PAREA - Urban Eatery, Surabaya",
    date: "29 Agustus 2026",
    time: "19.30 WIB",
    dresscode: "Blue & Cream",
    mapsUrl: "https://maps.app.goo.gl/rC9QMYA5buRMkEyC9",
    qrImage: "/images/qr.png",
    rsvpNote: "Cukup datang dengan senyum terbaikmu.",
  },

  // --- 7. Closing ---
  closing: {
    en: ["This is only a small page,", "for someone who means so much to me.", "Happy birthday, Bubub."],
    id: ["Ini hanya halaman kecil,", "untuk seseorang yang begitu berarti buatku.", "Selamat ulang tahun, Bubub."],
    dateNote: "forever one of my favorite dates",
  },
}
