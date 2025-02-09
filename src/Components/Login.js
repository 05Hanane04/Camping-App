import React from "react";
import vue from "../images/vue.jpg";
import email from "../images/email.png";
import pwd from "../images/pwd.png";
export default function Login() {
  return (
    <div>
      <img id="login-photo" src={vue} alt="photo" />
      <div className="login-form">
        <form>
          <h2>Bienvenue dans une nouvelle aventure !</h2>
          <div className="mb-3">
            <img id="email-icon" src={email} alt="email" />
            <label for="exampleInputEmail1" className="form-label">
              Votre E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <br></br>
          <div className="mb-3">
            <img id="pwd-icon" src={pwd} alt="pwd" />

            <label for="exampleInputPassword1" className="form-label">
              Mot de Passe
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Se souvenir de moi
            </label>
          </div>
          <button type="submit" id="login-btn">
            Se connecter
          </button>
          <h6 id="inscription">
            Vous n'avez pas de compte ? <a href="#">S'inscrire</a>
          </h6>
        </form>
      </div>
    </div>
  );
}
