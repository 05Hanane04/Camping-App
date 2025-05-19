import React, { useState } from "react";
import vue from "../images/vue.jpg";
import email from "../images/email.png";
import pwd from "../images/pwd.png";
export default function Login() {
  
  const [emailUser, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  
  const [successMessage, setSuccessMessage] = useState(""); 
  
const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMessage("");
  setSuccessMessage("");

  
};

  

  return (
    <div>
      <img id="login-photo" src={vue} alt="photo" />
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h2>Bienvenue dans une nouvelle aventure !</h2>
          
          
          <div className="mb-3">
            <img id="email-icon" src={email} alt="email" />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Votre E-mail
            </label>
            <input
              value={emailUser}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            
          </div>
          <br />
          <div className="mb-3">
            <img id="pwd-icon" src={pwd} alt="pwd" />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mot de Passe
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Se souvenir de moi
            </label>
          </div>
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
          <button type="submit" id="login-btn" onClick={handleLogin}>
            Se connecter
          </button>
          
        </form>
      </div>
    </div>
  );
}
