import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {
    Button,
    Card,
    Col,
    Form,
    FormControl,
    FormGroup,
    Row,
} from "react-bootstrap";
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

const Contact = ({contactSectionRef}) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
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
        } else if (touch === "") {
            toast.error("Touch is required");
        }
        else if (message === "") {
            toast.error("Message is required");
        }
        else {
            setLoader(true);
            emailjs
                .sendForm('service_k0yec69', 'template_4ns6e4f', form.current, {
                    publicKey: 'MPhPUQIdgkUqoKusv',
                })
                .then(
                    () => {
                        setLoader(false);
                        setName("");
                        setMobile("");
                        setEmail("");
                        setTouch("");
                        setTouchSelected(false);
                        setMessage("");
                        toast.success("Your message sent successfully");
                    },
                    (error) => {
                        toast.error("Server issue. Please try after some time.");
                        setLoader(false)
                    }
                )
        }
    };

    return (
        <>
            <div className="contact-bg" ref={contactSectionRef}>
                <div className="container">
                    <div className="row text-hover">
                        <div className="col-12 d-flex justify-content-center mb-5">
                            <h1 className="fs-5 fw-bold">Get in touch</h1>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="contact__us">
                                <p className="mb-4">Experienced frontend developer available for freelance projects. Proficient in HTML5, CSS3, JavaScript, React.js. Specializing in crafting captivating user interfaces and ensuring seamless user experiences. Let's collaborate to elevate your online presence. Contact me to discuss your project requirements and achieve your goals together!</p>
                                <div>
                                    <span className="pe-2"><MdOutlineLocalPhone /> </span> <a href="tel:6205044930">+91-6205044930</a>
                                    <br className="d-block d-sm-none" />
                                    <span className="ps-0 ps-sm-4"><IoMailUnreadOutline />
                                    </span> <a href="mailto:harshch9931@gmail.com">harshch9931@gmail.com</a>
                                </div>
                                <div className="d-flex justify-content-between pt-4">
                                    <Card className="p-3"><a href="https://www.facebook.com/harshkumar1208200" target="__blank"><CiFacebook className="fs-3" />
                                    </a></Card>
                                    <Card className="p-3"><a href="https://www.linkedin.com/in/harsh-kumar-593a19232/" target="__blank"><CiLinkedin className="fs-3" /></a>
                                    </Card>
                                    <Card className="p-3"><a href="https://wa.me/+916205044930?text=Hi Harsh," target="__blank"><FaWhatsapp className="fs-3" /></a>
                                    </Card>
                                    <Card className="p-3"><a href="https://www.instagram.com/harshch9931/" target="__blank"><CiInstagram className="fs-3" /></a>
                                    </Card>
                                    <Card className="p-3"><a href="https://github.com/harshisdev" target="__blank"><FaGithub className="fs-3" />
                                    </a></Card>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                            <Form ref={form} onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6}>
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
                                                tabIndex="1"
                                            />
                                            <label htmlFor="name">Name <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3 mt-sm-0" sm={6}>
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
                                                tabIndex="2"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                            <label htmlFor="mobile">Mobile Number <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={6}>
                                        <FormGroup className="form-floating">
                                            <FormControl
                                                className="form-control"
                                                type="email"
                                                name="user_email"
                                                id="email"
                                                tabIndex="3"
                                                onChange={handleChange}
                                                value={email}
                                                placeholder="Email"
                                                autoComplete="off"
                                            />
                                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={6}>
                                        <FormGroup className={`form-floating ${touchSelected ? '' : 'selected'}`}>
                                            <Form.Select className="form-control py-2" id="TouchFor" aria-label="Touch For" name="user_touch" onChange={handleChange} tabIndex="4" value={touch}>
                                                <option value=""></option>
                                                <option value="Some talk with you">Some talk with you</option>
                                                <option value="I want to Hire">I want to Hire</option>
                                                <option value="Freelance Work">Freelance Work</option>
                                            </Form.Select>
                                            <label htmlFor="TouchFor">Touch For <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="mt-3" sm={6}>
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
                                                tabIndex="5"
                                            />
                                            <label htmlFor="message">Message <span className="text-danger">*</span></label>
                                        </FormGroup>
                                    </Col>
                                    <Col className="d-flex justify-content-center mt-4" sm={12}>
                                        <Button
                                            className="d-flex align-items-center box-shadow rounded-pill px-4"
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
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toast container for displaying messages */}
            <ToastContainer />
        </>
    );
};

export default Contact;
