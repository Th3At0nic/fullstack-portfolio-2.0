import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lez07kj",
        "template_gcc5eze",
        e.target,
        "user_FgziNyNw8Kfwmk8nCQtDs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your message has been sent successfully");
    e.target.reset();
  }
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <section className="background-color">
      <Navbar />
      <div className="row" id="contactPageHeight">
        <div className="col-md-4 offset-1 container">
          <div className="projectsArea">
            <h1 className="hey-text">Hey You 🥰,</h1>
            <p className="text-light">
              {" "}
              please feel free to contact me. I am always open to discussing new
              projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="text-light projectsArea">
            <div className="d-flex">
              <FontAwesomeIcon
                className="icon"
                style={{
                  width: "35px",
                  height: "35px",
                  position: "relative",
                  top: "11px",
                  marginRight: "8px",
                }}
                icon={faEnvelope}
              />
              <div>
                <h2 style={{ padding: "0px", margin: "0px" }}> Mail Me</h2>
                <p style={{ padding: "0px", margin: "0px" }}>
                  islammdrahatul@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="text-white projectsArea">
            <div className="d-flex">
              <FontAwesomeIcon
                className="icon"
                style={{
                  width: "35px",
                  height: "35px",
                  position: "relative",
                  top: "11px",
                  marginRight: "8px",
                }}
                icon={faPhoneAlt}
              />
              <div>
                <h2
                  style={{
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  Call Me
                </h2>
                <p style={{ padding: "0px", margin: "0px" }}>
                  +880-1747-972897
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 projectsArea">
            <a
              className="icon"
              href="https://www.linkedin.com/in/mdrahatulislam/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} />
            </a>
            <a
              className="icon"
              href="https://www.facebook.com/th3at0nic/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="contact-icon" icon={faFacebook} />
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/m.rahatul_islam/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="col-md-4 offset-1 container">
          <div>
            <h1 className="text-contactForm projectsArea">Get in touch</h1>
          </div>
          <form
            className="contact-form projectsArea container"
            onSubmit={sendEmail}
          >
            <input
              className="form-control"
              placeholder="Your name*"
              type="text"
              name="user_name"
              required
            />
            <br />
            <input
              onChange={(e) => validateEmail(e)}
              className="form-control"
              placeholder="Your email address*"
              type="email"
              name="user_email"
              required
            ></input>
            <span
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              {emailError}
            </span>
            <br />
            <input
              className="form-control"
              placeholder="Contact Number (optional)"
              type="number"
              name="contact_number"
            />
            <br />
            <textarea
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Your message*"
              name="message"
              required
            />
            <br />
            <div className="text-center">
              <input className="btn-submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
