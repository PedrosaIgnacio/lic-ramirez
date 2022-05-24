import React from "react";

export const Galeria = ({ galeria1, galeria2, galeria3 }) => {
  return (
    <>
      <div className="text-center mt-4">
        <h2>Galería</h2>
        <hr className="w-100" />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 animate__animated animate__pulse">
            <img src={galeria3} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-center align-items-center">
              <h5 className="card-title">Sala de Espera</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={galeria2} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-center align-items-center">
              <h5 className="card-title">Consultorio</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 ">
            <img src={galeria1} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-center align-items-center">
              <h5 className="card-title">Rehabilitacion Neurolingüística</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
