// src/components/ChatLoader.jsx
import { useState } from 'react';
import ZipFileUploader from './ZipFileUploader';
import ZipParser from './ZipParser';
import Conversations from './Conversations';

const ChatLoader = () => {
  const [file, setFile] = useState(null);
  const [conversationData, setConversationData] = useState(null);

  return (
    <div>
      {!file && <ZipFileUploader onFileSelect={setFile} />}
      {file && !conversationData && (
        <ZipParser
          file={file}
          onDataExtract={(data) => setConversationData(data)}
        />
      )}
      {conversationData && <Conversations conversations={conversationData.conversations} />}
    </div>
  );
};

export default ChatLoader;
