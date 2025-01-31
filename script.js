// 🎯 Sélection des éléments HTML
const chatContainer = document.getElementById('chat-container');
const inputText = document.getElementById('input-text');
const sendButton = document.getElementById('send-button');

// ⚠️ Mets ici l’URL de ton Webhook Make (ou API OpenAI)
const MAKE_WEBHOOK_URL = "https://hook.integromat.com/XXXXX"; 

// 📝 Fonction pour ajouter un message dans le chat
function addMessage(content, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = content;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 🚀 Fonction pour envoyer un message à Make
async function sendMessageToMake(message) {
    addMessage("Le bot réfléchit...", 'bot');

    try {
        const response = await fetch(MAKE_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        chatContainer.lastChild.remove(); // Supprime le message "Le bot réfléchit..."
        addMessage(data.reply, 'bot');
    } catch (error) {
        console.error("Erreur:", error);
        chatContainer.lastChild.remove();
        addMessage("⚠️ Erreur de connexion.", 'bot');
    }
}

// 🎯 Gestion de l'envoi du message
sendButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    inputText.value = '';
    sendMessageToMake(text);
});

// 🎯 Envoyer avec "Entrée"
inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
