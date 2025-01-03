"use client";
import React, { useState } from "react";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";

const DarkWebAnalysisCard = () => {
  const [drawer, setDrawer] = useState(false);

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
