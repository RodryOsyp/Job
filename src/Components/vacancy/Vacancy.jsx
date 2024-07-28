
import React from 'react';
import jobData from './jobData';

const Vacancy = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img src={job.logo} alt={job.company} className="w-12 h-12"/>
              <div>
                <h2 className="text-xl font-bold">{job.company}</h2>
                <h3 className="text-gray-600">{job.position}</h3>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-gray-600">{job.role}</span> &bull; <span className="text-gray-600">{job.level}</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">{job.postedAt}</span> &bull; <span className="text-gray-600">{job.contract}</span> &bull; <span className="text-gray-600">{job.location}</span>
            </div>
            <div className="mt-2`">
              <h4 className="text-gray-600">Languages:</h4>
              <ul className="list-disc list-inside">
                {job.languages.map((language, index) => (
                  <li key={index} className="text-gray-600">{language}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancy;
