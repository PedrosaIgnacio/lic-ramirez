import React from "react";
import "./Presentacion.css";
import consultBg from "../assets/consultorio-img.png";

export const Presentacion = () => {
  return (
    <>
      <div className="presentation__card">
        <div className="presentation__body col-md-6 col-sm-12">
          <h1 className="presentation__title">CONSULTORIO FONOAUDIOLÓGICO</h1>
          <p className="presentation__paragraph">
            Evaluación, diagnóstico y tratamiento de trastornos en la
            comunicación, el habla y el lenguaje. Rehabilitación
            Neurolingüística y método Prompt. Certificados escolares y
            laborales. Audiometrias. Neurorehabilitación. Equipo
            interdisciplinario. Niños, adolescentes y adultos.
          </p>
        </div>
        <div className="col-md-4 col-sm-12">
          <img src={consultBg} alt="..." className="img-fluid" />
        </div>
      </div>
    </>
  );
};
