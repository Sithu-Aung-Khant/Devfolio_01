import React from "react";
import SocialIcons from "../main/Socials";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container bg-slate-200 mx-auto py-3 px-6 lg:px-8 h-full">
        <div className="md:flex justify-between">
          <div className="logo flex items-center justify-center">
            <a href="#">
              <img
                src="./svgs/terminal.svg"
                alt=""
                className="h-10 w-auto pe-1 pt-1 dark:text-dim_white"
              />
            </a>
            <div className="block">
              <div className="text-lg mt-1 leading-4 font-semibold">SITHU</div>
              <div className="text-xxs  font-semibold">AUNG KHANT</div>
            </div>
          </div>
          <div className="flex justify-center pt-1 gap-8">
            <SocialIcons />
          </div>
        </div>
        <div className="line h-0.5 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Footer;
