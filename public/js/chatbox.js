document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            appendMessage(userMessage, 'user-message');
            userInput.value = '';
            // Here you can add the logic to send the user's message to ChatGPT API and receive a response
            // For now, let's just simulate a bot response
            setTimeout(function() {
                const botMessage = 'Whats up! im your event bot 😎';
                appendMessage(botMessage, 'bot-message');
            }, 500);
        }
    });
    

    function appendMessage(message, messageType) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', messageType);
        messageElement.innerHTML = `<span class="message">${message}</span>`;
        
        
        if (messageType === 'user-message') {
            messageElement.classList.add('bg-lightblue', 'text-white'); 
        } else if (messageType === 'bot-message') {
            messageElement.classList.add('bg-lightgray', 'text-dark'); 
        }
        
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
});

