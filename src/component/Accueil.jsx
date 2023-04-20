import React from "react";
import Produits from "./Produits";
import TopNavbar from "./Navbar";

const Accueil = () => {
  return (
    <>
      <TopNavbar />
      <div className="Hero">
        <div className="card bg-dark text-white">
          <img
            src="/Images/background.png"
            className="card-img"
            alt="background"
            height="660px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                Bienvenue à tout
              </h5>
              <p className="card-text lead fs-2" style={{ color: "white" }}>
                Découvrez toutes les tendances
              </p>
            </div>
          </div>
        </div>
        <Produits />
      </div>
    </>
  );
};

export default Accueil;
