
StudyMate AI

Asisten belajar berbasis AI yang membantu menjelaskan materi pelajaran secara singkat dan mudah dipahami. Dibangun dengan Node.js + Express di sisi server dan terhubung ke Gemini API untuk menghasilkan jawaban.

✨ Fitur
💬 Antarmuka chat dengan bubble percakapan (mirip aplikasi chat modern)
🧠 Mengingat konteks percakapan sebelumnya (multi-turn conversation)
⚡ Indikator "sedang mengetik" saat AI memproses jawaban
🔄 Tombol untuk memulai percakapan baru
📱 Desain responsif dan minimalis
📸 Tampilan

![Uploading Screenshot (1184).png…]()

Contoh percakapan menjelaskan konsep algoritma pemrograman

🛠️ Teknologi yang Digunakan
Frontend: HTML, CSS, JavaScript (Vanilla)
Backend: Node.js, Express.js
AI Model: Google Gemini API (@google/genai)
🚀 Cara Menjalankan
1. Clone repository
git clone https://github.com/gavinadhif/studymate-ai.git
cd studymate-ai
2. Install dependencies
npm install
3. Setup environment variable

Buat file .env di root project, lalu tambahkan API key Gemini kamu:

GEMINI_API_KEY=your_api_key_here

Dapatkan API key gratis di Google AI Studio.

4. Jalankan server
node server.js
5. Buka di browser
https://studymate-ai-snsf.vercel.app/
📁 Struktur Project
studymate-ai/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── screenshots/
│   └── demo.png
├── server.js
├── vercel.json
├── package.json
├── .env
└── .gitignore
📝 Cara Penggunaan
Ketik pertanyaan atau materi yang ingin dipelajari pada kotak input
Tekan Enter atau klik tombol kirim
AI akan memberikan penjelasan berdasarkan pertanyaan kamu
Lanjutkan bertanya — AI akan mengingat konteks percakapan sebelumnya
Klik "Percakapan Baru" untuk memulai topik yang berbeda
🌐 Live Demo

studymate-ai-snsf.vercel.app

📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran pribadi.
