import React, { useState } from 'react';
import { HiViewfinderCircle } from "react-icons/hi2";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import myHealthcare1 from '../assets/images/myhealthcare/1.png'

const Portfolio = ({portfolioSectionRef}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const SliderSlick = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "custom-slick-slider h-250",
    autoplay: false,
    pauseOnHover: true,
    centerMode: true,
    autoplaySpeed: 2000,
  };

  const handleProject = (project) => {
    setSelectedProject((prevSelected) => prevSelected === project.id ? null : project.id);
  };

  const portFolioDetails = [
    {
      id: "1",
      title: "MyHealthcare",
      link: "https://www.myhealthcare.co/",
      homeimages: myHealthcare1,
      slideImages: [
        {
          id: "1",
          img: myHealthcare1,
        },
        {
          id: "2",
          img: myHealthcare1,
        },
        {
          id: "3",
          img: myHealthcare1,
        }
      ],
      skills: "React Js, Bootstrap4",
      projectdeatails: "MyHealthcare project work with team"
    },
  ]

  return (
    <>
      <div className="container" ref={portfolioSectionRef}>
        <div className="row text-hover">
          <div className="col-12 d-flex justify-content-center row-hover">
            <div className="about-secition mb-4">
              <h1 className='fs-5 fw-bold'>Latest Works</h1>
            </div>
          </div>
          <div className="col-12">
            <div className='portfolio-section'>
              <ul>
                {portFolioDetails.map((item) => (
                  <li key={item.id}>
                    <div className='project-section'>
                      <span></span>
                      <div className='card d-flex'>
                        <img src={item.homeimages} alt={item.title} />
                        <div className='project-details'>
                          <h1>{item.title}</h1>
                          <Link target='_blank' to={item.link}>{item.link}</Link>
                        </div>
                        <button onClick={() => handleProject(item)} className='project-view'>
                          <HiViewfinderCircle />
                        </button>
                      </div>
                    </div>
                    {selectedProject !== item.id && (
                      <div className="project-details">
                        <span>{item.details}</span>
                      </div>
                    )}
                    {selectedProject === item.id && (
                      <div className="project-details-slide">
                        <Slider {...SliderSlick}>
                          {item.slideImages.map((slide) => (
                            <div key={slide.id}>
                              <img src={slide.img} alt={`Slide ${slide.id}`} />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;
