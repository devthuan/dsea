import reactIcon from "/src/assets/react.svg";
import brainIcon from "/src/assets/brain-icon.png";
import homeIcon from "/src/assets/home-icon.png";
import btcIcon from "/src/assets/btc-icon.png";
import sharkIcon from "/src/assets/shark-icon.png";
import downArrowIcon from "/src/assets/down-arrow-icon.png";
import settingIcon from "/src/assets/setting-icon.png";
import toolIcon from "/src/assets/tool-icon.png";
import logoutIcon from "/src/assets/logout-icon.png";
import searchIcon from "/src/assets/search-icon.png";
import notificationIcon from "/src/assets/notification-icon.png";
import userAvatar from "/src/assets/user-avatar.png";
import moreIcon from "/src/assets/more-icon.png";
import backArrowIcon from "/src/assets/back-arrow-icon.png";

export const images = {
  reactIcon: reactIcon,
  brainIcon: brainIcon,
  homeIcon: homeIcon,
  btcIcon: btcIcon,
  sharkIcon: sharkIcon,
  downArrowIcon: downArrowIcon,
  settingIcon: settingIcon,
  toolIcon: toolIcon,
  logoutIcon: logoutIcon,
  searchIcon: searchIcon,
  notificationIcon: notificationIcon,
  userAvatar: userAvatar,
  moreIcon: moreIcon,
  backArrowIcon: backArrowIcon,
};

export const ArrowDownIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 bottom-0 w-5 h-5 my-auto text-black right-3 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
