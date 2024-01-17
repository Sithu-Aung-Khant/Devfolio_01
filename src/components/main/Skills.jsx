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
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'JAVASCRIPT', icon: faSquareJs },
  { name: 'REACT', icon: faReact },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3 },
  { name: 'SASS', icon: faSass },
  { name: 'BOOTSTRAP', icon: faBootstrap },
  { name: 'TAILWIND CSS', icon: faHtml5 },
];

const Skills = () => {
  return (
    <section id="skills" className="container  mx-auto h-full md:w-3/4">
      <div className="text-2xl text-center font-semibold py-4">My Skills</div>
      <div className="md:flex gap-3">
        <div className="md:w-1/2">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Frontend Development</AccordionTrigger>
              <AccordionContent>
                {skills.map((skill, index) => (
                  <div
                    className="flex justify-between px-4 py-2 m-1.5 bg-slate-200 dark:bg-green rounded dark:text-dim_white "
                    key={index}
                  >
                    <FontAwesomeIcon className="size-4" icon={skill.icon} />
                    <div className="">{skill.name}</div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Project Management</AccordionTrigger>
              <AccordionContent>
                <div className="">Effective Communication</div>
                <div className="">Organization Skills</div>
                <div className="">Critical Thinking</div>
                <div className="">SWOT Analysis</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="md:flex gap-3 mb-20">
        <div className="md:w-1/2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Tools & Technologies</AccordionTrigger>
              <AccordionContent>
                {/* <div className="">VS Code</div>
                <div className="">VITE</div>
                <div className="">GIT</div>
                <div className="">GITHUB</div> */}
                {skills.map((skill) => (
                  <div
                    className="px-4 py-2 m-1.5 bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white "
                    key={skill}
                  >
                    {skill.name}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
