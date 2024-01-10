const HeroSection = () => {
  return (
    <section className="container mx-auto p-10 lg:px-40" id="home">
      <div className="md:flex text-center items-center">
        <div className="md:w-1/2 text-start type-effect">
          <p className="text-4xl font-bold">Front-End React</p>
          <p className="text-4xl font-bold ">Developer</p>
          <p className="my-2 leading-6 font-text tracking-tight py-3 md:py-0 md:mb-0">
            I am <span className="bg-gradient-to-t from-blue">Sithu,</span> a
            developer with a focus on React, shaping{' '}
            <span className="bg-gradient-to-t from-blue">intuitive</span> and{' '}
            <span className="bg-gradient-to-t from-blue">
              visually appealing
            </span>
            <span className="md:hidden "> Front-end solutions.</span>
          </p>
          <p className=" leading-6 font-text tracking-tight hidden md:block">
            <span className="bg-gradient-to-r from-[]">
              Front-end solutions.
            </span>
          </p>
          <button className="bg-blue py-2 px-4 my-4 rounded-md font-medium">
            PROJECTS
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="wrapper flex items-center justify-center">
            <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 animate-class transition-all duration-1000 size-60 bg-[url('./cyan01.png')]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
