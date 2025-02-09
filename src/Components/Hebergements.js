import React from "react";
import camping from "../images/camping.jpg";
import h1 from "../heberg/h1.jpg";
import h2 from "../heberg/h2.jpg";
import h3 from "../heberg/h3.jpg";
import h4 from "../heberg/h4.jpg";
import h5 from "../heberg/h5.jpg";
import h6 from "../heberg/h6.jpg";
import h7 from "../heberg/h7.jpg";
import h8 from "../heberg/h8.jpg";
import h9 from "../heberg/h9.jpg";
import h10 from "../heberg/h10.jpg";
import h11 from "../heberg/h11.jpg";
import h12 from "../heberg/h12.jpg";
import h13 from "../heberg/h13.jpg";
import h14 from "../heberg/h14.jpg";
import h15 from "../heberg/h15.jpg";
import h16 from "../heberg/h16.jpg";

export default function Hebergements() {
  return (
    <div className="hebergements-div">
      <img id="img1" src={camping} alt="camping" />

      <div className="heberg1">
        <h2>Terre d'Océan - Hébergements</h2>
        <img id="h1" src={h1} alt="photo" />
        <div className="details">
          <h3>DAR GUITOUNES</h3>
          <br></br>
          <h4>Nb. de personnes : 3 à partir de 30 €/jour (300 Dhs/jour)</h4>
          <h4>2 pax - 12 € la pers suppl</h4>
          <br></br>
          <ul>
            <li>3 Couchages</li>
            <li>Frigo</li>
            <li>Table + Banc</li>
            <li>Sanitaires extérieurs à proximité</li>
          </ul>
        </div>
        <div className="autres-imgs">
          <img id="h2" src={h2} alt="photo" />
          <img id="h3" src={h3} alt="photo" />
          <img id="h4" src={h4} alt="photo" />
          <img id="h5" src={h5} alt="photo" />
          <img id="h6" src={h6} alt="photo" />
        </div>
      </div>

      <div className="heberg2">
        <img id="h7" src={h7} alt="photo" />
        <div className="details">
          <h3>APPARTEMENTS</h3>
          <br></br>
          <h4>Nb. de personnes : 4 à 6 personnes à partir de 72 €/jour </h4>
          <h4>
            (720 Dhs/jour) - 453€ / semaine (4530dhs) = -10% (+12 € /pers suppl)
          </h4>
          <br></br>
          <ul>
            <li>Salon</li>
            <li>Cuisine équipée</li>
            <li> 2 chambres</li>
            <li>Avec terrasse panoramique (appt à 780dh) </li>
          </ul>
        </div>
        <div className="autres-imgs">
          <img id="h8" src={h8} alt="photo" />
          <img id="h9" src={h9} alt="photo" />
          <img id="h10" src={h10} alt="photo" />
          <img id="h11" src={h11} alt="photo" />
          <img id="h12" src={h12} alt="photo" />
        </div>
      </div>

      <div className="heberg3">
        <img id="h13" src={h13} alt="photo" />
        <div className="details">
          <h3>CHAMBRES</h3>
          <br></br>
          <h4>Nb. de personnes : 2</h4>
          <h4> à partir de 38 €/jour (380 Dhs/jour)</h4>
          <br></br>
          <ul>
            <li>Lit double</li>
            <li>Réfrigérateur</li>
            <li>TV</li>
            <li> Terrasse panoramique</li>
          </ul>
        </div>
        <div className="autres-imgs">
          <img id="h2" src={h14} alt="photo" />
          <img id="h3" src={h15} alt="photo" />
          <img id="h4" src={h16} alt="photo" />
        </div>
      </div>

      <div className="contact-form">
        <h3 className="contact-title">Formulaire de Réservation</h3>
        <div className="mb-3">
          <label className="form-label">Nom & Prénom</label>
          <input type="text" className="form-control" />
          <label className="form-label">Addresse E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label className="form-label">Téléphone</label>
          <input type="tel" className="form-control" />
          <label className="form-label">Date d'arrivée</label>
          <input type="date" className="form-control" />
          <label className="form-label">Date de départ</label>
          <input type="date" className="form-control" />
          <label className="form-label">Type d'hébergement</label>
          <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="1">Tente</option>

            <option value="2">Chambre</option>
            <option value="3">Appartement</option>
            <option value="4">Dar Guitounes</option>
          </select>
          <label className="form-label">Nombre d'adultes</label>
          <input type="number" className="form-control" />
          <label className="form-label">Nombre d'enfants</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Commentaire</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button type="button" id="submit-btn" class="btn btn-dark">
          Envoyer
        </button>
      </div>
    </div>
  );
}
