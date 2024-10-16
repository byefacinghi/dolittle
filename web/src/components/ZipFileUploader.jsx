import React, { useState } from 'react';
import ZipParser from './ZipParser';
import Conversations from './Conversations';

const ZipFileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversationData, setConversationData] = useState({ conversations: [], sharedConversations: [] });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDataExtract = (data) => {
    setConversationData(data);
  };

  return (
    <div>
      <h2>Upload a ZIP File</h2>
      <input type="file" accept=".zip" onChange={handleFileChange} />
      {selectedFile && (
        <ZipParser file={selectedFile} onDataExtract={handleDataExtract} />
      )}

      {conversationData.conversations.length > 0 || conversationData.sharedConversations.length > 0 ? (
        <Conversations
          conversations={conversationData.conversations}
          sharedConversations={conversationData.sharedConversations}
        />
      ) : (
        <p>No conversations loaded.</p>
      )}
    </div>
  );
};

export default ZipFileUploader;
