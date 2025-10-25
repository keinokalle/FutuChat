import { useState, FormEvent, ChangeEvent } from 'react'
import fileIcon from './assets/file_add.png'
import sitraLogo from './assets/sitra_logo_musta.svg'
import './App.css'

interface Message {
  text: string
  sender: 'user' | 'assistant'
}

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
    }
  }

  const handleFileSelect = () => {
    // File handling logic will be added later
    console.log('File selected')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Futuchat</h1>
        <img src={sitraLogo} alt="Sitra" className="sitra-logo" />
      </header>
      
      <div className="chat-container">
        <div className="messages">
          {messages.length === 0 && (
            <div className="empty-state">Start a conversation</div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <div className="input-container">
        <button className="file-button" onClick={handleFileSelect}>
          <img src={fileIcon} alt="Add file" className="file-icon" />
        </button>
        <input
          type="text"
          className="text-input"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  )
}

export default App
