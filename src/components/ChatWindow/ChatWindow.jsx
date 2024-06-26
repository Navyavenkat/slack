

import React, { useState, useRef, useEffect } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Me', content: 'Hello!', timestamp: '10:00 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messageEndRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: 'Me',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, message]);
    setNewMessage('');
    scrollToBottom();

    setTimeout(() => {
      const reply = generateReplierReply(newMessage);
      if (reply) {
        setMessages(prevMessages => [...prevMessages, reply]);
        scrollToBottom();
      }
    }, 1000);
  };

  const generateReplierReply = (message) => {
    const replies = [
      "Hi there! How can I assist you?",
      "I'm doing well, thanks!",
      "Sorry, I didn't quite get that. Can you please clarify?",
      "Let me check that for you.",
      "That sounds interesting! Tell me more.",
      "How about we schedule a meeting to discuss this further?",
      "I'm sorry, I'm currently unavailable. I'll get back to you as soon as possible."
    ];

    const randomIndex = Math.floor(Math.random() * replies.length);
    return {
      id: messages.length + 1,
      sender: 'Replier',
      content: replies[randomIndex],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="message-area">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'Me' ? 'sent' : 'received'}`}>
            <div className="message-content">
              <p>{message.content}</p>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>

      <form onSubmit={handleSendMessage} className="message-input">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          rows="3"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
