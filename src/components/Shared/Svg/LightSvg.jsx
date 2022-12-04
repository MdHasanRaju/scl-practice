import React from "react";
import { ThemeContext } from "./../ThemeContext/ThemeContext";

const LightSvg = ({ zIndex, blurColor }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <svg
      className={`${zIndex} `}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill={`${theme === "dark" ? "dark" : "white"}`}
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3111 16.1664C7.0792 16.1681 4.46223 13.5484 4.46521 10.3146C4.46819 7.08832 7.08027 4.47116 10.2985 4.47052C13.5374 4.46988 16.1633 7.09598 16.1631 10.3353C16.1628 13.5452 13.534 16.1647 10.3111 16.1664Z"
        // fill="white"
      />
      <path
        d="M2.698 3.8622C2.7314 3.32324 2.91735 3.00123 3.30224 2.82023C3.69564 2.63519 4.08371 2.67985 4.40371 2.96954C4.7854 3.31516 5.15008 3.68226 5.49794 4.06213C5.85772 4.45497 5.82347 5.06901 5.45134 5.44654C5.07646 5.82704 4.47051 5.87681 4.06903 5.518C3.67457 5.16557 3.29777 4.7889 2.94906 4.39138C2.80374 4.22548 2.75055 3.97833 2.698 3.8622Z"
        // fill="white"
      />
      <path
        d="M2.7074 16.9361C2.71378 16.6152 2.80633 16.3717 3.00058 16.1743C3.33207 15.8372 3.66142 15.4975 4.00524 15.1736C4.43311 14.7705 5.05501 14.7863 5.45351 15.1934C5.84882 15.597 5.84797 16.2226 5.44138 16.6435C5.11799 16.9785 4.79097 17.3103 4.45247 17.6297C4.13141 17.9328 3.74844 18.0085 3.33972 17.8348C2.93143 17.661 2.73442 17.3303 2.7074 16.9361Z"
        // fill="white"
      />
      <path
        d="M14.8682 16.035C14.8942 15.4788 15.0925 15.1555 15.4854 14.9762C15.8714 14.8003 16.2548 14.8469 16.568 15.1312C16.9492 15.4773 17.3139 15.8442 17.6626 16.2232C18.0218 16.6137 17.9899 17.2282 17.6205 17.6089C17.2514 17.9894 16.6384 18.0408 16.2384 17.6837C15.8437 17.3315 15.4667 16.9553 15.1178 16.5582C14.9721 16.3927 14.9186 16.146 14.8682 16.035Z"
        // fill="white"
      />
      <path
        d="M14.8774 4.72574C14.8784 4.43946 14.9829 4.19508 15.1829 3.99281C15.5001 3.67207 15.8154 3.34899 16.1405 3.03612C16.582 2.61117 17.2175 2.61329 17.622 3.03123C18.0201 3.44258 18.0099 4.06853 17.5909 4.49774C17.2707 4.82571 16.9503 5.1541 16.6167 5.46803C16.2952 5.77069 15.9146 5.83982 15.5031 5.67158C15.1212 5.51546 14.8778 5.139 14.8774 4.72574Z"
        // fill="white"
      />
      <path
        d="M11.346 18.9159C11.346 19.1449 11.3521 19.374 11.3447 19.6028C11.3257 20.1941 10.8721 20.6399 10.3015 20.6355C9.7296 20.6308 9.29003 20.1788 9.2845 19.5822C9.28025 19.1385 9.28025 18.6949 9.2845 18.2512C9.29025 17.655 9.7296 17.2026 10.3009 17.1973C10.8715 17.192 11.3251 17.6372 11.3447 18.2291C11.3523 18.4575 11.346 18.6868 11.346 18.9159Z"
        // fill="white"
      />
      <path
        d="M11.3459 1.72787C11.3461 1.94971 11.3515 2.17176 11.3453 2.39338C11.3285 2.99615 10.8706 3.44769 10.2921 3.43791C9.72085 3.42813 9.28937 2.97573 9.28447 2.37488C9.28086 1.9312 9.28001 1.48753 9.2849 1.04386C9.29128 0.458956 9.72638 0.0103906 10.2891 0.000181386C10.8623 -0.0102405 11.3215 0.429605 11.3442 1.01961C11.3534 1.25527 11.3457 1.49178 11.3459 1.72787Z"
        // fill="white"
      />
      <path
        d="M18.9294 11.3493C18.686 11.3493 18.4424 11.3557 18.1992 11.3481C17.6416 11.3304 17.2012 10.8704 17.2031 10.3152C17.2048 9.77011 17.6388 9.30644 18.1858 9.29113C18.6794 9.27751 19.1741 9.27624 19.6677 9.29176C20.2145 9.30899 20.6432 9.77606 20.6415 10.3233C20.6398 10.8704 20.2066 11.3266 19.6598 11.3476C19.4166 11.357 19.1728 11.3491 18.9294 11.3493Z"
        // fill="white"
      />
      <path
        d="M1.70763 11.3496C1.47146 11.3496 1.23508 11.3556 0.999128 11.3485C0.43999 11.3315 0 10.8753 0 10.3198C0 9.76484 0.440205 9.30266 0.998492 9.29032C1.47784 9.27969 1.95783 9.27969 2.43697 9.29032C2.99526 9.30266 3.43738 9.76569 3.43759 10.3191C3.43802 10.8727 2.99611 11.3307 2.4374 11.3483C2.19442 11.3558 1.95081 11.3494 1.70763 11.3496Z"
        // fill="white"
      />
    </svg>
  );
};

export default LightSvg;
