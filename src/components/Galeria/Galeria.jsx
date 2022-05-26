import React from "react";
import "./Galeria.css";
export const Galeria = ({ galeria1, galeria2, galeria3 }) => {
  return (
    <>
      <div className="galeria__card">
        <div className="galeria__images">
          <div className="col-sm-12 col-md-3 m-3">
            <img src={galeria1} className="img-fluid img-gal" alt="..." />
          </div>
          <div className="col-sm-12 col-md-3 m-3">
            <img src={galeria2} className="img-fluid img-gal" alt="..." />
          </div>
          <div className="col-sm-12 col-md-3 m-3">
            <img src={galeria3} className="img-fluid img-gal" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};
