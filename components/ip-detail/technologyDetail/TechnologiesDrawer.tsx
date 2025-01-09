"use client";
import Tabs from "@/components/layout/Tabs";
import React, { useState } from "react";
import CMS from "./drawerTabs/CMS";
import WafStatus from "./drawerTabs/WafStatus";
import SslInfo from "./drawerTabs/SslInfo";

const TechnologiesDrawer = ({
  ipCmsEekResultDetail,
  whatWafIpResultDetail,
  sslyzeipData,
  loading,
  error,
}: any) => {
  const [tab, setTab] = useState("cms");

  return (
    <div className="mt-0 relative  min-h-screen">
      <div className=" top-[64px] sm:top-11 sm:pt-2 pb-0 z-10 bg-[#FBF6FF] flex-col ">
        <div className=" max-w-[1300px] px-5 sm:px-3">
          <Tabs tabs={tabs} activeTab={tab} setActiveTab={setTab} />
        </div>
      </div>
      <div className=" w-full ">
        {tab === "cms" ? (
          <CMS
            ipCmsEekResultDetail={ipCmsEekResultDetail}
            loading={loading}
            error={error}
          />
        ) : null}
        {tab === "wafStatus" ? (
          <WafStatus
            whatWafIpResultDetail={whatWafIpResultDetail}
            loading={loading}
            error={error}
          />
        ) : null}
        {tab === "sslInfo" ? (
          <SslInfo
            sslyzeipData={sslyzeipData}
            loading={loading}
            error={error}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TechnologiesDrawer;

const tabs = [
  {
    id: 1,
    name: "CMS",
    value: "cms",
  },
  {
    id: 2,
    name: "WAF Status",
    value: "wafStatus",
  },
  {
    id: 3,
    name: "SSL/TLS Info",
    value: "sslInfo",
  },
];
