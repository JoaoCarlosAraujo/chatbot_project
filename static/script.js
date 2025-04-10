function sendMessage() {
    const inputField = document.getElementById("userInput");
    const userText = inputField.value.trim();
  
    if (userText === "") return;
  
    addMessage("Você", userText);
    inputField.value = "";
  
    fetch("/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ msg: userText }),
    })
      .then((res) => res.json())
      .then((data) => {
        addMessage("Bot", data.response);
      });
  }
  
  function addMessage(sender, text) {
    const chatbox = document.getElementById("chatbox");
    const message = document.createElement("div");
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  