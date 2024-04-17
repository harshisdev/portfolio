import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import HarshLogo from "../assets/images/Harsh-Kumar.png";
import Harshimg from "../assets/images/Harsh-Kumar.jpg";
import Harshimg1 from "../assets/images/Harsh-Kumar1.jpg";
import Slider from "react-slick";
import { Destination, Name } from "../constant.js";
import { Drawer, Popover } from "antd";
import { Typewriter } from "react-simple-typewriter";
import { VscMenu } from "react-icons/vsc";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


const NavaBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('isDarkTheme') === 'true'
  );

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
    with: "300px"
  };
  const content = <div className="pointer">View Profile</div>;

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const profileImage = [
    {
      id: "1",
      images: Harshimg,
    },
    {
      id: "2",
      images: Harshimg1,
    }
  ]

  const toggleTheme = () => {
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      if (newTheme === systemPrefersDark) {
        localStorage.removeItem('isDarkTheme');
      } else {
        localStorage.setItem('isDarkTheme', newTheme);
      }
      return newTheme;
    });
  };

  // Add class to body tag based on the theme
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#121212');
    } else {
      document.body.classList.remove('dark-theme');
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ff014f');
    }
  }, [isDarkTheme]);

  // Detect system color scheme preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = event => {
      setIsDarkTheme(event.matches);
    };
    setIsDarkTheme(darkModeMediaQuery.matches);
    darkModeMediaQuery.addListener(listener);
    return () => {
      darkModeMediaQuery.removeListener(listener);
    };
  }, []);

  return (
    <>
      <Navbar className="navbar__custom">
        <Container className="d-block">
          <Row className="justify-content-between">
            <div className="col-auto d-flex align-items-center">
              <Link onClick={viewImges}>
                <Popover content={content} trigger="hover">
                  <img src={HarshLogo} alt={Name} className="rounded-circle" />
                </Popover>
              </Link>
              <h1 className="fs-6 mb-0 ps-2 fw-light"><strong>{Name}</strong> <br />
                <span style={{ fontSize: "0.8rem", color: "#ff014f" }}>
                  <Typewriter
                    words={['Frontend Developer', 'Web Developer', 'Ui Developer',]}
                    loop={5}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={1500}
                  />
                </span>
              </h1>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h1 className="fs-6 mb-1">{Name}</h1>
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
                    {
                      profileImage.map((item) => (
                        <div key={item.id}>
                          <img
                            src={item.images}
                            width="100%"
                            height="auto"
                            alt={Name}
                          />
                        </div>
                      ))
                    }
                  </Slider>
                </Modal.Body>
              </Modal>
            </div>
            <Col
              className="col-auto align-items-center d-none d-sm-flex"
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
                        splitLocation[1] === "portfolio"
                          ? "active nav-link"
                          : "nav-link"
                      }
                      to="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        splitLocation[1] === "contact"
                          ? "active nav-link"
                          : "nav-link"
                      }
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <button className="dark-theme-btn" onClick={toggleTheme}>
                      {isDarkTheme ?
                         <CiLight />
                        :
                          <CiDark />
                    </button>
                  </li>
                </ul>
              </Nav>
            </Col>
            <Col className="col-auto d-flex align-items-center d-flex pe-2 pe-sm-0 d-sm-none">
              <button className="dark-theme-btn me-2 me-sm-0" onClick={toggleTheme}>
                {isDarkTheme ?
                   <CiLight />
                  :
                  <CiDark />
              </button>
              <VscMenu onClick={showDrawer} className="fs-2" />
            </Col>
          </Row>
        </Container>
      </Navbar>
      {/* mobile view nav bar */}
      <Drawer
        title={false}
        placement="right"
        width={200}
        onClose={onClose}
        open={open}
      >
        <Nav>
          <ul>
            <li>
              <Link onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
                className={
                  splitLocation[1] === "portfolio"
                    ? "active nav-link"
                    : "nav-link"
                }
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={
                  splitLocation[1] === "contact"
                    ? "active nav-link"
                    : "nav-link"
                }
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </Drawer>
    </>
  );
};

export default NavaBar;
