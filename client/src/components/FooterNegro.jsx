import React from "react";
import "../css/FooterNegro.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="divContainerNegro">
      <div className="div1">
        <Link to="http://localhost:3001/avislegal"
          rel="noreferrer"
          className="h3Negro"
        >
          <h3>Avís legal</h3>
        </Link>
      </div>
      <div className="div2">
        <h3 className="h3Negro">lasoterrania@gmail.com</h3>
      </div>
      <div className="div3">
        <Link to="https://www.instagram.com/lasoterrania/"
          rel="noreferrer"
          target="_blank"
          className="link-divNegro"
        >
          <AiFillInstagram />
        </Link>
        <Link to="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131"
          rel="noreferrer"
          target="_blank"
          className="link-divNegro"
        >
          <AiFillFacebook />
        </Link>
        <Link to="https://www.youtube.com/c/lasoterr%C3%A0nia"
          rel="noreferrer"
          target="_blank"
          className="link-divNegro"
        >
          <AiFillYoutube />
        </Link>
      </div>
    </footer>
  );
}
