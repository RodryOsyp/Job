import React from 'react';

const Badge = ({ text = "Error", onClick }) => {
  return (
    <div className="badge-container flex items-center space-x-2 p-2 rounded-lg bg-Grayish_Cyan">
      <div className="text-cyan text-[15px]">{text}</div>
      <button className=" p-1 rounded-full text-white" onClick={onClick}>✖</button>
    </div>
  );
};

export default Badge;
