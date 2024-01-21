import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faDownload,
  faArrowUpFromBracket,
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
const Resume = "http://localhost:5173/sithuthedev.pdf";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nejaw98",
        "template_9j8w10t",
        form.current,
        "W6q8zyo65G01qqIUG",
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const downloadResume = () => {
    const aTag = document.createElement("a");
    aTag.href = Resume;
    aTag.setAttribute("download", "sithuthedev.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section id="contact_me">
      <div className="container mx-auto my-8">
        <div className="text-3xl font-semibold text-center">Contact Me</div>
        <div className="w-10 h-1 mt-3 md:mt-7 mx-auto bg-green rounded-full "></div>
        <div className="md:flex mt-8">
          <div className="md:w-1/2 text-xl md:  pl-10">
            <div className="w-full">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span className="pl-2">09-768094840</span>
            </div>
            <div className="w-full">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sithu.sithuthedev@gmail.com&su=Subject&body=Body%20Text"
                target="_blank"
                className="pl-2"
              >
                sithu.sithuthedev@gmail.com
              </a>
            </div>
            <div className="w-full">
              <FontAwesomeIcon icon={faLinkedin} />
              <a
                href="https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/"
                className="pl-2 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="w-full">
              <button onClick={downloadResume}>
                Resume
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </div>
            <FontAwesomeIcon icon={faDownload} />
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <FontAwesomeIcon icon={faShareFromSquare} />
          </div>
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name" className="hidden">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                placeholder="Name"
                name="user_name"
                className="block w-full border p-2 rounded-lg my-2"
              />
              <label htmlFor="user_email" className="hidden">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                placeholder="Email"
                name="user_email"
                className="block w-full border p-2 rounded-lg my-2"
              />
              <label htmlFor="message" className="hidden">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                name="message"
                className="bg-slate-200 p-4 rounded-lg w-full block h-full"
              />

              <input
                type="submit"
                value="Send"
                className="bg-slate-300 w-full mt-4 px-4 py-2 rounded-lg"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
