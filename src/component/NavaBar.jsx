import React, { useState } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";
import { VscMenu } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume from "../assets/images/Harsh-CV.pdf";


const NavaBar = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState(
  //   localStorage.getItem('isDarkTheme') === 'true'
  // );

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'harsh-kumar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
                <img src="" alt="Harsh Kumar" className="rounded-circle" />
              </Link>
            </div>
            <Col
              className="col-auto align-items-center d-none d-sm-flex"
            >
              <Button className="downloadbtn" onClick={downloadResume} ><span className="d-none d-sm-inline">Download CV</span> <span className="downloadbtnicon"><MdOutlineFileDownload /></span>
              </Button>
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
        jj
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