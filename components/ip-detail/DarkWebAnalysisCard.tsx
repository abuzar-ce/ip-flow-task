import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const DarkWebAnalysisCard = () => {
  return (
    <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          Dark Web Analysis
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Dark Web Mentions</span>
        <span className="text-xs">5</span>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Breach Status</span>
        <span className="text-[#69BC5B] font-bold bg-[#EEF8ED] px-2 rounded-full text-xs">
          Active
        </span>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Last Detected</span>
        <span className="text-xs">2023-10-01</span>
      </div>
    </div>
  );
};

export default DarkWebAnalysisCard;
