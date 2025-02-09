import React from "react";
import mainImg from "../images/mainImg.jpg";
import a1 from "../images/a1.png";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import { Link } from "react-router-dom";



export default function Accueil() {
  return (
    <div className="accueil-div">
      <img src={mainImg} alt="main" id="mainImg" />
      <div className="titles">
        <h2 id="title1"> Camping Terre d'Océan</h2>
        <h5 id="title2">Camping à Taghazout</h5>
      </div>
      <div className="accueil-imgs">
        <img src={a1} alt="a1" id="a1"/>
        <img src={a2} alt="a2" />
        <img src={a3} alt="a3" /> 
      </div>   
      <br></br>
      <div className="accueil-btn">
      
<button type="button" className="btn" ><Link className="nav-link" to="/hebergements">Nos Hébergements</Link></button>
<button type="button" className="btn" ><Link className="nav-link" to="/activites">Notre Restaurant et sa piscine</Link></button>
<button type="button" className="btn" ><Link className="nav-link" to="/contact">Réservez maintenant !</Link></button>

      </div>
      <br></br><br></br><br></br>
      <div className="presentation">
        <div className="text">
          <h2>Terre d'Océan - Camping Taghazout</h2>
          <br></br>
          <h5> À seulement 20 minutes d'Agadir, entre mer et montagne, Terre 
d'Océan vous accueille dans un cadre exceptionnel. 
Son restaurant et sa piscine offrent une vue imprenable sur 
l'océan, idéale pour se détendre et profiter de moments uniques. 
Venez passer des vacances tranquilles, en pleine nature, et vous 
ressourcer dans un cadre apaisant.</h5>
        </div>
        <div className="images">
          <img id="img1" src={s1} alt="photo"/>
          <img  id="img2" src={s2} alt="photo"/>

        </div>

      </div>
    </div>
  );
}
