import React from "react";

const ProjectDesignLeft = ({
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
      <div className="flex justify-end pt-10 md:pt-0 md:-mb-10">
        <div className="w-20 h-3 md:w-40 md:h-5 bg-brown03 dark:bg-dim_white md:mr-10"></div>
      </div>
      <div className="container mx-auto px-0 md:pt-4 md:h-dvh flex flex-col justify-center">
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2 md:order-2 px-2 md:pr-20">
            <img className="" src={imagePath} alt="" />
          </div>
          <div className="md:w-1/2 px-6 md:pl-12 lg:pl-20 md:pr-0 md:order-1 ">
            <h1 className="text-4xl md:text-4xl font-medium">{title}</h1>
            <div className="w-14 h-1 bg-brown03 dark:bg-white my-4"></div>
            <p className="tracking-wide">{description}</p>
            <ul className="list-disc pl-4 py-2">
              {builtWith.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="bg-brown03 text-dim_white border border-brown03 dark:bg-white dark:text-black dark:hover:bg-brown04  px-4 py-2 mt-4 font-medium">
              <a href={caseStudyLink} target="_blank" rel="noopener noreferrer">
                Case Study
              </a>
            </button>
            <button className="px-4 py-2 ml-3 border border-brown03 dark:border-white dark:text-dim_white hover:bg-brown04">
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

export default ProjectDesignLeft;
