"use client";
import Tabs from "@/components/layout/Tabs";
import React, { useState } from "react";
import NetworkDetails from "./drawerTabs/NetworkDetails";
import Ports from "./drawerTabs/ports/Ports";
import Technologies from "./drawerTabs/Technologies";
import Vulnerability from "./drawerTabs/Vulnerability";
import WHOIS from "./drawerTabs/WHOIS";

const HistoricalDataDrawer = ({ data, loading, error }: any) => {
  const [tab, setTab] = useState("whoIs");

  return (
    <div className="mt-0 relative  min-h-screen">
      <div className=" top-[64px] sm:top-11 sm:pt-2 pb-0 z-10 bg-[#FBF6FF] flex-col ">
        <div className=" max-w-[1300px] px-5 sm:px-3">
          <Tabs tabs={tabs} activeTab={tab} setActiveTab={setTab} />
        </div>
      </div>
      <div className=" w-full ">
        {tab === "network" ? (
          <NetworkDetails data={data} loading={loading} error={error} />
        ) : null}
        {tab === "ports" ? (
          <Ports data={data} loading={loading} error={error} />
        ) : null}
        {tab === "technology" ? (
          <Technologies data={data} loading={loading} error={error} />
        ) : null}
        {tab === "vulnerability" ? (
          <Vulnerability data={data} loading={loading} error={error} />
        ) : null}
        {tab === "whoIs" ? (
          <WHOIS data={data} loading={loading} error={error} />
        ) : null}
      </div>
    </div>
  );
};

export default HistoricalDataDrawer;

const tabs = [
  {
    id: 1,
    name: "WHOIS",
    value: "whoIs",
  },
  {
    id: 2,
    name: "Vulnerability",
    value: "vulnerability",
  },
  {
    id: 3,
    name: "Network Details",
    value: "network",
  },
  {
    id: 4,
    name: "Technologies",
    value: "technology",
  },
  {
    id: 5,
    name: "Ports",
    value: "ports",
  },
];
