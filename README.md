# StudyMate AI

Asisten belajar berbasis AI yang membantu menjelaskan materi pelajaran secara singkat dan mudah dipahami. Dibangun dengan Node.js + Express di sisi server dan terhubung ke Gemini API untuk menghasilkan jawaban.

## ✨ Fitur

- 💬 Antarmuka chat dengan bubble percakapan (mirip aplikasi chat modern)
- 🧠 Mengingat konteks percakapan sebelumnya (multi-turn conversation)
- ⚡ Indikator "sedang mengetik" saat AI memproses jawaban
- 🔄 Tombol untuk memulai percakapan baru
- 📱 Desain responsif dan minimalis

## 📸 Tampilan

<!--
Cara menambahkan screenshot:
1. Buat folder baru bernama "screenshots" di root repo kamu
2. Upload gambar hasil screenshot ke folder tersebut (misal: screenshots/demo.png)
3. Ganti path di bawah ini sesuai nama file kamu
-->

![Screenshot (1184).png] 

*Contoh percakapan menjelaskan konsep algoritma pemrograman*

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **AI Model**: Google Gemini API (`@google/genai`)

## 🚀 Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/username/studymate-ai.git
cd studymate-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variable

Buat file `.env` di root project, lalu tambahkan API key Gemini kamu:

```env
GEMINI_API_KEY=your_api_key_here
```

> Dapatkan API key gratis di [Google AI Studio](https://aistudio.google.com/apikey).

### 4. Jalankan server

```bash
node server.js
```

### 5. Buka di browser

```
https://studymate-ai-snsf.vercel.app/
```

## 📁 Struktur Project

```
studymate-ai/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
├── .env
└── .gitignore
```

## 📝 Cara Penggunaan

1. Ketik pertanyaan atau materi yang ingin dipelajari pada kotak input
2. Tekan **Enter** atau klik tombol kirim
3. AI akan memberikan penjelasan berdasarkan pertanyaan kamu
4. Lanjutkan bertanya — AI akan mengingat konteks percakapan sebelumnya
5. Klik **"Percakapan Baru"** untuk memulai topik yang berbeda

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran pribadi.
