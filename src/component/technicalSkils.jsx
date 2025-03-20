import React, { useState } from "react";
import AdvancedReact from '../assets/images/certification/AdvancedReact.png';
import ReactBasics from '../assets/images/certification/ReactBasics.png';
import JavaScript from '../assets/images/certification/JavaScript.png';
import HTMLCSS from '../assets/images/certification/HTMLCSS.png';
import FrontEndDevelopment from '../assets/images/certification/FrontEndDevelopment.png';
import VersionControle from '../assets/images/certification/VersionControl.png';


const TechnicalSkils = ({ aboutSectionRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverClass, setHoverClass] = useState(false);

  setTimeout(() => {
    setHoverClass(true)
  }, 1000);

  const Skills = [
    {
      skill: "React js",
      percentage: 85,
      animation: "fade-right"
    },
    {
      skill: "Redux",
      percentage: 80,
      animation: "fade-down"
    },
    {
      skill: "Rest API",
      percentage: 75,
      animation: "fade-up"
    },
    {
      skill: "JavaScript",
      percentage: 80,
      animation: "fade-down"
    },
    {
      skill: "jQuery",
      percentage: 75,
      animation: "fade-up"
    },
    {
      skill: "HTML5",
      percentage: 95,
      animation: "fade-down"
    },
    {
      skill: "CSS3/Sass/Less",
      percentage: 90,
      animation: "zoom-in"
    },
    {
      skill: "Bootstrap5",
      percentage: 95,
      animation: "fade-up"
    },
    {
      skill: "Tailwind CSS",
      percentage: 80,
      animation: "fade-left"
    },
    {
      skill: "Git/Gitlab",
      percentage: 70,
      animation: "fade-right"
    }
  ];

  const experienceData = [
    {
      company: "MyHealthcare Technologies Private Limited",
      role: "Software Developer Frontend",
      duration: "12 Aug 2022 to Till Now",
      description: [
        {
          text: "Developed and maintained web applications using React.js"
        },
        {
          text: "Develop and execute unit,functional,integration testing of developed software components."
        }
        , {
          text: "Collaborated with cross-functional teams to deliver high-quality products."
        }
      ],
      animation: "fade-right"
    }
  ];
  const CertificationData = [
    {
      certificateCourseName: "Advanced React",
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/4CUVK9G58MZV",
      certificateImages: AdvancedReact,
      certificateDate: "June 1, 2024",
      animation: "fade-right"
    },
    {
      certificateCourseName: "React Basics",
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/XC7NRRY8KLLU",
      certificateImages: ReactBasics,
      certificateDate: "May 27, 2024",
      animation: "fade-left"
    },
    {
      certificateCourseName: "Programming with JavaScript",
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/N8QVVSD49LGR",
      certificateImages: JavaScript,
      certificateDate: "May 22, 2024",
      animation: "fade-right"
    },
    {
      certificateCourseName: "HTML and CSS in depth",
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/2CWZCCX26GCM",
      certificateImages: HTMLCSS,
      certificateDate: "May 19, 2024",
      animation: "fade-left"
    },
    {
      certificateCourseName: "Introduction to Front-End Development",
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/UCWPJU348VDV",
      certificateImages: FrontEndDevelopment,
      certificateDate: "May 12, 2024",
      animation: "fade-right"
    },
    {
      certificateCourseName: "Version Control",
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/GL2XCDDAUXTA",
      certificateImages: VersionControle,
      certificateDate: "June 1, 2024",
      animation: "fade-left"
    }
  ];

  const EducationData = [
    {
      instituteName: "Oxford Software Institute, New Delhi",
      degree: "Diploma",
      duration: "2021 - 2022",
      animation: "fade-right"
    },
    {
      instituteName: "L.N.M Univercity, Darbhanga",
      degree: "B.A (Eng Hons)",
      duration: "2018 - 2021",
      animation: "fade-left"
    },
    {
      instituteName: "BSEB",
      degree: "12",
      duration: "2016 - 2018",
      animation: "fade-right"
    },
    {
      instituteName: "BSEB",
      degree: "10",
      duration: "2016",
      animation: "fade-left"
    }

  ];


  return (
    <>
      <div className="banner-section-1 py-5" ref={aboutSectionRef}>
        <div className="container">
          <div className="row text-hover">
            <div className="col-12 mb-5 d-flex justify-content-center">
              <h1 className="fs-5 fw-bold">Technical skills</h1>
            </div>
            <div className="col-12 d-flex">
              <div className="row justify-content-between">
                {
                  Skills.map((items, index) => (
                    <div className="col-auto mb-3" key={index}>
                      <div className={`eb-progress-bar ${hoverClass === true ? "animation" : ''}`} style={{ '--value': items.percentage }}>
                      </div>
                      <label htmlFor={items.skill} className="eb-progress-bar-title">
                        <h2 className="fw-bold">{items.skill}</h2>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section py-5">
        <div className="container">
          <div className="row text-hover justify-content-center">
            <div className="col-12">
              <div className='about-secition'>
                <div className="d-flex justify-content-center mb-4">
                  <h1 className="fs-5 fw-bold">Experiance</h1>
                </div>
                <ul>
                  {experienceData.map((experience, index) => (
                    <li key={index} className={hoveredIndex === index ? "hoverafter" : ""}>
                      <span></span>
                      <div onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)} className="card">
                        <div className="d-block d-sm-flex justify-content-between">
                          <div className="heading">
                            <h1>{experience.company}</h1>
                            <i>{experience.role}</i>
                          </div>
                          <div className="year my-3 my-sm-0">
                            {experience.duration}
                          </div>
                        </div>
                        {
                          experience.description.map((item, index) => (
                            <p key={index} className="mb-0 mt-2 px-4">
                              {item.text}
                            </p>
                          ))
                        }
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section-1 py-5">
        <div className="container">
          <div className="row text-hover justify-content-center">
            <div className="col-12">
              <div className='about-secition'>
                <div className="d-flex justify-content-center mb-4">
                  <h1 className="fs-5 fw-bold">Certification</h1>
                </div>
                <ul>
                  {CertificationData.map((certifiate, index) => (
                    <li key={index} className={hoveredIndex === index ? "hoverafter" : ""}>
                      <span></span>
                      <div onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)} className="card">
                        <div className="d-block d-sm-flex justify-content-between align-items-center">
                          <div className="heading">
                            <h1>{certifiate.certificateCourseName}, <i>Meta</i></h1>
                          </div>
                          <div className="year mt-3 mt-sm-0">
                            {certifiate.certificateDate}
                          </div>
                        </div>
                        <div className="d-flex justify-content-center py-3 imgHeight">
                          <img style={{ height: "100%", width: "auto" }} src={certifiate.certificateImages} alt={certifiate.certificateCourseName} />
                        </div>
                        <div className="d-flex justify-content-center">
                          <a href={certifiate.certificateLink} rel="noreferrer" target="_blank" className="btn btn-outline-primary px-4 rounded-pill">View Certificate</a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section py-5">
        <div className="container">
          <div className="row text-hover justify-content-center">
            <div className="col-12">
              <div className='about-secition'>
                <div className="d-flex justify-content-center mb-4">
                  <h1 className="fs-5 fw-bold">Education</h1>
                </div>
                <ul>
                  {EducationData.map((education, index) => (
                    <li key={index} className={hoveredIndex === index ? "hoverafter" : ""}>
                      <span></span>
                      <div onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)} className="card">
                        <div className="d-blcok d-sm-flex justify-content-between">
                          <div className="heading">
                            <h1>{education.instituteName}</h1>
                            <i>{education.degree}
                              {
                                education.degree === "10" || education.degree === "12" ? <sup> th</sup> : null
                              }
                            </i>
                          </div>
                          <div className="year mt-3 mt-sm-0">
                            {education.duration}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSkils;
