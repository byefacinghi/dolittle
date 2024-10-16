document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredConversations = conversations.filter(conv => {
      return conv.messages.some(msg => msg.content.toLowerCase().includes(searchTerm));
    });
    
    // Re-render the sidebar with filtered results
    displayConversations(filteredConversations);
  });
  