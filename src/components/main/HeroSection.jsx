import SocialIcons from "./Socials";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container-2xl mx-auto lg:w-11/12 max-h-max md:pb-20 px-4 py-8 lg:px-32 lg:py-20 2xl:px-72 max-w-5xl">
        <div className="md:flex justify-center items-center lg:justify-between max-w-3xl">
          {/* BLOB IMAGE */}
          <div className="md:order-2">
            <div className="blob relative bg-cover bg-center shadow-lg shadow-gray-400 dark:shadow-gray-900 animate-class transition-all size-60 md:size-72 bg-[url('./cyan01.png')]"></div>
          </div>
          {/* TEXT CONTENT */}
          <div className="md:order-1 md:pr-6">
            <div className="text-4xl lg:text-header lg:leading-tight font-bold">
              <p>Front-End React</p>
              <p>Developer</p>
            </div>
            <div className="mt-3 leading-6 font-text tracking-tight md:py-0 md:mb-0 ">
              I am{" "}
              <span className="bg-gradient-to-t from-blue dark:from-green ">
                Sithu,
              </span>{" "}
              <span className="hidden md:inline-block">
                a developer with a focus on React,
              </span>
            </div>
            <div className="inline-block md:hidden ">
              a developer with a focus on React,
            </div>
            <div className="">
              shaping{" "}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                intuitive
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-t from-blue dark:from-green">
                visually appealing
              </span>{" "}
              <span className="md:hidden bg-gradient-to-r from-blue dark:from-green">
                Front-end solutions.
              </span>
            </div>
            <div className=" leading-6 font-text tracking-tight hidden md:block">
              <span className="bg-gradient-to-t from-blue dark:from-green">
                Front-end solutions.
              </span>
            </div>
            <div className="flex items-center mt-5">
              <button className="bg-green text-dim_white py-2.5 px-4  rounded-md font-medium ">
                <a href="#Projects">PROJECTS</a>
              </button>
            </div>
            <div className="hidden absolute md:flex mt-20 r-0 items-center">
              <div className="mouse w-6 h-9 rounded-full relative overflow-hidden border-black dark:border-dim_white border-2">
                <div className="scroll-wheel dark:bg-white bg-black"></div>
              </div>
              <div className="px-3 font-text text-sm tracking-tight">
                Scroll down
              </div>
            </div>
          </div>
          {/* Social Icons */}
          <div className="hidden lg:block absolute right-28 xl:right-72">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
