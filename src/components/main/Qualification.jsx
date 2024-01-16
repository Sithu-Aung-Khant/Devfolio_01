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
      <div className=" m-6">
        <div className="text-2xl font-semibold py-4">My Qualification</div>
        {/* QUALIFICATION TABS */}
        <div className="flex justify-center gap-10">
          {qualificationTabs.map((item, index) => (
            <div
              key={index}
              className=""
              onClick={() => handleTabClick(item.text.toLowerCase())}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span
                className={`pl-2 text-sm ${
                  activeTab === item.text.toLowerCase() ? 'text-green' : ''
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
      </div>
    </section>
  );
};

export default Qualification;
