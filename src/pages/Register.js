import React from 'react'

export default function Register() {
  return (
    <div className='register-container'>
      <h1>FibreChat</h1>
      <h2>Register</h2>
      <form className='register'>
        <input type="text" placeholder='Name'/>
        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <label htmlFor='avatar-img'>Avatar</label>
        <input type="file" name="avatar-img" />
        <input type='submit' />
        <div id="have-account">
          <label>Have an account? </label><a href="#">Login</a>
        </div>
      </form>
    </div>
  )
}
