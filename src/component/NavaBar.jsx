import { useEffect, useState } from 'react';
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";
import { VscMenu } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume from "../assets/images/Harsh-CV.pdf";
import harshLogo from '../assets/images/harsh-logo.png'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


const NavaBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('isDarkTheme') === 'true'
  );
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1C242C');
    } else {
      document.body.classList.remove('dark-theme');
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#144C8C');
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
      <Navbar className={`navbar__custom ${sticky === true ? "nav-sticky" : ''}`}>
        <div className="container d-block">
          <Row>
            <div className="col-2 d-flex align-items-center">
              <Link>
                <img src={harshLogo} alt="Harsh Kumar" className="rounded-circle" />
              </Link>
            </div>
            {/* desktop view nav bar */}
            <Col className='d-none d-lg-flex justify-content-center'>
              <nav id="navbar-example" className="navbar">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col className="col col-lg-auto d-flex justify-content-center align-items-center">
              <Button className="rounded-pill px-4 downloadbtn" onClick={downloadResume} >Download CV <span className="downloadbtnicon"><MdOutlineFileDownload /></span>
              </Button>
            </Col>
            <Col className="col-auto align-items-center d-flex d-lg-none">
              <VscMenu onClick={showDrawer} className="fs-2" />
            </Col>
          </Row>
        </div>
      </Navbar>
      {/* mobile view nav bar */}
      <Drawer
        title={false}
        placement="right"
        width={200}
        onClose={onClose}
        open={open}
      >
        <nav id="navbar-example" className="navbar">
          <ul className="nav nav-pills d-block">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="dark-theme-btn" onClick={toggleTheme}>
          {isDarkTheme ?
            <CiLight />
            :
            <CiDark />
          }
        </button>
      </Drawer>
      <button className="dark-theme-btn d-none d-lg-block" onClick={toggleTheme}>
          {isDarkTheme ?
            <CiLight />
            :
            <CiDark />
          }
        </button>
    </>
  );
};

export default NavaBar;
