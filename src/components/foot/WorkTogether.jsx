import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const WorkTogether = ({ isDark }) => {
  return (
    <section id="work_together">
      <div className="container mx-auto h-dvh bg-slate-50 dark:bg-black pt-16 pl-16">
        <div className="flex justify-end items-center -mr-8">
          <div className="w-40 h-5 bg-black dark:bg-dim_white"></div>
          <div className="w-40 h-0.5 bg-black dark:bg-dim_white"></div>
        </div>
        <div className="lg:text-8xl">LET'S</div>
        <div className="lg:text-8xl">WORK</div>
        <div className="lg:text-8xl">TOGETHER</div>
        <div className="flex items-center gap-16 pt-10 pl-3">
          {/* PHONE */}
          <div className="phone">
            {isDark ? (
              <img src="./phone&email/7.svg" alt="" className="size-8 inline" />
            ) : (
              <img src="./phone&email/6.svg" alt="" className="size-8 inline" />
            )}
            <span className="pl-2">+959-768094840</span>
          </div>
          {/* EMAIL */}
          <div className="email">
            {isDark ? (
              <img src="./phone&email/9.svg" alt="" className="size-8 inline" />
            ) : (
              <img src="./phone&email/8.svg" alt="" className="size-8 inline" />
            )}
            <span className="pl-2 hover:underline">
              sithu.sithuthedev@gmail.com
            </span>
          </div>
          {/* LINKEDIN */}
          <div className="linkedin">
            <a href="#" target="_blank" className="flex items-center">
              <FontAwesomeIcon className="size-8" icon={faLinkedin} />
              <span className="pl-2 hover:underline">Sithu Aung Khant</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
