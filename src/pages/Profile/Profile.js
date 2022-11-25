
import { useState } from "react";
import { Link } from "react-router-dom";
import CameraSvg from "../../components/Shared/Svg/CameraSvg";
import EditSvg from "../../components/Shared/Svg/EditSvg";
import HangoutSvg from "../../components/Shared/Svg/HangoutSvg";
import ImageSvg from "../../components/Shared/Svg/ImageSvg";
import MeetingSvg from "../../components/Shared/Svg/MeetingSvg";
import MomentSvg from "../../components/Shared/Svg/MomentSvg";
import NetworkSvg from "../../components/Shared/Svg/NetworkSvg";
import PlusSvg from "../../components/Shared/Svg/PlusSvg";
import PollSvg from "../../components/Shared/Svg/PollSvg";
import SettingSvg from "../../components/Shared/Svg/SettingSvg";
import VideoPlaySvg from "../../components/Shared/Svg/VideoPlaySvg";
import VideoSvg from "../../components/Shared/Svg/VideoSvg";
import ViralSvg from "../../components/Shared/Svg/ViralSvg";
import "./profile.css";

import { useGetProfileQuery } from "features/profile/profileApi";
import young1 from "../../assets/images/young-1.png";
import young2 from "../../assets/images/young-2.png";
import young3 from "../../assets/images/young-3.png";
import young4 from "../../assets/images/young-4.png";
import young5 from "../../assets/images/young-5.png";
import ChangeProfilePic from "../../components/Profile/ChangeProfilePic";
import Post from "../../components/Shared/Post/Post";
import WritePost from "../../components/Shared/WritePost/WritePost";

const posts = [
  {
    author: {
      name: "AR Arzu",
      subtitle: "Frontend Developer",
      time: "1 hr ago",
      image: "https://dummyimage.com/60x55/000/fff",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [{ src: "https://dummyimage.com/600x505/000/fff", type: "" }],
  },
  {
    author: {
      name: "AR Arzu",
      subtitle: "Frontend Developer",
      time: "1 hr ago",
      image: "https://dummyimage.com/60x55/000/fff",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      { src: "https://dummyimage.com/550x700/15ff00/fff", type: "vertical" },
      { src: "https://dummyimage.com/550x350/15ff00/fff", type: "" },
    ],
  },
];

export default function Profile() {
  const [loading, setLoading] = useState(false);

  const { data, isFetching } = useGetProfileQuery();
  console.log("file: Profile.js ~ line 55 ~ Profile ~ data", data);
  const [isOpenWritePost, setIsOpenWritePost] = useState(false);
  const [isOpenChangeProfilePic, setIsOpenChangeProfilePic] = useState(false);

  const handleCloseWritePost = () => {
    setIsOpenWritePost(false);
  };
  const handleCloseChangeProfilePic = () => {
    setIsOpenChangeProfilePic(false);
  };

  if (isFetching) {
    return <h1>Loading</h1>;
  }


  const {
    name,
    avatar,
    cover_photo,
    followers,
    following,
    post_comment,
    total_post,
    post_view,
    post_share,
    post_like,
  } = data?.data || {};


  return (
    <div className="mt-[75px]">
      <WritePost open={isOpenWritePost} onClose={handleCloseWritePost} />
      <ChangeProfilePic
        open={isOpenChangeProfilePic}
        onClose={handleCloseChangeProfilePic}
      />
      <div className="px-8 py-6 ">
        <div class="grid grid-cols-7 gap-6 relative">
          {/* ---left-side-bar-start--- */}
          <div class="col-span-2 overflow-y-auto sticky top-0 ">
            <div className="p-5 mb-4 bg-[#FFFFFF] shadow-md rounded-lg">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src="https://dummyimage.com/74x70/000/fff"
                    alt="Profile pic"
                    className="rounded-md"
                  />
                  <div className="flex justify-center flex-col">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h5 className="font-light text-gray-400">Sub title</h5>
                  </div>
                </div>
                <EditSvg />
              </div>

              <div className="grid mt-3 activity-graph">
                <h6>Post</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[10%] bg-yellow-300"></div>
                </div>
                <h6>{total_post}</h6>

                <h6>Post View</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[20%] bg-yellow-300"></div>
                </div>
                <h6>{post_view}</h6>

                <h6>Post Share</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[60%] bg-yellow-300"></div>
                </div>
                <h6>{post_share}</h6>

                <h6>Post Like</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[30%] bg-yellow-300"></div>
                </div>
                <h6>{post_like}</h6>

                <h6>Post Comment</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[70%] bg-yellow-300"></div>
                </div>
                <h6>{post_comment}</h6>

                <h6>Followers</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[40%] bg-yellow-300"></div>
                </div>
                <h6>{followers}</h6>

                <h6>Following</h6>
                <div className="flex bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                  <div className="w-[10%] bg-yellow-300"></div>
                </div>
                <h6>{following}</h6>
              </div>
            </div>

            {/* key features */}
            <div class="mb-4 px-2 py-4 bg-[#FFFFFF] shadow-md rounded-sm">
              <h6 className="text-[14px] font-medium mb-3 text-[#444]">
                Key Features
              </h6>
              <div className="flex items-center gap-3 mb-3">
                <NetworkSvg />
                <p className="text-[16px] text-[#414141]">Social</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <VideoPlaySvg />
                Play{" "}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <MeetingSvg />
                <Link
                  to="/meet"
                  className="text-[16px] text-[#414141] no-underline"
                >
                  Meeting
                </Link>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <HangoutSvg />
                <p className="text-[16px] text-[#414141]">Hangout</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <MomentSvg />
                <p className="text-[16px] text-[#414141]">Moment</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <ViralSvg />
                <p className="text-[16px] text-[#414141]">Viral</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <SettingSvg />
                <p className="text-[16px] text-[#414141]">Settings</p>
              </div>
            </div>
            {/* key features end */}

            {/* connected friends */}
            <div class="mb-4 px-2 py-4 bg-[#FFFFFF] shadow-md rounded-sm">
              <div className="flex justify-between items-center mb-4">
                <h6 className="text-[14px] font-medium text-[#8F8F8F]">
                  Connected Friend
                </h6>
                <span className="text-[12px] text-[#76A2CB]">See all</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img className="rounded-md" src={young1} alt="" />
                <p className="text-[16px] text-[#000000]">Spike Spiegel</p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img className="rounded-md" src={young2} alt="" />
                <p className="text-[16px] text-[#000000]">Kushina Uzumak</p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img className="rounded-md" src={young3} alt="" />
                <p className="text-[16px] text-[#000000]">Shinobu Oshino</p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img className="rounded-md" src={young4} alt="" />
                <p className="text-[16px] text-[#000000]">
                  Hitagi Senjougahara
                </p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img className="rounded-md" src={young5} alt="" />
                <p className="text-[16px] text-[#000000]">Hisoka</p>
              </div>
            </div>
            {/* connected friends end */}
          </div>
          {/* ---left-sidebar-end--- */}

          {/* main content */}
          <div className="col-span-5">
            {/* header start */}
            <div className="mb-4 bg-[#FFFFFF] shadow-sm rounded-sm overflow-hidden">
              <div className="cover relative mb-10 rounded-sm h-96">
                <div
                  className="absolute rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url("https://dummyimage.com/1110x308/000000/0011ff")`,
                    backgroundSize: "cover",
                    inset: 0,
                  }}
                ></div>
                <div className="absolute bottom-[-24px] px-10 flex justify-between left-0 right-0">
                  <div className="pro-pic relative p-2 border-2 border-dashed border-yellow-300">
                    <img
                      src="https://dummyimage.com/156x156/000ff0/ffffff"
                      alt="pro pic"
                    />
                    <div
                      onClick={() => setIsOpenChangeProfilePic(true)}
                      className="camera absolute p-1 rounded-sm right-[-16px] bottom-4 bg-white cursor-pointer"
                    >
                      <CameraSvg />
                    </div>
                  </div>

                  <div className="mt-auto flex gap-4">
                    <button className="p-4 rounded-md shadow-sm bg-white flex items-center">
                      <div className="rounded-full bg-yellow-300 mr-2 p-1">
                        <PlusSvg />
                      </div>
                      Add Story
                    </button>
                    <button className="p-4 rounded-md shadow-sm bg-white flex items-center">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              {/* links start */}
              <div className="px-8 py-4">
                <div className="flex gap-24">
                  <h2 className="font-bold pb-6 cursor-pointer text-yellow-300 border-b-4 border-yellow-300 border-solid">
                    Post
                  </h2>
                  <h2 className="font-bold pb-6 cursor-pointer">About</h2>
                  <h2 className="font-bold pb-6 cursor-pointer">Friends</h2>
                  <h2 className="font-bold pb-6 cursor-pointer">Photos</h2>
                  <h2 className="font-bold pb-6 cursor-pointer">Videos</h2>
                  <h2 className="font-bold pb-6 cursor-pointer">Meeting</h2>
                  <h2 className="font-bold pb-6 cursor-pointer">More</h2>
                </div>
              </div>
              {/* links end */}
            </div>
            {/* header end */}

            {/* write a post */}
            <div className="p-4 shadow-sm rounded-md bg-white">
              <div className="flex gap-4">
                <div>
                  <img
                    className="rounded-md"
                    src="https://dummyimage.com/60x55/000/fff"
                    alt="pro-pic"
                  />
                </div>
                <div className="flex flex-col gap-6 grow">
                  <p
                    type="text"
                    className="px-8 border border-solid py-4 rounded-md bg-[#F7F7F7] text-[#8F8F8F]"
                    placeholder=""
                    onClick={() => setIsOpenWritePost(true)}
                  >
                    Tell your friend about your thought
                  </p>
                  <div className="flex justify-between">
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <VideoSvg /> Live Video
                    </button>
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <ImageSvg /> Image
                    </button>
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <VideoPlaySvg /> Video
                    </button>
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <PollSvg /> Poll
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* write a post end */}

            {/* posted status */}
            <div className="flex flex-col py-4 gap-4">
              {posts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
            {/* posted status end */}
          </div>
        </div>
      </div>
    </div>
  );
}
