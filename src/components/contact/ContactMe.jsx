import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
const Resume = "http://localhost:5173/sithuthedev.pdf";
import SocialIcons from "../main/Socials";

const emailServiceConfig = {
  serviceId: "service_nejaw98",
  templateId: "template_9j8w10t",
  userId: "W6q8zyo65G01qqIUG",
};

const ContactMe = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const sendEmail = async (formData) => {
    try {
      const result = await emailjs.sendForm(
        emailServiceConfig.serviceId,
        emailServiceConfig.templateId,
        form.current,
        emailServiceConfig.userId,
      );

      console.log(result.text);
      console.log("Email sent");
      // Reset the form
      form.current.reset();

      // Set the emailSent state to true to display a success message
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      // Display a user-friendly error message to the user
    }
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
      <div className="container mx-auto px-6 mt-8 pb-16 max-w-4xl">
        <div className="text-3xl font-semibold text-center">Contact Me</div>
        <div className="w-10 h-1 mt-3 md:mt-7 mx-auto bg-green rounded-full "></div>
        <div className="md:flex mt-8 justify-center">
          <div className="md:w-2/5 ">
            {/* WHATS APP */}
            <div className="w-full flex items-center">
              <div className="w-10 my-3">
                <FontAwesomeIcon className="size-10" icon={faWhatsapp} />
              </div>
              <div className="flex flex-col">
                <div className="pl-2 text-xl font-semibold">Whats App</div>
                <div className="pl-2 text-sm font-text">09-768094840</div>
              </div>
            </div>
            {/* EMAIL */}
            <div className="w-full flex items-center mb-3">
              <div className="w-10 my-3">
                <FontAwesomeIcon className="size-9" icon={faEnvelope} />
              </div>
              <div className="flex flex-col">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sithu.sithuthedev@gmail.com&su=Subject&body=Body%20Text"
                  target="_blank"
                >
                  <div className="pl-2 text-xl font-semibold">Email</div>
                  <div className="pl-2 text-sm font-text leading-4">
                    sithu.sithuthedev@gmail.com
                  </div>
                </a>
              </div>
            </div>
            {/* <a
              href="https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/"
              className="ml-12 hover:underline font-semibold"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sithu-Aung-Khant"
              className="pl-4 font-semibold hover:underline"
              target="_blank"
            >
              Github
            </a> */}

            <button
              className="flex items-center my-4 bg-green font-medium text-dim_white px-4 py-2 rounded-lg dark:bg-green "
              onClick={downloadResume}
            >
              <div className="">RESUME</div>
              <img
                className="size-4 text-dim_white ml-3 animate-bounce"
                src="./svgs/003.svg"
                alt=""
              />
            </button>
          </div>

          {/* FORM FIELD */}
          <div className="md:w-2/5">
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              {/* NAME */}
              <label htmlFor="user_name" className="hidden">
                Name
              </label>
              <input
                {...register("user_name", { required: true })}
                type="text"
                id="user_name"
                placeholder="Name"
                name="user_name"
                className="block w-full border p-2 rounded-lg my-2 dark:bg-black dark:border-dim_white"
              />
              {/* EMAIL */}
              <label htmlFor="user_email" className="hidden">
                Email
              </label>
              <input
                {...register("user_email", { required: true })}
                type="email"
                id="user_email"
                placeholder="Email"
                name="user_email"
                className="block w-full border p-2 rounded-lg my-2 dark:bg-black dark:border-dim_white"
              />
              <label htmlFor="message" className="hidden">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Your Message"
                name="message"
                className="bg-slate-200 p-4 border rounded-lg w-full block h-full  dark:bg-black dark:border-dim_white"
              />

              <input
                type="submit"
                value="Send"
                className="bg-slate-200 hover:bg-slate-300 w-full mt-4 px-4 py-2 rounded-lg dark:bg-green dark:hover:bg-green"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
