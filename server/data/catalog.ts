import type { Course, Track } from '~~/shared/types/catalog'

// Public catalog as listed on pawang.io/courses and pawang.io/tracks on 2026-09-23.
export const courses: Course[] = [
  { slug: 'chatgpt-buat-semua', title: 'ChatGPT buat Semua Orang', tagline: 'Dari belum punya akun sampai chat pertama yang kepake.', level: 'Dasar', minutes: 35, lessons: 4 },
  { slug: 'kenalan-ai-prompt', title: 'Kenalan sama AI & Prompt', tagline: 'Ngerti alatnya dulu, sebelum belajar makenya.', level: 'Dasar', minutes: 35, lessons: 4 },
  { slug: 'dasar-prompting', title: 'Dasar Prompting', tagline: 'Mulai dari nol, langsung praktik.', level: 'Dasar', minutes: 55, lessons: 6 },
  { slug: 'chatgpt-harian', title: 'ChatGPT buat Kerjaan Harian', tagline: 'Nulis, ngerapiin, cari ide, belajar.', level: 'Dasar', minutes: 40, lessons: 4 },
  { slug: 'pakai-ai-dengan-aman', title: 'Pakai AI dengan Aman & Jujur', tagline: 'Biar cepat nggak berubah jadi masalah.', level: 'Dasar', minutes: 35, lessons: 4 },
  { slug: 'nulis-tugas-akhir', title: 'Nulis Skripsi Lebih Cepat', tagline: 'Dari riset sampai revisi, tanpa begadang.', level: 'Menengah', minutes: 62, lessons: 6 },
  { slug: 'bikin-konten-ai', title: 'Bikin Konten dengan AI', tagline: 'Caption, hook, script, tanpa kehilangan gaya kamu.', level: 'Menengah', minutes: 55, lessons: 4 },
  { slug: 'mastering-prompting', title: 'Mastering Prompting', tagline: 'Nyuruh AI mikir bertahap, dan ngajarin lewat contoh.', level: 'Menengah', minutes: 50, lessons: 4 },
  { slug: 'advanced-prompting', title: 'Advanced Prompting', tagline: 'Motong kerjaan besar, dan mastiin jawabannya bener.', level: 'Mahir', minutes: 55, lessons: 4 },
]

export const tracks: Track[] = [
  { slug: 'chatgpt-buat-pemula', title: 'ChatGPT buat Pemula', description: 'Alur belajar buat kamu yang belum pernah pakai sama sekali. Dari bikin akun sampai pakai buat kerjaan harian dengan aman.', minutes: 165, lessons: 18, courses: 4 },
  { slug: 'mastering-prompting', title: 'Mastering Prompting for Everyone', description: 'Alur belajar lengkap dari nol sampai teknik lanjutan. Nggak ada satu pun materi yang butuh coding.', minutes: 195, lessons: 18, courses: 4 },
  { slug: 'buat-mahasiswa', title: 'Buat Mahasiswa', description: 'Alur belajar buat kamu yang lagi dikejar deadline skripsi dan tugas kuliah.', minutes: 117, lessons: 12, courses: 2 },
  { slug: 'buat-kreator', title: 'Buat Kreator Konten', description: 'Alur belajar buat kamu yang ngurus konten dan harus posting terus tiap minggu.', minutes: 110, lessons: 10, courses: 2 },
]

// Stands in for the database round trip the real site makes.
export const catalogLatencyMs = 300
