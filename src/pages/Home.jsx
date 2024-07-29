import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { JoinigDate, Name } from "../constant";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import htmlImages from "../assets/images/html-img.png";
import cssImages from "../assets/images/css-img.png";
import jsImages from "../assets/images/js-img.png";
import bootstrapImages from "../assets/images/bootstrap-img.png";
import sassImages from "../assets/images/sass-img.png";
import reactImages from "../assets/images/react-img.png";
import jqueryImages from "../assets/images/jquery-img.png";
import responsiveImages from "../assets/images/responsive-img.png";
import gitImages from "../assets/images/git-img.png";
import iconNaukri from "../assets/images/iconNaukri.png";
import iconLinkedin from "../assets/images/iconLinkedin.png";
import iconGit from "../assets/images/iconGit.png";
import iconHackerrank from "../assets/images/iconHackerrank.png";
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
    </>
  );
};

export default Home;
