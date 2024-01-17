import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EduTab from './tabs/EduTab';
import WorkTab from './tabs/WorkTab';
import {
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const qualificationTabs = [
  { icon: faGraduationCap, text: 'Education' },
  { icon: faBriefcase, text: 'Work' },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="qualification"
      className="container text-center mx-auto h-96 md:w-3/4"
    >
      <div className="text-2xl font-semibold py-4">Qualification</div>
      {/* QUALIFICATION TABS */}
      <div className="flex justify-center gap-10">
        {qualificationTabs.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105"
            onClick={() => handleTabClick(item.text.toLowerCase())}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span
              className={`ml-2 text-sm hover:bg-gradient-to-t from-blue dark:from-green  ${
                activeTab === item.text.toLowerCase()
                  ? 'bg-gradient-to-t from-blue dark:from-green'
                  : ''
              }`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
      {/* EDUCATION */}
      {activeTab === 'education' && (
        <div id="education" className=" px-4 py-8 md:p-10">
          <EduTab />
        </div>
      )}
      {/* WORK  */}
      {activeTab === 'work' && (
        <div id="work" className="px-4 py-8 md:p-10">
          <WorkTab />
        </div>
      )}
    </section>
  );
};

export default Qualification;
