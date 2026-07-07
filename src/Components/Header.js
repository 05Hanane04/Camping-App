import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="my-navbar">
      <nav
        className={`navbar navbar-expand-lg my-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            {" "}
          <img src={logo} className="img-fluid" alt="Logo du Camping" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hebergements">
                  Hébergements
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/activites">
                  Activités & Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact & Réservation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

