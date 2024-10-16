import React, { useState } from 'react';

const Conversations = ({ conversations, sharedConversations }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationClick = (conv) => {
    setSelectedConversation(conv);
  };

  const toggleMessages = (messageDivs) => {
    messageDivs.forEach((msg) => {
      msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar for conversations and shared conversations */}
      <div className="sidebar" style={{ width: '30%', borderRight: '1px solid black' }}>
        <h2>Conversations</h2>
        {conversations.map((conv, index) => (
          <div key={index} onClick={() => handleConversationClick(conv)}>
            {conv.title}
          </div>
        ))}

        <h2>Shared Conversations</h2>
        {sharedConversations.map((conv, index) => (
          <div key={index} onClick={() => handleConversationClick(conv)}>
            {conv.title} (Shared)
          </div>
        ))}
      </div>

      {/* Main content: Display selected conversation */}
      {selectedConversation && selectedConversation.messages ? (
        <div className="main-content" style={{ width: '70%', padding: '10px' }}>
          <h2>{selectedConversation.title}</h2>
          <p>Created at: {new Date(selectedConversation.create_time * 1000).toLocaleString()}</p>
          {selectedConversation.messages.length > 0 ? (
            <>
              {selectedConversation.messages.map((msg, i) => (
                <div key={i} className="message" style={{ display: i <= 1 ? 'block' : 'none' }}>
                  <strong>{msg.author}: </strong>
                  <span>{msg.content}</span>
                  <small> ({new Date(msg.timestamp * 1000).toLocaleString()})</small>
                </div>
              ))}
              <button onClick={() => toggleMessages(document.querySelectorAll('.message'))}>
                Toggle remaining messages
              </button>
            </>
          ) : (
            <p>No messages found for this conversation.</p>
          )}
        </div>
      ) : (
        <div className="main-content" style={{ width: '70%', padding: '10px' }}>
          <p>Select a conversation to view its messages.</p>
        </div>
      )}
    </div>
  );
};

export default Conversations;
