import React, { useState } from "react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverClass, setHoverClass] = useState(false);

  setTimeout(() => {
    setHoverClass(true)
  }, 1500);

  const Skills = [
    {
      skill: "React.js",
      percentage: 85,
      animation: "fade-right"
    },
    {
      skill: "Redux",
      percentage: 80,
      animation: "fade-down"
    },
    {
      skill: "Restfull API",
      percentage: 75,
      animation: "fade-down-right"
    },
    {
      skill: "JavaScript",
      percentage: 80,
      animation: "fade-down-left"
    },
    {
      skill: "jQuery",
      percentage: 75,
      animation: "fade-down"
    }
    , {
      skill: "HTML5",
      percentage: 85,
      animation: "fade-left"
    }
    , {
      skill: "CSS3/Sass",
      percentage: 80,
      animation: "fade-right"
    },
    {
      skill: "Bootstrap5",
      percentage: 75,
      animation: "fade-up"
    },
    {
      skill: "Tailwind CSS",
      percentage: 80,
      animation: "fade-up"
    },
    {
      skill: "Git/Gitlab",
      percentage: 75,
      animation: "fade-up-right"
    }
  ];

  const experienceData = [
    {
      company: "xxxxxx",
      role: "xxxx",
      duration: "Till Now",
      description: [
        {
          text: "Developed and maintained web applications using React.js, Node.js, and MongoDB."
        },
        {
          text: "Collaborated with cross-functional teams to deliver high-quality products."
        },
        {
          text: "Implemented authentication and authorization mechanisms for secure access to web applications."
        }
      ],
      animation: "fade-right"
    }
  ];
  const CertificationData = [
    {
      certificateName: "Meta",
      certificateCourseName: "React.js",
      certificateLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      certificateImages: "xxxx",
      certificateDate: "Till Now",
      animation: "fade-right"
    },
    {
      certificateName: "Meta",
      certificateCourseName: "React.js",
      certificateLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      certificateImages: "xxxx",
      certificateDate: "Till Now",
      animation: "fade-left"
    },
    {
      certificateName: "Meta",
      certificateCourseName: "React.js",
      certificateLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      certificateImages: "xxxx",
      certificateDate: "Till Now",
      animation: "fade-right"
    },
    {
      certificateName: "Meta",
      certificateCourseName: "React.js",
      certificateLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      certificateImages: "xxxx",
      certificateDate: "Till Now",
      animation: "fade-left"
    },
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
      <div className="container">
        <div className="row mt-4 text-hover">
          <div className="col-12 mb-4 d-flex justify-content-center"><button className='btn btn-outline-primary' data-aos="zoom-in-down">Technical skills</button>
          </div>
          {
            Skills.map((items, index) => (
              <div data-aos={items.animation} class="col-2 mb-3" key={index}>
                <div className="w-100 d-flex justify-content-center">
                  <div className={`eb-progress-bar ${hoverClass === true ? "animation" : ''}`} style={{ '--value': items.percentage }}>
                    <progress id={items.skill} min="0" max="100" value={items.percentage}></progress>
                  </div>
                </div>
                <label htmlFor={items.skill} className="eb-progress-bar-title">
                  <h2>{items.skill}</h2>
                </label>
              </div>
            ))
          }
        </div>
        <div className="row text-hover justify-content-center">
          <div className="col-12">
            <div className='about-secition'>
              <div className="d-flex justify-content-center"><button className='btn btn-outline-primary ' data-aos="zoom-in">Experiance</button>
              </div>
              <ul>
                {experienceData.map((experience, index) => (
                  <li key={index} className={hoveredIndex === index ? "hoverafter" : ""}>
                    <span></span>
                    <div onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)} data-aos={experience.animation} className="card">
                      <div className="d-flex justify-content-between">
                        <div className="heading">
                          <h1>{experience.company}</h1>
                          <i>{experience.role}</i>
                        </div>
                        <div className="year">
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
        <div className="row text-hover justify-content-center">
          <div className="col-12">
            <div className='about-secition'>
              <div className="d-flex justify-content-center"><button className='btn btn-outline-primary ' data-aos="zoom-in">Certification</button>
              </div>
              <ul>
                {CertificationData.map((certifiate, index) => (
                  <li key={index} className={hoveredIndex === index ? "hoverafter" : ""}>
                    <span></span>
                    <div onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)} data-aos={certifiate.animation} className="card">
                      <div className="d-flex justify-content-between">
                        <div className="heading">
                          <h1>{certifiate.certificateCourseName}</h1>
                          <i>{certifiate.certificateName}</i>
                        </div>
                        <div className="year">
                          {certifiate.certificateDate}
                        </div>
                      </div>
                      <div style={{ height: "350px" }}>
                        <img className="img-fluid" src={certifiate.certificateImages} alt={certifiate.certificateCourseName} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <a href={certifiate.certificateLink} target="_blank" className="btn btn-primary mt-2">View Certificate</a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row text-hover justify-content-center">
          <div className="col-12">
            <div className='about-secition'>
              <div className="d-flex justify-content-center"><button className='btn btn-outline-primary ' data-aos="zoom-in">Education</button>
              </div>
              <ul>
                {EducationData.map((education, index) => (
                  <li key={index} className={hoveredIndex === index ? "hoverafter" : ""}>
                    <span></span>
                    <div onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)} data-aos={education.animation} className="card">
                      <div className="d-flex justify-content-between">
                        <div className="heading">
                          <h1>{education.instituteName}</h1>
                          <i>{education.degree}
                            {
                              education.degree === "10" || education.degree === "12" ? <sup> th</sup> : null
                            }
                          </i>
                        </div>
                        <div className="year">
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
      </div >
    </>
  );
};

export default About;
