import Socials from '../head/Socials';

const HeroSection = () => {
  return (
    <div className="hero-section container-2xl mx-auto">
      <section
        className="p-10 lg:px-40 lg:py-20 dark:bg-black dark:text-dim_white"
        id="home"
      >
        <div className="absolute left-1 top-40 hidden lg:block p-4 lg:py-6 lg:px-8 ">
          <Socials />
        </div>
        <div className="md:flex text-center items-center">
          <div className="md:w-1/2 text-start type-effect">
            <p className="text-4xl font-bold">Front-End React</p>
            <p className="text-4xl font-bold ">Developer</p>
            <p className="my-2 leading-6 font-text tracking-tight py-3 md:py-0 md:mb-0">
              I am{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                Sithu,
              </span>{' '}
              a developer with a focus on React, shaping{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                intuitive
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                visually appealing
              </span>
              <span className="md:hidden "> Front-end solutions.</span>
            </p>
            <p className=" leading-6 font-text tracking-tight hidden md:block">
              <span className="bg-gradient-to-r from-blue dark:from-green">
                Front-end solutions.
              </span>
            </p>
            <div className="flex items-center mt-5">
              <button className="bg-green text-dim_white py-2 px-4  rounded-md font-medium ">
                PROJECTS
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="wrapper flex items-center justify-center">
              <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all duration-1000 size-60 bg-[url('./cyan01.png')]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
