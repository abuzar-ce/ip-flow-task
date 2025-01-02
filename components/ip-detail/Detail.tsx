"use client";
import React from "react";
import BreadCrums from "../BreadCrums";
import IpCard from "./IpCard";
import HeaderCard from "./HeaderCard";
import { useGetScanResultsQuery } from "@/redux/store/apiSlice";

const Detail = ({ ip }: { ip: any }) => {
  // console.log("ip token:", ip);
  const { data, isLoading, error } = useGetScanResultsQuery(ip);

  console.log("testting data", data);
  const rustResult = data?.results?.rust_result?.data[0];
  const whoIsIp = data?.results?.whoisip_result?.data;
  const ipInfoResult = data?.results?.ipinfo_result?.data;
  const nucleiIpResult = data?.results?.nucleiip_result;
  const ipProxyDetectorResult = data?.results?.ipproxydetector_result;
  const whatWafIpResult = data?.results?.whatwafip_result?.data;

  const breadData = [
    { name: "Home", href: "/" },
    { name: "IP Address", href: "/ip-address" },
    { name: whoIsIp?.query?.ip, href: "" },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between my-4">
        <div>
          <BreadCrums data={breadData} loading={isLoading} error={error} />
          <p className="font-inter text-sm">Summery</p>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row bg-white-bg p-2 rounded-2xl mb-4">
        <HeaderCard
          number={rustResult?.ports?.length}
          title={"Open Ports"}
          numColor={"#1757C1"}
          loading={isLoading}
          error={error}
        />
        <HeaderCard
          number={rustResult?.ports?.length}
          title={"Services Identified"}
          numColor={"#339900"}
          loading={isLoading}
          error={error}
        />
        <HeaderCard
          number={nucleiIpResult?.length}
          title={"Vulnerabilities"}
          numColor={"#EE1600"}
          loading={isLoading}
          error={error}
        />
        <HeaderCard
          number={9}
          title={"Reputation Score"}
          numColor={"#FFA620"}
          loading={isLoading}
          error={error}
        />
      </div>
      <IpCard
        rustResultDetail={rustResult}
        whoIsIpDetail={whoIsIp}
        ipInfoResultDetail={ipInfoResult}
        nucleiIpResultDetail={nucleiIpResult}
        ipProxyDetectorResultDetail={ipProxyDetectorResult}
        whatWafIpResultDetail={whatWafIpResult}
        loading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Detail;
