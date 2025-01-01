"use client";
import React from "react";
import BreadCrums from "../BreadCrums";
import { ipData } from "@/lib/ipData";
import IpCard from "./IpCard";
import HeaderCard from "./HeaderCard";
import { useGetScanResultsQuery } from "@/redux/store/apiSlice";

const Detail = ({ ip }: { ip: any }) => {
  console.log("ip token:", ip);
  const { data, isLoading } = useGetScanResultsQuery(ip);
  console.log("testting data", data);

  const breadData = [
    { name: "Home", href: "/" },
    { name: "IP Address", href: "/ip-address" },
    { name: "192.168.4.2", href: "" },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between my-4">
        <div>
          <BreadCrums data={breadData} />
          <p className="font-inter text-sm">Summery</p>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row bg-white-bg p-2 rounded-2xl mb-4">
        <HeaderCard />
        {ipData.map((item: any, i: number) => {
          return (
            <div
              key={i}
              className="flex flex-col mb-2 p-4 rounded-2xl bg-white  w-full"
              style={{
                color: item.value.color,
                backgroundColor: `${item.value.color}20`,
              }}
            >
              <div className="text-lg sm:text-[35px] font-semibold w-full p-2">
                {item.value.number}
              </div>
              <p className="text-xs p-2 ">{item.name}</p>
            </div>
          );
        })}
      </div>
      <IpCard />
    </div>
  );
};

export default Detail;
