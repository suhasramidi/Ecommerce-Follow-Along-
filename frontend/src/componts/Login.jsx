import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const[loginData,setLoginData] = useState({
        email:"",
        password:"",
    })

    function handleInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    function handleLogin(event){
        event.preventDefault();
        if(!loginData.email){
            alert("Please enter email...");
            return;
        }

        if(!loginData.password){
            alert("Please enter Password...");
            return;
        }

        alert("Youre successfully logged in!!");
    }
    
  return (
    <div className='body'>
        <h1>Sign in</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="">Enter Email</label>
            <br />
            <input type="email" value={loginData.email} name='email' onChange={handleInput} placeholder='Email...' />
            <br />
            <label htmlFor="">Enter Password</label>
            <br />
            <input type="password" value={loginData.password} name='password' onChange={handleInput} placeholder='Password...'/>
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login