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
import iconNaukri from "../../assets/images/iconNaukri.png";
import iconLinkedin from "../../assets/images/iconLinkedin.png";
import iconGit from "../../assets/images/iconGit.png";
import iconHackerrank from "../../assets/images/iconHackerrank.png";
import { Popover } from "antd";


const Home = () => {
  const keySkill = [
    {
      id: "1",
      images: htmlImages,
      name: "HTML5",
    },
    {
      id: "2",
      images: cssImages,
      name: "CSS3",
    },
    {
      id: "3",
      images: sassImages,
      name: "SASS",
    },
    {
      id: "4",
      images: jsImages,
      name: "JavaScript",
    },
    {
      id: "5",
      images: jqueryImages,
      name: "jQuery",
    },
    {
      id: "6",
      images: reactImages,
      name: "React Js",
    },
    {
      id: "7",
      images: bootstrapImages,
      name: "Bootstrap 5",
    },
    {
      id: "8",
      images: responsiveImages,
      name: "Responsiv Design",
    },
    {
      id: "9",
      images: gitImages,
      name: "Git/GitLab",
    }
  ];

  const [endDate] = useState(new Date());
  const [differenceInYears, setDifferenceInYears] = useState("");
  const [differenceInMonths, setDifferenceInMonths] = useState("");
  const [activeSkillName, setActiveSkillName] = useState(keySkill[0].name);

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

  const handleBeforeChange = (currentSlide, nextSlide) => {
    setActiveSkillName(keySkill[nextSlide].name);
  };

  const SliderSlick = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "custom-slick-slider h-70",
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    autoplaySpeed: 2000,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const Naukari = <div className="pointer">View Naukari Profile</div>
  const Linkedin = <div className="pointer">View Linkedin Profile</div>
  const Git = <div className="pointer">View Git Profile</div>
  const Hackerrank = <div className="pointer">View Hacker Rank Profile</div>

  return (
    <>
      <Helmet>
        <title>{Name} - Home</title>
      </Helmet>
      <Container className="min-height center">
        <Row>
          <Col>
            <ul className="list-style justify-content-center">
              <li>
                <Link
                  target="_blank"
                  to="https://www.naukri.com/mnjuser/profile?id=&altresid"
                >
                  <Popover content={Naukari} placement="bottom" trigger="hover">
                    <img src={iconNaukri} alt="Naukari icon" width={25} />
                  </Popover>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/harsh-kumar-593a19232/"
                >
                  <Popover content={Linkedin} placement="bottom" trigger="hover">
                    <img src={iconLinkedin} alt="Linkedin icon" width={25} />
                  </Popover>
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://github.com/harshisdev">
                  <Popover content={Git} placement="bottom" trigger="hover">
                    <img src={iconGit} alt="Git icon" width={25} />
                  </Popover>
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.hackerrank.com/profile/harshch9931">
                  <Popover content={Hackerrank} placement="bottom" trigger="hover">
                    <img src={iconHackerrank} alt="Hacker rank icon" width={25} />
                  </Popover>
                </Link>
              </li>
            </ul>
            <p>
              Dedicated <strong>Frontend Web Developer</strong> with {differenceInYears} year {differenceInMonths} months of hands-on experience in creating intuitive and
              visually appealing user interfaces. Proven expertise in <strong>HTML5, CSS3,</strong> and <strong>JavaScript</strong>, along with
              proficiency in frameworks such as <strong>React, Bootstrap</strong> and <strong>Tailwind CSS</strong>.
            </p>
            <p>Adept at translating design concepts into responsive and user-friendly web applications. Experienced in
              optimizing websites for search engines and implementing efficient web performance techniques. Strong
              collaborative skills demonstrated through successful cross-functional teamwork with product and
              marketing teams.</p>
            <ul className="ps-3">
              <li className="sm-pb-2 md-pb-1">
                Experienced in responsive web development with a strong
                understanding of <strong>Bootstrap</strong> and <strong>Media Query</strong>.
              </li>
              <li className="sm-pb-2 md-pb-1">
                Experienced in designing and developing web applications and web
                contents that are optimized for search engines.
              </li>
              <li className="sm-pb-2 md-pb-1">
                Experienced in using testing tools to debug and optimize web pages,
                such as <strong>Firebug, Chrome</strong> or <strong>Safari web inspectors</strong>, and <strong>IE Developer
                  Toolbar</strong>.
              </li>
              <li className="sm-pb-2 md-pb-1">
                Have a proven track record of identifying and fixing client-end
                performance and browser compatibility issues.
              </li>
            </ul>
            <h2 className="fs-6 text-center mt-4">
              Technical Skills - <span className="text-primary">{activeSkillName}</span>
            </h2>
            <Slider {...SliderSlick}>
              {
                keySkill.map((item) => (
                  <div key={item.id}>
                    <img src={item.images} alt={item.name} />
                  </div>
                ))
              }
            </Slider>
          </Col>
        </Row>
      </Container >
      <div data-aos="zoom-in" data-aos-delay="1000" style={{ width: "60px", height: "60px", top: "90px", left: "10px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e70448" d="M31.9,-25.6C46.7,-6.9,67.8,6.7,70.4,24.4C73,42.1,57.2,64,36.1,73.7C15,83.4,-11.4,81,-26.2,68.5C-40.9,56,-43.9,33.3,-44.9,14.5C-45.8,-4.4,-44.7,-19.6,-36.8,-36.6C-29,-53.7,-14.5,-72.7,-3,-70.4C8.6,-68,17.1,-44.2,31.9,-25.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="1500" style={{ width: "40px", height: "50px", top: "150px", right: "20px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FBBC04" d="M44.2,-48.8C55.7,-32.8,62.3,-16.4,61.8,-0.5C61.3,15.4,53.8,30.9,42.4,41.2C30.9,51.6,15.4,56.9,-1.6,58.4C-18.6,60,-37.3,58,-52.9,47.6C-68.5,37.3,-81.1,18.6,-81,0.1C-81,-18.5,-68.2,-37,-52.6,-53C-37,-69.1,-18.5,-82.7,-1.1,-81.7C16.4,-80.6,32.8,-64.9,44.2,-48.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-delay="2000" style={{ width: "40px", height: "40px", bottom: "150px", left: "20px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M45.4,-65.1C53.6,-56.5,51.3,-36.2,48.4,-21.4C45.6,-6.5,42,3,41.4,16C40.7,29.1,43,45.6,36.5,60.2C30.1,74.8,15.1,87.3,3.7,82.2C-7.7,77.2,-15.4,54.4,-24.8,40.9C-34.3,27.3,-45.6,22.9,-56.7,12.7C-67.9,2.6,-78.9,-13.3,-74,-22.7C-69.1,-32,-48.2,-34.9,-33.2,-41.2C-18.3,-47.5,-9.1,-57.3,4.7,-63.9C18.6,-70.4,37.2,-73.6,45.4,-65.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-delay="2500" style={{ width: "80px", height: "70px", bottom: "70px", right: "20px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#34A853" d="M44.4,12.1C44.4,33,22.2,66.1,-4.1,66.1C-30.4,66.1,-60.8,33,-60.8,12.1C-60.8,-8.8,-30.4,-17.6,-4.1,-17.6C22.2,-17.6,44.4,-8.8,44.4,12.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </>
  );
};

export default Home;
