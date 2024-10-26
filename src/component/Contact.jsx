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
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
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

const Contact = () => {
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
            <Container className="pb-4" id="contact">
                <Row>
                    <Col xl={12} className="col-12 d-flex justify-content-center mb-4"><button className="btn btn-outline-primary">Get in touch</button></Col>
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
                                                id="name"
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
                                                id="mobile"
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
        </>
    );
};

export default Contact;
