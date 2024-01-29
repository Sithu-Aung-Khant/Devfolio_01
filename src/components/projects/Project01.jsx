import React from "react";

const Project01 = () => {
  return (
    <section id="project01">
      <div className="container mx-auto px-0 md:pt-4 h-dvh bg-gray-50">
        <div className="flex justify-end">
          <div className="w-20 h-3 md:w-40 md:h-5 bg-brown03 dark:bg-dim_white mr-12"></div>
        </div>
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2">
            <img className="" src="/insure-landing-page54.png" alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-medium">Insure: Landing Page</h1>
            <p className="pt-4">
              Fully responsive insurance company website with React-Bootstrap,
              ensuring optimal display across various screen sizes.
            </p>
            <ul className="list-disc pl-4 pt-1 pb-6">
              <li>Built With: React-Bootstrap</li>
              <li>Fully Responsive</li>
            </ul>
            {/* <button className="pl-1 pr-4 py-2 dark:text-dim_white hover:underline hover:font-semibold">
              <a href="#">Case Study</a>
            </button> */}
            <button className="bg-brown text-dim_white px-4 py-2 font-medium">
              <a href="#">Case Study</a>
            </button>
            <button className="px-4 py-2 ml-3 dark:text-dim_white hover:underline hover:font-semibold">
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

export default Project01;
