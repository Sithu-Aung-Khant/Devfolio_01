import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container-2xl mx-auto p-4 lg:px-24 xl:px-40 2xl:px-72">
        <div className="text-2xl md:text-7xl pt-10 md:pt-20">
          <div className="flex justify-end">
            <div className="w-16 md:w-32 h-0.5 -rotate-45 mb-6 bg-brown03 dark:bg-dim_white"></div>
          </div>
          <h1 className="leading-tight">Hello,</h1>
          <h1 className="">I'm Sithu Aung Khant</h1>
        </div>
        <div className="md:flex mt-5 md:mt-10 justify-around text-center border border-brown03 dark:border-gray-700 rounded-xl  overflow-hidden">
          <div className="md:shrink-0">
            <img
              className="size-full md:size-80 md:h-full lg:w-96 object-cover"
              src="./profiles/profile.sit.jpg"
              alt=""
            />
          </div>
          <div className="px-3 py-4 md:p-8">
            <div className="md:text-start font-text md:p-4">
              Developer who thrives on transforming concepts into captivating
              web interfaces. My love for coding, problem-solving, and creating
              value fuels my dedication to this craft. Driven to create websites
              that truly add value by solving complex problems and building
              innovative applications.{" "}
            </div>
            <div className="columns-3 gap-8 mt-5 md:w-11/12">
              <div className="">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm">Completed</div>
                <div className="text-sm">Projects</div>
              </div>
              <div className="">
                <div className="text-2xl font-bold mb-1">1+ </div>
                <div className="text-sm">Year coding</div>
                <div className="text-sm">Experience</div>
              </div>
              <div className="">
                <div className="text-2xl font-bold mb-1">2</div>
                <div className="text-sm">Professional</div>
                <div className="text-sm">Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;