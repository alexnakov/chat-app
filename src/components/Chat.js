import React, { useContext, useEffect } from 'react'
import { IoCameraSharp, IoPersonAddSharp, IoMenu } from "react-icons/io5";
import { ChatContext } from '../context/ChatContext';
import Messages from './Messages';
import Input from './Input';

export default function Chat() {
  const { data } = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className='chat-info'>
        <span className='username'>{data.user?.displayName}</span>
        <div className='chat-icons'>
          <IoCameraSharp />
          <IoPersonAddSharp />
          <IoMenu />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
