import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Portfolio from "../component/Portfolio";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import Banner from "../component/Banner";
import TechnicalSkils from "../component/technicalSkils";
import ScrollToTop from "../component/scrollTop";
import Headers from "../component/Header";

const Home = () => {
  useEffect(() => {
    import('bootstrap').then(({ ScrollSpy }) => {
      new ScrollSpy(document.body, {
        target: '.navbar'
      });
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Harsh Kumar || Ui Developer || Software Developer || Frontend Developer</title>
      </Helmet>
      <Headers />
      <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" tabIndex="0">
        <Banner />
        <TechnicalSkils />
        <Portfolio />
        <Contact />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Home;
