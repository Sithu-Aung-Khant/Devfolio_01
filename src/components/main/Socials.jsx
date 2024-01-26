import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <>
      {icons.map((item) => (
        <a
          key={item.name}
          href={item.url}
          className="block py-2 hover:scale-110"
          target="_blank"
        >
          <FontAwesomeIcon
            className="py-1 size-5 text-green dark:text-dim_white"
            icon={item.icon}
          />
        </a>
      ))}
    </>
  );
};

export default SocialIcons;

const icons = [
  {
    name: "Twitter",
    url: "https://twitter.com/Sithu_AungKhant",
    icon: faXTwitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/Sithu-Aung-Khant",
    icon: faGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/",
    icon: faLinkedin,
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/Sithu-Aung-Khant",
    icon: faGlobe,
  },
];
