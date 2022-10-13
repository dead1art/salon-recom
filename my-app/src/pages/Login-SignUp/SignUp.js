import React, { useState } from "react";
import axios from "axios";

import "./LoginSignUp.scss";
//var validator = require("email-validator");

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // validator.validate(email);

  //get the base url and a axios function to /api/auth/signin
  //the body of the request should be username and password

  // const baseURL = "https://salon-api-back.herokuapp.com";

  const submit = ({ name, email, password }) => {
    const cred = {
      username: name,
      email: email,
      password: password,
    };
    console.log("hey");
    console.log(cred.username);
    console.log(cred.email);
    console.log(cred.password);

    axios
      .post("https://salon-api-back.herokuapp.com/api/auth/signup", cred)
      .then((Response) => {
        console.log(Response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form id="SignUpForm" onSubmit={() => submit({ name, email, password })}>
      <label>Full Name</label>
      <input
        type="text"
        text="Full Name"
        placeholder="Enter Full Name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="E-mail"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn">
        Sign Up
      </button>
    </form>
  );
};
