"use client";
import { formatDateTime } from "@/lib/dateFormat";
import { Pagination } from "antd";
import React, { useState } from "react";
import PortsDetail from "./PortsDetail";

const Ports = ({ data, loading, error }: any) => {
  // State to keep track of the expanded table
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index: any) => {
    // If the table is already expanded, collapse it; otherwise, expand it
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  // Pagination logic
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white-bg rounded-2xl ">
      <div className="overflow-x-auto ">
        {currentData?.map((item: any, i: number) => (
          <div key={i}>
            <div className="flex justify-between items-center p-5 bg-[#FBFBFB]">
              <button onClick={() => toggleExpand(i)}>
                <span className="border border-gray-600 rounded-full h-4 aspect-square flex items-center justify-center text-sm">
                  {expandedIndex === i ? "-" : "+"}
                </span>
              </button>
              <div className="font-inter font-bold text-xs">Scan Completed</div>
              <div className="font-inter text-xs">
                {formatDateTime(item.Completed_At)}
              </div>
            </div>
            <div
              className={`overflow-x-auto primary-scrollbar border border-[#F0F0F2] rounded-[16px] overflow-hidden w-full transition-max-h duration-500 ${
                expandedIndex === i ? "max-h-[2500px]" : "max-h-0"
              }`}
            >
              <PortsDetail item={item} />
              {/* <table className="w-full border border-[#F0F0F2] rounded-[16px] overflow-hidden">
                <thead>
                  <tr className="text-left py-2 !font-medium text-sm bg-white">
                    <th className="p-3 text-center font-inter font-bold">
                      Port
                    </th>
                    <th className="p-3 text-center font-inter font-bold">
                      State
                    </th>
                    <th className="p-3 text-center font-inter font-bold">
                      Service
                    </th>
                    <th className="p-3 text-center font-inter font-bold">
                      Misconfiguration
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {item.Ports.data[0]?.ports?.map(
                    (portDetail: any, i: number) => (
                      <tr
                        key={i}
                        className={`${
                          i % 2 === 0 ? "bg-[#fbfbfb]" : "bg-white"
                        } py-2`}
                      >
                        <td className="p-3 text-center">{portDetail?.port}</td>
                        <td className="p-3 text-center">
                          <span
                            className={`${
                              portDetail?.state === "open"
                                ? "text-red-text bg-red-bg"
                                : "text-green-text bg-green-bg"
                            }  px-2 rounded-full`}
                          >
                            {portDetail?.state}
                          </span>
                        </td>
                        <td className="p-3 text-center ">
                          {portDetail?.service}
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`${
                              portDetail?.misconfiguration === "no"
                                ? "text-green-text bg-green-bg"
                                : "text-red-text bg-red-bg"
                            }  px-2 rounded-full`}
                          >
                            {portDetail?.misconfiguration}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table> */}

              {(!item?.Ports || item?.Ports?.length === 0) && (
                <p className="bg-white py-10 text-center">No data found!</p>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-center my-2">
          <Pagination
            showTotal={(total, range) =>
              `Showing ${range[0]} to ${range[1]} of ${total} items`
            }
            current={currentPage}
            pageSize={itemsPerPage}
            total={data.length}
            onChange={handlePageChange}
          />
        </div>
        {loading ? (
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
      </div>
    </div>
  );
};

export default Ports;
