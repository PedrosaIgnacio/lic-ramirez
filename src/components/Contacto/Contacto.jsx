import React from "react";

export const Contacto = () => {
  return (
    <div className="mt-4">
      <h2>Contacto</h2>
      <hr className="w-100" />
      <form>
        <div className="row">
          <div className="form-group col-md-6 col-sm-12 mt-4">
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
          <div className="form-group col-md-6 col-sm-12 mt-4">
            <input type="text" className="form-control" placeholder="Mail" />
          </div>
          <div className="form-group col-md-12 col-sm-12 mt-4">
            <textarea
              className="form-control"
              placeholder="Mensaje"
              rows={4}
              style={{ maxHeight: "110px" }}
            />
          </div>
          <div className="form-group mt-4 d-flex justify-content-center">
            <button className="btn btn-primary w-25">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
