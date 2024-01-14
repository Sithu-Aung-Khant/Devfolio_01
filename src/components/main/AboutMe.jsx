import React from 'react';

const skills = [
  'HTML',
  'CSS',
  'BOOTSTRAP',
  'TAILWIND CSS',
  'REACT',
  'JAVASCRIPT',
  'NPM',
  'SASS',
  'GULP',
  'DATA STRUCTURE',
  'ALGORITHMS',
  'GIT',
  'GITHUB',
];

const AboutMe = () => {
  return (
    <section className="container-2xl mx-auto ">
      <div className="p-4 lg:px-36 2xl:px-72 dark:bg-black dark:text-dim_white">
        <div className="About-me flex  items-center flex-col">
          <p className="text-3xl md:text-4xl font-bold">About me</p>
          <p className="w-20 h-1 mt-3 md:mt-7 bg-green rounded-full "></p>
        </div>
        <div className="md:flex justify-around text-center items-center mt-5 ">
          <div className="md:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt
              dolores sapiente quasi eum alias repellat hic eaque, voluptatum
              soluta distinctio sit.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-2xl mt-3 mb-6 font-semibold">My Skills</p>
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
            <div className="columns-3 gap-8 mt-6">
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

export default AboutMe;
