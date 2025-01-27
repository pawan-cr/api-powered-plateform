import React, { useState } from 'react'

const Chat = () => {
    const [message,setMessage] = useState([]);
    const [input,setInput] = useState('');
    const handleSendMessage = () =>{
        setMessage([...message,{text:input,user:"you"}])
        setInput('')
    }

   return (
    <div className='chat'>
        <h2>chat practice</h2>
        <div className='chatbox'>
        {message.map((msg, index) => (
          <div key={index} className={msg.user === "You" ? "message user" : "message bot"}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
        </div>
        <div className='chat-controls'>
        <input 
        type='text'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='type your message'
        />
        <button onClick={handleSendMessage}>Send</button>
        </div>
    </div>
  )
}

export default Chat