import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faHTML5,
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
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3 },
  { name: 'JAVASCRIPT', icon: faSquareJs },
  { name: 'REACT', icon: faReact },
  { name: 'BOOTSTRAP', icon: faBootstrap },
  { name: 'TAILWIND CSS', icon: faHtml5 },
  { name: 'SASS', icon: faSass },
];

const tools = [
  { name: 'VS CODE', icon: faHtml5 },
  { name: 'GIT', icon: faGitAlt },
  { name: 'GITHUB', icon: faGithub },
  { name: 'NPM', icon: faNpm },
  { name: 'VITE', icon: faBootstrap },
  { name: 'GULP', icon: faGulp },
];

const pm_skills = ['Project Management', 'Problem Solving'];
const Skills = () => {
  return (
    <section id="skills" className="container  mx-auto h-full md:w-10/12">
      <div className="text-2xl text-center font-semibold py-4">Skills</div>
      <div className="md:flex gap-3">
        <div className="md:w-1/2">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Frontend Development</AccordionTrigger>
              <AccordionContent>
                <div className="skills flex flex-wrap justify-center md:justify-start ">
                  {skills.map((skill, index) => (
                    <div
                      className="px-4 py-2 my-1.5 mr-3 bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white"
                      key={index}
                    >
                      <FontAwesomeIcon className="pr-1" icon={skill.icon} />
                      <span className="">{skill.name}</span>
                    </div>
                  ))}
                </div>
                {/* {skills.map((skill, index) => (
                  <div
                    className="flex justify-between px-4 py-2 m-1.5 rounded  bg-slate-200 dark:bg-green dark:text-dim_white "
                    key={index}
                  >
                    <div className="">{skill.name}</div>
                    <FontAwesomeIcon className="size-4" icon={skill.icon} />
                  </div>
                ))} */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Tools</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap">
                  {tools.map((tool, index) => (
                    <div
                      className="px-4 py-2 my-1.5 mr-3 bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white"
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
        </div>
      </div>
      <div className="md:flex gap-3 mb-20">
        <div className="md:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Others</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap">
                  {pm_skills.map((skill, index) => (
                    <div
                      className="px-4 py-2 my-1.5 mr-3 bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white"
                      key={index}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
