import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from "react-icons/bi";


function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    data-aos="fade-up"
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        right: "20px",
                        padding: "10px",
                        fontSize: "18px",
                        backgroundColor: "#ffc107",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        zIndex: "999",
                    }}
                >
                    <BiArrowToTop />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
