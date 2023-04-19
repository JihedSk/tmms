import './App.css';
import Accueil from './component/Accueil';
import TopNavbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Produits from './component/Produits';
import Produit from './component/Produit';
import { LoginPage } from './component/LoginPage'; 
import AboutPage from './component/AboutPage';
import AdminDashboard from './component/AdminDashboard';
import ClientDashboard from './component/ClientDashboard';




function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/Produits" component={Produits} />
        <Route exact path="/Produits/:id" component={Produit} />
        <Route exact path="/connexion" component={LoginPage} /> 
        <Route exact path="/À propos" component={AboutPage} />       
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/ClientDashboard" component={ClientDashboard} />
        
      </Routes>
    </>
  );
}

export default App;
