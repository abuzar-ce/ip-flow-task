"use client";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import IpDataCard from "../IpDataCard";
import IpDrawer from "../IpDrawer";
import ServicesAndPortsDrawer from "./ServicesAndPortsDrawer";

const ServicesAndPortsCard = ({ rustResultDetail, loading, error }: any) => {
  // console.log("details", rustResultDetail);
  const misconfigurationsCount = rustResultDetail?.ports?.filter(
    (item: any) => item.misconfiguration === "yes"
  ).length;
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <IpDataCard title="Services and Ports" setDrawer={setDrawer}>
        <div className="flex flex-col gap-3 h-full ">
          <div className="flex justify-between gap-3">
            <span className="text-xs">Open Ports</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">{rustResultDetail?.ports?.length}</span>
            )}
            {!loading && error && <p className="text-xs">Data not found</p>}
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-xs">Collections</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">{rustResultDetail?.ports?.length}</span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-xs">Misconfigurations</span>
            {loading ? (
              <Skeleton height={17} width={50} />
            ) : (
              <span className="text-xs">{misconfigurationsCount}</span>
            )}
            {!loading && error && <p className="text-xs">Data not found </p>}
          </div>
        </div>
      </IpDataCard>
      <IpDrawer
        title="Services and Ports"
        drawer={drawer}
        setDrawer={setDrawer}
      >
        <ServicesAndPortsDrawer
          detail={rustResultDetail}
          loading={loading}
          error={error}
        />
      </IpDrawer>
    </>
  );
};

export default ServicesAndPortsCard;
