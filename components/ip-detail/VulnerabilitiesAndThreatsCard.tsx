import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const VulnerabilitiesAndThreatsCard = ({
  nucleiIpResultDetail,
  loading,
  error,
}: any) => {
  return (
    <div className="flex flex-col gap-3 h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          Vulnerabilities and Threats
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Reputation Score</span>
        <span className="text-[#69BC5B] font-bold bg-[#EEF8ED] px-2 rounded-full text-xs">
          0/100 'endpoint not found'
        </span>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Known Vulnerabilities</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">{nucleiIpResultDetail?.length || 0}</span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
    </div>
  );
};

export default VulnerabilitiesAndThreatsCard;
