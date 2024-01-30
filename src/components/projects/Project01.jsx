import React from "react";

const Project01 = () => {
  return (
    <section id="project01">
      <div className="container mx-auto px-0 md:pt-4 md:h-dvh flex flex-col justify-center">
        <div className="flex items-center py-6">
          <h1 className="text-4xl md:text-7xl px-8 font-medium">Projects</h1>
          <div className="h-0.5 bg-black dark:bg-dim_white w-full"></div>
        </div>
        <div className="md:flex items-center mx-auto max-w-screen-lg">
          <div className="md:w-1/2 px-2 md:pr-4 md:pl-16">
            <img className="" src="/insure-landing-page894.png" alt="" />
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
        </div>
      </div>
    </section>
  );
};

export default Project01;

// const Project01 = () => {
//   return (
//     <section id="project01">
//       <div className="container mx-auto px-0 md:pt-4 h-dvh flex flex-col justify-center">
//         <div className="flex items-center py-6">
//           <h1 className="text-4xl md:text-7xl px-8 font-medium">Projects</h1>
//           <div className="h-0.5 bg-black dark:bg-dim_white w-full"></div>
//         </div>
//         <div className="md:flex items-center mx-auto max-w-screen-lg">
//           <div className="md:w-1/2">
//             <img className="" src="/insure-landing-page54.png" alt="" />
//           </div>
//           <div className="md:w-1/2 pr-4">
//             <h1 className="text-4xl font-medium">Insure: Landing Page</h1>
//             <p className="pt-4">
//               Fully responsive insurance company website with React Bootstrap,
//               ensuring optimal display across various screen sizes.
//             </p>
//             <ul className="list-disc pl-4 pt-1 pb-6">
//               <li>Built With: React-Bootstrap</li>
//               <li>Fully Responsive</li>
//             </ul>
//             <button className="bg-brown text-dim_white hover:bg-brown02 px-4 py-2 font-medium">
//               <a href="#">Case Study</a>
//             </button>
//             <button className="px-4 py-2 ml-3 dark:text-dim_white hover:underline hover:font-semibold">
//               <a
//                 href="https://insure-insurance-company.netlify.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Live Site
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project01;
