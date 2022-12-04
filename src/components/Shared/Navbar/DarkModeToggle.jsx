import React, { useState } from "react";
import LightSvg from "../Svg/LightSvg";
import MoonSvg from "../Svg/MoonSvg";
import { ThemeContext } from "./../ThemeContext/ThemeContext";

const DarkModeToggle = () => {
  // const [isOn, setIsOn] = useState(on);
  const { theme, setTheme } = React.useContext(ThemeContext);

  // function toggle() {
  //   setIsOn(!isOn);
  //   onToggle(!isOn); 
  // }

  function handleClick() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    // toggle();
  }

  function handleKeyDown({ key }) {
    if (key === "Enter") ;
    // toggle()
  }

  return (
    <div
      role="checkbox" 
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={`cursor-pointer w-24 h-11 bg-[#F2F2F2] rounded-full relative px-1.5 flex items-center mr-6${
        theme === 'dark' ? "" : " justify-end"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full absolute transform duration-300 ease-out bg-[#FFD700] left-0.5 ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-[57px]'
        }`}
      />
      {
        theme === 'dark' ? <>
        <MoonSvg zIndex={`z-30 translate-x-0.5`}/>
        <LightSvg zIndex={`z-30 translate-x-10`} blurColor={'text-white'}/>
        </>
        :
        <>
        
        <LightSvg zIndex={`z-30 translate-x-[12px]`}/>
        <MoonSvg zIndex={`z-30 -translate-x-[65px]`} blurColor={'text-black-500'}/>
        </>
      } 
     
    </div>
  );
};

export default DarkModeToggle;

// <div
//   role="checkbox"
//   aria-checked={isOn ? "true" : "false"}
//   tabIndex="0"
//   onKeyDown={handleKeyDown}
//   onClick={handleClick}
//   className={`cursor-pointer z-10 w-24 h-11 bg-[#F2F2F2] rounded-full relative px-1.5 flex items-center mr-6${
//     isOn ? "" : " justify-end"
//   }`}
// >
//   <div
//     className={`w-8 h-8 rounded-full z-20 absolute transform duration-200 ease-out bg-[#FFD700] left-0.5 ${
//       isOn ? "translate-x-14" : "translate-x-1"
//     }`}
//   />
//   {
//     theme === 'dark' && isOn ? <MoonSvg/>
//     :
//     <LightSvg/>
//   } 
// </div>