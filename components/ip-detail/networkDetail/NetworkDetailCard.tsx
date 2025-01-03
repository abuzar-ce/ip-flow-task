"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";
import NetworkDetailDrawer from "./NetworkDetailDrawer";

const NetworkDetailCard = ({
  ipProxyDetectorResultDetail,
  whoIsIpDetail,
  firstReverseDnsValue,
  loading,
  error,
}: any) => {
  const [drawer, setDrawer] = useState(false);
  const vpnStatus = ipProxyDetectorResultDetail?.data?.vpn_status;
  return (
    <>
      <IpDataCard title="Network Details" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full ">
          <div className="flex  justify-between gap-3">
            <span className="text-xs">VPN /Proxy Detection status</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              ipProxyDetectorResultDetail?.data?.vpn_status && (
                <span className="text-[#EE1600] bg-[#FDE7EE] px-2 rounded-full text-xs">
                  <span className="text-xs">
                    {ipProxyDetectorResultDetail?.data?.vpn_status
                      ? "Yes"
                      : "No"}
                  </span>
                </span>
              )
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">CIDR</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">{whoIsIpDetail?.response?.cidr}</span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Reverse DNS</span>
            <span className="break-words overflow-hidden text-xs">
              {loading ? (
                <Skeleton height={17} width={50} />
              ) : (
                <span className="text-xs">{firstReverseDnsValue}</span>
              )}
              {!loading && error && <p className="text-xs">Data not found </p>}
            </span>
          </div>
        </div>
      </IpDataCard>
      <IpDrawer title="Network Details " drawer={drawer} setDrawer={setDrawer}>
        <NetworkDetailDrawer
          vpnStatus={vpnStatus}
          firstReverseDnsValue={firstReverseDnsValue}
          loading={loading}
          error={error}
        />
      </IpDrawer>
    </>
  );
};

export default NetworkDetailCard;
