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
import BredcrumComponent from "../component/Bredcrum/BredcrumComponent";
import ReactStars from "react-rating-stars-component";
import { toast, ToastContainer } from "react-toastify";

const Project = () => {
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
      setTimeout(() => {
        toast.success(`Thanks for your review ${ratingArray[i]}`);
      }, 500);
      handleClose();
      setRating("");
    }
  }

  return (
    <>
      <Helmet>
        <title>{Name} - Projects</title>
      </Helmet>
      <Container className="min-height">
        <BredcrumComponent pageName="Projects" />
        <Row>
          {AllProject.map((item) => (
            <Col className="text-center sm-pb-0 md-pb-4" key={item.id} sm={12} md={6} xl={4}>
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
                Project Details
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
                  <Col xl="auto">Project Name :-</Col>
                  <Col xl={7}>{selectedProject.title}</Col>
                  <Col xl="auto">Project Link :-</Col>
                  <Col xl={7}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="text-primary"
                      href={selectedProject.link}
                    >
                      {selectedProject.link}
                    </a>
                  </Col>
                  <Col className="d-flex align-items-center" xl={3}>
                    Review :-
                  </Col>
                  <Col xl={7}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor={activeColor}
                    />
                  </Col>
                  <Col xl={12} className="text-center">
                    <Button onClick={() => handleOk(rating)} type="button" variant="outline" className="btn-outline-primary">Ok</Button>
                  </Col>
                </Row>
              </>
            )}
          </Modal.Body>
        </Modal>

        <ToastContainer />
      </Container>
    </>
  );
};

export default Project;
