import React, { useEffect, useState } from 'react'

export default function Search() {
  const [username, setUsername] = useState("")

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Find a user...' onChange={e=>setUsername(e.target.value)} />
      </div>
    </div>
  )
}
