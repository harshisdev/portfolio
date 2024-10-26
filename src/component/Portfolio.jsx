import React, { useState } from 'react';
import { HiViewfinderCircle } from "react-icons/hi2";
import htmlImages from "../assets/images/html-img.png";
import cssImages from "../assets/images/css-img.png";
import jsImages from "../assets/images/js-img.png";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const SliderSlick = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "custom-slick-slider h-250",
    autoplay: true,
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
      title: "Project First",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      link: "https://www.google.com/",
      homeimages: htmlImages,
      slideImages: [
        {
          id: "1",
          img: htmlImages,
        },
        {
          id: "2",
          img: cssImages,
        },
        {
          id: "3",
          img: jsImages,
        }
      ],
      skills: "React Js, Bootstrap4",
      animation: "fade-right",
      projectdeatails: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fuga quidem, rerum nihil, explicabo saepe, illum corrupti nemo reprehenderit perspiciatis dolor atque. Exercitationem reiciendis doloremque magni delectus pariatur voluptatem repudiandae!"
    },
    {
      id: "2",
      title: "Project Second",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      link: "https://www.google.com/",
      homeimages: cssImages,
      slideImages: [
        {
          id: "1",
          img: htmlImages,
        },
        {
          id: "2",
          img: cssImages,
        },
        {
          id: "3",
          img: jsImages,
        }
      ],
      skills: "React Js, Bootstrap4",
      animation: "fade-left",
      projectdeatails: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fuga quidem, rerum nihil, explicabo saepe, illum corrupti nemo reprehenderit perspiciatis dolor atque. Exercitationem reiciendis doloremque magni delectus pariatur voluptatem repudiandae!"
    },
    {
      id: "3",
      title: "Project Third",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      link: "XXXXXXXXXXXXXXXXXXXXXXX",
      homeimages: jsImages,
      slideImages: [
        {
          id: "1",
          img: htmlImages,
        },
        {
          id: "2",
          img: cssImages,
        },
        {
          id: "3",
          img: jsImages,
        }
      ],
      skills: "React Js, Bootstrap4",
      animation: "fade-right",
      projectdeatails: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fuga quidem, rerum nihil, explicabo saepe, illum corrupti nemo reprehenderit perspiciatis dolor atque. Exercitationem reiciendis doloremque magni delectus pariatur voluptatem repudiandae!"
    },
    {
      id: "4",
      title: "Project Fourth",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      link: "XXXXXXXXXXXXXXXXXXXXXXX",
      homeimages: htmlImages,
      slideImages: [
        {
          id: "1",
          img: htmlImages,
        },
        {
          id: "2",
          img: cssImages,
        },
        {
          id: "3",
          img: jsImages,
        }
      ],
      skills: "React Js, Bootstrap4",
      animation: "fade-left",
      projectdeatails: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fuga quidem, rerum nihil, explicabo saepe, illum corrupti nemo reprehenderit perspiciatis dolor atque. Exercitationem reiciendis doloremque magni delectus pariatur voluptatem repudiandae!"
    },
  ]

  return (
    <>
      <div className="container" id='portfolio'>
        <div className="row">
          <div className="col-12 d-flex justify-content-center row-hover">
            <h1>Latest Works</h1>
          </div>
          <div className="col-12">
            <div className='portfolio-section'>
              <ul>
                {portFolioDetails.map((item) => (
                  <li key={item.id}>
                    <div className='project-section'>
                      <span></span>
                      <div className='card' data-aos={item.animation}>
                        <img src={item.homeimages} alt={item.title} />
                        <div className='project-details'>
                          <h1>{item.title}</h1>
                          <p>{item.details}</p>
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
