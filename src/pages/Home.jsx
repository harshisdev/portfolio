import React from "react";
import { Helmet } from "react-helmet";
import About from "../component/About";
import Portfolio from "../component/Portfolio";
import NavaBar from "../component/NavaBar";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Harsh Kumar || Ui Developer || Software Developer || Frontend Developer</title>
      </Helmet>
      <NavaBar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
