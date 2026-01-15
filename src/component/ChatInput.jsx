import { useState } from 'react';

function ChatInput({ setMessages }) {
  const [text, setText] = useState('');
  const [sender, setSender] = useState('me');

  function addMessage() {
    if (!text.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender,
      },
    ]);

    setText('');
  }

  return (
    <div className="chat-input">
    <div>
    <button
          onClick={() => setSender('me')}
          className={sender === 'me' ? 'active' : ''}>
          Я
        </button>
        <button
          onClick={() => setSender('friend')}
          className={sender === 'friend' ? 'active' : ''}>
          Друг
    </button>
    </div>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Введите сообщение"
      />

      <button onClick={addMessage}>Отправить</button>
    </div>
  );
}

export default ChatInput;
