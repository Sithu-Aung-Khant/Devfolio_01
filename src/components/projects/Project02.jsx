import React from "react";

const Project02 = () => {
  return (
    <section id="project02">
      <div className="px-0 md:pt-4 h-dvh flex flex-col justify-center md:pl-40">
        <div className="flex items-center pb-8">
          <h1 className="w-1/3 text-4xl font-medium px-30">Image Search App</h1>
          <div className="w-2/3 h-0.5 bg-black dark:bg-dim_white "></div>
        </div>
        <div className="md:flex items-center max-w-screen-lg pr-36">
          <div className="md:w-1/2 pr-4">
            <p className="">
              Fully responsive insurance company website with React Bootstrap,
              ensuring optimal display across various screen sizes.
            </p>
            <ul className="list-disc pl-4 pt-1 pb-6">
              <li>Built With: React-Bootstrap</li>
              <li>Fully Responsive</li>
            </ul>
            <button className="bg-brown text-dim_white hover:bg-brown02 px-4 py-2 font-medium">
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
          <div className="md:w-1/2">
            <img className="" src="/image-search-app02.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project02;
