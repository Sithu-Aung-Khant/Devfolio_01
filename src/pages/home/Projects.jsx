import InsureLandingPage from "../projects/InsureLandingPage";
import ImageSearchApp from "../projects/ImageSearchApp";
import AgeCalculator from "../projects/AgeCalculator";
import ProjectDesignLeft from "@/components/ProjectDesignLeft";
import ProjectDesignRight from "@/components/ProjectDesignRight";

const Projects = () => {
  return (
    <section id="projects">
      <InsureLandingPage />
      {/* Image Search App */}
      <ProjectDesignLeft
        id="image-search-app"
        title="Image Search App"
        description="Dynamic image search web app with real-time access to diverse visuals, seamlessly integrated with Pexels API, prioritizing user-centric design."
        builtWith={[
          "Built With: Bootstrap, Pixels API",
          "Integrated Pixels API",
        ]}
        caseStudyLink="https://github.com/Sithu-Aung-Khant/Image-Search-App-Bootstrap-5"
        liveSiteLink="https://image-search-app-by-sithu-thedev.netlify.app/"
        imagePath="/projects/image-search/894.png"
      />
      <ImageSearchApp />
      <AgeCalculator />
      {/* <div className="flex items-center">
          <div className="h-0.5 bg-black w-full"></div>
          <h1 className="text-4xl md:text-7xl pr"-8">Portfolio</h1>
        </div> */}
    </section>
  );
};

export default Projects;
