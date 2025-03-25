import classNames from "classnames/bind";
import styles from "./TableCustom.module.scss";
import { images } from "../../assets";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const TableCustom = ({type}) => {
  
  return (
    <div className="w-full h-full">
      <h1 className="justify-start text-black text-2xl font-semibold font-['Inter'] mb-[24px]">
        Narratives performance
      </h1>
      <table className="w-full h-auto border-none">
        <thead>
          <tr className="text-[#76E1DB]">
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">24 Change</th>
            <th className="p-2 text-left">Net Inflow</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="p-2">1</td>
            <td className="p-2 flex gap-3 items-center h-full">
              <div className="w-[24px] h-[24px] bg-black/20 rounded-lg"></div>
              <div className="">Bitcoin</div>
            </td>
            <td className="p-2">$100,86B</td>
            <td className="p-2 flex gap-2">
              <img src={images.arrowDownIcon} alt="icon" />
              <span>3.96%</span>
            </td>
            <td className="p-2">+3.96%</td>
          </tr>
          <tr className="">
            <td className="p-2">1</td>
            <td className="p-2 flex gap-3 items-center h-full">
              <div className="w-[24px] h-[24px] bg-black/20 rounded-lg"></div>
              <div className="">Bitcoin</div>
            </td>
            <td className="p-2">$100,86B</td>
            <td className="p-2 flex gap-2">
              <img src={images.arrowUpIcon} alt="icon" />
              <span>3.96%</span>
            </td>
            <td className="p-2">+3.96%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  
};

export default TableCustom;

