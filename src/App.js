import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "react";
import Aos from "aos";
import NavaBar from "./component/NavaBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Erorr from "./pages/Erorr";
import Footer from "./component/Footer";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 0,
    });
  }, [])
  return (
    <>
      <BrowserRouter>
        {/* <NavaBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </>
  );
}

export default App;
