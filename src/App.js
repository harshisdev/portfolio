import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useState } from "react";
import Aos from "aos";
import Erorr from "./pages/Erorr";
import Home from "./pages/Home";
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
    }, [reloadTime + 1000]);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 0,
    });
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
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Erorr />} />
                </Routes>
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
