import React, { useState } from "react";

export const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setpass] = useState("");


  const handleSubmit = (e) => {
      e.handleSubmit();
      console.log();
  };
  return (
    <div className="main-Form-container">
      <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      
      {/*for email  */}
      <label htmlFor="Email">Email:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="abc1@email.com"
        name="email"
        id="email"
      />
      
      {/* forpsassword */}
      <label htmlFor="Password">Password:</label>
      <input
        value={password}
        onChange={(e) => setpass(e.target.value)}
        type="password"
        placeholder="********"
        name="Password"
        maxLength={8}
        id="password"
      />
      <button className="btn-1" type="submit">Sign Up</button>  
    </form>
    <button className="link-btn" onClick={()=>props.onformSwitch('register')} >Don't have an account? Creat account</button>
    </div>
  );
};
