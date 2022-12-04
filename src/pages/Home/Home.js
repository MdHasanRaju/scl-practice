import React, { useState } from "react";
import "./Home.css";
import f1 from "../../assets/images/suggest-slider-1.png";
import f2 from "../../assets/images/suggest-slider-2.png";
import f3 from "../../assets/images/suggest-slider-3.png";
import f4 from "../../assets/images/suggest-slider-4.png";
import storyAdd1 from "../../assets/images/Mask-group.png";
import storyAdd2 from "../../assets/images/Mask-group1.png";
import storyAdd3 from "../../assets/images/Mask-group2.png";
import storyAdd4 from "../../assets/images/Mask-group3.png";
import storyAdd5 from "../../assets/images/Mask-group4.png";
import plusIcon from "../../assets/images/plus-icon.png";
import SocialLeftBar from "../../components/Home/SocialLeftBar/SocialLeftBar";
import SocialRightBar from "../../components/Home/SocialRightBar/SocialRightBar";
import SocialStoryGallery from "../../components/Home/SocialStoryGallery/SocialStoryGallery";
import PostStatus from "../../components/Home/PostStatus/PostStatus";
import PostedStatusOne from "../../components/Home/PostedStatusOne/PostedStatusOne";
import SuggestFriendSlider from "../../components/Home/SuggestFriendSlider/SuggestFriendSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReelsSlider from "../../components/Home/ReelsSlider/ReelsSlider";
import PostedStatusTwo from "../../components/Home/PostedStatusTwo/PostedStatusTwo";
import PostedStatusThree from "../../components/Home/PostedStatusThree/PostedStatusThree";
import PostedStatusFour from "../../components/Home/PostedStatusFour/PostedStatusFour";
import PostedStatusFive from "../../components/Home/PostedStatusFive/PostedStatusFive";

/**
 * @function Home.jsx
 * @author Mahmudul Hasan
 **/

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const gallerySettings = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Friends = [
  {
    id: "1",
    name: "Heanry Will",
    photo: f1,
  },
  {
    id: "2",
    name: "Spike Spiegel",
    photo: f2,
  },
  {
    id: "3",
    name: "Hitagi Senjougahara",
    photo: f3,
  },
  {
    id: "4",
    name: "Kushina Uzumak",
    photo: f4,
  },
  {
    id: "5",
    name: "Hitagi Senjougahara",
    photo: f4,
  },
];

const ReelVideos = [
  {
    id: "1",
    videoUrl:
      "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&autoplay=0&mute=1&enablejsapi=1&showinfo=0&autohide=1&modestbranding=1",
    name: "Heanry Will",
    photo: f1,
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    name: "Spike Spiegel",
    photo: f2,
  },
  {
    id: "3",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    name: "Hitagi Senjougahara",
    photo: f3,
  },
  {
    id: "4",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    name: "Kushina Uzumak",
    photo: f4,
  },
  {
    id: "5",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    name: "Hitagi Senjougahara",
    photo: f4,
  },
];

const storyGalleries = [
  {
    addedImage: storyAdd1,
    profileImage: plusIcon,
    name: "Add your story",
  },
  {
    addedImage: storyAdd2,
    profileImage: storyAdd2,
    name: "Janelliya will",
  },
  {
    addedImage: storyAdd3,
    profileImage: storyAdd3,
    name: "Janelliya will",
  },
  {
    addedImage: storyAdd4,
    profileImage: storyAdd4,
    name: "Janelliya will",
  },
  {
    addedImage: storyAdd5,
    profileImage: storyAdd5,
    name: "Janelliya will",
  },
];

const Home = () => {
  const [showCommunity, setShowCommunity] = useState(false);

  const toggleCommunity = () => {
    setShowCommunity(!showCommunity);
  };

  return (
    <div
      className={`dark:bg-gray-900  bg-[#ffffff]
       mt-[75px] `}
    >
      <div className="px-4 py-6 ">
        <div class="grid grid-cols-6 gap-4 relative">
          {/* ---left-side-bar-start--- */}
          <div class="col-span-1 h-screen overflow-y-auto sticky top-0 ">
            <SocialLeftBar />
          </div>
          {/* ---left-sidebar-end--- */}

          {/* ---main-content-start--- */}
          <div className="col-span-4 middle-content h-screen sticky scrollbar-hide overflow-y-scroll top-0 overflow-x-hidden">
            {/* story-gallery */}
            <Slider {...gallerySettings}>
              {storyGalleries.map((story) => (
                <SocialStoryGallery story={story} />
              ))}
            </Slider>

            {/* timeline-posted-status-part */}
            <PostStatus />

            {/* news-feeds-part */}
            <PostedStatusOne />

            {/* suggest-friend-slider */}
            <div className="bg-[#ffffff] p-4 mb-4 rounded-md">
              <h6 className="text-[16px] text-[#000000] mb-4">
                Suggest Friend
              </h6>
              {/* <div className="grid grid-cols-4 gap-2"> */}
              <Slider {...settings}>
                {Friends.map((friend) => (
                  <SuggestFriendSlider friend={friend} />
                ))}
              </Slider>
              {/* </div> */}
            </div>

            {/* reels-videos-sliders */}
            <div className="bg-[#ffffff] p-4 mb-4 rounded-md">
              <h6 className="text-[16px] text-[#000000] mb-4">
                Viral and short videos
              </h6>
              <Slider {...settings}>
                {ReelVideos.map((reel) => (
                  <ReelsSlider reel={reel} />
                ))}
              </Slider>
            </div>

            {/* timeline-posted-status-two */}
            <PostedStatusTwo />

            {/* timeline-posted-status-three */}
            <PostedStatusThree />

            {/* timeline-posted-status-four */}
            <PostedStatusFour />

            {/* timeline-posted-status-five */}
            <PostedStatusFive />
          </div>
          {/* ---main-content-end--- */}

          {/* ---right-sidebar-part-start--- */}
          <div class="col-span-1 h-screen overflow-y-auto sticky top-0">
            <SocialRightBar />
          </div>
          {/* ---right-sidebar-part-end--- */}
        </div>
      </div>
    </div>
  );
};

export default Home;

// demo for another use case if need
// const videoItems = [
//   {
//     id: "1",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
//   {
//     id: "2",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
//   {
//     id: "3",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
//   {
//     id: "4",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
//   {
//     id: "5",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
//   {
//     id: "6",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
//   {
//     id: "7",
//     videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
//     photo: young1,
//     title: "Mission impossible dead reckoning IMX",
//     published: "American, 10 June 2020",
//     views: 17,
//     react: "10 Love",
//     comments: "14 Comments",
//     share: "9 Share",
//   },
// ];

{
  /* <div class="col-span-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
              {videoItems.map((vdo) => (
                <div className="bg-[#FFFFFF]">
                  <div>
                    <iframe
                      width="100%"
                      src={vdo.videoUrl}
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <img
                      className="rounded-full"
                      src={vdo.photo}
                      height="30px"
                      width="30px"
                      alt="author photo"
                    />
                    <h5 className="pr-4 ml-2 text-[#0f0f0f]">{vdo.title}</h5>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                  <small className="pl-12 text-[#606060]">
                    <i class="fa-solid fa-circle text-xs text-[8px]"></i>{" "}
                    {vdo.published} <span>views: {vdo.views}</span>
                  </small>
                  <hr className="my-4" />
                  <div className="flex items-center justify-between px-2 text-[#606060]">
                    <small>
                      <i class="fa-sharp fa-solid fa-heart pr-1 "></i>
                      {vdo.react}
                    </small>
                    <small>
                      <i class="fa-solid fa-comment-dots pr-1 "></i>
                      {vdo.comments}
                    </small>
                    <small>
                      <i class="fa-solid fa-share-nodes pr-1 "></i>
                      {vdo.share}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div> */
}
