"use client";
import { Pagination } from "antd";
import React, { useState } from "react";

const WhoIsIpDrawer = ({ detail, loading, error }: any) => {
  const data = detail?.response?.parsed_rawdata;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Ensure data is an array of entries
  const entries = Object.entries(data || {});

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = entries.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5">
      <div className="overflow-x-auto">
        <table className="w-full px-3">
          <thead className="w-full px-3 divide-y divide-gray-100">
            <tr>
              <th className="px-6 sm:px-3 py-3 text-center text-sm font-semibold tracking-wider">
                Name
              </th>
              <th className="px-6 sm:px-3 py-3 text-center text-sm font-semibold tracking-wider">
                Values
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 w-full text-gray-500 text-xs">
            {currentData.map(([key, value], index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-drawer-bg" : "bg-white"
                } border-b`}
              >
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                  {key}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center">
                  {typeof value === "string" ? value : JSON.stringify(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {entries.length > 0 && (
          <div className="flex justify-center my-2">
            <Pagination
              showTotal={(total, range) =>
                `Showing ${range[0]} to ${range[1]} of ${total} items`
              }
              current={currentPage}
              pageSize={itemsPerPage}
              total={entries.length} // Total number of entries
              onChange={handlePageChange}
            />
          </div>
        )}

        {loading && (
          <div className="flex justify-center my-10">
            <p className="text-sm">Loading</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center my-10">
            <p className="text-sm">
              Error in fetching data, for details see logs
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoIsIpDrawer;
