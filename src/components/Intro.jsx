import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container-2xl mx-auto p-4 pt-40 h-screen lg:px-24 xl:px-40 2xl:px-72 md:pt-16 lg:pt-24">
        <div className="hidden md:flex justify-end">Developer Portfolio</div>
        {/* <div className="md:hidden absolute left-2 top-4">
          Developer Portfolio
        </div> */}

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
            <div className="blob mx-auto relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all size-80 bg-[url('./profiles/profile.intro.jpg')]"></div>
            <a
              href="https://github.com/Sithu-Aung-Khant"
              target="_blank"
              className="md:hidden absolute -bottom-3 right-0"
            >
              @Sithu-thedev
            </a>
          </div>
          <div className="md:w-2/3 pt-20 pb-6 md:py-10 md:-ml-16 z-30">
            <div className="text-6xl md:text-7xl font-medium type-effect">
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

        <div className="hidden md:block absolute right-0">
          <div className="flex items-center py-8 md:py-0">
            <FontAwesomeIcon
              className="size-8 absolute right-72"
              icon={faChevronLeft}
            />
            <div className="w-72 h-0.5 bg-brown03 dark:bg-dim_white"></div>
          </div>
          <div className="hidden md:block absolute right-0 w-56 h-28 bg-[#d1d1cb]"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
