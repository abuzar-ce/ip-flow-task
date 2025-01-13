"use client";
import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import {
  useDeleteScanMutation,
  useGetAllIPsQuery,
  useGetNuclieResultMutation,
  useRunNewScanMutation,
} from "@/redux/store/apiSlice";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { notification, Dropdown, Space, Pagination } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import del from "@/assets/del.svg";
import schedule from "@/assets/schedule.svg";
import scan from "@/assets/scan.svg";
import rename from "@/assets/rename.svg";

const IPtable = ({ userId, refetchTrigger }: any) => {
  const [pollingInterval, setPollingInterval] = useState(5000);
  const { data, isLoading, error, refetch } = useGetAllIPsQuery(userId, {
    pollingInterval,
  });
  const [
    deleteResult,
    { data: deleteData, isLoading: deleteLoading, error: deleteError },
  ] = useDeleteScanMutation();

  const [
    executeNewScan,
    { data: newScanData, isLoading: newScanLoading, error: newScanError },
  ] = useRunNewScanMutation();
  const [
    getNuclieResult,
    { data: nuclieData, isLoading: isNuclieLoading, error: nuclieError },
  ] = useGetNuclieResultMutation();

  useEffect(() => {
    refetch();
    console.log("refetching table");
  }, [refetchTrigger, refetch]);

  useEffect(() => {
    const scanPending = data?.some(
      (ipData: any) => ipData.status !== "Completed"
    );
    if (scanPending) {
      setPollingInterval(5000);
    } else {
      setPollingInterval(0);
    }
  }, [data]);

  const [selectedAllCheck, setSelectedAllCheck] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [searchIp, setSearchIp] = useState("");
  const router = useRouter();

  const handleSelectedCheckAll = () => {
    setSelectedAllCheck((prev) => !prev);
    if (!selectedAllCheck) {
      setSelectedRows(data?.map((item: any) => item.ip) || []); // Select all rows if 'select all' is clicked
    } else {
      setSelectedRows([]); // Deselect all rows if 'select all' is clicked again
    }
  };

  const handleRowCheckboxChange = (ipAddress: string) => {
    setSelectedRows((prevSelectedRows) => {
      const isSelected = prevSelectedRows.includes(ipAddress);
      const updatedRows = isSelected
        ? prevSelectedRows.filter((ip) => ip !== ipAddress) // Deselect the row
        : [...prevSelectedRows, ipAddress]; // Select the row

      console.log("Updated selected rows:", updatedRows);
      return updatedRows;
    });
  };

  useEffect(() => {
    // Update 'selectedAllCheck' when all rows are checked or unchecked
    if (data) {
      const allSelected =
        data.length > 0 &&
        data.every((item: any) => selectedRows.includes(item.ip));
      setSelectedAllCheck(allSelected);
    }
  }, [selectedRows, data]);

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
    if (ipData.status === "Pending" && ipData.nuclei_status !== "Pending") {
      openNotification();
    } else if (ipData.status === "Completed") {
      const scanId = ipData.scan_id;
      router.push(`/ip-address/${scanId}`);
    }
  };

  const filteredData = data?.filter((ipData: any) =>
    ipData.ip.toLowerCase().includes(searchIp.toLowerCase())
  );

  const handleRescan = async (ipAddress: any) => {
    await executeNewScan({
      ip: ipAddress,
      user_id: userId,
    }).then((data) => {
      getNuclieResult({
        domain: ipAddress,
        scan_id: data?.data?.task_id,
      });
      // console.log("new scan data", data?.data?.task_id);
    });
  };

  const deleteScanResult = async () => {
    await deleteResult({
      user_id: userId,
      ip: selectedRows,
    }).then(() => {
      refetch();
      setSelectedRows([]);
    });
  };

  //selected scan
  const runSelectedScan = async () => {
    try {
      for (const singleIp of selectedRows) {
        const scanData = await executeNewScan({
          ip: singleIp,
          user_id: userId,
        });

        if (scanData?.data?.task_id) {
          await getNuclieResult({
            domain: singleIp,
            scan_id: scanData.data.task_id,
          });
        } else {
          console.warn(`Task ID missing for IP: ${singleIp}`);
        }
      }
    } catch (error) {
      console.error("Error running selected scans:", error);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex gap-2 items-center">
          <Image src={del} alt="Delete" width={20} height={20} />
          <button onClick={deleteScanResult} className="text-gray-700">
            Delete Selected
          </button>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex gap-2 items-center">
          <Image src={scan} alt="Scan" width={20} height={20} />
          <button onClick={runSelectedScan} className="text-gray-700">
            Scan Selected
          </button>
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

  const [currentPage, setCurrentPage] = useState(1);
  // Pagination logic
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData?.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col bg-white-bg mt-5 rounded-lg">
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

      <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5 mb-3">
        <div className="overflow-x-auto ">
          <table className="w-full px-3 ">
            <thead className="w-full px-3 divide-gray-200">
              <tr>
                <th className="px-6 sm:px-3 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedAllCheck}
                    onChange={handleSelectedCheckAll}
                    className={`hover:cursor-pointer ${
                      selectedAllCheck ? "text-primary" : "text-gray-500"
                    }`}
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
              {currentData?.map((ipData: any, i: number) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#fbfbfb]" : "bg-white"
                  } py-2`}
                >
                  <td className="px-6 sm:px-3 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(ipData.ip)}
                      onChange={() => handleRowCheckboxChange(ipData.ip)}
                      className="hover:cursor-pointer"
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
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center ">
                    <span className="flex justify-center">
                      {ipData.number_of_ports === "Pending" ? (
                        <p className="spinner"></p>
                      ) : (
                        ipData.number_of_ports || "N/A"
                      )}
                    </span>
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    <span className="flex justify-center items-center">
                      {ipData.status === "Pending" ? (
                        // &&
                        // ipData.nuclei_status == "Pending"
                        <p className="spinner"></p>
                      ) : (
                        <FaCircleCheck className="text-xl text-green-500" />
                      )}
                    </span>
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    <span className="flex justify-center">
                      {ipData.owner === "Pending" ? (
                        <p className="spinner"></p>
                      ) : (
                        ipData.owner || "N/A"
                      )}
                    </span>
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    <span className="flex justify-center">
                      {ipData.country === "Pending" ? (
                        <p className="spinner"></p>
                      ) : (
                        ipData.country || "N/A"
                      )}
                    </span>
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    <span className="flex justify-center">
                      {ipData.fraud_score === "Pending" ? (
                        <p className="spinner"></p>
                      ) : (
                        ipData.fraud_score
                      )}
                    </span>
                  </td>
                  <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                    {ipData.status == "Completed" ? (
                      <button
                        className="text-primary font-bold "
                        onClick={() => {
                          handleRescan(ipData.ip);
                        }}
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
          {error ? (
            <div className="flex justify-center my-10">
              <p className="text-sm ">
                Error in fetching data, for details see logs
              </p>
            </div>
          ) : (
            ""
          )}
          {currentData?.length === 0 && !isLoading ? (
            <div className="flex justify-center my-10">
              <p className="text-sm ">No data found</p>
            </div>
          ) : (
            ""
          )}
          {currentData?.length > 10 && !isLoading ? (
            <div className="flex justify-center my-2">
              <Pagination
                showTotal={(total, range) =>
                  `Showing ${range[0]} to ${range[1]} of ${total} rows`
                }
                current={currentPage}
                pageSize={itemsPerPage}
                total={filteredData?.length}
                onChange={handlePageChange}
              />
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
