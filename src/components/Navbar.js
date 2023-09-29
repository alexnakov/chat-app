import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>FibreChat</span>
      <div className='user'>
        <img src='https://cdn.britannica.com/52/152052-050-C6CCD08A/Novak-Djokovic-2011.jpg'/>
        <span>User</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}