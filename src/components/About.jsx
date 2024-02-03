import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
const Resume = "http://localhost:5173/sithuthedev.pdf";

const downloadResume = () => {
  const aTag = document.createElement("a");
  aTag.href = Resume;
  aTag.setAttribute("download", "sithuthedev.pdf");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const About = () => {
  return (
    <section id="about">
      <div className="container-2xl mx-auto p-4 lg:px-24 xl:px-40 2xl:px-72">
        <div className="text-4xl md:text-7xl pt-8 md:pt-20 lg:pt-12">
          <div className="flex justify-end">
            <div className="w-20 md:w-32 h-0.5 -rotate-45 mb-6 bg-brown03 dark:bg-dim_white"></div>
          </div>
          <h1 className="leading-tight">Hello,</h1>
          <h1 className="">I'm Sithu Aung Khant</h1>
        </div>
        <div className="md:flex mt-5 md:mt-10 justify-around text-center border border-brown03 dark:border-gray-700 rounded-xl  overflow-hidden">
          <div className="md:shrink-0">
            <img
              className="size-full md:size-80 md:h-full lg:w-96 object-cover"
              src="./profiles/profile.about.jpg"
              alt=""
            />
          </div>
          <div className="px-3 pt-5 pb-10 md:p-8 relative">
            <div className="md:text-start font-text md:p-4">
              Front End Developer who thrives on transforming concepts into
              captivating web interfaces. My love for coding, problem-solving,
              and building software fuels my dedication to this craft. Driven to
              create websites that truly add value by solving complex problems
              and building innovative applications.{" "}
            </div>
            <div className="columns-3 gap-8 mt-5 mb-7 md:w-11/12">
              {/* Projects */}
              <a
                href="https://www.linkedin.com/in/sithu-aung-khant/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADIwPZQBztFQJT2opohmyQMO1xEW6ONlezY"
                className=""
                target="_blank"
              >
                <div className="text-2xl font-bold mb-1 hover:scale-105">
                  15+
                </div>
                <div className="text-sm">Completed</div>
                <div className="text-sm">Projects</div>
              </a>
              {/* Experience */}
              <a
                href="https://github.com/Sithu-Aung-Khant?tab=repositories"
                target="_blank"
              >
                <div className="text-2xl font-bold mb-1 hover:scale-105">
                  1+{" "}
                </div>
                <div className="text-sm">Year coding</div>
                <div className="text-sm">Experience</div>
              </a>
              {/* Certificate */}
              <a
                href="https://www.linkedin.com/in/sithu-aung-khant/details/certifications/"
                className=""
                target="_blank"
              >
                <div className="text-2xl font-bold mb-1 hover:scale-105">2</div>
                <div className="text-sm">Professional</div>
                <div className="text-sm">Certificate</div>
              </a>
              <button
                onClick={downloadResume}
                className="absolute right-2 bottom-2 md:right-4 font-text text-sm hover:underline "
              >
                Check out Resume
                <ChevronDoubleRightIcon className="size-4 ml-1 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
