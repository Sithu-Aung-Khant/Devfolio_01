import React from "react";

const ProjectDesignRight = ({
  id,
  title,
  description,
  builtWith,
  caseStudyLink,
  liveSiteLink,
  imagePath,
}) => {
  return (
    <section id={`project${id}`}>
      <div className="flex justify-start pt-12 md:pt-0 md:-mb-10">
        <div className="w-20 h-3 md:w-40 md:h-5 bg-brown03 dark:bg-dim_white md:ml-10"></div>
      </div>
      <div className="container mx-auto px-0 md:pt-4 md:h-dvh flex flex-col justify-center">
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2 px-2 md:pr-4 md:pl-16">
            <img className="" src={imagePath} alt="" />
          </div>
          <div className="md:w-1/2 px-6">
            <h1 className="text-4xl font-medium">{title}</h1>
            <p className="pt-4">{description}</p>
            <ul className="list-disc pl-4 pt-1 pb-6">
              {builtWith.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="bg-brown03 text-dim_white border border-brown03  dark:bg-white dark:text-black dark:hover:bg-brown04  px-4 py-2 font-medium">
              <a href={caseStudyLink} target="_blank" rel="noopener noreferrer">
                Case Study
              </a>
            </button>
            <button className="px-4 py-2 ml-3 border border-brown03 dark:border-white dark:text-dim_white hover:underline">
              <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDesignRight;
