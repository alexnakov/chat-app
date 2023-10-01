import React, { useContext } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext'

export default function Messages() {
  const {data} = useContext(ChatContext)
  

  return (
    <div className='messages'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}
