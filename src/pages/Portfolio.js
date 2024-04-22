import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  Name,
  ProjectFifth,
  ProjectFirst,
  ProjectFourth,
  ProjectSecond,
  ProjectSixth,
  ProjectSeven,
  ProjectThird,
  ProjectTitleFifth,
  ProjectTitleFirst,
  ProjectTitleFourth,
  ProjectTitleSecond,
  ProjectTitleSixth,
  ProjectTitleSeven,
  ProjectTitleThird,
  activeColor,
} from "../constant";
import BredcrumComponent from "../component/BredcrumComponent";
import ReactStars from "react-rating-stars-component";
import { toast, ToastContainer } from "react-toastify";

const Portfolio = () => {
  const AllProject = [
    {
      id: 1,
      title: ProjectTitleFirst,
      link: ProjectFirst,
      skills: "React Js Bootstrap4"
    },
    {
      id: 2,
      title: ProjectTitleSecond,
      link: ProjectSecond,
      skills: "HTML5, CSS, JS, Jquery, Bootstrap5"
    },
    {
      id: 3,
      title: ProjectTitleThird,
      link: ProjectThird,
      skills: "HTML5, CSS, JS, Bootstrap5"
    },
    {
      id: 4,
      title: ProjectTitleFourth,
      link: ProjectFourth,
      skills: "HTML5, CSS, JS, Bootstrap5"
    },
    {
      id: 5,
      title: ProjectTitleFifth,
      link: ProjectFifth,
      skills: "HTML5, CSS, JS, Bootstrap5"
    },
    {
      id: 6,
      title: ProjectTitleSixth,
      link: ProjectSixth,
      skills: "React Js, Bootstrap4"
    },
    {
      id: 7,
      title: ProjectTitleSeven,
      link: ProjectSeven,
      skills: "React Js, Bootstrap4"
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [rating, setRating] = useState("");
  const [showSkills, setShowSkills] = useState(false); // Renamed to showSkills for clarity
  const [skillText, setSkillText] = useState("View Skills");
  const handleClose = () => setShow(false);
  const ratingChanged = (countRating) => {
    setRating(countRating);
  };

  // view skill 
  const toggleSkills = () => {
    setShowSkills(!showSkills);
    setSkillText(showSkills ? "View Skills" : "Less Skills");
  };
  const Verypoor = "very poor";
  const Poor = "poor";
  const Good = "good";
  const Verygood = "very good";
  const Excellent = "excellent"
  const ratingArray = ["", Verypoor, Poor, Good, Verygood, Excellent];
  const handleOk = (i) => {
    if (rating === "") {
      toast.error("Please give rating");
      return;
    } else {
      toast.success(`Thanks for your review ${ratingArray[i]}`);
      handleClose();
      setRating("");
      setShowSkills(false);
    }
  }
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
    setRating("")
  };

  return (
    <>
      <Helmet>
        <title>{Name} - Portfolio</title>
      </Helmet>
      <BredcrumComponent pageName="Portfolio" />
      <Container className="min-height min-height-pagination">
        <Row>
          {AllProject.map((item) => (
            <Col className="text-center pb-4 pb-md-2" key={item.id} sm={12} md={6} xl={4}>
              <iframe
                title={item.title}
                src={item.link}
                width="100%"
                height="400px"
              ></iframe>
              <Button
                className="my-2"
                variant="outline-primary"
                onClick={() => handleShow(item)}
              >
                Veiw Details
              </Button>
            </Col>
          ))}
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          size="md"
        >
          <Modal.Header>
            <Modal.Title className="fs-6 d-flex align-items-center justify-content-between w-100">UI Design & Development <button className={`btn ${showSkills ? "btn-outline-primary" : "btn-primary"}`} onClick={toggleSkills}>
              {skillText}
            </button></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <>
                <Row>
                  {showSkills && ( // Conditional rendering for skills
                    <>
                      <Col sm={4}>Used Skills :-</Col>
                      <Col sm={8}>
                        <p className="mb-1">{selectedProject.skills}</p>
                      </Col>
                    </>
                  )}
                  <Col sm={4}>Project Name :-</Col>
                  <Col sm={8}>{selectedProject.title}</Col>
                  <Col sm={4}>Project Link :-</Col>
                  <Col sm={8}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-primary text-break"
                      href={selectedProject.link}
                    >
                      {selectedProject.link}
                    </a>
                  </Col>
                  <Col className="d-flex align-items-center" sm={4}>
                    Review :-
                  </Col>
                  <Col sm={8}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor={activeColor}
                    />
                  </Col>
                  <Col sm={12} className="text-center mt-2">
                    <Button onClick={() => handleClose(setShow(false),setShowSkills(false))} variant="outline" type="button" className="btn-outline-primary me-3">Cancel</Button>
                    <Button onClick={() => handleOk(rating)} type="button" className="btn-primary">Ok</Button>
                  </Col>
                </Row>
              </>
            )}
          </Modal.Body>
        </Modal>

        <ToastContainer />
      </Container >
      <div data-aos="zoom-in" data-aos-delay="1000" style={{ width: "60px", height: "60px", top: "90px", left: "10px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#144C8C" d="M31.9,-25.6C46.7,-6.9,67.8,6.7,70.4,24.4C73,42.1,57.2,64,36.1,73.7C15,83.4,-11.4,81,-26.2,68.5C-40.9,56,-43.9,33.3,-44.9,14.5C-45.8,-4.4,-44.7,-19.6,-36.8,-36.6C-29,-53.7,-14.5,-72.7,-3,-70.4C8.6,-68,17.1,-44.2,31.9,-25.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="1500" style={{ width: "40px", height: "50px", top: "150px", right: "20px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8AB9EE" d="M44.2,-48.8C55.7,-32.8,62.3,-16.4,61.8,-0.5C61.3,15.4,53.8,30.9,42.4,41.2C30.9,51.6,15.4,56.9,-1.6,58.4C-18.6,60,-37.3,58,-52.9,47.6C-68.5,37.3,-81.1,18.6,-81,0.1C-81,-18.5,-68.2,-37,-52.6,-53C-37,-69.1,-18.5,-82.7,-1.1,-81.7C16.4,-80.6,32.8,-64.9,44.2,-48.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-delay="2000" style={{ width: "40px", height: "40px", bottom: "150px", left: "20px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1F3C58" d="M45.4,-65.1C53.6,-56.5,51.3,-36.2,48.4,-21.4C45.6,-6.5,42,3,41.4,16C40.7,29.1,43,45.6,36.5,60.2C30.1,74.8,15.1,87.3,3.7,82.2C-7.7,77.2,-15.4,54.4,-24.8,40.9C-34.3,27.3,-45.6,22.9,-56.7,12.7C-67.9,2.6,-78.9,-13.3,-74,-22.7C-69.1,-32,-48.2,-34.9,-33.2,-41.2C-18.3,-47.5,-9.1,-57.3,4.7,-63.9C18.6,-70.4,37.2,-73.6,45.4,-65.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div data-aos="zoom-in" data-aos-delay="2500" style={{ width: "80px", height: "70px", bottom: "70px", right: "20px" }} className="d-none d-lg-block position-fixed z-2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#627D9F" d="M44.4,12.1C44.4,33,22.2,66.1,-4.1,66.1C-30.4,66.1,-60.8,33,-60.8,12.1C-60.8,-8.8,-30.4,-17.6,-4.1,-17.6C22.2,-17.6,44.4,-8.8,44.4,12.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </>
  );
};

export default Portfolio;
