import React from "react";

const ImageSearchApp = () => {
  return (
    <section id="project02">
      <div className="flex justify-end pt-10 md:pt-0 md:-mb-10">
        <div className="w-20 h-3 md:w-40 md:h-5 bg-brown03 dark:bg-dim_white md:mr-10"></div>
      </div>
      <div className="container mx-auto px-0 md:pt-4 md:h-dvh flex flex-col justify-center">
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2 md:order-2 px-2 md:pr-20">
            <img className="" src="/projects/image-search/894.png" alt="" />
          </div>
          <div className="md:w-1/2 px-6 md:pl-12 lg:pl-20 md:pr-0 md:order-1">
            <h1 className="text-3xl md:text-4xl font-medium">
              Image Search App
            </h1>
            <p className="pt-4">
              Fully responsive insurance company website with React Bootstrap,
              ensuring optimal display across various screen sizes.
            </p>
            <ul className="list-disc pl-4 pt-1 pb-6">
              <li>Built With: React-Bootstrap</li>
              <li>Fully Responsive</li>
            </ul>
            <button className="border border-brown03 dark:border-dim_white bg-brown03 dark:bg-black dark:hover:bg-brown03 text-dim_white px-4 py-2 font-medium">
              <a
                href="https://github.com/Sithu-Aung-Khant/Image-Search-App-Bootstrap-5"
                target="_blank"
              >
                Case Study
              </a>
            </button>
            <button className="px-4 py-2 ml-3 dark:text-dim_white hover:underline hover:font-semibold">
              <a
                href="https://image-search-app-by-sithu-thedev.netlify.app/"
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

export default ImageSearchApp;
