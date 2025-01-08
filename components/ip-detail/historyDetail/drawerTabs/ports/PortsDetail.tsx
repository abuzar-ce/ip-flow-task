"use client";
import { Pagination } from "antd";
import React, { useState } from "react";

const PortsDetail = ({ item }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const rowsPerPage = 4;
  const totalRows = item.Ports.data[0]?.ports?.length || 0;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = item.Ports.data[0]?.ports?.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="w-full border border-[#F0F0F2] rounded-[16px] overflow-hidden">
        <thead>
          <tr className="text-left py-2 !font-medium text-sm bg-white">
            <th className="p-3 text-center font-inter font-bold">Port</th>
            <th className="p-3 text-center font-inter font-bold">State</th>
            <th className="p-3 text-center font-inter font-bold">Service</th>
            <th className="p-3 text-center font-inter font-bold">
              Misconfiguration
            </th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {currentData?.map((portDetail: any, i: number) => (
            <tr
              key={i}
              className={`${i % 2 === 0 ? "bg-[#fbfbfb]" : "bg-white"} py-2`}
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
              <td className="p-3 text-center ">{portDetail?.service}</td>
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
          ))}
        </tbody>
      </table>
      {(!item?.Ports || item?.Ports?.length === 0) && (
        <p className="bg-white py-10 text-center">No data found!</p>
      )}
      <div className="flex justify-center my-2">
        <Pagination
          showTotal={(total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} items`
          }
          current={currentPage}
          pageSize={rowsPerPage}
          total={totalRows}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PortsDetail;
