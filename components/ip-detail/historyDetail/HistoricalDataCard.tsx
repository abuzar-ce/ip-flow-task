"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";

const HistoricalDataCard = ({ whoIsIpDetail, loading, error }: any) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <IpDataCard title="Historical Data" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full">
          <div className="flex  justify-between gap-3">
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs font-inter text-[#6B7280]">
                {whoIsIpDetail?.query?.ip}
              </span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Last Scan</span>
            <span className="text-xs">Data not found</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">No. of Scans</span>
            <span className="text-xs">Data not found</span>
          </div>
        </div>
      </IpDataCard>
      <IpDrawer
        title="Historical Data "
        drawer={drawer}
        setDrawer={setDrawer}
      ></IpDrawer>
    </>
  );
};

export default HistoricalDataCard;
