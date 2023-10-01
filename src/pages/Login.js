import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"
import { auth, db, storage } from '../firebase'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [err, setErr] = useState(false)
  const navigateToPath = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigateToPath("/")
    } catch {
      setErr(true)
    }

  }

  return (
    <div style={{border: '2px solid purple', borderRadius: '5px'}}>
      <h1>FibreChat</h1>
      <h2>Login</h2>
      {err && <h2 style={{color: 'red'}}>An Error Occured</h2>}
      <form onSubmit={handleSubmit} className='reg-login'>
        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <input type='submit' value="Sign In"/>
        <div id="have-account">
          <label>Don't have an account? </label><Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}
