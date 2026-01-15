function Messages({ messages, setMessages }) {

  function deleteMessage(id) {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  }

  return (
    <div className="messages">
      <div className="messages-list">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.sender === 'me' ? 'right' : 'left'}`}>
            <span>{message.text}</span>

            <button
              className="delete-button"
              onClick={() => deleteMessage(message.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
