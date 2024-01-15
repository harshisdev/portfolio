import React, { useState } from "react";
import { Col, Container, Modal, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import HarshLogo from "../../images/Harsh-Kumar.png";
import Harshimg from "../../images/Harsh-Kumar.jpg";
import Slider from "react-slick";
import { Destination, Name } from "../../../constant";
import { Popover } from "antd";

const NavaBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const viewImges = () => {
    setShow(true);
  };
  const SliderSlick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "custom-slick-slider img-slick",
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    autoplaySpeed: 2000,
  };
  const content = <div className="pointer">View Profile</div>;

  return (
    <>
      <Navbar className="navbar__custom">
        <Container className="d-block">
          <Row>
            <Col sm={2}>
              <Link onClick={viewImges}>
                <Popover content={content} trigger="hover">
                  <img src={HarshLogo} alt="logo" className="rounded-circle" />
                </Popover>
              </Link>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h1 className="fs-6 mb-1">{Name} Kumar</h1>
                    <p
                      style={{ fontSize: "0.8rem", color: "#858282" }}
                      className="mb-0"
                    >
                      ({Destination})
                    </p>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Slider {...SliderSlick}>
                    <div>
                      <img
                        src={Harshimg}
                        width="100%"
                        height="auto"
                        alt="logo"
                      />
                    </div>
                    <div>
                      <img
                        src={HarshLogo}
                        width="100%"
                        height="auto"
                        alt="logo"
                      />
                    </div>
                  </Slider>
                </Modal.Body>
              </Modal>
            </Col>
            <Col
              sm={10}
              className="d-flex align-items-center justify-content-end"
            >
              <Nav>
                <ul>
                  <li>
                    <Link
                      className={
                        splitLocation[1] === "" ? "active nav-link" : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        splitLocation[1] === "about"
                          ? "active nav-link"
                          : "nav-link"
                      }
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        splitLocation[1] === "Project"
                          ? "active nav-link"
                          : "nav-link"
                      }
                      to="/Project"
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        splitLocation[1] === "contact-us"
                          ? "active nav-link"
                          : "nav-link"
                      }
                      to="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default NavaBar;
