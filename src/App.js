import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import AboutPages from "./pages/AboutPages";
import Erorr from "./pages/Erorr";
import ContactUs from "./pages/ContactUs";
import NavaBar from "./component/NavaBar";
import Portfolio from "./pages/Portfolio";
import { useEffect, useState } from "react";
import Aos from "aos";
import Loader from "./component/Loader";

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
    }, [reloadTime + 1500]);
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
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="*" element={<Erorr />} />
                </Routes>
                <Footer />
                <Analytics />
                <SpeedInsights />
              </>
            )
        }
      </BrowserRouter>
    </>
  );
}

export default App;
