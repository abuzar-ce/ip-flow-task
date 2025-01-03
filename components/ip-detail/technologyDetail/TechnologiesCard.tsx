"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";

const TechnologiesCard = ({
  whatWafIpResultDetail,
  ipCmsEekResultDetail,
  loading,
  error,
}: any) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <IpDataCard title="Technologies" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full ">
          <div className="flex  justify-between gap-3">
            <span className="text-xs">CMS</span>
            <span className="text-xs">
              {ipCmsEekResultDetail?.data?.result?.cms_name || "No data found"}
            </span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">WAF Status</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              whatWafIpResultDetail?.results?.["identified firewall"] && (
                <span className="text-[#EE1600] bg-[#FDE7EE] px-2 rounded-full text-xs">
                  {whatWafIpResultDetail?.results?.["identified firewall"]}
                </span>
              )
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">SSL/TLS Info</span>
            <span className="text-xs">
              Endpoint not mentioned in docs properly
            </span>
          </div>
        </div>
      </IpDataCard>
      <IpDrawer
        title="Technologies "
        drawer={drawer}
        setDrawer={setDrawer}
      ></IpDrawer>
    </>
  );
};

export default TechnologiesCard;
