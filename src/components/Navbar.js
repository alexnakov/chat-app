import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span class='logo'>FibreChat</span>
      <div class='user'>
        <img src='https://cdn.britannica.com/52/152052-050-C6CCD08A/Novak-Djokovic-2011.jpg'/>
        <span>User</span>
        <button>Logout</button>
      </div>
    </div>
  )
}