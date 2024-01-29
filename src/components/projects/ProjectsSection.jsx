import Project01 from "./Project01";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="flex items-center py-6">
        <h1 className="text-4xl md:text-7xl px-8 font-medium">Projects</h1>
        <div className="h-0.5 bg-black dark:bg-dim_white w-full"></div>
      </div>
      <Project01 />

      {/* <div className="flex items-center">
          <div className="h-0.5 bg-black w-full"></div>
          <h1 className="text-4xl md:text-7xl pr-8">Portfolio</h1>
        </div> */}
    </section>
  );
};

export default ProjectsSection;
