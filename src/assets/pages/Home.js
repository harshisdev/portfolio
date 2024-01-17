import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { JoinigDate, Name } from "../../constant";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import htmlImages from "../../assets/images/html-img.png";
import cssImages from "../../assets/images/css-img.png";
import jsImages from "../../assets/images/js-img.png";
import bootstrapImages from "../../assets/images/bootstrap-img.png";
import sassImages from "../../assets/images/sass-img.png";
import reactImages from "../../assets/images/react-img.png";
import jqueryImages from "../../assets/images/jquery-img.png";
import responsiveImages from "../../assets/images/responsive-img.png";
import gitImages from "../../assets/images/git-img.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [endDate] = useState(new Date());
  const [differenceInYears, setDifferenceInYears] = useState("");
  const [differenceInMonths, setDifferenceInMonths] = useState("");

  const calculateDateDifference = () => {
    const startDateObject = new Date(JoinigDate);
    const endDateObject = new Date(endDate);

    const timeDifference = endDateObject - startDateObject;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const yearsDifference = Math.floor(timeDifference / millisecondsInYear);
    const monthsDifference = Math.floor(
      (timeDifference % millisecondsInYear) /
      (1000 * 60 * 60 * 24 * (365.25 / 12))
    );

    setDifferenceInYears(yearsDifference);
    setDifferenceInMonths(monthsDifference);
  };
  useEffect(() => {
    calculateDateDifference();
  });
  const widht = {
    width: "95px",
    display: "inline-block"
  }
  const SliderSlick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "custom-slick-slider",
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Helmet>
        <title>{Name} - Home</title>
      </Helmet>
      <Container className="min-height center">
        <Row>
          <Col className="12">
            <h1 className="fs-6 text-center">
              <span className="animate-charcter">Hello {Name} !!!</span>
            </h1>
            <ul className="list-style justify-content-center">
              <li>
                <Link
                  target="_blank"
                  to="https://www.naukri.com/mnjuser/profile?id=&altresid"
                >
                  Naukari.com
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/harsh-kumar-593a19232/"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://github.com/harshisdev">
                  GitHub
                </Link>
              </li>
            </ul>
            <p>
              I have around {differenceInYears} year {differenceInMonths} months of
              experience in
              {" "}
              <strong style={{ color: "#f8222277" }}>
                <Typewriter
                  style={widht}
                  words={['frontend developer', 'web developer', 'ui developer',]}
                  loop={5}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                /> </strong>. To continuously thrive for
              excellence in the software industry with committed and dedicated
              people, which will help me to explore my learning capability and
              realize my potential.
            </p>
            <ul className="ps-3">
              <li>
                Experienced in designing user interfaces and professional web
                applications using core HTML5, CSS, SASS/LESS, Bootstrap,
                JavaScript, React, jQuery, and boilerplate development techniques.
              </li>
              <li>
                Experienced in responsive web development with a strong
                understanding of Bootstrap and Media Query.
              </li>
              <li>
                Experienced in designing and developing web applications and web
                contents that are optimized for search engines.
              </li>
              <li>
                Experienced in using testing tools to debug and optimize web pages,
                such as Firebug, Chrome or Safari web inspectors, and IE Developer
                Toolbar.
              </li>
              <li>
                Have a proven track record of identifying and fixing client-end
                performance and browser compatibility issues.
              </li>
            </ul>
            <h2 className="fs-6 text-center">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <Slider {...SliderSlick}>
              <div>
                <img src={htmlImages} alt="HTML5" />
              </div>
              <div>
                <img src={cssImages} alt="CSS3" />
              </div>
              <div>
                <img src={sassImages} alt="SASS" />
              </div>
              <div>
                <img src={jsImages} alt="JavaScript" />
              </div>
              <div>
                <img src={jqueryImages} alt="jQuery" />
              </div>
              <div>
                <img src={reactImages} alt="React Js" />
              </div>
              <div>
                <img src={bootstrapImages} alt="Bootstrap 5" />
              </div>
              <div>
                <img src={responsiveImages} alt="Responsiv Design" />
              </div>
              <div>
                <img src={gitImages} alt="Version Control Git/GitLab" />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
