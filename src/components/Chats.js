import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export default function Chats() {
  const [chats, setChats] = useState([])

  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      return () => {unsub()}
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  console.log(Object.entries(chats))

  return (
    <div className='chats'>
      {Object.entries(chats).map(chat => {
        return (
          <div key={chat[0]} className='user-chat'>
            <img src={chat[1].userInfo.photoURL} />
            <div className='user-chat-info'>
              <span className='name'>{chat[1].userInfo.displayName}</span>
              <p className='latest-message'>This is the latest message</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
