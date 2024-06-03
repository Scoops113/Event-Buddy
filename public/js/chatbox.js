

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
            setTimeout(async function() {
                try {
                    const response = await fetch('/api/chatbox/', {
                        method: 'POST',
                        body: JSON.stringify({ prompt: userMessage }),
                        headers: { 'Content-Type': 'application/json' },
                    });
                  
                    if (response.ok) {
                        const data = await response.json();
                        const botMessage = data.reply;
                        appendMessage(botMessage, 'bot-message');
                    } else {
                        appendMessage('Failed to generate response', 'bot-message');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    appendMessage('Error processing your request', 'bot-message');
                }
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