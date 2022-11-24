import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/about" element={<About />} />
          <Route path="/meals/starts-with/:letter" element={<Meals />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
