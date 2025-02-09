import React from "react";
import vuemer from "../images/vuemer.jpg";
import piscine from "../images/piscine.jpg";
import surf from "../images/surf.jpg";
import pingpong from "../images/pingpong.png";
import parachute from "../images/parachute.png";
import babyfoot from "../images/babyfoot.png";
import r1 from '../restau/r1.png';
import r2 from '../restau/r2.png';
import r3 from '../restau/r3.png';
import r4 from '../restau/r4.png';

export default function Activites() {
  return (
    <div className="activites-div">
      <img id="img1" src={vuemer} alt="photo" />
      <h2>Terre d'Océan - Activités</h2>
      <div className="activite1">
        <img src={piscine} alt="photo" />
        <h3>PISCINE</h3>
        <h4>
          Venez passer une agréable journée au bord de notre piscine à Taghazout
          (entrée à 90 Dhs pour les adultes et 50 Dhs pour les enfants (-de 1.20
          m) - GRATUIT pour les résidents du camping).
        </h4>
      </div>
      <br></br>
      <br></br>
      <div className="activite2">
        <img src={surf} alt="photo" />
        <h3>SURF</h3>
        <h4>
          Paradis pour les surfeurs, du débutant au confirmé, le camping Terre
          d'Océan se situe au coeur de spots de surf renommés : la Pointe des
          Ancres, le Killer, le Panorama, la Source...
        </h4>
      </div>
      <h3 id="activites-title">Autres Activités</h3>

      <div className="autres-activites">
        <div className="activite">
          <img src={pingpong} alt="photo" />
          <h5 className="img-title">PING PONG</h5>
        </div>
        <div className="activite">
          <img id="parachute" src={parachute} alt="photo" />
          <h5 className="img-title">PARACHUTE</h5>
        </div>
        <div className="activite">
          <img src={babyfoot} alt="photo" />
          <h5 className="img-title">BABY FOOT</h5>
        </div>
      </div>
      <div className="restaurant-div">
        <h2>Terre d'Océan - Restaurant</h2>
        <h5>
          Profitez de la vue panoramique exceptionnelle sur l'océan, venez
          déguster nos spécialités (Brochettes de lotte, gratin de fruits de
          mer, Saint-Pierre à la sicilienne, Fondant au chocolat, crêpes aux
          agrumes, Salade Marocaine, Brochette de dinde... )
        </h5>
        <br></br>
        <div className="restau-img">
        <img id="r1" src={r1} alt="photo" />
        <img id="r2" src={r2} alt="photo" />
        <img id="r3" src={r3} alt="photo" />
        <img id="r4" src={r4} alt="photo" />
        </div>

      </div>
    </div>
  );
}
