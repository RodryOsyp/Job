import React, { useContext } from "react";
import jobData from "./jobData";
import { JobContext } from "../../JobContext";
import Badge from "../Badge/Badge";


const Vacancy = () => {
  const { count, setCount } = useContext(JobContext);

  const handleBadgeClick = (text) => {
    setCount(text);
  };

  return (
    <div className="container mx-auto p-4">
      <Badge text={count} onClick={() => setCount("")} /> 
      <div className="grid grid-cols-1 gap-6">
        {jobData.map((job) => (
          <div
            key={job.id}
            className={`bg-white p-6 rounded-lg shadow-md border-cyan hover:cursor-pointer ${
              job.featured ? "border-l-4 border-Cyan" : ""
            }`}
          >
            <div className="flex justify-between">
              <div className="flex items-center space-x-4">
                <img src={job.logo} alt={job.company} className="w-12 h-12" />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1.5">
                    <h2 className="text-xl font-bold">{job.company}</h2>
                    {job.new && (
                      <span className="text-white bg-cyan py-1 px-2 rounded-full uppercase text-xs">
                        New!
                      </span>
                    )}
                    {job.featured && (
                      <span className="text-white bg-veryDark py-1 px-2 rounded-full uppercase text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-gray-600">{job.position}</h3>
                  <div className="text-gray-600 text-xs">
                    <span>{job.postedAt} • </span>
                    <span>{job.contract} • </span>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-4">
                <div className="flex space-x-2">
                  <ul className="flex space-x-2">
                    <li
                      className="text-cyan bg-grayishCyan py-1 px-2 rounded cursor-pointer"
                      onClick={() => handleBadgeClick(job.role)} 
                    >
                      {job.role}
                    </li>
                    <li
                      className="text-cyan bg-grayishCyan py-1 px-2 rounded cursor-pointer"
                      onClick={() => handleBadgeClick(job.level)} 
                    >
                      {job.level}
                    </li>
                    {job.languages.map((language, index) => (
                      <li
                        key={index}
                        className="text-cyan bg-grayishCyan py-1 px-2 rounded cursor-pointer"
                        onClick={() => handleBadgeClick(language)} 
                      >
                        {language}
                      </li>
                    ))}
                    {job.tools.map((tool, index) => (
                      <li
                        key={index}
                        className="text-cyan bg-grayishCyan py-1 px-2 rounded cursor-pointer"
                        onClick={() => handleBadgeClick(tool)} 
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancy;
