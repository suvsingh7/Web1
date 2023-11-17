// Import necessary React components and styles
import React, { useState } from 'react';
import './App.css'; // Import  styles

// Message component to display individual messages
const Message = ({ sender, content }) => (
  <div className="message">
    <strong>{sender}:</strong> {content}
  </div>
);

// Conversation component to display messages in a conversation
const Conversation = ({ messages }) => (
  <div className="conversation">
    {messages.map((message, index) => (
      <Message key={index} {...message} />
    ))}
  </div>
);

// Main App component
const App = () => {
  // Dummy data for messages
  const dummyMessages = [
    { sender: 'John', content: 'Hi there!' },
    { sender: 'Alice', content: 'Hello John!' },
    // Add more message objects as needed
  ];

  // State to manage messages
  const [messages, setMessages] = useState(dummyMessages);

  // Handler to send a new message
  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app">
      <header>
        <h1>Messaging Page</h1>
      </header>
      <section className="messaging-section">
        <Conversation messages={messages} />
        {/* Add an input form for sending new messages */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newMessage = {
              sender: 'You', //  replace this with the authenticated user's name
              content: e.target.message.value,
            };
            sendMessage(newMessage);
            e.target.reset();
          }}
        >
          <input type="text" name="message" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default App;
