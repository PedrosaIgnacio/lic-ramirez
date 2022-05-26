import React from "react";
import "./Home.css";
import galeria1 from "../assets/galeria1.jpg";
import galeria2 from "../assets/galeria2.png";
import galeria3 from "../assets/galeria3.png";
import imgAboutMe from "../assets/about-me.png";
import { Footer } from "../Footer/Footer";
import { Map } from "../Map/Map";
import { Galeria } from "../Galeria/Galeria";
import { Presentacion } from "../Presentacion/Presentacion";
import { HorariosDeAtencion } from "../HorariosDeAtencion/HorariosDeAtencion";
import { Contacto } from "../Contacto/Contacto";
import { SobreMi } from "../SobreMi/SobreMi";
export const Home = () => {
  return (
    <>
      <Presentacion />
      <SobreMi imgAboutMe={imgAboutMe} />
      <div className="home__first-time-box">
        <p className="home__first-time">
          <strong>
            <span className="home__first-time__paragraph">
              LA PRIMERA VEZ QUE ME VISITAS, TE REGALO UN 25% DE DESCUENTO EN TU
              PRIMERA SESIÓN
            </span>
          </strong>
        </p>
      </div>
      <div className="home__consult-appointment">
        <h3 className="home__consult-appointment-title">
          <strong>
            <span className="home__consult-appointment-title-content">
              ¿ Necesitas reservar un turno ?
            </span>
          </strong>
        </h3>
        <button className="btn btn-pink btn-getAppointment">
          Reserva Aquí
        </button>
      </div>

      <Galeria galeria1={galeria1} galeria2={galeria2} galeria3={galeria3} />
      <Contacto />
      <HorariosDeAtencion />
      <Footer />
    </>
  );
};
