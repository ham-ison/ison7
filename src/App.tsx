// src/App.tsx
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // @ts-ignore
    window.electronAPI.onReply((_, message) => {
      console.log('Received:', message)
    })
  }, [])

  const sendMessage = () => {
    // @ts-ignore
    window.electronAPI.sendMessage('Hello from React!')
  }

  return <button onClick={sendMessage}>Send Message</button>
}