import SocialIcons from './Socials';
import './hero-section.css';

const HeroSection = () => {
  return (
    <div className="hero-section container-2xl mx-auto ">
      <section
        className="px-4 py-8 lg:px-40 lg:py-20 2xl:px-72 dark:bg-black dark:text-dim_white"
        id="home"
      >
        <div className="md:flex justify-around items-center">
          <div className="md:3/5 text-start type-effect ">
            <p className="text-3xl md:text-5xl font-bold">Front-End React</p>
            <p className="text-3xl md:text-5xl font-bold ">Developer</p>
            <p className="mt-2 leading-6 font-text tracking-tight md:py-0 md:mb-0 md:text-lg">
              I am{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                Sithu,
              </span>{' '}
              <span className="hidden md:inline-block">
                a developer with a focus on React,
              </span>
            </p>
            <p className="inline-block md:hidden">
              a developer with a focus on React,
            </p>
            <p className="md:text-lg">
              shaping{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                intuitive
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                visually appealing
              </span>{' '}
              <span className="md:hidden bg-gradient-to-r from-blue dark:from-green">
                Front-end solutions.
              </span>
            </p>
            <p className=" leading-6 font-text tracking-tight hidden md:block md:text-lg">
              <span className="bg-gradient-to-r from-blue dark:from-green">
                Front-end solutions.
              </span>
            </p>
            <div className="flex items-center mt-5">
              <button className="bg-green text-dim_white py-2 px-4  rounded-md font-medium text-lg">
                PROJECTS
              </button>
            </div>
          </div>
          <div className="md:w-72 xl:w-2/5 ">
            <div className="wrapper flex items-center justify-center">
              <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all duration-1000 size-72 bg-[url('./cyan01.png')]"></div>
            </div>
          </div>
          <div className="hidden lg:block absolute right-28 xl:right-40">
            <SocialIcons />
          </div>
        </div>
        <div className="hidden md:flex mt-20 justify-center">
          <div className="mouse w-6 h-10 rounded-full relative overflow-hidden border-black dark:border-dim_white border-2">
            <div className="scroll-wheel dark:bg-white bg-black"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
