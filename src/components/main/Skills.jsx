import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faSquareJs,
  faReact,
  faSass,
  faBootstrap,
  faCss3,
  faHtml5,
  faGitAlt,
  faGithub,
  faNpm,
  faGulp,
} from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faCode } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3 },
  { name: "JAVASCRIPT", icon: faSquareJs },
  { name: "REACT", icon: faReact },
  { name: "BOOTSTRAP", icon: faBootstrap },
  { name: "TAILWIND CSS", icon: faFileCode },
  { name: "SASS", icon: faSass },
];

const tools = [
  { name: "GIT", icon: faGitAlt },
  { name: "GITHUB", icon: faGithub },
  { name: "NPM", icon: faNpm },
  { name: "VITE", icon: faBootstrap },
  { name: "GULP", icon: faGulp },
  { name: "VS CODE", icon: faCode },
];

const others = [
  { name: "PROBLEM SOLVING", icon: faGitAlt },
  { name: "PROJECT MANAGEMENT", icon: faGithub },
  { name: "ENGLISH", icon: faNpm },
  { name: "PCM", icon: faBootstrap },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto h-full mb-10 md:px-24">
      {/* <div className="text-2xl text-center font-semibold py-4">Tech Stack</div> */}
      <div className="">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Languages & Frameworks</AccordionTrigger>
            <AccordionContent>
              <div className="skills flex flex-wrap justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <div
                    className="px-4 py-2 my-1.5 mr-3 dark:mr-2 bg-white border border-brown03  dark:bg-black dark:border-white rounded-lg dark:text-dim_white"
                    key={index}
                  >
                    <FontAwesomeIcon className="pr-1" icon={skill.icon} />
                    <span className="">{skill.name}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Development Toolkit</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap">
              {tools.map((tool, index) => (
                <div
                  className="px-4 py-2 my-1.5 mr-3 bg-white border border-brown03  dark:bg-black dark:border-white rounded-lg dark:text-dim_white"
                  key={index}
                >
                  <FontAwesomeIcon className="pr-1" icon={tool.icon} />
                  <span className="">{tool.name}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Others</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap">
              {others.map((skill, index) => (
                <div
                  className="px-4 py-2 my-1.5 mr-3 bg-white border border-brown03  dark:bg-black dark:border-white rounded-lg dark:text-dim_white"
                  key={index}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Skills;
