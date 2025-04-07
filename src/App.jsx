import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import PizzaPage from "./view/pizza";
import ShawarmaPage from "./view/shawarma";
// import BurgerPage from "./pages/BurgerPage";
// import DrinksPage from "./pages/DrinksPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/shawarma" element={<ShawarmaPage />} />
       {/* <Route path="/burger" element={<BurgerPage />} />
        <Route path="/drinks" element={<DrinksPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;