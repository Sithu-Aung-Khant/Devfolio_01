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
              An insurance landing page developed with React-Bootstrap.
            </p>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="">Case Study</a>
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
            <p className="py-3">
              An insurance landing page developed with React-Bootstrap.
            </p>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="">Case Study</a>
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
              An insurance landing page developed with React-Bootstrap.
            </p>
            <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white">
              <a href="">Case Study</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
