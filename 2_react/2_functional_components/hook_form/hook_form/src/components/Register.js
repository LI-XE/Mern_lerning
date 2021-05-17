import React, { useState } from 'react';

const Register = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const createUser = (e) => {
      e.preventDefault();
      const newUser = { firstName: firstName, lastName: lastName, email:email, password:password, confirmPassword:confirmPassword };
      console.log("Welcome ", newUser);
    };

    const formDataDivStyle = {
      textAlign: "left", 
      width: "450px", 
      margin: "auto",
    }
  
    const inputDataDivStyle = {
      width: "300px",
      borderRadius: "5px",
      backgroundColor: "#f2f2f2",
      border: "1px solid darkgrey",
      padding: "5px 10px",
      margin: "10px 500px",
    }

    return(
      <div>
        <form onSubmit = { createUser }  style={{ marginTop: "20px" }}>
          <div style={inputDataDivStyle}>
            <lable htmlFor="firstName">First Name:</lable>
            <input 
              type="text"
              name="firstName"
              onChange={ (e) => setFirstName(e.target.value) }
              />
          </div>
          {
            firstName.length > 0 && firstName.length < 2 ?
              <span>First Name must be at least 3 characters long</span>
              : null
          }
          <div style={inputDataDivStyle}>
            <lable>Last Name:</lable>
            <input 
              type="text"
              name="lastName"
              onChange={ (e) => setLastName(e.target.value) }
            />
          </div>
          {
            lastName.length > 0 && lastName.length < 2 ?
              <span>Last Name must be at least 3 characters long</span>
              : null
          }
          <div style={inputDataDivStyle}>
            <lable>Email:</lable>
            <input 
              type="text"
              name="email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          {
            email.length > 0 && email.length < 2 ?
              <span>Email must be at least 3 characters long</span>
              : null
          }
          <div style={inputDataDivStyle}>
            <lable>Password:</lable>
            <input 
              type="password"
              name="password"
              onChange={ (e) => setPassword(e.target.value) }
              />
          </div>
          {
            password.length > 0 && password.length < 8 ?
              <span>Password must be at least 3 characters long</span>
              : null
          }
          {
          password.length >= 8 && confirmPassword.length > 0 ?
            password !== confirmPassword ?
              <p className="error">Passwords do not match</p>
              : null
            : null 
        }
          <div style={inputDataDivStyle}>
            <lable>Confirm Password:</lable>
            <input 
              type="password"
              name="confirmPassword"
              onChange={ (e) => setConfirmPassword(e.target.value) }
              />
          </div>
        </form>
        <div style={ formDataDivStyle }>
          <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
          <p>First Name: { firstName }</p>
          <p>Last Name: { lastName }</p>
          <p>Email: { email }</p>
          <p>Password: { password }</p>
          <p>Confirm Password: { confirmPassword }</p>
        </div>
    </div>
    )
}

export default Register;