const chatBody = document.querySelector('.chat-body');
const messageInput = document.querySelector('.message-input');
const sendMessageBotton = document.querySelector('#send-message');

const userData = {
    message: null,    
}


// Create message element with dynamic classes and return it 
const createMessageElement = (content, classes) => {
    const div = document.createElement('div');
    div.classList.add('message', classes);
    div.innerHTML = content;
    return div;
};

// Handle outcoming user message
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = '';

    // Create and display user message
    const messageContent = `<div class="message-text"></div>`;

    const outgoingMessageDiv = createMessageElement(messageContent, 'user-message');
    outgoingMessageDiv.querySelector('.message-text').textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);  
};

// Handle Enter key press
messageInput.addEventListener('keydown', (e) => {
  const userMessage = e.target.value.trim();
    if (e.key === 'Enter' && userMessage) {
      handleOutgoingMessage(e);
    }
});

sendMessageBotton.addEventListener('click', (e) => handleOutgoingMessage(e)); 

// Starta på 29:24