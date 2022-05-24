import React from "react";

export const Map = () => {
  return (
    <div className="mt-4">
      <h2>Ubicación</h2>
      <hr className="w-100" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.900150386918!2d-64.190196!3d-31.416876999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a322d66ad4f5%3A0xfbfb06629e6efc03!2sFonoaudiologa%20Lic.%20Ramirez%20Mar%C3%ADa%20Lorena!5e0!3m2!1ses!2sar!4v1653360643892!5m2!1ses!2sar"
        width="600"
        className="img-fluid"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};
