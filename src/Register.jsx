import React, { useState } from "react";

export const Register = (props) => {

  const [FirstName, setfname] = useState("");
  const [LastName, setlsname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setcontact] = useState(""); 
  const [password, setpass] = useState("");
  const [confirmpassword, setconfirmpwd] = useState("");

  const handleSubmit = (e) => {
    e.handleSubmit();
    console.log();

  }

    return (
        <div className="main-Form-container">
            <h2>Register</h2>
         <form className="register-form" onSubmit={handleSubmit}>       
          {/* for FirstName */}
      <label htmlFor="FirstName">FirstName:</label>
      <input
        value={FirstName}
        onChange={(e) => setfname(e.target.value)}
        type="text"
        placeholder="FirstName"
        name="FirstName"
        id="FirstName"
      />
      {/* for LastName */}
      <label htmlFor="LastName">LastName:</label>
      <input
        value={LastName}
        onChange={(e) => setlsname(e.target.value)}
        type="text"
        placeholder="LastName"
        name="LastName"
        id="LastName"
      />
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

       {/* for Contact info */}
       <label htmlFor="contact">Contact No:</label>
      <input
        value={contact}
        onChange={(e) => setcontact(e.target.value)}
        type="text"
        placeholder="Contact No"
        maxLength={11}
        name="Contact No"
        id="info"
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
   {/* for Confirm Password */}
       <label htmlFor="LastName">Confirm Password:</label>
      <input
        value={confirmpassword}
        onChange={(e) => setconfirmpwd(e.target.value)}
        type="password"
        placeholder="********"
        name="ConfirmPassword"
        maxLength={8}
        id="ConfirmPassword"
        />
          <button className="btn-1" type="submit">Log In</button>

      </form>
      <button className="link-btn" onClick={()=>props.onformSwitch('login')} > Already have an account Log In</button>
      </div>    

    )
}