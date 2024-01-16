import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

const Qualification = () => {
  return (
    <section id="qualification" className="container text-center mx-auto">
      <div className=" mb-6">
        <div className="text-2xl font-semibold py-4">My Qualification</div>
        <div className="qualification_tabs flex justify-center gap-10">
          <div className="">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className="pl-2">Education</span>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="pl-2">Work</span>
          </div>
        </div>
        {/* ONE */}
        <div
          id="education"
          className="qualification_contents px-4 py-8 md:p-10"
        >
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
        {/* TWO */}
        <div id="work" className="qualification_contents mt-10">
          <div className="qua_1 grid grid-cols-3">
            <div className="">
              <div className="font-semibold">Front End Developer</div>
              <div className="text-sm">Frontend Mentor</div>
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
              <div className="font-semibold">Senior Project Officer</div>
              <div className="text-sm">CIM (NGo)</div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="text-sm pl-2">2023</span>
            </div>
          </div>
          <div className="qua_3 grid grid-cols-3">
            <div className="">
              <div className="font-semibold">Project Officer</div>
              <div className="text-sm">CIM</div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="text-sm pl-2">2021-2022</span>
            </div>
            <div className="col-start-2 flex justify-center items-end">
              <div className="circle  size-3.5 rounded-full bg-green"></div>
              <div className="line h-full w-0.5 bg-green transform -translate-x-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
