import InsureLandingPage from "./ui/portfolio_projects/InsureLandingPage";
import ImageSearchApp from "./ui/portfolio_projects/ImageSearchApp";
import AgeCalculator from "./ui/portfolio_projects/AgeCalculator";

const Projects = () => {
  return (
    <section id="projects">
      <InsureLandingPage />
      <ImageSearchApp />
      <AgeCalculator />
      {/* <div className="flex items-center">
          <div className="h-0.5 bg-black w-full"></div>
          <h1 className="text-4xl md:text-7xl pr-8">Portfolio</h1>
        </div> */}
    </section>
  );
};

export default Projects;
