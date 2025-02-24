import React from "react";
import { useNavigate } from "react-router-dom";

function WatchingStream() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[auto] relative">
      <img src="/images/image 20.png" className="absolute z-0 top-0 " alt="" />
      <div className="flex justify-between items-center w-[343px] h-[44px] mt-[21px] z-10">
        <img src="/icons/Info.svg" alt="" />
        <img
          src="/icons/Button-close.svg"
          alt=""
          onClick={() => navigate(-1)}
        />
      </div>
      {/* <div className="flex flex-col justify-start items-center absolute h-[100%]"> */}
      {/* <img
        src="/icons/Frame 158.svg"
        className="absolute bottom-[21px] "
        alt=""
      /> */}
      {/* <div className="flex justify-center items-center gap-[10px]"></div> */}
      {/* </div> */}
    </div>
  );
}

export default WatchingStream;
