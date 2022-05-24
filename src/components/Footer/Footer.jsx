import React from "react";
import WhatsApp from "../assets/wp.png";
import Instagram from "../assets/ig.png";
import Linkedin from "../assets/lnk.png";

export const Footer = () => {
  return (
    <nav className="navbar sticky-bottom navbar-light mt-4">
      <div className="container-fluid d-flex justify-content-center">
        <ul className="d-flex">
          <a
            href="https://api.whatsapp.com/send/?phone=543513468980&text=Hola+quisiera+hacer+una+consulta&app_absent=0"
            className="nav-link"
          >
            <img
              src={WhatsApp}
              className="img-fluid"
              style={{ height: "4rem", width: "4rem" }}
            />
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/mar%C3%ADa-lorena-ramirez-4402a0195/"
            className="nav-link"
          >
            <img
              src={Linkedin}
              className="img-fluid"
              style={{ height: "4rem", width: "4rem" }}
            />
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/fonoaudiologa.ramirez/"
            className="nav-link"
          >
            <img
              src={Instagram}
              className="img-fluid"
              style={{ height: "4rem", width: "4rem" }}
            />
            Instagram
          </a>
        </ul>
      </div>
    </nav>
  );
};
