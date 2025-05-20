import React, { useState, useEffect } from "react";
import piscine2 from "../images/piscine2.jpg";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
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
    <div>
      <img id="piscine2" src={piscine2} alt="photo" />
      <br></br>
      <h5 id="contact-title">Tarifs à la nuit</h5>
      <section className="tarifs">
  <div className="tarif-container">
    <div className="tarif-card" data-aos="fade-up" data-aos-delay="100">
      <h3>Emplacement Camping-car</h3>
      <p>2 pers. + camping-car ou caravane + voiture</p>
      <ul>
        <li>
          <span>1 à 10 jours :</span> <strong>14€ (140 dh)</strong>
        </li>
        <li>
          <span>11 à 60 jours :</span> <strong>13€ (130 dh)</strong>
        </li>
        <li>
          <span>+2 mois :</span> <strong>10.5€ (105 dh)</strong>
        </li>
      </ul>
    </div>

    <div className="tarif-card" data-aos="fade-up" data-aos-delay="200">
      <h3>Emplacement Tente</h3>
      <p>1 pers. + Tente + voiture (-10% pour 7 jours)</p>
      <p className="price">10€ (100 dh)</p>
      <h3>Piscine pour les résidents</h3>
      <p className="price">Gratuit</p>
    </div>

    <div className="tarif-card" data-aos="fade-up" data-aos-delay="300">
      <h3>Appartement avec terrasse</h3>
      <p>5 pers. - 2 chambres - salon - cuisine - sanitaires</p>
      <p className="price">78€ (780 dh)</p>
    </div>

    <div className="tarif-card" data-aos="fade-up" data-aos-delay="400">
      <h3>Maison avec terrasse</h3>
      <p>4 pers. - 1 chambre + mezzanine - salon - cuisine - sanitaires</p>
      <p className="price">72€ (720 dh)</p>
    </div>

    <div className="tarif-card" data-aos="fade-up" data-aos-delay="500">
      <h3>Chambre double</h3>
      <p>Avec terrasse panoramique - Vue mer - sanitaires - frigo - TV</p>
      <p className="price">42€ (420 dh)</p>
    </div>

    <div className="tarif-card" data-aos="fade-up" data-aos-delay="600">
      <h3>Dar Guitoune</h3>
      <p>
        Chambre double face à la mer - frigo - zone barbecue - sanitaires
        collectifs
      </p>
      <p className="price">35€ (350 dh)</p>
    </div>
  </div>
</section>

      
      <div className="contact-details">
        <h1>N'hésitez pas à nous contacter !</h1>
        <p></p>
        <h5>Camping Terre d'Océan</h5>
        <h5>Taghazout - BP 186 - Poste d'Aourir 80750 AGADIR</h5>
        <h5>Contact & Réservation</h5>
        <h5>Tél : +212 6 75 58 54 07 / +212 8 80 66 51 30</h5>
        
      </div>

      <div  className="contact-form">
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
      <br></br>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.4958142112537!2d-9.744307125815277!3d30.56354589379209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb252926ae23c0d%3A0x2fa69f23de132268!2sCamping%20Terre%20d&#39;Ocean!5e0!3m2!1sfr!2sma!4v1743066993444!5m2!1sfr!2sma"
        id="localisation"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
