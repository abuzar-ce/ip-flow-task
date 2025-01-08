"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";
import TechnologiesDrawer from "./TechnologiesDrawer";

const TechnologiesCard = ({
  whatWafIpResultDetail,
  ipCmsEekResultDetail,
  sslyzeipData,
  loading,
  error,
}: any) => {
  const [drawer, setDrawer] = useState(false);
  // const parsedData = JSON.parse(sslyzeipData);
  // console.log("SSLinfo", JSON.parse(sslyzeipData));
  // console.log("data thaaaaaaaaa", JSON.stringify(parsedData, null, 2));

  return (
    <>
      <IpDataCard title="Technologies" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3  h-full ">
          <div className="flex  justify-between gap-3">
            <span className="text-xs">CMS</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">
                {ipCmsEekResultDetail?.data?.result?.cms_name !== null &&
                ipCmsEekResultDetail?.data?.result?.cms_name !== ""
                  ? ipCmsEekResultDetail?.data?.result?.cms_name
                  : "Data not found"}
              </span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
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
              {/* {
                parsedData?.server_scan_results[0]?.connectivity_result
                  ?.highest_tls_version_supported
              } */}
            </span>
          </div>
        </div>
      </IpDataCard>
      <IpDrawer title="Technologies " drawer={drawer} setDrawer={setDrawer}>
        <TechnologiesDrawer
          whatWafIpResultDetail={whatWafIpResultDetail}
          ipCmsEekResultDetail={ipCmsEekResultDetail}
          sslyzeipData={sslyzeipData}
          loading={loading}
          error={error}
        />
      </IpDrawer>
    </>
  );
};

export default TechnologiesCard;
