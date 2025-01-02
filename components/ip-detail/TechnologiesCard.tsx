import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const TechnologiesCard = ({ whatWafIpResultDetail, loading, error }: any) => {
  return (
    <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          Technologies
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">CMS</span>
        <span className="text-xs">Endpoint not mentioned in docs</span>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">WAF Status</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-[#EE1600] bg-[#FDE7EE] px-2 rounded-full text-xs">
            {whatWafIpResultDetail?.results?.["identified firewall"]}
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">SSL/TLS Info</span>
        <span className="text-xs">Endpoint not mentioned in docs properly</span>
      </div>
    </div>
  );
};

export default TechnologiesCard;
