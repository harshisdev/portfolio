import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "react";
import Aos from "aos";
import Erorr from "./pages/Erorr";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </>
  );
}

export default App;
