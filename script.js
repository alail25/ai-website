function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = userInput.value;

  if (!userText) return;

  const userMsg = `<div><strong>Kamu:</strong> ${userText}</div>`;
  chatBox.innerHTML += userMsg;

  let botReply = "Maaf, aku belum mengerti itu.";

  if (userText.toLowerCase().includes("halo")) {
    botReply = "Halo juga! Ada yang bisa aku bantu?";
  } else if (userText.toLowerCase().includes("siapa kamu")) {
    botReply = "Aku adalah AI sederhana buatan kamu!";
  } else if (userText.toLowerCase().includes("makasih")) {
    botReply = "Sama-sama!";
  }

  const botMsg = `<div><strong>AI:</strong> ${botReply}</div>`;
  chatBox.innerHTML += botMsg;

  chatBox.scrollTop = chatBox.scrollHeight;
  userInput.value = "";
}