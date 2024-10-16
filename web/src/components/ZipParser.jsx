import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';

const ZipParser = ({ file, onDataExtract }) => {
  const [status, setStatus] = useState('Processing...');

  useEffect(() => {
    const parseZip = async () => {
      try {
        const zip = await JSZip.loadAsync(file);
        let userFile = null;
        let conversationsFile = null;
        let sharedConversationsFile = null;

        // Iterate over all files in the ZIP
        zip.forEach((relativePath, zipEntry) => {
          // Ignore hidden files and directories
          if (relativePath.includes('__MACOSX') || relativePath.startsWith('.')) {
            return;
          }
          
          if (relativePath.endsWith('user.json')) {
            userFile = zipEntry;
          }
          if (relativePath.endsWith('conversations.json')) {
            conversationsFile = zipEntry;
          }
          if (relativePath.endsWith('shared_conversations.json')) {
            sharedConversationsFile = zipEntry;
          }
        });

        // Check if conversations.json and shared_conversations.json were found
        if (!conversationsFile && !sharedConversationsFile) {
          setStatus('No conversation files found in the ZIP.');
          return;
        }

        const conversations = conversationsFile ? JSON.parse(await conversationsFile.async('text')) : [];
        const sharedConversations = sharedConversationsFile ? JSON.parse(await sharedConversationsFile.async('text')) : [];

        onDataExtract({ conversations, sharedConversations });
      } catch (error) {
        console.error('Error processing the ZIP file:', error);
        setStatus('Error processing the ZIP file.');
      }
    };

    if (file) {
      parseZip();
    }
  }, [file, onDataExtract]);

  return <div>{status}</div>;
};

export default ZipParser;
