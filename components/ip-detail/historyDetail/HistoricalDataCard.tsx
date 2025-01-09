"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";
import { useGetHistoryResultsQuery } from "@/redux/store/apiSlice";
import HistoricalDataDrawer from "./HistoricalDataDrawer";

const HistoricalDataCard = ({ whoIsIpDetail, loading, errors }: any) => {
  const userID = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  const ip = whoIsIpDetail?.query?.ip;
  const { data, isLoading, error } = useGetHistoryResultsQuery({
    user_id: userID,
    ip: ip,
  });
  // console.log("history", data);

  const lastScanDate = data?.[0]?.Completed_At;

  const [drawer, setDrawer] = useState(false);
  const formatDateTime = (dateString: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `${formattedDate}, ${formattedTime}`;
  };

  return (
    <>
      <IpDataCard title="Historical Data" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full">
          <div className="flex  justify-between gap-3">
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs font-inter text-[#6B7280]">
                {whoIsIpDetail?.query?.ip !== null &&
                whoIsIpDetail?.query?.ip !== ""
                  ? whoIsIpDetail?.query?.ip
                  : "Data not found"}
              </span>
            )}
            {!loading && errors && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Last Scan</span>
            {isLoading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs font-inter ">
                {lastScanDate !== null && lastScanDate !== ""
                  ? formatDateTime(lastScanDate)
                  : ""}
              </span>
            )}
            {!isLoading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">No. of Scans</span>
            {isLoading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs font-inter ">
                {data?.length !== null && data?.length !== ""
                  ? data?.length
                  : "Data not found"}
              </span>
            )}
            {!isLoading && error && <p className="text-xs">Data not found </p>}
          </div>
        </div>
      </IpDataCard>
      <IpDrawer title="Historical Data " drawer={drawer} setDrawer={setDrawer}>
        <HistoricalDataDrawer data={data} loading={isLoading} error={error} />
      </IpDrawer>
    </>
  );
};

export default HistoricalDataCard;
