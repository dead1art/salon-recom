import React, { useState } from "react";
import "./LoginSignUp.scss";
import axios from "axios";
//var validator = require("email-validator");

export const Login = () => {
  const [loginname, setloginname] = useState("");
  const [loginpassword, setloginpassword] = useState("");

  const submitLogin = ({ loginname, loginpassword }) => {
    const details = {
      username: loginname,
      password: loginpassword,
    };
    console.log("heyt/!!");
    console.log(details.password);
    console.log(details.username);

    axios
      .post("https://salon-api-back.herokuapp.com/api/auth/signin", details)
      .then((Response) => {
        console.log(Response.data);
        alert(Response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      id="LoginForm"
      onSubmit={() => submitLogin({ loginname, loginpassword })}
    >
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setloginname(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setloginpassword(e.target.value)}
      />
      <button type="submit" className="btn">
        Log In
      </button>
      <a href="#">Forgot password?</a>
    </form>
  );
};
