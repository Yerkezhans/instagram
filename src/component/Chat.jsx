import { useState } from 'react';
import ChatInput from './ChatInput';
import Messages from './Messages';

function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="chat">
      <div className="chat-container">
        <Messages messages={messages}
          setMessages={setMessages}/>
        <ChatInput setMessages={setMessages} />
      </div>
    </div>
  );
}


export default Chat;
