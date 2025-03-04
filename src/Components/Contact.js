import React,{useState} from "react";
import piscine2 from "../images/piscine2.jpg";
import localisation from "../images/localisation.png";
export default function Contact() {
  const [nomComplet,setNomComplet]=useState("");
  const [email,setEmail]=useState("");
  const [tel,setTelephone]=useState("");
  const [dateDebut,setDateDebut]=useState("");
  const [dateDepart,setDateDepart]=useState("");
  const types = ['','Tente','Chambre','Appartement','Dar Ghitounes'];
  const [type,setType] =useState("");
  const [nbAdultes,setNbAdultes]=useState("");
  const [nbEnfants,setNbEnfants]=useState("");
  const [commentaire,setCommentaire]=useState("");
  function handleSubmit(e){
    e.preventDefault();
    if (nomComplet === '' || email === '' || tel === '' || dateDebut === '' || dateDepart === '' || type === '' || nbAdultes === '' || nbEnfants === ''){
      alert("Tous les champs sont nécessaires");

    }else{
      alert(`Bonjour ${nomComplet}, votre réservation a été envoyer avec succés`);

    }
  }
  return (
    <div>
      <img id="piscine2" src={piscine2} alt="photo" />
      <br></br>
      <h5 id="contact-title">Tarifs à la nuit</h5>
      <section class="tarifs">
        <div class="tarif-container">
          <div class="tarif-card">
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

          <div class="tarif-card">
            <h3>Emplacement Tente</h3>
            <p>1 pers. + Tente + voiture (-10% pour 7 jours)</p>
            <p class="price">10€ (100 dh)</p>
            <h3>Piscine pour les résidents</h3>
            <p class="price">Gratuit</p>

          </div>

          <div class="tarif-card">
            <h3>Appartement avec terrasse</h3>
            <p>5 pers. - 2 chambres - salon - cuisine - sanitaires</p>
            <p class="price">78€ (780 dh)</p>
          </div>

          <div class="tarif-card">
            <h3>Maison avec terrasse</h3>
            <p>
              4 pers. - 1 chambre + mezzanine - salon - cuisine - sanitaires
            </p>
            <p class="price">72€ (720 dh)</p>
          </div>

          <div class="tarif-card">
            <h3>Chambre double</h3>
            <p>Avec terrasse panoramique - Vue mer - sanitaires - frigo - TV</p>
            <p class="price">42€ (420 dh)</p>
          </div>
          <div class="tarif-card">
            <h3>Dar Guitoune</h3>
            <p>
              Chambre double face à la mer - frigo - zone barbecue - sanitaires
              collectifs
            </p>
            <p class="price">35€ (350 dh)</p>
          </div>
        </div>
      </section>
      <div className="contact-form">
        <h3 className="contact-title">Formulaire de Réservation</h3>
        <div className="mb-3">
          <label className="form-label">Nom & Prénom</label>
          <input type="text" className="form-control" onChange={(e)=>{setNomComplet(e.target.value)}} value={nomComplet}/>
          <label className="form-label">Addresse E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}} value={email}
            />
          <label className="form-label">Téléphone</label>
          <input type="tel" className="form-control" onChange={(e)=>{setTelephone(e.target.value)}} value={tel}/>
          <label className="form-label">Date d'arrivée</label>
          <input type="date" className="form-control" onChange={(e)=>{setDateDebut(e.target.value)}} value={dateDebut}/>
          <label className="form-label">Date de départ</label>
          <input type="date" className="form-control" onChange={(e)=>{setDateDepart(e.target.value)}} value={dateDepart}/>
          <label className="form-label">Type d'hébergement</label>
          <select class="form-select" aria-label="Default select example" onChange={(e)=>{setType(e.target.value)}}>
            {types.map((type,index)=>(
             <option key={index}>{type}</option>
            ))}
          
          </select>
          <label className="form-label">Nombre d'adultes</label>
          <input type="number" className="form-control" min={1} max={5} onChange={(e)=>{setNbAdultes(e.target.value)}} value={nbAdultes}/>
          <label className="form-label">Nombre d'enfants</label>
          <input type="number" className="form-control" min={0} max={5} onChange={(e)=>{setNbEnfants(e.target.value)}} value={nbEnfants}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Commentaire</label>
          <textarea className="form-control" rows="3" onChange={(e)=>{setCommentaire(e.target.value)}} value={commentaire}></textarea>
        </div>
        <button type="submit" onClick={handleSubmit} id="submit-btn" class="btn btn-dark">
          Envoyer
        </button>
      </div>
      <br></br>
      <img id="localisation" src={localisation} alt="photo" />
    </div>
  );
}
