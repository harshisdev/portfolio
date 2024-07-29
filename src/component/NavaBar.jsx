import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import HarshLogo from "../assets/images/Harsh-Kumar.png";
import Harshimg from "../assets/images/Harsh-Kumar.jpg";
import Harshimg1 from "../assets/images/Harsh-Kumar1.jpg";
import Slider from "react-slick";
import { Designation, Name } from "../constant.js";
import { Drawer, Popover } from "antd";
import { Typewriter } from "react-simple-typewriter";
import { VscMenu } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import Resume from "../assets/images/Harsh-CV.pdf";


const NavaBar = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState(
  //   localStorage.getItem('isDarkTheme') === 'true'
  // );

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const viewImges = () => {
    setShow(true);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'HarshKumarCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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

  // const toggleTheme = () => {
  //   const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setIsDarkTheme(prevTheme => {
  //     const newTheme = !prevTheme;
  //     if (newTheme === systemPrefersDark) {
  //       localStorage.removeItem('isDarkTheme');
  //     } else {
  //       localStorage.setItem('isDarkTheme', newTheme);
  //     }
  //     return newTheme;
  //   });
  // };

  // Add class to body tag based on the theme
  // useEffect(() => {
  //   if (isDarkTheme) {
  //     document.body.classList.add('dark-theme');
  //     document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1C242C');
  //   } else {
  //     document.body.classList.remove('dark-theme');
  //     document.querySelector('meta[name="theme-color"]').setAttribute('content', '#144C8C');
  //   }
  // }, [isDarkTheme]);

  // Detect system color scheme preference
  // useEffect(() => {
  //   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   const listener = event => {
  //     setIsDarkTheme(event.matches);
  //   };
  //   setIsDarkTheme(darkModeMediaQuery.matches);
  //   darkModeMediaQuery.addListener(listener);
  //   return () => {
  //     darkModeMediaQuery.removeListener(listener);
  //   };
  // }, []);

  return (
    <>
      <Navbar className="navbar__custom">
        <Container className="d-block">
          <Row className="justify-content-between">
            <div className="col-auto d-flex align-items-center">
              <Link>
                <img src={HarshLogo} alt={Name} className="rounded-circle" />
              </Link>
              <h1 className="fs-6 mb-0 ps-2 fw-light"><strong>{Name}</strong> <br />
                <span style={{ fontSize: "0.85rem", color: "#ffc107" }}>
                  <Typewriter
                    words={['software Developer','Frontend Developer', 'Web Developer', 'Ui Developer',]}
                    loop={5}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
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
                  <Button className="downloadbtn" onClick={downloadResume} ><span className="d-none d-sm-inline">Download CV</span> <span className="downloadbtnicon"><MdOutlineFileDownload /></span>
                  </Button>
                </ul>
              </Nav>
            </Col>
            <Col className="col-auto d-flex align-items-center d-flex d-sm-none">
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
      {/* <button className="dark-theme-btn" onClick={toggleTheme}>
        {isDarkTheme ?
          <CiLight />
          :
          <CiDark />
        }
      </button> */}
    </>
  );
};

export default NavaBar;
