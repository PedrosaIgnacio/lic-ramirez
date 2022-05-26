import React from "react";
import "./HorariosDeAtencion.css";
export const HorariosDeAtencion = () => {
  const horarios = [
    {
      dia: "Lunes",
      desde: "09:00",
      hasta: "19:00",
    },
    {
      dia: "Martes",
      desde: "09:00",
      hasta: "19:00",
    },
    {
      dia: "Miércoles",
      desde: "09:00",
      hasta: "19:00",
    },
    {
      dia: "Jueves",
      desde: "09:00",
      hasta: "19:00",
    },
    {
      dia: "Viernes",
      desde: "09:00",
      hasta: "19:00",
    },
  ];

  return (
    <div className="horarios__card mt-4 py-5">
      <div className="mt-4">
        <h1 className="text-white mx-5 p-3">
          <strong>
            <span className="horarios__title">HORARIOS</span>
          </strong>
        </h1>
      </div>
      <div className="table-responsive">
        <table className="table text-white text-center">
          <thead>
            <tr>
              <th></th>
              {horarios.map(({ dia }) => {
                return (
                  <th className="test">
                    <h3 className="text-white">
                      <strong>
                        <span className="horarios__font mx-5">{dia}</span>
                      </strong>
                    </h3>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3 className="text-white">
                  <strong>
                    <span className="horarios__font mx-5">Desde: </span>
                  </strong>
                </h3>
              </td>
              {horarios.map(({ desde }) => {
                return (
                  <td>
                    <h3>
                      <strong>
                        <span className="horarios__font mx-5">{desde}</span>
                      </strong>
                    </h3>
                  </td>
                );
              })}
            </tr>
            <tr>
              <td>
                <h3 className="text-white">
                  <strong>
                    <span className="horarios__font mx-5">Hasta: </span>
                  </strong>
                </h3>
              </td>
              {horarios.map(({ hasta }) => {
                return (
                  <td>
                    <h3>
                      <strong>
                        <span className="horarios__font mx-5">{hasta}</span>
                      </strong>
                    </h3>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
