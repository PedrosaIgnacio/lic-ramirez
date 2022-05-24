import React from "react";

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
    <div>
      <h2>Horarios de Atención</h2>
      <hr className="w-100" />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              {horarios.map(({ dia }) => {
                return <th key={dia}>{dia}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Desde: </td>
              {horarios.map(({ desde, dia }) => {
                return <td key={dia}>{desde}</td>;
              })}
            </tr>
            <tr>
              <td className="fw-bold">Hasta: </td>
              {horarios.map(({ hasta, dia }) => {
                return <td key={dia}>{hasta}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
