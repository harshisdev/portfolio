import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Name } from "../constant";


const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [progress, setProgress] = useState(false);
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
  const Skills = [
    {
      skill: "React.js",
      percentage: "90%",
      animation: "fade-right"
    },
    {
      skill: "Node.js",
      percentage: "80%",
      animation: "fade-down"
    },
    {
      skill: "MongoDB",
      percentage: "70%",
      animation: "fade-up-right"
    },
    {
      skill: "MongoDB",
      percentage: "70%",
      animation: "fade-up-left"
    },
    {
      skill: "MongoDB",
      percentage: "70%",
      animation: "fade-down"
    }
    , {
      skill: "MongoDB",
      percentage: "70%",
      animation: "fade-left"
    }
  ];
  setTimeout(() => {
    setProgress(true);
  }, 1800);
  return (
    <>
      <Helmet>
        <title>{Name} - About</title>
      </Helmet>
      <div className="container pb-4">
        <div className="row mt-4 text-hover">
          <div className="col-12 mb-4 d-flex justify-content-center"><button className='btn btn-outline-primary' data-aos="zoom-in-down">Technical skills</button>
          </div>
          {
            Skills.map((item, index) => (
              <div key={index} className="col-2 mb-5 d-flex justify-content-center" data-aos={item.animation}>
                <div class={`${progress === true ? "go" : ""} skill-progress`}>
                  <div class="circle">
                    <div class="mask"></div>
                    <div class="mask"></div>
                  </div>
                  <div class="inset" data-number={item.percentage}>
                    <div class="numbers" data-skills={item.skill}></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="row text-hover justify-content-center">
          <div className="col-12">
            <div className='about-secition'>
              <div className="d-flex justify-content-center"><button className='btn btn-outline-primary ' data-aos="zoom-in-down">Experiance</button>
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
              <div className="d-flex justify-content-center"><button className='btn btn-outline-primary ' data-aos="zoom-in-down">Certification</button>
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
              <div className="d-flex justify-content-center"><button className='btn btn-outline-primary ' data-aos="zoom-in-down">Education</button>
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
