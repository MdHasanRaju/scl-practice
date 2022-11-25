import React from "react";
import PlusSvg from "./../../Shared/Svg/PlusSvg";

const SuggestFriendSlider = ({ friend }) => {
  const { name, photo} = friend;
  return (
    <div className="p-1">
      <div className="relative" >
        <img className="rounded-md w-full" src={photo} alt="" />
        <div className="w-[31px] h-[31px] rounded-full p-2 bg-[#FFD700] absolute bottom-2 right-2">
          <PlusSvg />
        </div>
      </div>
      <p className="font-medium text-center text-[#000000] text-[16px] mt-1">{name}</p>
    </div>
  );
};

export default SuggestFriendSlider;
