[README.md](https://github.com/user-attachments/files/28625148/README.md)
# Coffee Sirpang — Landing Page

Landing page premium dan modern untuk **Coffee Sirpang** dengan tagline **“Kopi Persimpangan”**.

Website ini dibuat dengan pendekatan **mobile-first**, storytelling brand yang kuat, desain elegan, hangat, minimalis, dan fokus pada pengalaman pengguna smartphone.

---

## Tentang Coffee Sirpang

**Coffee Sirpang** bukan sekadar kedai kopi, tetapi ruang pertemuan berbagai cerita, ide, dan perjalanan hidup.

Kata **“Sirpang”** berasal dari bahasa Batak yang berarti **simpang** atau **persimpangan**. Nama ini merepresentasikan filosofi bahwa setiap persimpangan dapat menjadi awal dari cerita baru.

Di Coffee Sirpang, secangkir kopi menjadi alasan untuk berhenti sejenak, bertukar cerita, menemukan inspirasi, dan menentukan arah perjalanan berikutnya.

---

## Tagline

```text
Kopi Persimpangan
```

---

## Tech Stack

Project ini menggunakan:

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **Next Image Optimization**

---

## Fitur Utama

### Mobile-First Design

Website diprioritaskan untuk tampilan smartphone:

- Layout 1 kolom pada mobile
- Sticky navbar
- Hamburger fullscreen menu
- CTA besar dan mudah ditekan
- Gallery horizontal swipe
- Floating WhatsApp button
- Typography nyaman dibaca di layar kecil

### Premium Storytelling Sections

Section yang tersedia:

1. **Hero Section**
   - Headline: “Setiap Persimpangan Punya Cerita.”
   - CTA: Lihat Menu dan Kunjungi Kami

2. **About Section**
   - Cerita brand Coffee Sirpang

3. **Filosofi Nama**
   - Penjelasan arti “Sirpang” dari bahasa Batak

4. **Filosofi Logo**
   - Penjelasan visual makna logo
   - Callout modern mengenai perjalanan hidup, pilihan, pertemuan, dan kualitas

5. **Perjalanan Secangkir Kopi**
   - Timeline storytelling premium:
     - Petani Kopi
     - Roastery
     - Barista
     - Coffee Sirpang
     - Cerita Anda

6. **Signature Selection**
   - Menu unggulan:
     - Espresso
     - Americano
     - Cappuccino
     - Cafe Latte
     - Caramel Latte
     - Croissant

7. **Gallery**
   - Interior
   - Barista
   - Brewing Process
   - Coffee Menu
   - Customer Experience

8. **Why Choose Us**
   - Biji Kopi Berkualitas
   - Barista Berpengalaman
   - Tempat Nyaman untuk Bekerja dan Bersantai
   - Komunitas dan Cerita

9. **Order via WhatsApp**
   - Tombol order langsung ke WhatsApp dengan template pesan otomatis

10. **Location Section**
    - Google Maps embed
    - Alamat
    - Jam operasional
    - Tombol WhatsApp
    - Tombol Google Maps

11. **Footer**
    - Logo
    - Tagline
    - Instagram
    - WhatsApp
    - Email
    - Copyright

---

## Informasi Brand

### Nama Brand

```text
Coffee Sirpang
```

### Tagline

```text
Kopi Persimpangan
```

### Instagram

```text
@coffeesirpang
```

### WhatsApp

```text
+62 813-6408-3093
```

### Alamat

```text
Abdi Tani, simp. Du skpd,
Jalan Lintas Sumatera,
Rambah, Kec. Rambah Hilir,
Kabupaten Rokan Hulu,
Riau 28558
```

---

## Cara Menjalankan Project

Masuk ke folder project:

```powershell
cd D:\coffe-shop
```

Install dependency:

```powershell
npm install
```

Jalankan mode development:

```powershell
npm run dev
```

Buka di browser:

```text
http://localhost:3000
```

---

## Build Production

Untuk membuat build production:

```powershell
npm run build
```

Untuk menjalankan hasil production:

```powershell
npm start
```

---

## Struktur Folder

```text
D:\coffe-shop
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public
│   ├── coffee-sirpang-logo.jpg
│   └── coffee-sirpang-logo-notext.png
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## File Penting

### Halaman Utama

```text
app/page.tsx
```

Berisi seluruh section landing page.

### Style Global

```text
app/globals.css
```

Berisi warna dasar, typography helper, smooth scroll, card style, background pattern, dan responsive behavior.

### Metadata SEO

```text
app/layout.tsx
```

Berisi title, description, keyword, dan Open Graph metadata.

### Logo

```text
public/coffee-sirpang-logo.jpg
```

Logo utama yang digunakan pada navbar, section logo, dan footer.

---

## Cara Mengubah Konten

### Mengubah Menu

Edit array berikut di:

```text
app/page.tsx
```

Cari:

```ts
const menuItems = [...]
```

Contoh item menu:

```ts
{
  name: "Cafe Latte",
  desc: "Lembut dan hangat untuk obrolan yang pelan.",
  price: "IDR 32K",
  image: "https://images.unsplash.com/..."
}
```

---

### Mengubah Gallery

Edit array:

```ts
const gallery = [...]
```

Setiap item memiliki:

```ts
{
  title: "Interior",
  image: "URL_GAMBAR",
  className: ""
}
```

---

### Mengubah Nomor WhatsApp

Cari nomor berikut di:

```text
app/page.tsx
```

```text
6281364083093
```

Ganti dengan nomor WhatsApp baru tanpa tanda `+`.

Contoh:

```text
+62 812-xxxx-xxxx
```

menjadi:

```text
62812xxxxxxxx
```

---

### Mengubah Alamat

Cari bagian alamat di:

```text
app/page.tsx
```

```text
Abdi Tani, simp. Du skpd, Jalan Lintas Sumatera, Rambah, Kec. Rambah Hilir, Kabupaten Rokan Hulu, Riau 28558
```

Ganti dengan alamat terbaru.

---

## SEO

Metadata SEO sudah disiapkan di:

```text
app/layout.tsx
```

Default title:

```text
Coffee Sirpang — Kopi Persimpangan
```

Default description:

```text
Coffee Sirpang adalah ruang pertemuan berbagai cerita, ide, dan perjalanan hidup. Setiap persimpangan punya cerita.
```

---

## Optimasi Mobile

Website ini sudah dibuat mobile-first untuk target layar:

- 320px
- 375px
- 390px
- 414px
- 768px
- Desktop

Optimasi yang diterapkan:

- Mobile sticky navbar
- Fullscreen mobile menu
- Touch-friendly CTA
- Horizontal swipe gallery
- Floating WhatsApp CTA
- Responsive image sizes
- Lazy loading image
- Smooth scroll
- Lightweight animation

---

## Catatan Deployment

Project ini bisa dideploy ke:

- Vercel
- Netlify
- VPS
- Shared hosting yang mendukung Node.js

Rekomendasi paling mudah:

```text
Vercel
```

Karena Next.js berjalan optimal di Vercel.

---

## Brand Mood

Desain website membawa nuansa:

```text
Premium Coffee Shop
Modern Minimalist
Warm & Elegant
Storytelling Brand
Mobile-First Experience
```

Referensi visual:

- % Arabica
- Blue Bottle Coffee
- Starbucks Reserve
- Aesop
- Apple
- Linear
- Notion

---

## Copyright

```text
© 2026 Coffee Sirpang. All rights reserved.
```
