const skills = [
  { name: "HTML", svg: "./svgs/HTML5.svg" },
  { name: "CSS", svg: "./svgs/CSS.svg" },
  { name: "JAVASCRIPT", svg: "./svgs/JS.svg" },
  { name: "REACT", svg: "./svgs/REACT.svg" },
  { name: "BOOTSTRAP", svg: "./svgs/BOOTSTRAP.svg" },
  { name: "SASS", svg: "./svgs/SASS.svg" },
  { name: "TAILWIND CSS", svg: "./svgs/TAILWIND.svg" },
  { name: "VS CODE", svg: "./svgs/VS CODE.svg" },
  { name: "NPM", svg: "./svgs/NPM.svg" },
  { name: "VITE", svg: "./svgs/VITE.svg" },
  { name: "GULP", svg: "./svgs/GULP.svg" },
  { name: "GIT", svg: "./svgs/GIT.svg" },
  { name: "GITHUB", svg: "./svgs/GITHUB.svg" },
];

const TechSkills = () => {
  return (
    <section id="tech-skills">
      <div className="container mx-auto h-full my-4 pb-4 md:w-10/12">
        <div className="text-2xl text-center font-semibold pb-5">
          Tech Stack
        </div>
        <div className="skills flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              className="flex items-center px-4 py-2 m-1.5 text-sm bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white"
              key={index}
            >
              <img className="size-5 mr-1" src={skill.svg} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
