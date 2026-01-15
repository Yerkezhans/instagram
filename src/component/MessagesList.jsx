

const MessagesList = ({ messages }) => {
  return (
    <div className="messages-list">
      {messages.map(m => (
        <div
          key={m.id}
          className={`message ${m.sender === 'me' ? 'right' : 'left'}`}>
          {m.text}
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
