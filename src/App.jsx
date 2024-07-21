import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import header from '/images/bg-header-desktop.svg';
import Badge from './Components/Badge/Badge';

function App() {
  const handleBadgeClick = (badge) => {
    console.log(`${badge} clicked`);
  };
const badges = ["Frontend", "CSS", 'JavaScript']
  return (
    <>
      <div>
        <img src={header} alt="" className="bg-cover w-full" />
      </div>
      <div className="badge-row flex space-x-4 mt-4">
      {badges.map(e=> <Badge />)}
      </div>
    </>
  );
}

export default App;
