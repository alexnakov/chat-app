import React, { useState } from 'react'
import AddImgIcon from '../images/add-img-icon.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"
import { auth, db, storage } from '../firebase'
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [err, setErr] = useState(false)
  const navigateToPath = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    const newUserResponse = await createUserWithEmailAndPassword(auth, email, password)

    const avatarRef = ref(storage, displayName)
    await uploadBytesResumable(avatarRef, file)
    const downloadURL = await getDownloadURL(avatarRef)

    // updating user info
    await updateProfile(newUserResponse.user, {displayName: displayName, photoURL: downloadURL})
    
    await setDoc(doc(db, "users", newUserResponse.user.uid), {
      uid: newUserResponse.user.uid,
      displayName: displayName,
      email: email,
      photoURL: downloadURL,
    });

    // will create a colections of chats soon
    await setDoc(doc(db, "userChats", newUserResponse.user.uid), {})
  
    navigateToPath("/")
  }
  
  return (
    <div style={{border: '2px solid purple', borderRadius: '5px'}}>
      <h1>FibreChat</h1>
      {err && <h1 style={{color: 'red'}}>Something went wrong</h1>}
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className='reg-login'>
        <input type="text" placeholder='Display Name'/>
        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <label htmlFor='avatar-img-input' id="avatar-label">
          <img src={AddImgIcon} />
          <span>Add an avatar</span>
        </label>
        <input style={{display: "none"}} type="file" id="avatar-img-input" />

        <input type='submit' value="Create Account"/>
        <div id="have-account">
          <label>Have an account? </label><Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}
