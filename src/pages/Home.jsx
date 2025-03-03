import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Portfolio from "../component/Portfolio";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import Banner from "../component/Banner";
import TechnicalSkils from "../component/technicalSkils";
import ScrollToTop from "../component/scrollTop";
import Headers from "../component/Header";

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [open, setOpen] = useState(false);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (section) => {
    if (open === true) {
      setOpen(true)
    }
    setActiveSection(section);
    const scrollOptions = { behavior: 'smooth' };

    if (section === 'home' && homeSectionRef.current) {
      window.scrollTo({
        top: homeSectionRef.current.offsetTop - 70,
        ...scrollOptions,
      });
    } else if (section === 'about' && aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop - 70,
        ...scrollOptions,
      });
    }
    else if (section === 'portfolio' && portfolioSectionRef.current) {
      window.scrollTo({
        top: portfolioSectionRef.current.offsetTop - 70,
        ...scrollOptions,
      });
    }
    else if (section === 'contact' && contactSectionRef.current) {
      window.scrollTo({
        top: contactSectionRef.current.offsetTop - 70,
        ...scrollOptions,
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check which section is in view in reverse order (from bottom to top)
      if (contactSectionRef.current && scrollPosition >= contactSectionRef.current.offsetTop - 90) {
        setActiveSection('contact');
      } else if (portfolioSectionRef.current && scrollPosition >= portfolioSectionRef.current.offsetTop - 90) {
        setActiveSection('portfolio');
      } else if (aboutSectionRef.current && scrollPosition >= aboutSectionRef.current.offsetTop - 90) {
        setActiveSection('about');
      } else if (homeSectionRef.current && scrollPosition >= homeSectionRef.current.offsetTop - 90) {
        setActiveSection('home');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Harsh Kumar || Ui Developer || Software Developer || Frontend Developer</title>
      </Helmet>
      <Headers scrollToSection={scrollToSection} activeSection={activeSection} />
      <div className="banner-section py-5">
        <Banner homeSectionRef={homeSectionRef} />
      </div>
      <TechnicalSkils aboutSectionRef={aboutSectionRef} />
      <div className="banner-section-1 py-5">
        <Portfolio portfolioSectionRef={portfolioSectionRef} />
      </div>
      <div className="banner-section py-5">
        <Contact contactSectionRef={contactSectionRef} />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
