import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const Socials = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/sithu-aung-khant-504ba91b5/">
        <FontAwesomeIcon
          className="px-2 py-1 size-6 text-green0 dark:text-dim_white"
          icon={faLinkedin}
        />
      </a>
      <a href="https://github.com/Sithu-Aung-Khant">
        <FontAwesomeIcon
          className="px-2 py-1 ml-2 size-6 text-green0 dark:text-dim_white"
          icon={faGithub}
        />
      </a>
    </div>
  );
};

export default Socials;
