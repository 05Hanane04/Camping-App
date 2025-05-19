import React, { useState, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hebergements() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [nomComplet, setNomComplet] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateArrivee, setDateArrivee] = useState("");
  const [datedepart, setDateDepart] = useState("");
  const types = ["", "Tente", "Chambre", "Appartement", "Dar Ghitounes"];
  const [typeHeber, setTypeHeber] = useState("");
  const [nbAdultes, setNbAdultes] = useState("");
  const [nbEnfants, setNbEnfants] = useState("");
  const [commentaire, setCommentaire] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    if (nomComplet === '' || email === '' || telephone === '' || dateArrivee === '' || datedepart === '' || typeHeber === '' || nbAdultes === '' || nbEnfants === ''){
      alert("Tous les champs sont nécessaires");

    }else{
      alert('Bonjour ${nomComplet}, votre réservation a été envoyer avec succés');

    }
  }
  

  return (
    <div className="hebergements-div">
      <img id="img1" src={camping} alt="camping" />

      <div className="heberg1" data-aos="fade-up">
        <h2>Terre d'Océan - Hébergements</h2>

        <img
          id="h1"
          src={h1}
          alt="photo"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <div className="details">
          <h3>DAR GUITOUNES</h3>
          <br />
          <h4>Nb. de personnes : 3 à partir de 30 €/jour (300 Dhs/jour)</h4>
          <h4>2 pax - 12 € la pers suppl</h4>
          <br />
          <ul>
            <li>3 Couchages</li>
            <li>Frigo</li>
            <li>Table + Banc</li>
            <li>Sanitaires extérieurs à proximité</li>
          </ul>
        </div>

        <div className="autres-imgs" data-aos="fade-up">
          <img
            id="h2"
            src={h2}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <img
            id="h3"
            src={h3}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <img
            id="h4"
            src={h4}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            id="h5"
            src={h5}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <img
            id="h6"
            src={h6}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>

      <div className="heberg2" data-aos="fade-up">
        <img
          id="h7"
          src={h7}
          alt="photo"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <div className="details" data-aos="fade-up" data-aos-delay="200">
          <h3>APPARTEMENTS</h3>
          <br />
          <h4>Nb. de personnes : 4 à 6 personnes à partir de 72 €/jour</h4>
          <h4>
            (720 Dhs/jour) - 453€ / semaine (4530dhs) = -10% (+12 € /pers suppl)
          </h4>
          <br />
          <ul>
            <li>Salon</li>
            <li>Cuisine équipée</li>
            <li>2 chambres</li>
            <li>Avec terrasse panoramique (appt à 780dh)</li>
          </ul>
        </div>

        <div className="autres-imgs" data-aos="fade-up" data-aos-delay="300">
          <img
            id="h8"
            src={h8}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            id="h9"
            src={h9}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <img
            id="h10"
            src={h10}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="600"
          />
          <img
            id="h11"
            src={h11}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="700"
          />
          <img
            id="h12"
            src={h12}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="800"
          />
        </div>
      </div>

      <div className="heberg3" data-aos="fade-up">
        <img
          id="h13"
          src={h13}
          alt="photo"
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <div className="details" data-aos="fade-up" data-aos-delay="200">
          <h3>CHAMBRES</h3>
          <br />
          <h4>Nb. de personnes : 2</h4>
          <h4>à partir de 38 €/jour (380 Dhs/jour)</h4>
          <br />
          <ul>
            <li>Lit double</li>
            <li>Réfrigérateur</li>
            <li>TV</li>
            <li>Terrasse panoramique</li>
          </ul>
        </div>

        <div className="autres-imgs" data-aos="fade-up" data-aos-delay="300">
          <img
            id="h2"
            src={h14}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            id="h3"
            src={h15}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <img
            id="h4"
            src={h16}
            alt="photo"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>

      <div className="contact-details">
        <h1>N'hésitez pas à nous contacter !</h1>
        <p></p>
        <h5>Camping Terre d'Océan</h5>
        <h5>Taghazout - BP 186 - Poste d'Aourir 80750 AGADIR</h5>
        <h5>Contact & Réservation</h5>
        <h5>Tél : +212 6 75 58 54 07 / +212 8 80 66 51 30</h5>
      </div>

      <div style={{ marginTop: "-400px" }} className="contact-form">
        <form class="row g-3">
          <div className="col-12">
            <label className="form-label">Nom & Prénom</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setNomComplet(e.target.value);
              }}
              value={nomComplet}
            />{" "}
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Téléphone</label>
            <input
              type="tel"
              className="form-control"
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              value={telephone}
            />{" "}
          </div>
          <div className="col-md-6">
            <label className="form-label">Date d'arrivée</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setDateArrivee(e.target.value);
              }}
              value={dateArrivee}
            />{" "}
          </div>
          <div className="col-md-6">
            <label className="form-label">Date de Départ</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setDateDepart(e.target.value);
              }}
              value={datedepart}
            />{" "}
          </div>
          <div className="col-12">
            <label className="form-label">Type d'hébergement</label>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setTypeHeber(e.target.value);
              }}
            >
              {types.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </select>{" "}
          </div>
          <div className="col-md-6">
            <label className="form-label">Nombre d'adultes</label>
            <input
              type="number"
              className="form-control"
              min={1}
              max={5}
              onChange={(e) => {
                setNbAdultes(e.target.value);
              }}
              value={nbAdultes}
            />{" "}
          </div>
          <div className="col-md-6">
            <label className="form-label">Nombre d'enfants</label>
            <input
              type="number"
              className="form-control"
              min={0}
              max={5}
              onChange={(e) => {
                setNbEnfants(e.target.value);
              }}
              value={nbEnfants}
            />{" "}
          </div>
          <div className="col-12">
            <label className="form-label">Commentaire</label>
            <textarea
              className="form-control"
              rows="3"
              onChange={(e) => {
                setCommentaire(e.target.value);
              }}
              value={commentaire}
            ></textarea>{" "}
          </div>
          <div class="col-12">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-dark"
              id="submit-btn"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
