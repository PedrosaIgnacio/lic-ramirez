import React from "react";

export const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <hr className="w-100" />
      <form>
        <div className="row">
          <div className="form-group col-6">
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
          <div className="form-group col-6">
            <input type="text" className="form-control" placeholder="Mail" />
          </div>
          <div className="form-group col-6 mt-4">
            <textarea className="form-control" placeholder="Mensaje" rows={4} />
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-primary w-100">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
