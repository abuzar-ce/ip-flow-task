import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const WhoIsIpCard = ({
  whoIsIpDetail,
  ipInfoResultDetail,
  loading,
  error,
}: any) => {
  //   console.log("whoIsIpDetail", whoIsIpDetail);

  return (
    <div className="flex flex-col gap-3 h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          IP WHOIS
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Owner</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {whoIsIpDetail?.response?.owner || "No result found"}
          </span>
        )}
        {!loading && error && (
          <p className="text-xs font-semibold mb-1">Data not found </p>
        )}
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Country</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {whoIsIpDetail?.response?.country || "No result found"}
          </span>
        )}
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Geolocation</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {ipInfoResultDetail?.location || "No result found"}
          </span>
        )}
      </div>

      <div className="flex justify-between gap-3">
        <span className="text-xs">ISP</span>
        <span className="text-xs">Endpoint not found</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">ASN</span>
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <span className="text-xs">
            {whoIsIpDetail?.response?.as || "No result found"}
          </span>
        )}
      </div>
    </div>
  );
};

export default WhoIsIpCard;