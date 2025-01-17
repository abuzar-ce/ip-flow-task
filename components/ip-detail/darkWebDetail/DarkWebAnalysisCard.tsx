"use client";
import React, { useEffect, useState } from "react";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";
import { useGetDarkWebMutation } from "@/redux/store/apiSlice";
import Skeleton from "react-loading-skeleton";
import { formatDateTime } from "@/lib/dateFormat";

const DarkWebAnalysisCard = ({ whoIsIpDetail, scanId }: any) => {
  const [drawer, setDrawer] = useState(false);
  const [
    executeDarkWeb,
    { data: darkWebData, isLoading: darkWebLoading, error: darkWebError },
  ] = useGetDarkWebMutation();

  useEffect(() => {
    if (whoIsIpDetail?.query?.ip) {
      executeDarkWeb({
        scan_id: scanId,
        use_date_filtering: false,
        days: 30,
        page_size: 100,
        page: 1,
        include_cluster_total: false,
        ip: whoIsIpDetail?.query?.ip,
      });
    }
  }, [whoIsIpDetail?.query?.ip]);
  console.log("darkWebData", darkWebData);

  return (
    <>
      <IpDataCard title="Dark Web Analysis" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full">
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Dark Web Mentions</span>
            {darkWebLoading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <div className="text-xs">{darkWebData?.total_hits}</div>
            )}
            {!darkWebLoading && darkWebError && (
              <p className="text-xs">Data not found </p>
            )}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Breach Status</span>
            <div>
              {darkWebData === undefined ? (
                <p className=" text-xs">Data not found</p>
              ) : darkWebData?.total_hits === 0 ? (
                <p className="text-green-500 font-bold bg-green-50 px-2 rounded-full text-xs">
                  Not breached
                </p>
              ) : darkWebData?.total_hits > 0 ? (
                <p className="text-red-500 font-bold bg-red-50 px-2 rounded-full text-xs">
                  Breached
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Last Detected</span>
            {darkWebLoading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <div className="text-xs">
                {formatDateTime(darkWebData?.last_detect)}
              </div>
            )}
            {!darkWebLoading && darkWebError && (
              <p className="text-xs">Data not found </p>
            )}
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
