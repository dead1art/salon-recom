import React, { useState } from "react";
import './LoginSignUp.scss'

export const LoginSignUp = () => {
    const [state, setState] = useState(true);
   
    const SignUpForm = (
        <form id="SignUpForm">
            <label>Full Name</label>
            <input type="text" text="Full Name"  placeholder="Enter Full Name" />
            <label>Email</label>
            <input type="E-mail" placeholder="Enter Email" />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
            <button type="submit" className="btn">
            Sign Up
            </button>
        </form>
      );
    
      const LoginForm = (
        <form id="LoginForm">
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="btn">
            Log In
            </button>
            <a href="#">Forgot password?</a>
        </form>
      );
    return (
        <div className="acc-page">
        <div className="form-container">
            <div className="form-btn">
            <span onClick={() => setState(true)}>Log In</span>
            <span onClick={() => setState(false)}>Sign Up</span>
            <div id="indicator" />
            {state ? SignUpForm : LoginForm}
            </div>
        </div>
        </div>
  );                     
        
}

export default LoginSignUp



  
    

  
   