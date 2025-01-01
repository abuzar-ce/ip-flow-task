"use client";
import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useGetAllIPsQuery } from "@/redux/store/apiSlice";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { notification, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import del from "@/assets/del.svg";
import schedule from "@/assets/schedule.svg";
import scan from "@/assets/scan.svg";
import rename from "@/assets/rename.svg";

const IPtable = () => {
  const [pollingInterval, setPollingInterval] = useState(5000);
  const { data, isLoading } = useGetAllIPsQuery(undefined, {
    pollingInterval,
  });

  useEffect(() => {
    const scanPending = data?.some((ipData) => ipData.status !== "Completed");
    if (scanPending) {
      setPollingInterval(5000);
    } else {
      setPollingInterval(0);
    }
  }, [data]);
  // console.log("testing query", data);

  // useEffect(() => {
  //   console.log("testing query", data);
  // }, []);
  const [selectedAllCheck, setSelectedAllCheck] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchIp, setSearchIp] = useState("");
  const router = useRouter();

  const handleSelectedCheckAll = () => {
    setSelectedAllCheck((prev) => !prev);
    if (!selectedAllCheck) {
      setSelectedRows(data?.map((_, index) => index) || []); // Select all rows if 'select all' is clicked
    } else {
      setSelectedRows([]); // Deselect all rows if 'select all' is clicked again
    }
  };

  const handleRowCheckboxChange = (index: number) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(index)) {
        // Deselect the row
        const updatedRows = prevSelectedRows.filter((i) => i !== index);
        // Update "Select All" checkbox based on whether all rows are selected
        setSelectedAllCheck(updatedRows.length === data?.length);
        return updatedRows;
      } else {
        // Select the row
        const updatedRows = [...prevSelectedRows, index];
        // Update "Select All" checkbox based on whether all rows are selected
        setSelectedAllCheck(updatedRows.length === data?.length);
        return updatedRows;
      }
    });
  };

  const openNotification = () => {
    notification.open({
      message: "Scan is running",
      description:
        "The scan process for this IP address is currently in progress.",
      duration: 2,
      placement: "topRight",
    });
  };

  const handleViewClick = (ipData: any) => {
    if (ipData.status === "Pending") {
      openNotification();
    } else if (ipData.status === "Completed") {
      const scanId = ipData.scan_id;
      router.push(`/ip-address/${scanId}`);
    }
  };

  const filteredData = data?.filter((ipData) =>
    ipData.ip.toLowerCase().includes(searchIp.toLowerCase())
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex gap-2 items-center">
          <Image src={del} alt="Delete" width={20} height={20} />
          <button className="text-gray-700">Delete Selected</button>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex gap-2 items-center">
          <Image src={scan} alt="Scan" width={20} height={20} />
          <button className="text-gray-700">Scan Selected</button>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex gap-2 items-center">
          <Image src={schedule} alt="Schedule" width={20} height={20} />
          <button className="text-gray-700">Schedule Selected</button>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="flex gap-2 items-center">
          <Image src={rename} alt="Rename" width={20} height={20} />
          <button className="text-gray-700">Rename Selected</button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col px-1 bg-white-bg mt-5 rounded-lg">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search IP"
          className="px-4 py-3 bg-gray-bg m-2 rounded-lg w-full"
          onChange={(e) => {
            setSearchIp(e.target.value);
          }}
          value={searchIp}
        />
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <FaEllipsisV className="text-icon cursor-pointer text-primary text-2xl" />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div className="bg-white-bg rounded-lg overflow-hidden h-auto flex flex-col gap-5">
        <div className="overflow-x-auto ">
          <table className="w-full px-3 ">
            <thead className="w-full px-3 divide-gray-200">
              <tr>
                <th className="px-6 sm:px-3 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedAllCheck}
                    onChange={handleSelectedCheckAll}
                  />
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Scource
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  IP Address
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Open Ports
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Scan Status
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Owner
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Country
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Score
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Scan
                </th>
                <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                  Results
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 w-full text-gray-500 text-xs">
              {filteredData?.map((ipData, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#fbfbfb]" : "bg-white"
                  } py-2`}
                >
                  <td className="px-6 sm:px-3 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(i)}
                      onChange={() => handleRowCheckboxChange(i)}
                    />
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center ">
                    <p className="text-blue-500 bg-blue-50 rounded-full py-1 px-3 inline-block">
                      IP
                    </p>
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    {ipData.ip}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    {ipData.number_of_ports || "N/A"}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center flex justify-center items-center">
                    {ipData.status === "Pending" ? (
                      <p className="spinner"></p>
                    ) : (
                      <FaCircleCheck className="text-xl text-green-500" />
                    )}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    {ipData.owner}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    {ipData.country}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center flex justify-center items-center">
                    {ipData.fraud_score === "Pending" ? (
                      <p className="spinner"></p>
                    ) : (
                      ipData.fraud_score
                    )}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    {ipData.status == "Completed" ? (
                      <button
                        className="text-primary font-bold "
                        // onClick={() => {
                        //   handleRescan(ipData);
                        // }}
                      >
                        Rescan
                      </button>
                    ) : (
                      "Scanning"
                    )}
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap flex justify-center items-center">
                    <IoEyeSharp
                      className="text-primary text-xl hover:cursor-pointer"
                      onClick={() => {
                        handleViewClick(ipData);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading ? (
            <div className="flex justify-center my-10">
              <p className="text-sm ">Loading</p>
            </div>
          ) : (
            ""
          )}
          {filteredData?.length === 0 && !isLoading ? (
            <div className="flex justify-center my-10">
              <p className="text-sm ">No data found</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default IPtable;
