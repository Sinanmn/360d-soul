import React from "react";
import "./ContactComponent.css";
import { FiNavigation } from "react-icons/fi";
import { FaMailBulk } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ContactComponent = () => {
  const touchData = [
    {
      t1: "Location",
      t2: "House - 774, Road - 11, Avenue - 02, Mirpur DOHS, Dhaka - 1216, Bangladesh.",
      icon: <FiNavigation />,
    },
    {
      t1: "Email Us",
      t2: "info@lifeinnovior.org",
      icon: <FaMailBulk />,
      cursor: "pointer",
    },
    {
      t1: "Call Us",
      t2: "+88 01844 185480",
      icon: <IoCall />,
      cursor: "pointer",
    },
  ];

  return (
    <div className="contactcomponent-container font-[inter]">
      <div className="contactcomponent-left">
        <h1>Send us a message</h1>
        <p>
          Thank you for your interest in contacting us. Please fill out the form
          below with your message and we will get back to you as soon as
          possible.
        </p>

        <div className="contact-input-container">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button className="btn  text-white bg-[#00B4D8] button">Send Message</button>
        </div>
      </div>

      <div className="contactcomponent-right">
        <h2>Get in touch</h2>

        {touchData.map((item, index) => (
          <div className="purata" key={index}>
            <div className="purata-box">
              <div className="icon-box">{item.icon}</div>
              <div className="likha-box">
                <h3
                  style={{ borderBottom: item.underline, cursor: item.cursor }}
                >
                  {item.t1}
                </h3>
                <p>{item.t2}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="footer_top4">
          <div className="network">
            <h3>Follow our social network </h3>
            <div className="social-media-container">
              <div className="social-media ">
                <FaFacebookF />
              </div>
              <div className="social-media">
                <FaTwitter />
              </div>
              <div className="social-media">
                <FaLinkedinIn />
              </div>
              <div className="social-media">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>

 
     

    </div>

    
  );
};

export default ContactComponent;
