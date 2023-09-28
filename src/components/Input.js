import React from 'react'
import { IoIosImage, IoIosAttach } from "react-icons/io";

export default function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something ... ' />
      <div className='send'>
        <label htmlFor='file'>
          <IoIosImage className='send-icons' />
        </label>
        <input type='file' id='file' style={{display: 'none'}}/>
        <label htmlFor='file'>      
          <IoIosAttach className='send-icons' />          
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
