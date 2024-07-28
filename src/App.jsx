import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import header from "/images/bg-header-desktop.svg";
import Badge from "./Components/Badge/Badge";
import Vacancy from "./Components/vacancy/Vacancy";

function App() {
  const handleBadgeClick = (badge) => {
    console.log(`${badge} clicked`);
  };
  const badges = ["Frontend", "CSS", "JavaScript"];
  return (
    <>
      <div>
        <img src={header} alt="" className="bg-cover w-full z-0" />
      </div>
      <div className="relative flex justify-center z-10">
        <div className=" bg-red badge-row m-auto absolute top-[-30px]  flex items-center justify-between w-10/12	shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] 	">
          <div className="badge-row flex space-x-4 ">
            {badges.map((e) => (
              <Badge text={e} onClick={e} />
            ))}
          </div>
          <button className="text-Cyan text-[15px] hover:cursor-pointer hover:color-red-500	">
            Clear
          </button>
        </div>
      </div>
      <Vacancy/>
    </>
  );
}

export default App;
