const chat = document.getElementById("chat");
const emptyState = document.getElementById("emptyState");
const question = document.getElementById("question");
const askButton = document.getElementById("askButton");
const clearButton = document.getElementById("clearButton");

// Simpan history percakapan di memori (hilang saat refresh)
let history = [];

// Auto-resize textarea
question.addEventListener("input", () => {
  question.style.height = "auto";
  question.style.height = Math.min(question.scrollHeight, 160) + "px";
});

// Enter untuk kirim, Shift+Enter untuk baris baru
question.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

askButton.addEventListener("click", sendMessage);

clearButton.addEventListener("click", () => {
  history = [];
  chat.innerHTML = "";
  chat.appendChild(emptyState);
  emptyState.style.display = "block";
});

function addBubble(role, text) {
  emptyState.style.display = "none";

  const msg = document.createElement("div");
  msg.className = `msg ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = formatText(text);

  msg.appendChild(bubble);
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  return bubble;
}

function formatText(text) {
  // Render **bold** dari markdown sederhana Gemini, escape HTML dulu
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function showTyping() {
  emptyState.style.display = "none";
  const msg = document.createElement("div");
  msg.className = "msg ai";
  msg.id = "typingIndicator";
  msg.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById("typingIndicator");
  if (el) el.remove();
}

async function sendMessage() {
  const text = question.value.trim();
  if (!text) return;

  addBubble("user", text);
  history.push({ role: "user", text });

  question.value = "";
  question.style.height = "auto";
  askButton.disabled = true;
  showTyping();

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Server error: ${response.status}`);
    }

    hideTyping();
    const answer = data.answer || "AI tidak memberikan jawaban.";
    addBubble("ai", answer);
    history.push({ role: "ai", text: answer });

  } catch (error) {
    console.error("Error:", error);
    hideTyping();
    addBubble("ai", `⚠️ Error: ${error.message}`);
  } finally {
    askButton.disabled = false;
    question.focus();
  }
}