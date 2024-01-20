const Project = ({
  image,
  title,
  description,
  caseStudyLink,
  liveSiteLink,
  firstOrder,
  secondOrder,
}) => {
  return (
    <div className="md:flex items-center md:h-80">
      <div className={`md:w-1/2 md:order-${firstOrder}`}>
        <img src={image} alt="" />
      </div>
      <div className={`md:w-1/2 px-6 md:order-${secondOrder}`}>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="py-3">{description}</p>
        <button className="bg-slate-200 rounded-lg px-4 py-2 dark:text-dim_white hover:bg-slate-300 dark:bg-green dark:hover:bg-green">
          <a href={caseStudyLink}>Case Study</a>
        </button>
        <button className="px-4 py-2 ml-3 dark:text-dim_white hover:underline hover:font-semibold">
          <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="Projects">
      <div className="container mx-auto lg:w-3/4 p-0">
        <div className="flex items-center flex-col">
          <div className="text-3xl font-bold">Projects</div>
          <div className="w-10 h-1 mt-3 md:mt-7 bg-green rounded-full "></div>
        </div>

        {/* PROJECT 1 */}
        <Project
          image="./insure-landing-page54.png"
          title="Insurance Landing Page"
          description="Fully responsive insurance company website with React-Bootstrap, ensuring optimal display across various screen sizes."
          caseStudyLink="#"
          liveSiteLink="https://insure-insurance-company.netlify.app/"
        />

        {/* PROJECT 2 */}
        <Project
          image="./age-calculator54.png"
          title="Age Calculator"
          description="A lightweight web app with an intuitive interface for calculating and displaying age based on entered birthdate, featuring input validation for accuracy."
          caseStudyLink="#"
          liveSiteLink="https://age-calculator-web-app-sithu-thedev.netlify.app/"
          firstOrder={2}
          secondOrder={1}
        />

        {/* PROJECT 3 */}
        <Project
          image="./image-search-app54.png"
          title="Image Search App"
          description="Responsive image search web app with Bootstrap, Pexels API integration, and dynamic JavaScript for real-time access to high-quality visuals."
          caseStudyLink="#"
          liveSiteLink="https://image-search-app-by-sithu-thedev.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
