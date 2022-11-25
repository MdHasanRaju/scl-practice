import React from "react";
import './SocialStoryGallery.css'
import storyAdd1 from "../../../assets/images/Mask-group.png";
import storyAdd2 from "../../../assets/images/Mask-group1.png";
import storyAdd3 from "../../../assets/images/Mask-group2.png";
import storyAdd4 from "../../../assets/images/Mask-group3.png";
import storyAdd5 from "../../../assets/images/Mask-group4.png";
import plusIcon from "../../../assets/images/plus-icon.png";

const SocialStoryGallery = ({ story }) => {
  const { addedImage, profileImage, name } = story;

  return ( 
      <div className="story-gallery w-[100%] h-[100%] mb-[20px]">
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${addedImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit:'cover',
            backgroundPosition: "center",
          }}
          className={`story1  w-[100%] h-[220px]  relative rounded-lg`}
        >
          <img
            src={profileImage}
            className="absolute border-[red] border-8 w-[45px] h-[45px] rounded-[100%] bottom-[20%] right-[37%] "
            alt=""
          />
          <p className="absolute bottom-[20px]  text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
           {name}
          </p>
        </div> 
      </div>
 
  );
};

export default SocialStoryGallery;

{/* <div className="story-gallery flex justify-between mb-[20px]">
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${storyAdd1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`story1 basis-[18%] pt-[32%] relative rounded-lg`}
        >
          <img
            src={plusIcon}
            className="absolute w-[45px] h-[45px] rounded-[100%] bottom-[20%] left-1/3 "
            alt=""
          />
          <p className="absolute  bottom-[20px] text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
            Add your story
          </p>
        </div>

        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${storyAdd2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`story2 basis-[18%] pt-[32%] relative rounded-lg`}
        >
          <img
            src={storyAdd2}
            className="absolute w-[45px] h-[45px] rounded-[50%] bottom-[20%] left-1/3  border-hidden border-[#626262] outline outline-offset-2 outline-[#626262]"
            alt=""
          />
          <p className="absolute bottom-[20px] text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
            Janelliya will
          </p>
        </div>
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${storyAdd3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`story3 basis-[18%] pt-[32%] relative  rounded-lg`}
        >
          <img
            src={storyAdd3}
            className="absolute w-[45px] h-[45px] rounded-[50%] bottom-[20%] left-1/3   border-hidden border-[#626262] outline outline-offset-2 outline-[#626262]"
            alt=""
          />
          <p className="absolute bottom-[20px] text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
            Mikel herry
          </p>
        </div>
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${storyAdd4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={` story4 basis-[18%] pt-[32%] relative rounded-lg`}
        >
          <img
            src={storyAdd4}
            className="absolute w-[45px] h-[45px] rounded-[50%] bottom-[20%] left-1/3   border-hidden border-[#626262] outline outline-offset-2 outline-[#626262]"
            alt=""
          />
          <p className="absolute bottom-[20px] text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
            Monali skp
          </p>
        </div>
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${storyAdd5})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={` story5 basis-[18%] pt-[32%] relative bg-cover bg-center bg-no-repeat rounded-lg`}
        >
          <img
            src={storyAdd5}
            className="absolute w-[45px] h-[45px] rounded-[50%] bottom-[20%] left-1/3  border-hidden border-[#626262] outline outline-offset-2 outline-[#626262]"
            alt=""
          />
          <p className="absolute bottom-[20px] text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
            Mikel herry
          </p>
        </div>
      </div> */}
