function displayConversations(conversations) {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
  
    conversations.forEach((conv, index) => {
      const convDiv = document.createElement('div');
      convDiv.textContent = conv.title;
      convDiv.addEventListener('click', () => {
        loadConversation(conv);
      });
      sidebar.appendChild(convDiv);
    });
  
    function loadConversation(conversation) {
      mainContent.innerHTML = ''; // Clear previous content
      const title = document.createElement('h2');
      title.textContent = conversation.title;
      const timestamp = document.createElement('p');
      timestamp.textContent = `Created at: ${conversation.createTime}`;
      
      mainContent.appendChild(title);
      mainContent.appendChild(timestamp);
  
      conversation.messages.forEach((msg, i) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        // First message and first response are always shown
        if (i <= 1) {
          messageDiv.style.display = 'block';
        } else {
          messageDiv.style.display = 'none';
        }
  
        const author = document.createElement('strong');
        author.textContent = `${msg.author}: `;
        const content = document.createElement('span');
        content.textContent = msg.content;
        const time = document.createElement('small');
        time.textContent = ` (${msg.timestamp})`;
        
        messageDiv.appendChild(author);
        messageDiv.appendChild(content);
        messageDiv.appendChild(time);
        mainContent.appendChild(messageDiv);
      });
  
      // Add toggle button for additional messages
      const toggleBtn = document.createElement('button');
      toggleBtn.textContent = 'Toggle remaining messages';
      toggleBtn.addEventListener('click', () => {
        const hiddenMessages = mainContent.querySelectorAll('.message');
        hiddenMessages.forEach(msg => {
          msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
        });
      });
      mainContent.appendChild(toggleBtn);
    }
  }
  