import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const NetworkDetailCard = ({
  ipProxyDetectorResultDetail,
  whoIsIpDetail,
  loading,
  error,
}: any) => {
  return (
    <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          Network Details
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">VPN /Proxy Detection status</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-[#EE1600] bg-[#FDE7EE] px-2 rounded-full text-xs">
            <span className="text-xs">
              {ipProxyDetectorResultDetail?.data?.vpn_status ? "Yes" : "No"}
            </span>
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">CIDR</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {whoIsIpDetail?.response?.cidr || "No result found"}
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex  justify-between gap-3">
        <span className="text-xs">Reverse DNS</span>
        <span className="break-words overflow-hidden text-xs">
          Endpoint not found
        </span>
      </div>
    </div>
  );
};

export default NetworkDetailCard;
