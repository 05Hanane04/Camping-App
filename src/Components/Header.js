import React from 'react';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <div className='my-navbar'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} className="img-fluid" alt="Logo de l'entreprise" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/hebergements">Hébergements</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/activites">Activités & Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact & Réservation</Link></li>
                        <li className="nav-item">
                            <button type="button" id="btn" className="btn rounded-pill"><Link  id='btn-link' to="/login">Se connecter</Link></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);
}