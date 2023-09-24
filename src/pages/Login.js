import React from 'react'

export default function Login() {
  return (
    <div style={{border: '2px solid purple', borderRadius: '5px'}}>
      <h1>FibreChat</h1>
      <h2>Login</h2>
      <form className='reg-login'>
        <input type="email"  placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <input type='submit' value="Sign In"/>
        <div id="have-account">
          <label>Don't have an account? </label><a href="#">Register</a>
        </div>
      </form>
    </div>
  )
}
