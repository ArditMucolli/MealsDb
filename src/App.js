import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Meal from "./pages/Meal";
import About from "./pages/About";
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
