import React from "react";
import TopNavbar from "../component/Navbar";
import Accueil from "../component/Accueil";
import Produits from "../component/Produits";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AboutPage from "../component/AboutPage";
import { LoginPage } from "../component/LoginPage";
import AdminDashboard from "../component/AdminDashboard";
import ClientDashboard from "../component/ClientDashboard";
import Profils from "./adminDash/Profils";
import Machines from "./adminDash/Machines";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/apropos" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminDash" element={<AdminDashboard />}>
          <Route path="profils" element={<Profils />} />
          <Route path="machines" element={<Machines />} />
        </Route>
        <Route path="/clientDash" element={<ClientDashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
