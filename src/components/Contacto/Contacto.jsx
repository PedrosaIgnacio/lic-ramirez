import React from "react";
import "./Contacto.css";
export const Contacto = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form>
          <div className="row">
            <div className="col-md-12">
              <p className="contacto__contacto">
                <strong>
                  <span className="contacto__paragraph">CONTACTO</span>
                </strong>
              </p>
            </div>
            <div className="form-floating mb-3 col-md-6 col-sm-12 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                id="floatingNombre"
              />
              <label for="floatingNombre">Email address</label>
            </div>
            <div className="form-floating mb-3 col-md-6 col-sm-12 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Mail"
                id="floatingMail"
              />
              <label for="floatingMail">Email address</label>
            </div>
            <div className="form-floating mb-3  col-md-12 col-sm-12 mt-4">
              <textarea
                className="form-control"
                placeholder="Mensaje"
                style={{ maxHeight: "110px" }}
                id="floatingMessage"
              />
              <label for="floatingMessage">Mensaje</label>
            </div>
            <div className="form-group mt-4 d-flex justify-content-center">
              <button className="btn btn-pink w-25">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
