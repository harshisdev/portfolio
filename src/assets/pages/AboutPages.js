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
import BredcrumComponent from "../component/Bredcrum/BredcrumComponent";
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
                    HTML5 <FaHtml5 color="rgb(248 34 23 / 47%)" />
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
                    CSS3 <FaCss3 color="rgb(248 34 23 / 47%)" />
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
                    SASS <FaSass color="rgb(248 34 23 / 47%)" />
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
                    <TbBrandJavascript color="rgb(248 34 23 / 47%)" />
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
                    React JS <FaReact color="rgb(248 34 23 / 47%)" />
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
                    jQuery <SiJquery color="rgb(248 34 23 / 47%)" />
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
                    Bootstrap5 <FaBootstrap color="rgb(248 34 23 / 47%)" />
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
                    Git/Lab <FaGithub color="rgb(248 34 23 / 47%)" />
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
                    <td>Coding & Listening music</td>
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
    </>
  );
};

export default AboutPages;
