import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const HistoricalDataCard = ({ whoIsIpDetail, loading, error }: any) => {
  return (
    <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap ">
          Historical Data
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex  justify-between gap-3">
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs font-inter text-[#6B7280]">
            {whoIsIpDetail?.query?.ip || "No result found"}
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Last Scan</span>
        <span className="text-xs">No data found</span>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">No. of Scans</span>
        <span className="text-xs">No data found</span>
      </div>
    </div>
  );
};

export default HistoricalDataCard;
