import React from 'react'; 
import postTimeline from "../../../assets/images/post-timeline.png"; 
import VideoSvg from "./../../../components/Shared/Svg/VideoSvg";
import PollSvg from "./../../../components/Shared/Svg/PollSvg";
import VideoPlaySvg from "./../../../components/Shared/Svg/VideoPlaySvg";
import ImageSvg from "./../../../components/Shared/Svg/ImageSvg"; 

const PostStatus = () => {
    return (
        <div>
          
             {/* timeline-post-part */}
             <div className="bg-[#FFFFFF] p-4 mb-4 rounded-md shadow-md">
              <div className="flex gap-2">
                <img
                  className="w-[50px] h-[50px] rounded-lg"
                  src={postTimeline}
                  alt="user image"
                />
                <div className="w-[100%] ">
                  <input
                    className="w-[100%] h-[50px] min-h-[30px] outline-none border-transparent focus:border-transparent border-none focus:ring-0  px-4 bg-[#F2F2F2] placeholder:text-[#8F8F8F] placeholder:text-[14px] rounded-md"
                    type="text"
                    placeholder="Tell your friend about your thoughts"
                  />

                  <div className="flex items-center justify-between mt-4">
                    <button className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center w-[20%] text-[12px] normal-case">
                      <VideoSvg />
                      <p className="ml-2 text-[#000000]">Live video</p>
                    </button>
                    <button className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center  w-[20%] text-[12px] normal-case">
                      <ImageSvg />
                      <p className="ml-2 text-[#000000]">Image</p>
                    </button>
                    <button className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center w-[20%]  text-[12px] normal-case">
                      <VideoPlaySvg />
                      <p className="ml-2 text-[#000000]">video</p>
                    </button>
                    <button className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center  w-[20%] text-[12px] normal-case">
                      <PollSvg />
                      <p className="ml-2 text-[#000000]">Poll</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

        </div>
    );
};

export default PostStatus;