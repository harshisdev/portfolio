import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Erorr = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Container className="min-height d-flex align-items-center justify-content-center">
        <main>
          <h1 className="fs-4">It seems like the page you're looking for is not available. <br />Check the URL or navigate back to the <Link style={{ color: "#e70448" }} to="/">Home page</Link>.</h1>
        </main>
      </Container>
    </>
  );
};

export default Erorr;
