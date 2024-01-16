import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { tableHeadClasses } from '@mui/material';

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
        {/* ONE */}
        {activeTab === 'education' && (
          <div id="education" className=" px-4 py-8 md:p-10">
            <div className="qua_1 grid grid-cols-3">
              <div className="">
                <div className="font-semibold">
                  JS DataStructures & Algorithms
                </div>
                <div className="text-sm">freeCodeCamp</div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="text-sm pl-2">2023</span>
              </div>
              <div className="col-start-2 flex justify-center">
                <div className="circle  size-3.5 rounded-full bg-green"></div>
                <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
              </div>
            </div>
            <div className="qua_2 grid grid-cols-3">
              <div className="col-start-2 flex justify-center items-center">
                <div className="circle  size-3.5 rounded-full bg-green"></div>
                <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
              </div>
              <div className="">
                <div className="font-semibold">Responsive Web Design</div>
                <div className="text-sm">freeCodeCamp</div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="text-sm pl-2">2023</span>
              </div>
            </div>
            <div className="qua_3 grid grid-cols-3">
              <div className="">
                <div className="font-semibold">Civil Engineering</div>
                <div className="text-sm">Lashio Technological University</div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="text-sm pl-2">2016-2019</span>
              </div>
              <div className="col-start-2 flex justify-center items-end">
                <div className="circle  size-3.5 rounded-full bg-green"></div>
                <div className="line h-full w-0.5 bg-green transform -translate-x-2 "></div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'work' && (
          <div id="work" className="mt-10">
            <div className="qua_1 grid grid-cols-3">
              <div className="col-start-2 flex justify-center">
                <div className="circle  size-3.5 rounded-full bg-green"></div>
                <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
              </div>
              <div className="">
                <div className="font-semibold">Front End Developer</div>
                <div className="text-sm">Frontend Mentor</div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="text-sm pl-2">2023</span>
              </div>
            </div>
            <div className="qua_2 grid grid-cols-3">
              <div className="">
                <div className="font-semibold">Senior Project Officer</div>
                <div className="text-sm">CIM (NGo)</div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="text-sm pl-2">2023</span>
              </div>
              <div className="col-start-2 flex justify-center items-center">
                <div className="circle  size-3.5 rounded-full bg-green"></div>
                <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
              </div>
            </div>
            <div className="qua_3 grid grid-cols-3">
              <div className="col-start-2 flex justify-center items-end">
                <div className="circle  size-3.5 rounded-full bg-green"></div>
                <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
              </div>
              <div className="">
                <div className="font-semibold">Project Officer</div>
                <div className="text-sm">CIM</div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="text-sm pl-2">2021-2022</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;
