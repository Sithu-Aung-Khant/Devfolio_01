import React, { useRef } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
const Resume = "https://sithuthedev.netlify.app/pdfs/Sithu-Aung-Khant.pdf";
import { Link } from "react-scroll";

const DownloadResume = () => {
  const aTagRef = useRef(null);

  const downloadResume = () => {
    const aTag = aTagRef.current;
    aTag.href = Resume;
    aTag.setAttribute("download", "Sithu-Aung-Khant.pdf");
    aTag.target = "_blank";
    aTag.click();
  };

  return (
    <div>
      <button
        onClick={downloadResume}
        className="absolute right-2 bottom-2 md:right-4 font-text text-sm hover:underline xl:text-base xl:scale-105"
      >
        Checkout Resume
        <ChevronDoubleRightIcon className="size-4 ml-1 inline-block" />
      </button>
      <a ref={aTagRef} style={{ display: "none" }} />
    </div>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="container-2xl mx-auto p-4 lg:px-24  2xl:px-7">
        <div className="xxs:text-2xl xs:text-3xl sm:text-4xl md:text-6xl pt-8 md:pt-20 lg:pt-12">
          <div className="flex justify-end">
            <div className="w-20 md:w-32 h-0.5 -rotate-45 mb-6 bg-brown03 dark:bg-dim_white"></div>
          </div>
          <h1 className="leading-tight">Hello,</h1>
          <h1 className="">I'm Sithu Aung Khant</h1>
        </div>
        <div className="md:flex mt-5 md:mt-10 justify-around text-center border border-brown03 dark:border-brown rounded-xl  overflow-hidden">
          <div className="md:shrink-0">
            <img
              className="size-full md:size-80 md:h-full lg:w-96 object-cover"
              src="./profiles/profile.about43.jpg"
              alt=""
            />
          </div>
          <div className="px-3 pt-5 pb-10 md:p-8 relative xl:p-10">
            <div className="md:text-start font-text md:p-4 xl:text-lg">
              As a Front End Developer, I specialize in transforming ideas into
              dynamic web experiences that captivate users. Dedicated to staying
              updated on industry trends and proficient in a wide range of tools
              and technologies essential for modern development workflows. My
              love for coding and problem-solving, particularly through the lens
              of technology, fuels my dedictation to this craft. Thriving in
              collaborative environments, I excel at leveraging my skills to
              deliver high-quality solutions that drive business objectives
              forward.
            </div>
            <div className="columns-3 gap-8 mt-5 mb-7 md:w-11/12">
              {/* Projects */}
              <a
                href="https://github.com/Sithu-Aung-Khant?tab=repositories"
                className=""
                target="_blank"
              >
                <div className="text-2xl font-bold mb-1 xl:scale-105">15+</div>
                <div className="text-sm xl:scale-105">Completed</div>
                <div className="text-sm xl:scale-105">Projects</div>
              </a>
              {/* Experience */}
              <a href="https://github.com/Sithu-Aung-Khant" target="_blank">
                <div className="text-2xl font-bold mb-1 xl:scale-105">1+ </div>
                <div className="text-sm xl:scale-105">Year coding</div>
                <div className="text-sm xl:scale-105">Experience</div>
              </a>
              {/* Certificate */}
              <Link
                to="certifications"
                spy="true"
                smooth="smooth"
                duration="500"
                className="cursor-pointer"
              >
                <div className="text-2xl font-bold mb-1 xl:scale-105">2</div>
                <div className="text-sm xl:scale-105">Professional</div>
                <div className="text-sm xl:scale-105">Certificate</div>
              </Link>
              {/* DownloadResume */}
              <DownloadResume />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
