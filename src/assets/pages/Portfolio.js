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
  ProjectThird,
  ProjectTitleFifth,
  ProjectTitleFirst,
  ProjectTitleFourth,
  ProjectTitleSecond,
  ProjectTitleSixth,
  ProjectTitleThird,
  activeColor,
} from "../../constant";
import BredcrumComponent from "../component/BredcrumComponent";
import ReactStars from "react-rating-stars-component";
import { toast, ToastContainer } from "react-toastify";

const Portfolio = () => {
  const AllProject = [
    {
      id: 1,
      title: ProjectTitleFirst,
      link: ProjectFirst,
    },
    {
      id: 2,
      title: ProjectTitleSecond,
      link: ProjectSecond,
    },
    {
      id: 3,
      title: ProjectTitleThird,
      link: ProjectThird,
    },
    {
      id: 4,
      title: ProjectTitleFourth,
      link: ProjectFourth,
    },
    {
      id: 5,
      title: ProjectTitleFifth,
      link: ProjectFifth,
    },
    {
      id: 6,
      title: ProjectTitleSixth,
      link: ProjectSixth,
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [rating, setRating] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };
  const ratingChanged = (countRating) => {
    setRating(countRating);
  };
  const Verypooar = "Very Pooar";
  const Pooar = "Pooar";
  const Good = "Good";
  const Verygood = "Very Good";
  const Excellent = "Excellent"
  const ratingArray = ["", Verypooar, Pooar, Good, Verygood, Excellent];
  const handleOk = (i) => {
    if (rating === "") {
      toast.error("Please give rating");
      return;
    } else {
      toast.success(`Thanks for your review ${ratingArray[i]}`);
      handleClose();
      setRating("");
    }
  }

  return (
    <>
      <Helmet>
        <title>{Name} - Portfolio</title>
      </Helmet>
      <BredcrumComponent pageName="Portfolio" />
      <Container className="min-height">
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
                Veiw Project
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
          <Modal.Header closeButton>
            <Modal.Title className="fs-6">UI Design & Development</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <>
                <Row>
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
                <Col sm={12} className="text-center">
                  <Button onClick={() => handleClose(setShow(false))} variant="outline" type="button" className="btn-outline-primary me-3">Cancel</Button>
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

export default Portfolio;