import React from "react";
import "./SobreMi.css";
export const SobreMi = ({ imgAboutMe }) => {
  return (
    <div className="sobre-mi__card">
      <div className="sobre-mi__img col-md-6 col-sm-12 my-4">
        <img src={imgAboutMe} alt="..." className="img-fluid" />
      </div>
      <div className="sobre-mi__body col-md-5 col-sm-12 my-4">
        <div className="sobre-mi__content col-md-8">
          <h3 className="sobre-mi__title">
            <strong>
              <span>RAMIREZ MARÍA LORENA</span>
            </strong>
          </h3>
          <p className="sobre-mi__paragraph">
            Mi nombre es María Lorena Ramírez, soy Licenciada en Fonoaudiología,
            egresada de la Universidad Nacional de Córdoba, Argentina. Me
            desempeño en la intervención y tratamiento de niños y adolescentes
            con trastornos de la comunicación, del habla y del lenguaje, a
            partir de un abordaje terapéutico desde un perfil neurolingüístico.
            Mi profesión me permite estar cerca de los niños, acompañarlos en su
            camino, ofreciendo lo mejor de mí para que logren expresar el máximo
            de su potencial. De ellos recibo la mayor de las gratificaciones que
            me colman de felicidad. Mi objetivo es brindar las herramientas
            adecuadas para que el niño pueda desarrollar su potencial
            lingüístico y supere sus dificultades de comunicación.
            <p className="mt-3">
              Me considero una persona apasionada por la fonoaudiología,
              creativa, con iniciativa, proactiva y dinámica. Emprendedora y muy
              responsable, en continua búsqueda de la superación de las
              dificultades de los pacientes. Dispongo de gran capacidad de
              organización y excelencia en el trabajo. Con formación permanente
              y con gran capacidad de adaptación. Las mismas habilidades
              adaptativas y comunicativas facilitan el desempeño del trabajo en
              equipo e interdisciplinario, favoreciendo la evolución y
              acompañamiento de los pacientes y sus familias.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
