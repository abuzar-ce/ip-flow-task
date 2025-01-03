"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import WhoIsIpDrawer from "./WhoIsIpDrawer";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";

const WhoIsIpCard = ({
  whoIsIpDetail,
  ipReputationScoreResultDetail,
  ipInfoResultDetail,
  loading,
  error,
}: any) => {
  // console.log("whoIsIpDetail", whoIsIpDetail);
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <IpDataCard title="IP WHOIS" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3 h-full justify-between">
          <div className="flex justify-between gap-3">
            <span className="text-xs">Owner</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">{whoIsIpDetail?.response?.owner}</span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-xs">Country</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">
                {whoIsIpDetail?.response?.country}
              </span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-xs">Geolocation</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">{ipInfoResultDetail?.location}</span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-xs">ISP</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">
                {ipReputationScoreResultDetail?.data?.ISP || "No result found"}
              </span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-xs">ASN</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">
                {whoIsIpDetail?.response?.as ||
                  ipReputationScoreResultDetail?.data?.ASN}
              </span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
        </div>
      </IpDataCard>
      <IpDrawer title="IP WHOIS " drawer={drawer} setDrawer={setDrawer}>
        <WhoIsIpDrawer detail={whoIsIpDetail} loading={loading} error={error} />
      </IpDrawer>
    </>
  );
};

export default WhoIsIpCard;
