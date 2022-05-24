import React from "react";
import Logo from "../assets/logo2.png";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light sticky-top navbarTop">
      <div className="container text-center d-flex justify-content-center align-items-center">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="img-fluid" alt="img" />
        </a>
      </div>
    </nav>
  );
};
