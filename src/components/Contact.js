import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="container contact" id='contact'>
                <h1>CONTACT ME</h1>
                <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
                    <a href="https://www.linkedin.com/in/tanmay-khairnar-72990314a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
                        <FaLinkedin className='icons' />
                    </a >
                    <a href="mailto:tanmayska11@gmail.com" target="_blank" className="items">
                        <SiGmail className='icons' />
                    </a >
                    <a href="https://www.github.com" target="_blank" className="items">
                        <FaGithubSquare className='icons' />
                    </a >
                    <a href="tel:+4915510700564" target="_blank" className="items" title='+49 15510700564'>
                        <FaPhoneSquareAlt className='icons' />
                    </a >

                </div>
            </div>

        </>
    )
}

export default Contact