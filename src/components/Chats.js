import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

export default function Chats() {
  const [chats, setChats] = useState([])

  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      return () => {unsub()}
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  async function handleSelect (u) {
    dispatch({type: "CHANGE_USER", payload: u})
  }

  return (
    <div className='chats'>
      {Object.entries(chats).map(chat => {
        return (
          <div key={chat[0]} className='user-chat' onClick={()=>handleSelect(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt=""/>
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
