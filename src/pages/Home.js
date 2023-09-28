import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

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
        <div className='sidebar-parent'>
          <Sidebar />
        </div>
        <div className='chatroom-parent'></div>
      </div>
    </div>
  )
}
