import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <section id="contact_me">
      <div className="container mx-auto h-96">
        <div className="text-3xl font-semibold text-center">Contact Me</div>
        <div className="md:flex">
          <div className="md:w-1/2"></div>
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
