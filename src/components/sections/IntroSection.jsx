import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const IntroSection = () => {
  return (
    <section id="intro">
      <div className="container-2xl mx-auto p-4 md:h-dvh lg:px-24 xl:px-40 2xl:px-72 pt-24">
        <div className="hidden md:flex justify-end">Developer Portfolio</div>
        <div className="md:hidden absolute right-0 top-72 font-medium">
          Developer Portfolio
        </div>

        <div className="md:flex items-end">
          <div className="md:pl-20">
            <div className="absolute z-10 top-32 md:top-40 md:left-0 lg:left-20">
              <div className="w-28 h-2 md:w-40 md:h-5 bg-brown03 dark:bg-dim_white md:ml-10"></div>
            </div>
            <img
              className="size-60 md:size-80 rounded-full mx-auto object-cover"
              src="./profiles/profile.sit03.jpg"
              alt=""
            />
            {/* <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all size-60 md:size-80 bg-[url('./profiles/profile.sit03.jpg')]"></div> */}
          </div>
          <div className="md:w-2/3 py-6 md:py-10 md:-ml-16">
            <div className="text-4xl md:text-7xl font-medium type-effect">
              <p>FRONT END</p>
              <p>DEVELOPER</p>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/Sithu-Aung-Khant"
          target="_blank"
          className="hidden md:block absolute pt-10"
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

export default IntroSection;
