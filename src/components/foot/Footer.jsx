import React from "react";
import SocialIcons from "../main/Socials";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container  mx-auto py-3 px-6 lg:px-24 h-full">
        <div className="md:flex justify-between">
          <div className="logo flex items-center justify-center">
            <img
              src="./svgs/terminal.svg"
              alt=""
              className="h-10 w-auto pe-1 pt-1 dark:text-dim_white"
            />
            <div className="block">
              <div className="text-lg mt-1 leading-4 font-semibold">SITHU</div>
              <div className="text-xxs  font-semibold">AUNG KHANT</div>
            </div>
          </div>
          <div className="flex justify-center pt-1 gap-8">
            <SocialIcons />
          </div>
        </div>
        <div className="line h-0.5 bg-gray-300"></div>
        <div className="grid grid-cols-3">
          <div className="font-text font-semibold text-gray-600 py-2.5">
            <p>
              <a href="#aboutMe">About</a>
            </p>
            <p className="pt-1">
              <a href="#tech-skills">Skills </a>
            </p>
            <p className="pt-1">
              <a href="projects">Projects</a>
            </p>
          </div>
          <div className="font-text font-semibold text-gray-600 py-2.5">
            <div className="">Socials</div>
            <p className="pt-1">
              <a
                href="https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
            <p className="pt-1">
              <a href="https://github.com/Sithu-Aung-Khant" target="_blank">
                Github
              </a>
            </p>
          </div>
          <div className="font-text font-semibold text-gray-600 py-2.5">
            {/* Download */}
            <button
              className="flex items-center my-3  font-medium px-4 py-2 rounded bg-slate-200 hover:bg-slate-300 "
              // onClick={downloadResume}
            >
              RESUME
              <img className="size-4 ml-3 " src="./svgs/24.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
