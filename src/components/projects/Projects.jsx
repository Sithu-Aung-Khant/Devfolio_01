import React from "react";

const Projects = () => {
  return (
    <section id="Projects">
      <div className="container mx-auto lg:w-3/4 p-0">
        <div className="flex items-center flex-col">
          <div className="text-3xl font-bold">Projects</div>
          <div className="w-10 h-1 mt-3 md:mt-7 bg-green rounded-full "></div>
        </div>
        {/* PROJECT 1 */}
        <div className="md:flex items-center md:h-80">
          <div className="md:w-1/2">
            <img src="./insure-landing-page54.png" alt="" />
          </div>
          <div className="md:w-1/2 px-6">
            <h3 className="text-2xl font-semibold">Insurance Landing Page</h3>
            <p className="py-3">
              Fully responsive insurance company website with React-Bootstrap,
              ensuring optimal display across various screen sizes.
            </p>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white hover:bg-green hover:text-dim_white">
              <a href="">Case Study</a>
            </button>
            <button className=" rounded-lg px-4 py-2 ml-3 dark:text-dim_white hover:bg-green hover:text-dim_white">
              <a
                href="https://insure-insurance-company.netlify.app/"
                target="_blank"
              >
                Live Site
              </a>
            </button>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="md:flex items-center md:h-80">
          <div className="md:w-1/2 order-2">
            <img src="./age-calculator54.png" alt="" />
          </div>
          <div className="md:w-1/2 order-1 pl-10">
            <h3 className="text-2xl font-semibold">Age Calculator</h3>
            <p className="py-3 ">
              A lightweight web app with an intuitive interface for calculating
              and displaying age based on entered birthdate, featuring input
              validation for accuracy.
            </p>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="">Case Study</a>
            </button>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="https://age-calculator-web-app-sithu-thedev.netlify.app/">
                Live Site
              </a>
            </button>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="md:flex items-center md:h-80">
          <div className="md:w-1/2">
            <img src="./image-search-app54.png" alt="" />
          </div>
          <div className="md:w-1/2 px-6">
            <h3 className="text-2xl font-semibold">Image Search App</h3>
            <p className="py-3">
              Responsive image search web app with Bootstrap, Pexels API
              integration, and dynamic JavaScript for real-time access to
              high-quality visuals.
            </p>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="">Case Study</a>
            </button>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="https://image-search-app-by-sithu-thedev.netlify.app/">
                Live Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
