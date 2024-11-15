document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.querySelector('.message-input');
    const sendButton = document.querySelector('.send-btn');
    // const profileDiv = document.querySelector('.profile-div');


    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessageToChat('current-user', messageText);
            messageInput.value = '';
        }
    });

    function addMessageToChat(senderClass, text) {
        const chatMessages = document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', senderClass);

        const profileImg = document.createElement('img');
        profileImg.src = senderClass === 'current-user' ? 'Images/web/profiles/profile4.jpg' : 'user1-profile.jpg';
        profileImg.alt = `${senderClass === 'current-user' ? 'You' : 'Other User'} Profile`;
        profileImg.classList.add('user-profile');

        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile-div');

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');

        const userName = document.createElement('p');
        userName.classList.add('user-name');
        userName.innerText = senderClass === 'current-user' ? 'You' : 'Alex';

        const messageText = document.createElement('p');
        messageText.classList.add('message-text');
        messageText.innerText = text;

        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        messageTime.innerText = new Date().toLocaleTimeString();

        profileDiv.appendChild(profileImg);
        profileDiv.appendChild(userName);
        messageContent.appendChild(profileDiv);
        messageContent.appendChild(messageText);
        messageContent.appendChild(messageTime);
        messageElement.appendChild(messageContent);

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
















/**************** Header go back function */
function goBack() {
    window.history.back();
}

