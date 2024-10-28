import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";
import Headers from "../component/Header";



const Erorr = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Headers />
      <Container className="min-height d-flex align-items-center justify-content-center">
        <h1 className="fs-5" data-aos="zoom-in">It seems like the page you're looking for is not available. <br />check the URL or navigate back to the <Link className="text-primary" to="/">Home Page</Link></h1>
      </Container>
      <Footer />
    </>
  );
};

export default Erorr;
