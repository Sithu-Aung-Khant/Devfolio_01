const HeroSection = () => {
  return (
    <section className="container mx-auto p-10 lg:px-40">
      <div className="md:flex text-center items-center">
        <div className="md:w-1/2 text-start">
          <div className="text-4xl font-bold">Front-End React</div>
          <div className="text-4xl font-bold">Developer</div>
          {/* <div>Sithu Aung Khant, </div> */}
          {/* <div>
            transforming ideas into visually stunning and user-friendly web
            interfaces.
          </div> */}
          <div>
            Turning code into visually stunning and user-friendly web
            interfaces.
          </div>
          {/* <div>
            translating concepts into seamless, responsive, and visually
            appealing interfaces.
          </div> */}
          {/* <div>Bridging design and code for captivating web experiences</div> */}
          {/* <div> transforming concepts into captivating web realities.</div> */}
          {/* <div>
            Creative coder with a focus on React, shaping intuitive and visually
            appealing front-end solutions
          </div> */}
        </div>
        <div className="md:w-1/2">
          {/* <img src="./profile.sit.jpg" alt="" /> */}
          {/* <img
            className="w-40 h-40 mx-auto rounded-full"
            src="./profile.sm.png"
            alt=""
          /> */}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#2D4A53"
              d="M52.4,-19.4C58.7,2.3,48.2,27.1,29.4,40.9C10.5,54.7,-16.6,57.5,-32.9,45.6C-49.1,33.7,-54.5,7.1,-47.2,-16C-39.9,-39.2,-20,-58.9,1.6,-59.4C23.1,-59.9,46.1,-41.2,52.4,-19.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
