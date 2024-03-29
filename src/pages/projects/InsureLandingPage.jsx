import React from "react";

const InsureLandingPage = () => {
  return (
    <section id="project01">
      <div className="container mx-auto px-0 md:pt-4 flex flex-col justify-center">
        <div className="flex items-center py-6">
          <h1 className="text-4xl md:text-7xl pl-4 lg:pl-24 pr-8">Projects</h1>
          <div className="h-0.5 bg-black dark:bg-dim_white w-full"></div>
        </div>
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2 px-2 md:pr-4 md:pl-16">
            <img
              className=""
              src="./projects/insure-landing-page/894.png"
              alt=""
            />
          </div>
          <div className="md:w-1/2 px-6">
            <h1 className="text-3xl md:text-4xl font-medium">
              Insure: Landing Page
            </h1>
            <p className="pt-4">
              Fully responsive insurance company website with React Bootstrap,
              ensuring optimal display across various screen sizes.
            </p>
            <ul className="list-disc pl-4 pt-1 pb-6">
              <li>Built With: React-Bootstrap</li>
              <li>Fully Responsive</li>
            </ul>
            <button className="bg-brown03 text-dim_white border border-brown03  dark:bg-white dark:text-black dark:hover:bg-brown04  px-4 py-2 font-medium">
              <a
                href="https://github.com/Sithu-Aung-Khant/insure-landing-page"
                target="_blank"
              >
                Case Study
              </a>
            </button>
            <button className="px-4 py-2 ml-3 border border-brown03 dark:border-white dark:text-dim_white hover:underline ">
              <a
                href="https://insure-insurance-company.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsureLandingPage;
