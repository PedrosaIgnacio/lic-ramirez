import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Main/Home";
import { Error } from "../Error/Error";
import { NavBar } from "../NavBar/NavBar";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="container mt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
