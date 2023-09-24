import React from 'react'
import AddImgIcon from '../images/add-img-icon.png'

export default function Register() {
  return (
    <div className='register-container'>
      <h1>FibreChat</h1>
      <h2>Register</h2>
      <form className='register'>
        <input type="text" placeholder='Name'/>
        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <label htmlFor='avatar-img-input' id="avatar-label">
          <img src={AddImgIcon} alt="Add Image Icon" />
          <span>Add an avatar</span>
        </label>
        <input style={{display: "none"}} type="file" id="avatar-img-input" />

        <input type='submit' />
        <div id="have-account">
          <label>Have an account? </label><a href="#">Login</a>
        </div>
      </form>
    </div>
  )
}
