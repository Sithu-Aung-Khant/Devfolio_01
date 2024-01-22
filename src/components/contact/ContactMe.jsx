import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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
      <div className="container mx-auto px-6 my-8 max-w-4xl">
        <div className="text-3xl font-semibold text-center">Contact Me</div>
        <div className="w-10 h-1 mt-3 md:mt-7 mx-auto bg-green rounded-full "></div>
        <div className="md:flex mt-8 justify-center">
          <div className="md:w-2/5 text-xl">
            <div className="w-full flex items-center">
              <div className="w-10 my-3">
                <FontAwesomeIcon className="size-10" icon={faWhatsapp} />
              </div>
              <div className="flex flex-col">
                <div className="pl-2 text-md font-semibold">Whats App</div>
                <div className="pl-2 text-sm font-text">09-768094840</div>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-10 my-3">
                <FontAwesomeIcon className="size-9" icon={faEnvelope} />
              </div>
              <div className="flex flex-col">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sithu.sithuthedev@gmail.com&su=Subject&body=Body%20Text"
                  target="_blank"
                >
                  <div className="pl-2 text-md font-semibold">Email</div>
                  <div className="pl-2 text-sm font-text leading-4">
                    sithu.sithuthedev@gmail.com
                  </div>
                </a>
              </div>
            </div>
            <div className="flex py-4 items-center">
              <button
                className="bg-slate-200 px-4 py-2 rounded-lg dark:bg-green "
                onClick={downloadResume}
              >
                Resume
                <FontAwesomeIcon className="pl-2" icon={faArrowUpFromBracket} />
              </button>
            </div>
            <a
              href="https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/"
              className="pl-2 text-sm hover:underline font-semibold"
              target="_blank"
            >
              Linked <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Sithu-Aung-Khant"
              className="pl-2 text-sm font-semibold hover:underline"
              target="_blank"
            >
              Github <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="md:w-2/5">
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
