import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ isDark }) => {
  return (
    <section id="work_together">
      <div className="container mx-auto h-dvh pr-0 pl-3 pt-16 lg:pl-16">
        <div className="flex justify-end items-center">
          <div className="w-20 h-3 md:w-40 md:h-5 bg-black dark:bg-dim_white"></div>
          <div className="w-16 md:w-40 h-0.5 bg-black dark:bg-dim_white"></div>
        </div>
        <div className="text-4xl md:text-7xl lg:text-8xl leading-snug">
          <h1>LET'S</h1>
          <h1>WORK</h1>
          <h1>TOGETHER</h1>
        </div>
        <div className="md:flex items-start gap-6 lg:gap-20 pt-10 md:pl-3">
          {/* PHONE */}
          <div className="phone py-2 text-sm md:text-base">
            {isDark ? (
              <img src="./phone&email/7.svg" alt="" className="size-6 inline" />
            ) : (
              <img src="./phone&email/6.svg" alt="" className="size-6 inline" />
            )}
            <a
              href="https://wa.me/959768094840?text=Hello,+I+am+Front+End+Developer.+Let's+work+together."
              target="_blank"
              className="pl-2 hover:underline"
            >
              +959-768094840
            </a>
          </div>
          {/* EMAIL */}
          <div className="email py-2 text-sm md:text-base">
            {isDark ? (
              <img src="./phone&email/9.svg" alt="" className="size-6 inline" />
            ) : (
              <img src="./phone&email/8.svg" alt="" className="size-6 inline" />
            )}
            <a
              className="pl-2 hover:underline"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sithu.sithuthedev@gmail.com&su=Subject&body=Body%20Text"
              target="_blank"
            >
              sithu.sithuthedev@gmail.com
            </a>
          </div>
          {/* GITHUB */}
          <a
            href="https://github.com/Sithu-Aung-Khant"
            target="_blank"
            className="flex items-center py-2 text-sm md:text-base"
          >
            <FontAwesomeIcon className="size-6" icon={faGithub} />
            <span className="pl-2 hover:underline font-medium">GitHub</span>
          </a>
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/"
            target="_blank"
            className="flex items-center py-2 text-sm md:text-base"
          >
            <FontAwesomeIcon className="size-6" icon={faLinkedin} />
            <span className="pl-2 hover:underline font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
      <p className="text-xs font-text text-center text-gray-400 pb-3 -my-8 dark:text-dim_white dark:opacity-20">
        Developed by{" "}
        <a
          href="https://github.com/Sithu-Aung-Khant"
          className="hover:underline hover:font-medium "
          target="_blank"
        >
          @Sithu-thedev
        </a>
      </p>
    </section>
  );
};

export default Footer;
