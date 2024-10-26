import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavaBar from "../component/NavaBar";
import About from "../component/About";
import Portfolio from "../component/Portfolio";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  useEffect(() => {
    import('bootstrap').then(({ ScrollSpy }) => {
      new ScrollSpy(document.body, {
        target: '#navbar-example'
      });
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Harsh Kumar || Ui Developer || Software Developer || Frontend Developer</title>
      </Helmet>
      <NavaBar />
      <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" tabIndex="0">
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
