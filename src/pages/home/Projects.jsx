import InsureLandingPage from "../projects/InsureLandingPage";
import ProjectCard from "@/components/ProjectDesign";
import ProjectDesignLeft from "@/components/ProjectDesignLeft";
import ProjectDesignRight from "@/components/ProjectDesignRight";

const Projects = () => {
  return (
    <section id="projects">
      <ProjectCard
        id="social-media-dashboard"
        title="Social Media Dashboard"
        description="Social Media Dashboard with a seamless Dark to Light Mode switch, designed to enhance user interaction and customization."
        builtWith={[
          "Built With: SASS, JavaScript, Gulp",
          "Dynamic Dark and Light Mode",
        ]}
        caseStudyLink="https://github.com/Sithu-Aung-Khant/social-media-dashboard"
        liveSiteLink="https://social-media-dashboard-sithu-thedev.netlify.app/"
        imagePath="/projects/social-media-dashboard/social-media-dashboard.png"
      />
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
      {/* <InsureLandingPage /> */}
      <ProjectDesignRight
        id="insure-landing-page"
        title="Insure: Landing Page"
        description="Fully responsive insurance website, experience seamless display across diverse screen sizes, ensuring optimal display across various screen sizes."
        builtWith={[
          "Built With: React-Bootstrap, JavaScript",
          "Fully Responsive",
        ]}
        caseStudyLink="https://github.com/Sithu-Aung-Khant/insure-landing-page"
        liveSiteLink="https://insure-insurance-company.netlify.app/"
        imagePath="./projects/insure-landing-page/894.png"
      />
      {/* <div className="flex items-center">
          <div className="h-0.5 bg-black w-full"></div>
          <h1 className="text-4xl md:text-7xl pr"-8">Portfolio</h1>
        </div> */}
    </section>
  );
};

export default Projects;
