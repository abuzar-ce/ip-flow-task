import React from "react";
import NetworkDetailCard from "./networkDetail/NetworkDetailCard";
import ServicesAndPortsCard from "./servicesDetail/ServicesAndPortsCard";
import TechnologiesCard from "./technologyDetail/TechnologiesCard";
import VulnerabilitiesAndThreatsCard from "./vulnerabilityDetail/VulnerabilitiesAndThreatsCard";
import WhoIsIpCard from "./ipWhois/WhoIsIpCard";
import HistoricalDataCard from "./historyDetail/HistoricalDataCard";
import DarkWebAnalysisCard from "./darkWebDetail/DarkWebAnalysisCard";

const IpCard = ({
  rustResultDetail,
  whoIsIpDetail,
  ipReputationScoreResultDetail,
  ipInfoResultDetail,
  nucleiIpResultDetail,
  ipProxyDetectorResultDetail,
  whatWafIpResultDetail,
  ipCmsEekResultDetail,
  firstReverseDnsValue,
  loading,
  error,
}: any) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-3 mb-5">
        <WhoIsIpCard
          whoIsIpDetail={whoIsIpDetail}
          ipInfoResultDetail={ipInfoResultDetail}
          ipReputationScoreResultDetail={ipReputationScoreResultDetail}
          loading={loading}
          error={error}
        />
        <VulnerabilitiesAndThreatsCard
          nucleiIpResultDetail={nucleiIpResultDetail}
          ipReputationScoreResultDetail={ipReputationScoreResultDetail}
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
          firstReverseDnsValue={firstReverseDnsValue}
          loading={loading}
          error={error}
        />
        <TechnologiesCard
          whatWafIpResultDetail={whatWafIpResultDetail}
          ipCmsEekResultDetail={ipCmsEekResultDetail}
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
