import "./App.css";
import Accueil from "./component/Accueil";
import TopNavbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Produits from "./component/Produits";
import Produit from "./component/Produit";
import { LoginPage } from "./component/LoginPage";
import AboutPage from "./component/AboutPage";
import AdminDashboard from "./component/AdminDashboard";
import ClientDashboard from "./component/ClientDashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
