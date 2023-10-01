import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import {query, collection, where, getDocs} from 'firebase/firestore'


export default function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  async function handleSearch() {
    const q = query(
      collection(db, "users"), 
      where("displayName", "==", username)
    )
    
    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        setUser(doc.data())
      })
    } catch {
      setErr(true)
    }
  }

  function handleEnterKey (e) {
    e.code === 'Enter' && handleSearch()
  }

  return (
    <div className='search'>
      <div className='search-form'>
        {err && <h2 style={{color: 'red'}}>Error</h2>}
        <input type='text' placeholder='Find a user...' 
          onChange={e=>setUsername(e.target.value)} 
          onKeyDown={handleEnterKey} />
      </div>
      <div className='chats'>
        {err && <p style={{color: 'red'}}>User Not found</p>}
        { user && <div style={{paddingBottom: '20px'}} className='user-chat'>
          <img src={user.photoURL} />
          <div className='user-chat-info'>
            <span className='name'>{user.displayName}</span>
          </div>
        </div> } 
      </div>
    </div>
  )
}
