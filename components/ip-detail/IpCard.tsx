import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import NetworkDetailCard from "./NetworkDetailCard";
import ServicesAndPortsCard from "./ServicesAndPortsCard";
import TechnologiesCard from "./TechnologiesCard";
import VulnerabilitiesAndThreatsCard from "./VulnerabilitiesAndThreatsCard";
import WhoIsIpCard from "./WhoIsIpCard";
import HistoricalDataCard from "./HistoricalDataCard";
import DarkWebAnalysisCard from "./DarkWebAnalysisCard";

const IpCard = ({
  rustResultDetail,
  whoIsIpDetail,
  ipInfoResultDetail,
  nucleiIpResultDetail,
  ipProxyDetectorResultDetail,
  whatWafIpResultDetail,
  loading,
  error,
}: any) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-3 mb-5">
        <WhoIsIpCard
          whoIsIpDetail={whoIsIpDetail}
          ipInfoResultDetail={ipInfoResultDetail}
          loading={loading}
          error={error}
        />
        <VulnerabilitiesAndThreatsCard
          nucleiIpResultDetail={nucleiIpResultDetail}
          loading={loading}
          error={error}
        />
        <ServicesAndPortsCard
          rustResultDetail={rustResultDetail}
          loading={loading}
          error={error}
        />
        <NetworkDetailCard
          ipProxyDetectorResultDetail={ipProxyDetectorResultDetail}
          whoIsIpDetail={whoIsIpDetail}
          loading={loading}
          error={error}
        />
        <TechnologiesCard
          whatWafIpResultDetail={whatWafIpResultDetail}
          loading={loading}
          error={error}
        />
        <HistoricalDataCard
          whoIsIpDetail={whoIsIpDetail}
          loading={loading}
          error={error}
        />
        <DarkWebAnalysisCard />
      </div>
    </>
  );
};

export default IpCard;
