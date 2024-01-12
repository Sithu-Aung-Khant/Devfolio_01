import SocialIcons from '../head/Socials';

const HeroSection = () => {
  return (
    <div className="hero-section container-2xl mx-auto ">
      <section
        className="p-10 lg:px-40 lg:py-20 2xl:px-72 dark:bg-black dark:text-dim_white"
        id="home"
      >
        <div className="md:flex justify-center items-center">
          <div className="md:w-max  text-start type-effect">
            <div className="hidden lg:block absolute lg:left-20 xl:left-36 mt-4">
              <SocialIcons />
            </div>
            <p className="text-5xl font-bold">Front-End React</p>
            <p className="text-5xl font-bold ">Developer</p>
            <p className=" my-2 leading-6 font-text tracking-tight py-3 md:py-0 md:mb-0 text-lg">
              I am{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                Sithu,
              </span>{' '}
              a developer with a focus on React,
            </p>
            <p className="text-lg">
              shaping{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                intuitive
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                visually appealing
              </span>
              <span className="md:hidden "> Front-end solutions.</span>
            </p>
            <p className=" leading-6 font-text tracking-tight hidden md:block text-lg">
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
          <div className="md:w-72 xl:w-96">
            <div className="wrapper flex items-center justify-center">
              <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all duration-1000 size-72 bg-[url('./cyan01.png')]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
