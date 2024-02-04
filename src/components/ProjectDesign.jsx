import React from "react";

const ProjectCard = ({
  id,
  title,
  description,
  builtWith,
  caseStudyLink,
  liveSiteLink,
  imagePath,
}) => {
  return (
    <section id={id}>
      <div className="container mx-auto px-0 md:pt-4 flex flex-col justify-center">
        <div className="flex items-center py-6">
          <h1 className="text-4xl md:text-7xl pl-4 lg:pl-24 pr-8">Projects</h1>
          <div className="h-0.5 bg-black dark:bg-dim_white w-full"></div>
        </div>
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2 px-2 md:pr-4 md:pl-16">
            <img className="" src={imagePath} alt="" />
          </div>
          <div className="md:w-1/2 px-6">
            <h1 className="text-3xl md:text-4xl font-medium">{title}</h1>
            <div className="w-14 h-1 bg-brown03 dark:bg-white my-4"></div>
            <p>{description}</p>
            <ul className="list-disc pl-4 py-2">
              {builtWith.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="bg-brown03 text-dim_white border border-brown03  dark:bg-white dark:text-black dark:hover:bg-brown04  px-4 py-2 mt-4 font-medium">
              <a href={caseStudyLink} target="_blank" rel="noopener noreferrer">
                Case Study
              </a>
            </button>
            <button className="px-4 py-2 ml-3 border border-brown03 dark:border-white dark:text-dim_white hover:underline ">
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

export default ProjectCard;
