"use client";
import React, { useEffect, useState } from "react";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";
import { useGetDarkWebMutation } from "@/redux/store/apiSlice";

const DarkWebAnalysisCard = ({ whoIsIpDetail, scanId }: any) => {
  const [drawer, setDrawer] = useState(false);
  const [
    executeDarkWeb,
    { data: darkWebData, isLoading: darkWebLoading, error: darkWebError },
  ] = useGetDarkWebMutation();

  useEffect(() => {
    executeDarkWeb({
      scan_id: scanId,
      use_date_filtering: false,
      days: 30,
      page_size: 100,
      page: 1,
      include_cluster_total: false,
      ip: whoIsIpDetail?.query?.ip,
    });
  }, [whoIsIpDetail?.query?.ip]);
  console.log("darkWebData", darkWebData);

  return (
    <>
      <IpDataCard title="Dark Web Analysis" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full">
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
      </IpDataCard>
      <IpDrawer
        title="Dark Web Analysis "
        drawer={drawer}
        setDrawer={setDrawer}
      ></IpDrawer>
    </>
  );
};

export default DarkWebAnalysisCard;
