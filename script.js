// 🎯 Sélection des éléments HTML
const chatContainer = document.getElementById('chat-container');
const inputText = document.getElementById('input-text');
const sendButton = document.getElementById('send-button');

// 🔥 Réponses automatiques pour tester le chatbot
const fakeResponses = [
    "Bonjour ! Comment puis-je vous aider ?",
    "Je suis un chatbot en test. 😊",
    "Désolé, je ne comprends pas encore tout...",
    "Essaie de me poser une autre question !",
    "Je suis en phase de développement ! 🚀"
];

// 📝 Fonction pour ajouter un message dans le chat
function addMessage(content, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = content;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 🎯 Fonction qui génère une réponse automatique
function getFakeResponse() {
    const randomIndex = Math.floor(Math.random() * fakeResponses.length);
    return fakeResponses[randomIndex];
}

// 🚀 Gestion de l'envoi des messages
sendButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (!text) return;
    
    addMessage(text, 'user');
    inputText.value = '';

    // Simule une réponse du bot après 1 seconde
    setTimeout(() => {
        addMessage(getFakeResponse(), 'bot');
    }, 1000);
});

// 🎯 Envoi avec la touche "Entrée"
inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
