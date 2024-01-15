import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Footer from "./assets/component/Footer/Footer";
import AboutPages from "./assets/pages/AboutPages";
import Erorr from "./assets/pages/Erorr";
import ContactUs from "./assets/pages/ContactUs";
import NavaBar from "./assets/component/NavBar/NavaBar";
import Project from "./assets/pages/Project";
import GetProduct from "./assets/pages/GetProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavaBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="product/:id" element={<GetProduct />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
