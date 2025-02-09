import "./App.css";
import Header from "./Components/Header";
import Accueil from "./Components/Accueil";
import Footer from "./Components/Footer";
import Hebergements from "./Components/Hebergements";
import Activites from "./Components/Activites";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/hebergements" element={<Hebergements />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
