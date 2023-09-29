import React from 'react'

export default function Message() {
  return (
    <div className='message'>
      <div className='message-info'>
        <div className='img-wrapper'>
          <img src="https://cdn.britannica.com/52/152052-050-C6CCD08A/Novak-Djokovic-2011.jpg" />
        </div>
        <div className="message-time">Just now</div>
      </div>
      <div className='message-content'>
        <p>Hi mate</p>
        {/* <img src="https://cdn.britannica.com/52/152052-050-C6CCD08A/Novak-Djokovic-2011.jpg" /> */}
      </div>
    </div>
  )
}
