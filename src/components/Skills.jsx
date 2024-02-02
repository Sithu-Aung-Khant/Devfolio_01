import React from "react";
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
import { Item } from "@radix-ui/react-accordion";

const skills = [
  { name: "HTML", icon: faHtml5, svg: false },
  { name: "CSS", icon: faCss3, svg: false },
  { name: "SASS", icon: faSass, svg: false },
  { name: "JAVASCRIPT", icon: faSquareJs, svg: false },
  {
    name: "TAILWIND CSS",
    dark: "./icons/tailwind.dark.svg",
    light: "./icons/tailwind.light.svg",
    svg: true,
  },
  { name: "BOOTSTRAP", icon: faBootstrap, svg: false },
  { name: "REACT", icon: faReact, svg: false },
];

const tools = [
  { name: "GIT", icon: faGitAlt, svg: false },
  { name: "GITHUB", icon: faGithub, svg: false },
  { name: "NPM", icon: faNpm, svg: false },
  {
    name: "VITE",
    icon: faBootstrap,
    svg: true,
    dark: "./icons/vite.dark.svg",
    light: "./icons/vite.light.svg",
  },
  { name: "GULP", icon: faGulp, svg: false },
  {
    name: "VS CODE",
    icon: faCode,
    svg: true,
    dark: "./icons/vscode.dark.svg",
    light: "./icons/vscode.light.svg",
  },
];

const others = [
  { name: "DATA STRUCTURE", icon: faGitAlt },
  { name: "ALGORITHMS", icon: faGithub },
  { name: "OBJECT ORIENTED PROGRAMMING", icon: faNpm },
  { name: "FUNCTIONAL PROGRAMMING", icon: faNpm },
  { name: "RESPONSIVE DESIGN", icon: faBootstrap },
  { name: "PROJECT MANAGEMENT", icon: faBootstrap },
];

const Skills = ({ isDark }) => {
  return (
    <section id="skill-section">
      <div className="container mx-auto px-0 md:pt-4 md:h-dvh  flex flex-col justify-center">
        <div className="flex items-center py-6">
          <h1 className="text-4xl md:text-7xl pl-4 lg:pl-24 pr-8">Skills</h1>
          <div className="h-0.5 bg-black dark:bg-dim_white w-full"></div>
        </div>
        <div className="mb-10 md:px-24">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4">
                Languages & Frameworks
              </AccordionTrigger>
              <AccordionContent>
                <div className="skills flex flex-wrap justify-center md:justify-start">
                  {skills.map((skill, index) => (
                    <div
                      className="flex items-center px-4 py-1.5 my-1.5 mr-3 bg-white border border-brown03  dark:bg-black dark:border-white rounded-lg dark:text-dim_white"
                      key={index}
                    >
                      {skill.svg ? (
                        <img
                          className="inline-block -ml-1 pr-1 text-dark"
                          src={isDark ? skill.dark : skill.light}
                        />
                      ) : (
                        <FontAwesomeIcon className="pr-1" icon={skill.icon} />
                      )}
                      <span className="">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="item-2">
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4">
                Development Toolkit
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap justify-center md:justify-start">
                  {tools.map((tool, index) => (
                    <div
                      className="flex items-center pl-3 pr-4 py-1.5 my-1.5 mr-3 bg-white border border-brown03  dark:bg-black dark:border-white rounded-lg dark:text-dim_white"
                      key={index}
                    >
                      {tool.svg ? (
                        <img
                          className="size-5 inline-block pr-1 text-dark"
                          src={isDark ? tool.dark : tool.light}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="size-4 pr-1"
                          icon={tool.icon}
                        />
                      )}
                      <span className="">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4">Others</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap justify-center md:justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
