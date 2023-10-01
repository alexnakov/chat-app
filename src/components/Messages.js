import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export default function Messages() {
  const {data} = useContext(ChatContext)
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
      if (doc.data() === undefined) {
        setMessages([])
      } else {
        setMessages(doc.data().messages)
      }
    });

    return () => {
      unsub()
    }
  }, [data.chatId])

  return (
    <div className='messages'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}
