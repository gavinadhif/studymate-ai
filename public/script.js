const question = document.getElementById("question");
const askButton = document.getElementById("askButton");
const answer = document.getElementById("answer");
const loading = document.getElementById("loading");

askButton.addEventListener("click", async () => {
  const text = question.value.trim();

  // Cek pertanyaan kosong
  if (!text) {
    answer.textContent = "Silakan masukkan pertanyaan terlebih dahulu.";
    return;
  }

  // Tampilkan loading
  loading.classList.remove("hidden");
  answer.textContent = "";
  askButton.disabled = true;

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: text
      })
    });

    // Ambil response dari backend
    const data = await response.json();

    console.log("Response dari server:", data);

    // Kalau server mengembalikan error
    if (!response.ok) {
      throw new Error(
        data.error || `Server error: ${response.status}`
      );
    }

    // Tampilkan jawaban AI
    answer.textContent = data.answer || "AI tidak memberikan jawaban.";

  } catch (error) {
    console.error("Error:", error);

    // Tampilkan error asli supaya mudah dicek
    answer.textContent = `Error: ${error.message}`;

  } finally {
    loading.classList.add("hidden");
    askButton.disabled = false;
  }
});