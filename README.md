# Adelia Putri Pratiwi — Personal Portfolio Website

Portfolio website profesional untuk **Adelia Putri Pratiwi**, *Information Systems Graduate* dengan fokus utama pada **Data Analytics & Business Intelligence** (serta Web Development sebagai *supporting skill*).

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

1. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Build untuk Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Struktur Data & Konten

Seluruh konten dan data CV dipisahkan dari komponen UI di direktori `src/data/`:
- `src/data/profile.ts`: Profil pribadi, bio, kontak, media sosial, dan tautan CV.
- `src/data/projects.ts`: Skripsi / Final Project (Case Study 01–09), Proyek Celerates, Analisis Sentimen Tring, dan Proyek Akademik.
- `src/data/experience.ts`: Riwayat pengalaman profesional dan studi independen (PT. Mitra Talenta Grup, PT. Imersa Solusi Teknologi).
- `src/data/organization.ts`: Riwayat organisasi di Koordinator UKM UPN Veteran Jawa Timur.
- `src/data/education.ts`: Informasi pendidikan formal (UPN Veteran Jawa Timur, IPK 3.84) dan daftar *coursework*.
- `src/data/skills.ts`: Keahlian teknis (Database, ETL, BI & Visualisasi, Programming, Web, Tools, Soft Skills).
- `src/data/certifications.ts`: Sertifikasi BNSP Junior Web Programmer.

---

## 🖼️ Menambahkan Asset Asli (CV, Screenshot, Sertifikat)

- **File CV PDF:** Letakkan file PDF Anda di `public/cv/Adelia-Putri-Pratiwi-CV.pdf`.
- **Screenshot Proyek:** Letakkan tangkapan layar dashboard atau sistem di `public/images/`.
- **Sertifikat BNSP:** Letakkan foto/scan sertifikat di `public/certificates/`.

---

## 🌐 Deploy ke Vercel (Gratis & Cepat)

1. Upload / Push repository ini ke akun GitHub Anda (`adelialiae`).
2. Masuk ke [vercel.com](https://vercel.com) dan pilih **Add New Project**.
3. Import repository GitHub Anda.
4. Klik **Deploy** (Pengaturan Next.js akan terdeteksi otomatis tanpa perlu konfigurasi tambahan).

