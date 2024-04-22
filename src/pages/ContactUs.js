import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
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
import { Name } from "../constant";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import BredcrumComponent from "../component/BredcrumComponent";
import loaderIcon from "../assets/images/loader.svg";
import { FaArrowRight } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Freelancer from "../assets/images/freelancer-img.jpeg";

const ContactUs = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [touch, setTouch] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const [touchSelected, setTouchSelected] = useState(false);


    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "user_name") {
            setName(value);
        } else if (name === "user_mobile") {
            setMobile(value);
        } else if (name === "user_email") {
            setEmail(value);
        } else if (name === "user_subject") {
            setSubject(value);
        } else if (name === "user_touch") {
            setTouch(value);
            setTouchSelected(value !== '');
        } else if (name === "user_message") {
            setMessage(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            toast.error("Name is required");
        } else if (mobile === "" || mobile.length < 10) {
            toast.error("Mobile number is required");
        } else if (email === "") {
            toast.error("Email is required");
        } else if (!email.includes("@") ||
            !email.includes(".") ||
            email.length < 5 ||
            email.length > 50 ||
            !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            toast.error("Invalid email address");
        } else if (subject === "") {
            toast.error("Subject is required");
        }
        else if (touch === "") {
            toast.error("Touch is required");
        }
        else if (message === "") {
            toast.error("Message is required");
        }
        else {
            setLoader(true);
            setTimeout(() => {
                setShow(true);
                setLoader(false);
            }, 2000);
        }
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleYes = () => {
        setLoader(true);
        emailjs
            .sendForm('service_mupmc8l', 'template_4ns6e4f', form.current, {
                publicKey: 'MPhPUQIdgkUqoKusv',
            })
            .then(
                () => {
                    setLoader(false);
                    setName("");
                    setMobile("");
                    setEmail("");
                    setSubject("");
                    setTouch("");
                    setTouchSelected(false);
                    setMessage("");
                    setShow(false);
                    toast.success("Your message sent successfully");
                },
                (error) => {
                    toast.error("Server issue. Please try after some time.");
                    setLoader(false)
                }
            )
    };

    return (
        <>
            <Helmet>
                <title>{Name} - Contact</title>
            </Helmet>
            <BredcrumComponent pageName="Contact" />
            <Container className="min-height min-height-pagination">
                <Row>
                    <Col xl={12}><h1 className="fs-6 text-center mb-0 pb-4">Contact With Me</h1></Col>
                    {/* Contact information section */}
                    <Col className="col-12 col-sm-6 order-2 order-sm-1 pt-4 pt-sm-0">
                        {/* Contact card */}
                        <Card className="p-3 box-shadow_1">
                            <div className="d-flex justify-content-center">
                                <Card className="w-25 mb-2 overflow-hidden"><img src={Freelancer} alt="Contact With Me" /></Card>
                            </div>
                            <div className="contact__us">
                                <p className="mb-2">Experienced frontend developer available for freelance projects. Proficient in HTML5, CSS3, JavaScript, React.js. Specializing in crafting captivating user interfaces and ensuring seamless user experiences. Let's collaborate to elevate your online presence. Contact me to discuss your project requirements and achieve your goals together!</p>
                                <div>
                                    <span className="pe-2"><MdOutlineLocalPhone /> </span> <a href="tel:6205044930">+91-6205044930</a>
                                </div>
                                <div>
                                    <span className="pe-2"><IoMailUnreadOutline />
                                    </span> <a href="mailto:harshch9931@gmail.com">harshch9931@gmail.com</a>
                                </div>
                                {/* Social media links */}
                                <h2 className="py-2 mb-0 fs-6 text-center">Find With Me</h2>
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
                    {/* Contact form section */}
                    <Col className="col-12 col-sm-6 order-1 order-sm-2">
                        <Form ref={form} onSubmit={handleSubmit}>
                            <Card className="p-3 box-shadow_1">
                                <Row>
                                    <Col sm={12}>
                                        <FormGroup className="form-floating">
                                            <FormControl
                                                type="text"
                                                name="user_name"
                                                value={name}
                                                onChange={handleChange}
                                                placeholder="Name *"
                                                autoComplete="off"
                                                className="form-control"
                                            />
                                            <label htmlFor="name">Name <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={12}>
                                        <FormGroup className="form-floating">
                                            <FormControl
                                                type="text"
                                                name="user_mobile"
                                                value={mobile}
                                                onChange={handleChange}
                                                placeholder="Mobile Number *"
                                                autoComplete="off"
                                                className="form-control"
                                                maxLength={10}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                            <label htmlFor="mobile">Mobile Number <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={12}>
                                        <FormGroup className="form-floating">
                                            <FormControl
                                                className="form-control"
                                                type="email"
                                                name="user_email"
                                                id="email"
                                                onChange={handleChange}
                                                value={email}
                                                placeholder="Email"
                                                autoComplete="off"
                                            />
                                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={12}>
                                        <FormGroup className="form-floating">
                                            <FormControl
                                                className="form-control"
                                                type="text"
                                                name="user_subject"
                                                id="subject"
                                                onChange={handleChange}
                                                value={subject}
                                                placeholder="Subject"
                                                autoComplete="off"
                                            />
                                            <label htmlFor="subject">Subject <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={12}>
                                        <FormGroup className={`form-floating ${touchSelected ? '' : 'selected'}`}>
                                            <Form.Select className="form-control py-2" id="TouchFor" aria-label="Touch For" name="user_touch" onChange={handleChange} value={touch}>
                                                <option value=""></option>
                                                <option value="Some talk with you">Some talk with you</option>
                                                <option value="I want to Hire">I want to Hire</option>
                                                <option value="Freelance Work">Freelance Work</option>
                                            </Form.Select>
                                            <label htmlFor="TouchFor">Touch For <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={12}>
                                        <FormGroup className="form-floating">
                                            <FormControl
                                                type="text"
                                                as="textarea"
                                                name="user_message"
                                                id="message"
                                                className="form-control py-2"
                                                value={message}
                                                onChange={handleChange}
                                                placeholder="Message"
                                                autoComplete="off"
                                            />
                                            <label htmlFor="message">Message <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="d-flex justify-content-center mt-3" sm={12}>
                                        <Button
                                            className="d-flex align-items-center"
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
            </Container>
            {/* Toast container for displaying messages */}
            <ToastContainer />
            {/* Modal for confirming message submission */}
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                onHide={handleClose}
                size="md"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1 className="text-danger fs-6 mb-0">
                            Sure you want to send?
                        </h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>
                        <tr>
                            <td>Name </td>
                            <td style={{ width: "25px" }}>:-</td>
                            <td style={{ wordBreak: "break-all" }}>{name}</td>
                        </tr>
                        <tr>
                            <td style={{ minWidth: "90px" }}>Mobile No</td>
                            <td style={{ width: "25px" }}>:-</td>
                            <td style={{ wordBreak: "break-all" }}>{mobile}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td style={{ width: "25px" }}>:-</td>
                            <td style={{ wordBreak: "break-all" }}>{email}</td>
                        </tr>
                        <tr>
                            <td>Subject</td>
                            <td style={{ width: "25px" }}>:-</td>
                            <td style={{ wordBreak: "break-all" }}>{subject}</td>
                        </tr>
                        <tr>
                            <td>Touch For</td>
                            <td style={{ width: "25px" }}>:-</td>
                            <td style={{ wordBreak: "break-all" }}>{touch}</td>
                        </tr>
                        <tr>
                            <td>Message</td>
                            <td style={{ width: "25px" }}>:-</td>
                            <td style={{ wordBreak: "break-all" }}>{message}</td>
                        </tr>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose}>
                        No
                    </Button>

                    {loader ? (
                        <>
                            <Button variant="primary">
                                <img
                                    src={loaderIcon}
                                    alt="Loader"
                                    style={{
                                        width: "34px",
                                        height: "auto",
                                        paddingLeft: "10px",
                                    }}
                                />
                            </Button>
                        </>
                    ) : <Button variant="primary" onClick={handleYes}>Yes</Button>}

                </Modal.Footer>
            </Modal>
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
            <div data-aos="zoom-in" data-aos-delay="2500" style={{ width: "80px", height: "70px", bottom: "70px", right: "15px" }} className="d-none d-lg-block position-fixed z-2">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#627D9F" d="M44.4,12.1C44.4,33,22.2,66.1,-4.1,66.1C-30.4,66.1,-60.8,33,-60.8,12.1C-60.8,-8.8,-30.4,-17.6,-4.1,-17.6C22.2,-17.6,44.4,-8.8,44.4,12.1Z" transform="translate(100 100)" />
                </svg>
            </div>
        </>
    );
};

export default ContactUs;
