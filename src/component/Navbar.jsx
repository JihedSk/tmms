import { NavLink, useLocation } from "react-router-dom";

export default function TopNavbar() {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith("/AdminDashboard");
  const isClientDashboard = location.pathname.startsWith("/ClientDashboard");

  if (isAdminDashboard) {
    return null;
  }
  if (isClientDashboard){
  
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light by-white py-3 shadow-sm ">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          TechMedSci
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Produits">
                Produits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/À propos">
                À propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn">
              <NavLink to="/connexion" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Connexion
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
