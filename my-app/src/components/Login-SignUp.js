import React, { useState } from "react"
import './LoginSignUp.scss'
import axios from "axios"
var validator = require("email-validator");


export const LoginSignUp = () => {
    const [state, setState] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const [user,setUser] =useState('')

    const baseURL='https://salon-api-back.herokuapp.com'

    const submit=({name,email,password})=>{
      const cred={
        username:name,
        email:email,
        password:password
      }
      axios.post('https://salon-api-back.herokuapp.com/api/auth/signup',cred).then((Response)=>
      {
        console.log(Response.data.message)
      }).catch((error)=>{
        console.log(error)
      })
    }

    const SignUpForm = (
        <form id="SignUpForm" onSubmit={()=>submit({name,email,password})}>
            <label>Full Name</label>
            <input value={name} type="text" text="Full Name"  placeholder="Enter Full Name" onChange={(e)=>setName(e.target.value)}/>
            <label>Email</label>
            <input value={email} type="E-mail" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
            <label>Password</label>
            <input value={password} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" className="btn">
            Sign Up
            </button>
        </form>
      );
    
      const LoginForm = (
        <form id="LoginForm">
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="btn" >
            Log In
            </button>
            <a href="#">Forgot password?</a>
        </form>
      );
    return (
        <div className="acc-page">
        <div className="form-container">
            <div className="form-btn">
            <span onClick={() => setState(true)}>Sign Up</span>
            <span onClick={() => setState(false)}>Log In</span>
            <div id="indicator" />
            {state ? SignUpForm : LoginForm}
            </div>
        </div>
        </div>
  );                     
        
}

export default LoginSignUp



  
    

  
   