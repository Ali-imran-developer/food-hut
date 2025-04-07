import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import PizzaPage from "./view/pizza";
import ShawarmaPage from "./view/shawarma";
import BurgerPage from "./view/burger";
import DrinksPage from "./view/drinks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/shawarma" element={<ShawarmaPage />} />
        <Route path="/burger" element={<BurgerPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
      </Routes>
    </Router>
  );
}

export default App;