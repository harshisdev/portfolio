import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Footer from "./assets/component/Footer";
import AboutPages from "./assets/pages/AboutPages";
import Erorr from "./assets/pages/Erorr";
import ContactUs from "./assets/pages/ContactUs";
import NavaBar from "./assets/component/NavaBar";
import Portfolio from "./assets/pages/Portfolio";
import { useEffect, useState } from "react";
import Aos from "aos";
import Loader from "./assets/component/Loader";

function App() {

  const [pageLoading, setPageLoading] = useState(true);
  const [reloadTime, setReloadTime] = useState(null);

  useEffect(() => {
    const loadEventEnd = window.performance.timing.loadEventEnd;
    const navigationStart = window.performance.timing.navigationStart;

    if (loadEventEnd && navigationStart) {
      const timeToReload = loadEventEnd - navigationStart;
      setReloadTime(timeToReload);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, [reloadTime + 1000]);
  }, []);

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <BrowserRouter>
        {
          pageLoading ?
            (
              <Loader />
            )
            :
            (
              <>
                <NavaBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPages />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="*" element={<Erorr />} />
                </Routes>
                <Footer />
              </>
            )
        }
      </BrowserRouter>
    </>
  );
}

export default App;
