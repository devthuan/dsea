const BoxNotification = ({
  // eslint-disable-next-line no-unused-vars
  icon,
  type,
  time,
  user,
  content,
  className,
  width = "w-[436px]",
  height = "h-[122px]",
}) => {
  return (
    <div
      className={`${width} ${height} p-5 rounded-2xl border border-black flex flex-col gap-2 bg-white overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        {/* Icon placeholders */}
        <div className="w-5 h-5 bg-gray-300 rounded-full" />
        <div className="w-5 h-5 bg-gray-300 rounded-full" />

        {/* Type and Time */}
        <div className="text-base font-normal text-black font-['Inter']">
          {type}
        </div>
        <div className="text-xs font-normal text-black font-['Inter']">
          {time}
        </div>
      </div>

      {/* Content */}
      <div className="w-[373px] break-words whitespace-normal">
        <span className="text-[#76e1db] text-base font-normal font-['Inter']">
          {user}
        </span>
        <span className="text-black text-base font-normal font-['Inter']">
          {" "}
         {content}
        </span>
      </div>
    </div>
   
  );
};

export default BoxNotification;
