"use client";
import Tabs from "@/components/layout/Tabs";
import React, { useState } from "react";
import ReverseDns from "./drawerTabs/ReverseDns";
import Vpn from "./drawerTabs/Vpn";

const NetworkDetailDrawer = ({
  vpnStatus,
  firstReverseDnsValue,
  loading,
  error,
}: any) => {
  const [tab, setTab] = useState("reverseDns");

  return (
    <div className="mt-0 relative  min-h-screen">
      <div className=" top-[64px] sm:top-11 sm:pt-2 pb-0 z-10 bg-[#FBF6FF] flex ">
        <div className=" max-w-[1300px]   px-5 sm:px-3">
          <Tabs tabs={tabs} activeTab={tab} setActiveTab={setTab} />
        </div>
      </div>
      <div className=" w-full ">
        {tab === "reverseDns" ? (
          <ReverseDns
            firstReverseDnsValue={firstReverseDnsValue}
            loading={loading}
            error={error}
          />
        ) : null}
        {tab === "vpn" ? (
          <Vpn vpnStatus={vpnStatus} loading={loading} error={error} />
        ) : null}
      </div>
    </div>
  );
};

export default NetworkDetailDrawer;

const tabs = [
  {
    id: 1,
    name: "Reverse DNS",
    value: "reverseDns",
  },
  {
    id: 2,
    name: "VPN/ Proxy Detection Status",
    value: "vpn",
  },
];
