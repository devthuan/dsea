import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { images } from "../../../assets";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div
      className={cx(
        "w-full h-full max-h-[108px] flex items-center justify-end gap-6 pr-[24px]"
      )}
    >
      {/* input search */}
      <div className="h-[60px] w-[420px] relative">
        <div className="h-[60px] w-[60px] bg-[#D9D9D9]  rounded-[50%]  absolute right-[1px] top-0 flex justify-center items-center">
          <img src={images.searchIcon} alt="icon-search" className="" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full outline-none border-[1px] border-black rounded-[40px] pl-[24px] py-[18px] text-[16px]"
        />
      </div>

      {/* box amount */}
      <div className="h-[60px] w-[255px] bg-[var(--primary)] py-[12px] px-[20px] rounded-[200px] flex justify-center items-center">
        <p className="text-[24px] font-semibold">10.5842 $hark</p>
      </div>

      {/* box notification */}
      <div className="w-10 h-10 relative">
        <div className="w-10 h-10 left-0 top-0 absolute bg-[#275d73] rounded-full" />
        <img
          className="w-8 h-8 left-[4px] top-[4px] absolute"
          src={images.notificationIcon}
        />
        <div className="w-2 h-2 left-[23px] top-[9px] absolute bg-[#76e1db] rounded-full" />
      </div>

      {/* box avatar */}
      <div className="flex items-center gap-2">
        <img className="w-14 h-14 rounded-full" src={images.userAvatar} />
        <img
          src={images.moreIcon}
          alt="more-icon"
          className="h-[20px] text-[#275D73]"
        />
      </div>

      
    </div>
  );
};

export default Header;
