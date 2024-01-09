const HeroSection = () => {
  return (
    <section className="container mx-auto p-10 lg:px-40">
      <div className="md:flex text-center items-center">
        <div className="md:w-1/2 text-start type-effect">
          <p className="text-4xl font-bold">Front-End React</p>
          <p className="text-4xl font-bold ">Developer</p>
          <p className="mt-2 leading-5 font-poppins ">
            I am Sithu, creative coder with a focus on React, shaping intuitive
            and visually appealing
          </p>
          <div className="font-poppins leading-5">Front-end solutions.</div>
        </div>
        <div className="md:w-1/2">
          <div className="wrapper flex items-center justify-center">
            <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 animate-class transition-all duration-1000 size-60 bg-[url('./cyan.png')]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
