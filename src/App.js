import React, {useState} from "react";
// import logo from './logo.svg';
import './App.css';
import * as yup from "yup";
import { UserSchema} from "./Validations/Uservalidation";
import {Login} from "./Login";
import { Register } from './Register';




function App() {

const createUser = async (event) =>{
  event.preventDefault()
  let formData ={
    email:event.target[0].value, 
    password:event.target[1].value,
  };
  const isValid = await UserSchema.isValid(formData);
  console.log(isValid);
};  
  
   const [currentForm, setCurrentForm] = useState('login');
 
   const toggleForm =(formName) =>{
    setCurrentForm(formName);

   }
  return(

    <div className="main-Form-container App">
       {
      currentForm === "login" ? <Login onformSwitch={toggleForm}/> : <Register onformSwitch={toggleForm}/>
    }      
    </div>
  );
}

export default App;
