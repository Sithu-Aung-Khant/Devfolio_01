import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project02Test from "./Project02Test";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <Project01 />
      <Project02 />
      <Project03 />
      {/* <div className="flex items-center">
          <div className="h-0.5 bg-black w-full"></div>
          <h1 className="text-4xl md:text-7xl pr-8">Portfolio</h1>
        </div> */}
    </section>
  );
};

export default ProjectsSection;
