import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='grid-parent'>
        <div className='header-parent'>
          <Header />
        </div>
        <div className='navbar-parent'>
          <Navbar />
        </div>
        <div className='sidebar-parent'></div>
        <div className='chatroom-parent'></div>
      </div>
    </div>
  )
}
