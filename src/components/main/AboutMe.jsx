import React from 'react';

const skills = [
  'HTML',
  'CSS',
  'BOOTSTRAP',
  'TAILWIND CSS',
  'REACT',
  'JAVASCRIPT',
  'SASS',
  'GULP',
  'NPM',
  'DATA STRUCTURE',
  'ALGORITHMS',
  'NETLIFY',
  'VITE',
  'GIT',
  'GITHUB',
];

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="container-2xl mx-auto dark:bg-black dark:text-dim_white pt-20"
    >
      <div className="p-4 lg:px-24 xl:px-40 2xl:px-72 ">
        <div className="About-me flex  items-center flex-col">
          <p className="text-3xl md:text-4xl font-bold">About me</p>
          {/* <p className="w-20 h-1 mt-3 md:mt-7 bg-green rounded-full "></p> */}
        </div>
        <div className="md:flex mt-10 justify-around text-center border dark:border-gray-700 rounded-xl  overflow-hidden">
          <div className="md:shrink-0">
            <img
              className="size-full md:size-80 md:h-full lg:w-96 object-cover"
              src="./profiles/profile.sit.jpg"
              alt=""
            />
          </div>
          <div className="px-3 py-4 md:p-8">
            <h3 className="text-2xl mt-2 mb-3 font-semibold tracking-wide">
              Who am I
            </h3>
            <div className="md:text-start font-text md:p-4">
              Hello there, I'm Sithu, a developer who thrives on transforming
              concepts into captivating web interfaces. My love for coding,
              problem-solving, and creating value fuels my dedication to this
              craft. Driven to create websites that truly add value by solving
              complex problems and building innovative applications.{' '}
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

        {/* <div className="md:flex justify-around text-center mt-5 ">
          <div className="md:w-1/2 px-6">
            <h3 className="text-2xl mt-3 mb-6 font-semibold">
              My Qualification
            </h3>
            <p>My personal journey</p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl mt-3 mb-6 font-semibold">Skills</h3>
            <div className="skills flex flex-wrap justify-center md:justify-start ">
              {skills.map((skill) => (
                <div
                  className="px-4 py-2 m-1.5 bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white "
                  key={skill}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
