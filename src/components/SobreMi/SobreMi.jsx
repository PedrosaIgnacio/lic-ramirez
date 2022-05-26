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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate sapiente aspernatur libero soluta nihil
            sequi nobis, eum voluptates similique vero. Voluptas, debitis rem.
            Perferendis deserunt excepturi adipisci nemo animi! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Deserunt, ullam
            pariatur, officiis sed eligendi quo eum distinctio iure eos
            accusantium minima ab inventore. At repellendus repellat porro
            totam, debitis earum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis voluptatibus ea debitis at quo vero
            praesentium harum laudantium cumque necessitatibus iste, tempora
            veniam hic natus fugiat ut consequuntur quasi? Laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};
