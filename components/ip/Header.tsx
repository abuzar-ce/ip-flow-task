"use client";
import React, { useState } from "react";
import BreadCrums from "../layout/BreadCrums";
import {
  useGetNuclieResultMutation,
  useRunNewScanMutation,
} from "@/redux/store/apiSlice";
import { notification } from "antd";

const Header = ({ userId, setRefetchTrigger }: any) => {
  const breadData = [
    { name: "Home", href: "/" },
    { name: "IP Address", href: "" },
  ];
  const [ipTyped, setIpTyped] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpTyped(e.target.value);
  };
  const [
    executeNewScan,
    { data: newScanData, isLoading: newScanLoading, error: newScanError },
  ] = useRunNewScanMutation();
  const [
    getNuclieResult,
    { data: nuclieData, isLoading: isNuclieLoading, error: nuclieError },
  ] = useGetNuclieResultMutation();

  // useEffect(() => {
  //   const fetchNuclieResult = async () => {
  //     if (newScanData?.task_id && ipTyped) {
  //       try {
  //         await getNuclieResult({
  //           domain: ipTyped,
  //           scan_id: newScanData.task_id,
  //         });
  //       } catch (error) {
  //         console.error("Error fetching Nuclie result:", nuclieError);
  //       }
  //     }
  //   };
  //   fetchNuclieResult();
  // }, [newScanData?.task_id, ipTyped, nuclieError]);

  const openNotification = () => {
    notification.open({
      message: "Invalid input",
      description:
        "Ip address or user_id is invalid. Please enter a valid ip address.",
      duration: 3,
      placement: "topRight",
    });
  };

  const handleClicked = async () => {
    if (!userId || !ipTyped) {
      openNotification();
    }
    await executeNewScan({
      ip: ipTyped,
      user_id: userId,
    }).then((data) => {
      getNuclieResult({
        domain: ipTyped,
        scan_id: data?.data?.task_id,
      }).then((data) => {
        console.log("nuclie executed thaaaaa", data);
      });
      // console.log("new scan data", data?.data?.task_id);
    });
    setRefetchTrigger((prev: any) => !prev);
    // console.log("Scan executed successfully:", newScanData);
    setIpTyped("");
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-between py-3">
        <BreadCrums
          data={breadData}
          loading={newScanLoading}
          error={newScanError}
        />
        <p>IP Address</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 bg-white-bg rounded-lg">
        <input
          value={ipTyped}
          type="text"
          placeholder="35.192.128.142"
          onChange={handleInput}
          className="px-4 py-3 bg-gray-bg m-2 rounded-lg lg:w-[90%]"
        />
        <button
          className="text-sm px-6 py-3 lg:w-[10%] text-gray-bg font-semibold bg-ip-button-grad m-2 rounded-lg"
          onClick={handleClicked}
        >
          Add IP
        </button>
      </div>
    </div>
  );
};

export default Header;
