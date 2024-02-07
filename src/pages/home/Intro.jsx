import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container-2xl mx-auto p-4 pt-28 lg:pt-36 md:h-screen lg:px-24 xl:px-40 2xl:px-72 md:pt-16">
        <a
          target="_blank"
          className="hidden md:flex justify-end"
          href="https://www.linkedin.com/in/sithu-aung-khant"
        >
          Developer Portfolio
        </a>
        <div className="md:flex items-end">
          <div className="md:pl-5 lg:pl-20 relative">
            <div className="absolute z-10 -top-16 left-1 md:top-10 md:-left-1 lg:left-8">
              <div className="w-28 h-5 md:w-40 bg-brown03 dark:bg-dim_white"></div>
            </div>
            {/* <img
              className="size-72 md:size-80 rounded-full shadow-lg mx-auto object-cover"
              src="./profiles/profile.intro.jpg"
              alt=""
            /> */}
            <div
              style={{ backgroundImage: `url('./profiles/profile.intro.jpg')` }}
              className="blob mx-auto border border-brown03 relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all size-72 xs:size-80"
            ></div>
            <a
              href="https://github.com/Sithu-Aung-Khant"
              target="_blank"
              className="md:hidden text-lg absolute -bottom-5 right-0"
            >
              @Sithu-thedev
            </a>
          </div>
          <div className="md:w-2/3 pt-12 pb-6 md:py-10 md:-ml-16 z-30">
            <div className="text-5xl md:text-7xl leading-tight font-medium type-effect">
              <p>FRONT END</p>
              <p>DEVELOPER</p>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/Sithu-Aung-Khant"
          target="_blank"
          className="hidden md:block absolute pt-5 lg:pt-10"
        >
          @Sithu-thedev
        </a>

        <div className="hidden md:block absolute right-0 bottom">
          <div className="flex items-center py-8 md:py-0">
            <FontAwesomeIcon
              className="size-8 absolute right-72"
              icon={faChevronLeft}
            />
            <div className="w-72 h-0.5 bg-brown03 dark:bg-dim_white"></div>
          </div>
          <div className="hidden md:block absolute right-0 w-56 h-28 bg-brown04"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
