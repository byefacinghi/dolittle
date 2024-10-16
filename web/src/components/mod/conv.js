function processConversations(conversations, userId) {
    const processedConversations = conversations.map(conv => {
      return {
        title: conv.title,
        createTime: new Date(conv.create_time * 1000).toLocaleString(),
        messages: Object.values(conv.mapping).map(map => {
          const message = map.message;
          let author = message.author.role;
          
          // Replace 'user' with 'you'
          if (author === 'user') author = 'you';
  
          // Format message content
          const content = message.content.parts.join(' ');
  
          return {
            author,
            content,
            timestamp: new Date(message.create_time * 1000).toLocaleString(),
          };
        })
      };
    });
  
    displayConversations(processedConversations);
  }
  