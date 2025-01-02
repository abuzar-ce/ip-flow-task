import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const ServicesAndPortsCard = ({ rustResultDetail, loading, error }: any) => {
  // console.log("details", detail);
  const misconfigurationsCount = rustResultDetail?.ports?.filter(
    (item: any) => item.misconfiguration === "yes"
  ).length;
  return (
    <div className="flex flex-col gap-3 h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          Services and Ports
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Open Ports</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {rustResultDetail?.ports?.length || "No result found"}
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Collections</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {rustResultDetail?.ports?.length || "No result found"}
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Misconfigurations</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">{misconfigurationsCount || 0}</span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
    </div>
  );
};

export default ServicesAndPortsCard;
