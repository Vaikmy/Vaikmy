const chatBox = document.getElementById('chat-box');
const inputText = document.getElementById('input-text');
const sendButton = document.getElementById('send-button');

const fakeResponses = [
    "Bonjour ! Comment puis-je vous aider ?",
    "Je suis un chatbot en test. 😊",
    "Désolé, je ne comprends pas encore tout...",
    "Essaie de me poser une autre question !",
    "Je suis en phase de développement ! 🚀"
];

// Ajout d'un message au chat
function addMessage(content, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = content;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simule une réponse automatique
function getFakeResponse() {
    return fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
}

// Gestion de l'envoi des messages
sendButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    inputText.value = '';

    setTimeout(() => {
        addMessage(getFakeResponse(), 'bot');
    }, 1000);
});

// Envoi avec la touche "Entrée"
inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
