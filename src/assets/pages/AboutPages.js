import React from "react";
import { Container, Col, Row, Tab, Tabs } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  Company,
  Destination,
  Experiance,
  Name,
  activeColor,
} from "../../constant";
import BredcrumComponent from "../component/BredcrumComponent";
import Resume from "../images/HarshResume.pdf";
import CompanyLogos from "../images/logo.svg";
import { Table } from "antd";
import ReactStars from "react-rating-stars-component";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";

const AboutPages = () => {
  const dataSource = [
    {
      key: "1",
      course: "Diploma Multimedia (Web Design)",
      school: "Oxford Institute Rajouri  Garden, New Delhi",
      passing: "2022",
    },
    {
      key: "2",
      course: "B.A (Eng. Hons)",
      school: "LNMU University, Darbhanga",
      passing: "2021",
    },
    {
      key: "3",
      course: "12th",
      school: "BSEB, Patna",
      passing: "2018",
    },
    {
      key: "4",
      course: "10th",
      school: "BSEB, Patna",
      passing: "2016",
    },
  ];

  const columns = [
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "School/University/Institute",
      dataIndex: "school",
      key: "school",
    },
    {
      title: "Passing Year",
      dataIndex: "passing",
      key: "passing",
    },
  ];
  return (
    <>
      <Helmet>
        <title>{Name} - About</title>
      </Helmet>
      <BredcrumComponent pageName="About" />
      <Container className="min-height min-height-pagination">
        <Col className="card box-shadow bg-white p-3" xl={12}>
          <Tabs className="custom-nav-tabs mb-4" defaultActiveKey={1}>
            <Tab eventKey={1} title="Experience">
              Company:- <br className="d-sm-none" /> {Company}{" "}
              <img
                className="ms-2"
                width="50px"
                src={CompanyLogos}
                alt={Company}
              />
              <br />
              Destination:- <br className="d-sm-none" /> {Destination}
              <br />
              Experiance:- <br className="d-sm-none" /> {Experiance}
              <ul>
                <li>Developed and maintained the company's website.</li>
                <li>
                  Worked closely with the product team to design and implement
                  new features.
                </li>
                <li>
                  Worked with the marketing team to optimize the website for
                  search engines.
                </li>
                <li>Fixed bugs and resolved user issues.</li>
              </ul>
            </Tab>
            <Tab eventKey={2} title="Professional Skills">
              <Row>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    HTML5 <FaHtml5 color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    CSS3 <FaCss3 color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    SASS <FaSass color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    JavaScript{" "}
                    <TbBrandJavascript color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    React JS <FaReact color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    jQuery <SiJquery color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    Bootstrap5 <FaBootstrap color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
                <Col className="d-flex align-items-center" sm={6} xl={3}>
                  <label className="me-3">
                    Git/Lab <FaGithub color="#e70448" />
                  </label>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    activeColor={activeColor}
                    edit={false}
                  />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey={3} title="Education">
              <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </Tab>
            <Tab eventKey={4} title="Personal Details">
              <table className="w-100">
                <tbody>
                  <tr>
                    <td style={{ width: "130px" }}>Father’s Name:-</td>
                    <td>Sri Rajeev Kumar Choudhary</td>
                  </tr>
                  <tr>
                    <td>Date of Birth:-</td>
                    <td>12 Aug 2000</td>
                  </tr>
                  <tr>
                    <td>Address:-</td>
                    <td>New Delhi, 110084</td>
                  </tr>
                  <tr>
                    <td>Nationality:-</td>
                    <td>Indian</td>
                  </tr>
                  <tr>
                    <td>Language:-</td>
                    <td>Hindi/English</td>
                  </tr>
                  <tr>
                    <td>Hobbies:-</td>
                    <td>Coding & Listening to music</td>
                  </tr>
                </tbody>
              </table>
            </Tab>
            <Tab eventKey={5} title="Resume">
              <Row className="justify-content-center">
                <Col xl={8}>
                  <iframe
                    title="Resume"
                    style={{ marginTop: "10px" }}
                    width="100%"
                    height="310px"
                    src={Resume}
                  ></iframe>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Container>
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

export default AboutPages;
