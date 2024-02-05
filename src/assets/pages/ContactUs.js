import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Name } from "../../constant";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import BredcrumComponent from "../component/Bredcrum/BredcrumComponent";
import loaderIcon from "../../assets/images/loader.svg";
import { FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ContactImg from "../../assets/images/contact.png";



const ContactUs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    toast.error("Your message not submited !!!");
  };
  const handleYes = () => {
    setShow(false);
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    toast.success("Your message send successfully");
  }

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "MobileNumber") {
      setMobile(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "Message") {
      setMessage(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name is requried");
    } else if (mobile === "" || mobile.length < 10) {
      toast.error("Mobile number is requried");
    } else if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 5 ||
      email.length > 50 ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    ) {
      toast.error("Email is required");
    } else if (message === "") {
      toast.error("Message is requried");
    } else {
      setLoader(true);
      setTimeout(() => {
        setShow(true);
        setLoader(false);
      }, 2000);
      setName(name);
      setMobile(mobile);
      setEmail(email);
      setMessage(message);
    }
  };

  return (
    <>
      <Helmet>
        <title>{Name} - Contact</title>
      </Helmet>
      <BredcrumComponent pageName="Contact" />
      <Container className="min-height min-height-pagination">
        <Row>
          <Col xl={12}><h1 className="fs-5 text-center mb-0 pb-4">Contact With Me</h1></Col>
          <Col className="col-12 col-sm-6 order-2 order-sm-1 pt-4 pt-sm-0">
            <Card className="p-3 box-shadow_1">
              <div className="d-flex justify-content-center">
                <Card className="mb-2 w-25"><img src={ContactImg} alt="Contact With Me" /></Card>
              </div>
              <div className="contact__us">
                <p className="mb-2">I am available for freelance work. Connect with me via and call in to my account.</p>
                <div>
                  <span className="pe-2"><MdOutlineLocalPhone /> </span> <a href="tel:6205044930">+91-6205044930</a>
                </div>
                <div>
                  <span className="pe-2"><CiMail /> </span> <a href="mailto:harshch9931@gmail.com">harshch9931@gmail.com</a>
                </div>
                <p className="py-2 mb-0  text-center fw-bold">FIND WITH ME</p>
                <div className="d-flex justify-content-between">
                  <Card className="p-2"><a href="https://www.facebook.com/harshkumar1208200" target="__blank"><CiFacebook className="fs-3" />
                  </a></Card>
                  <Card className="p-2"><a href="https://www.linkedin.com/in/harsh-kumar-593a19232/" target="__blank"><CiLinkedin className="fs-3" /></a>
                  </Card>
                  <Card className="p-2"><a href="https://wa.me/+916205044930?text=Hi Harsh," target="__blank"><FaWhatsapp className="fs-3" /></a>
                  </Card>
                  <Card className="p-2"><a href="https://www.instagram.com/harshch9931/" target="__blank"><CiInstagram className="fs-3" /></a>
                  </Card>
                  <Card className="p-2"><a href="https://github.com/harshisdev" target="__blank"><FaGithub className="fs-3" />
                  </a></Card>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="col-12 col-sm-6 order-1 order-sm-2">
            <Form onSubmit={handleSubmit}>
              <Card className="p-3 box-shadow_1">
                <Row>
                  <Col sm={12}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="mt-3" sm={12}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        name="MobileNumber"
                        value={mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number *"
                        autoComplete="off"
                        maxLength={10}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="mt-3" sm={12}>
                    <FormGroup>
                      <FormControl
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        placeholder="Email *"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="mt-3" sm={12}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        as="textarea"
                        name="Message"
                        value={message}
                        onChange={handleChange}
                        placeholder="Message *"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="d-flex justify-content-center mt-3" sm={12}>
                    <Button
                      className="d-flex align-items-center text-black"
                      variant="outline-primary"
                      type="submit"
                    >
                      Send Message
                      {loader ? (
                        <>
                          <img
                            src={loaderIcon}
                            alt="Loader"
                            style={{
                              width: "34px",
                              height: "auto",
                              paddingLeft: "10px",
                            }}
                          />
                        </>
                      ) : (
                        <FaArrowRight className="ms-2" />
                      )}
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Form>
          </Col>
        </Row>
        <ToastContainer />
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          onHide={handleClose}
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h1 className="text-primary fs-6 mb-0">
                Are you sure send message !!!
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tr>
                <td>Name </td>
                <td>:-</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td style={{ minWidth: "115px" }}>Mobile Number</td>
                <td>:-</td>
                <td>{mobile}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:-</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Message</td>
                <td>:-</td>
                <td style={{ wordBreak: "break-all" }}>{message}</td>
              </tr>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={handleYes}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ContactUs;
