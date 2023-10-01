import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";


export default function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)

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

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };

  function handleEnterKey (e) {
    e.code === 'Enter' && handleSearch()
  }

  return (
    <div className='search'>
      <div className='search-form'>
        {err && <h2 style={{color: 'red'}}>Error</h2>}
        <input type='text' placeholder='Find a user...' 
          onChange={e=>setUsername(e.target.value)}
          value={username} 
          onKeyDown={handleEnterKey} />
      </div>
      <div className='chats'>
        {err && <p style={{color: 'red'}}>User Not found</p>}
        { user && <div onClick={handleSelect} style={{paddingBottom: '20px'}} className='user-chat'>
          <img src={user.photoURL} />
          <div className='user-chat-info'>
            <span className='name'>{user.displayName}</span>
          </div>
        </div> } 
      </div>
    </div>
  )
}
