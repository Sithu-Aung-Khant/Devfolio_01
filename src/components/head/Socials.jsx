import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div>
      {icons.map((item) => (
        <a
          key={item.name}
          href={item.url}
          className="block p-2 hover:scale-110"
          target="_blank"
        >
          <FontAwesomeIcon
            className="py-1 size-6 text-green dark:text-dim_white"
            icon={item.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

const icons = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/',
    icon: faLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Sithu-Aung-Khant',
    icon: faGithub,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Sithu_AungKhant',
    icon: faXTwitter,
  },
  {
    name: 'Frontend Mentor',
    url: 'https://www.frontendmentor.io/profile/Sithu-Aung-Khant',
    icon: faGlobe,
  },
];
