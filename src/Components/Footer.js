import React from "react";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-div">
      <img src={logo} alt="logo" />
      <div className="details">
        <h5> Camping Terre d'Océan</h5>
        <h5> Taghazout - BP 186 - Poste d'Aourir</h5>
        <h5> 80750 AGADIR</h5>
        <h5>Tél. : +212 6 75 58 54 07</h5>
        <h5> Tél. : +212 8 80 66 51 30</h5>
      </div>
      <div className="links">
      <Link className="nav-link" to="/hebergements">Hébergements</Link>
        <Link className="nav-link" to="/activites">Activités & Services</Link>
        <Link className="nav-link" to="/contact">Contact & Réservation</Link>
        <div className="socials">
          <a href="https://web.facebook.com/profile.php?id=100064530766162&sk=about">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/terredocean?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src={instagram} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}
