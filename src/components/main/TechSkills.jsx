import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faCode } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3 },
  { name: 'JAVASCRIPT', icon: faSquareJs },
  { name: 'REACT', icon: faReact },
  { name: 'BOOTSTRAP', icon: faBootstrap },
  { name: 'SASS', icon: faSass },
  { name: 'TAILWIND CSS', icon: faCode },
  { name: 'VS CODE', icon: faFileCode },
  { name: 'NPM', icon: faNpm },
  { name: 'VITE', icon: faBootstrap },
  { name: 'GULP', icon: faGulp },
  { name: 'GIT', icon: faGitAlt },
  { name: 'GITHUB', icon: faGithub },
];

const TechSkills = () => {
  return (
    <section
      id="tech-skills"
      className="container mx-auto h-full my-4 md:w-10/12"
    >
      <div className="text-2xl text-center font-semibold py-4">
        Technical Skills
      </div>
      <div className="skills flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div
            className="px-4 py-2 m-1.5 text-sm bg-slate-200 dark:bg-green rounded-lg dark:text-dim_white"
            key={index}
          >
            <FontAwesomeIcon size="sm" className="pr-1" icon={skill.icon} />
            <span className="">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
