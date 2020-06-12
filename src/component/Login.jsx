import React, { useState } from "react";

function Login() {
  let [name, setName] = useState("");
  let [heading, setHeading] = useState("");

  function handleChange(event) {
    let newName = event.target.value;
    setName(newName);
  }

  function handleClick(e) {
    setHeading(name);
    e.preventDefault();
  }

  return (
    <form className="login-form" action="" onSubmit={handleClick}>
      <h1>{heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter Your Name"
      />
      <input type="email" placeholder="Enter  Your Email" />
      <input type="password" placeholder="Enter Your Password" />
      <input type="submit" value="Log In" />
    </form>
  );
}

export default Login;
