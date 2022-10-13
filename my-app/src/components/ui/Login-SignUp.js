import React, { useState } from "react";

import { SignUp } from "../../pages/Login-SignUp/SignUp";
import { Login } from "../../pages/Login-SignUp/Login";

export const LoginSignUp = () => {
  const [state, setState] = useState("");

  return (
    <div className="acc-page">
      <div className="form-container">
        <div className="form-btn">
          <span onClick={() => setState(true)}>Sign Up</span>
          <span onClick={() => setState(false)}>Log In</span>
          <div id="indicator" />
          {state ? <SignUp /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
