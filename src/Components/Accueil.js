import React, { useEffect, useState } from "react";
import mainImg from "../images/mainImg.jpg";
import camping from "../images/camping.jpg";
import vuemer from "../images/vuemer.jpg";

import a1 from "../images/a1.png";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Accueil() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); 

  const images = [mainImg, camping, vuemer];

  const changeImage = () => {
    setIsFading(true); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false); 
    }, 500); 
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervalId = setInterval(changeImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="accueil-div">
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt="carousel-img"
          className={`carousel-img ${isFading ? "fade-out" : "fade-in"}`}
          id="mainImg"
        />
      </div>

      <div className="titles">
        <h2 id="title1">Camping Terre d'Océan</h2>
        <h5 id="title2">Camping à Taghazout</h5>
      </div>

      <div className="intro">
        En savoir plus sur le Camping <img src={arrow} alt="" />
      </div>

      <div className="accueil-imgs" data-aos="fade-up">
        <img
          src={a1}
          alt="a1"
          className="accueil-img"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          src={a2}
          alt="a2"
          className="accueil-img"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src={a3}
          alt="a3"
          className="accueil-img"
          data-aos="fade-up"
          data-aos-delay="500"
        />
      </div>

      <br /><br />

      <div className="accueil-btn">
        <button type="button" className="btn">
          <Link className="nav-link" to="/hebergements">
            Nos Hébergements
          </Link>
        </button>
        <button type="button" className="btn">
          <Link className="nav-link" to="/activites">
            Notre Restaurant et sa piscine
          </Link>
        </button>
        <button type="button" className="btn">
          <Link className="nav-link" to="/contact">
            Réservez maintenant !
          </Link>
        </button>
      </div>

      <div className="presentation">
        <div className="text">
          <h2>Terre d'Océan - Camping Taghazout</h2>
          <h5>
            À seulement 20 minutes d'Agadir, entre mer et montagne, Terre
            d'Océan vous accueille dans un cadre exceptionnel. Son restaurant et
            sa piscine offrent une vue imprenable sur l'océan, idéale pour se
            détendre et profiter de moments uniques. Venez passer des vacances
            tranquilles, en pleine nature, et vous ressourcer dans un cadre
            apaisant.
          </h5>
        </div>
        <div className="images" data-aos="fade-up">
          <img
            id="img1"
            src={s1}
            alt="photo"
            data-aos="fade-right"
            data-aos-delay="100"
          />
          <img
            id="img2"
            src={s2}
            alt="photo"
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </div>
      </div>

      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.4958142112537!2d-9.744307125815277!3d30.56354589379209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb252926ae23c0d%3A0x2fa69f23de132268!2sCamping%20Terre%20d'Ocean!5e0!3m2!1sfr!2sma!4v1743066993444!5m2!1sfr!2sma"
        id="localisation"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
