import React from "react";
import "./Home.css";
import galeria1 from "../assets/galeria1.jpg";
import galeria2 from "../assets/galeria2.png";
import galeria3 from "../assets/galeria3.png";
import { Footer } from "../Footer/Footer";
import { Map } from "../Map/Map";
import { Galeria } from "../Galeria/Galeria";
import { Presentacion } from "../Presentacion/Presentacion";
import { HorariosDeAtencion } from "../HorariosDeAtencion/HorariosDeAtencion";
import { Contacto } from "../Contacto/Contacto";

export const Home = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h2>Consultorio de Fonoaudología</h2>
        <hr className="w-100 text" style={{ height: "0.1rem" }} />
        <blockquote className="blockquote fs-1"></blockquote>
        <Presentacion />
      </div>

      <div>
        <Galeria galeria1={galeria1} galeria2={galeria2} galeria3={galeria3} />
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12">
          <Map />
        </div>
        <div className="col-md-6 col-sm-12">
          <HorariosDeAtencion />
        </div>
        <div />
        <div className="col-12">
          <Contacto />
        </div>
      </div>
      <Footer />
    </>
  );
};
