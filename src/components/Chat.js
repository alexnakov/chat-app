import React from 'react'
import { IoCameraSharp, IoPersonAddSharp, IoMenu } from "react-icons/io5";

export default function Chat() {
  return (
    <div className='chat'>
      <div className='chat-info'>
        <span className='username'>UserName</span>
        <div className='chat-icons'>
          <IoCameraSharp />
          <IoPersonAddSharp />
          <IoMenu />
        </div>
      </div>
    </div>
  )
}
