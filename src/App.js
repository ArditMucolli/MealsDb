import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Meals from "./pages/Meals/Meals";
import Meal from "./pages/Meal/Meal";
import About from "./pages/About/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MealsForSpecificLetter from "./pages/MealsForSpecificLetter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/meals/:letter" element={<MealsForSpecificLetter />} />
          <Route path="/meal/ingridients/:id" element={<Meal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
