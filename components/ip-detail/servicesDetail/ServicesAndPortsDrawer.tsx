"use client";
import { Pagination } from "antd";
import React, { useState } from "react";

const ServicesAndPortsDrawer = ({ detail, loading, error }: any) => {
  const data = detail[0]?.ports;
  // console.log(detail);
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
    <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5">
      <div className="overflow-x-auto ">
        <table className="w-full px-3 ">
          <thead className="w-full px-3  divide-y divide-gray-100">
            <tr>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Port
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider w-1/4">
                State
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Service
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Version
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider w-1/4">
                Misconfiguration
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 w-full text-gray-500 text-xs">
            {currentData?.map((item: any, i: number) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-drawer-bg" : "bg-white"
                } border-b`}
              >
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.port}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center flex justify-center">
                  <p
                    className={`rounded-full w-1/2 py-1 ${
                      item.state === "open"
                        ? "text-green-text bg-green-bg"
                        : "text-red-text bg-red-bg"
                    }`}
                  >
                    {item.state}
                  </p>
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.service}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.version}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center flex justify-center ">
                  <p
                    className={`rounded-full w-1/2 py-1 ${
                      item.misconfiguration === "no"
                        ? "text-green-text bg-green-bg"
                        : "text-red-text bg-red-bg"
                    }`}
                  >
                    {item.misconfiguration}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {detail[0]?.port && (
          <div className="my-10 ">
            <p className="text-xs text-center items-center"> Data not found</p>
          </div>
        )}
        {data?.length > 10 && !loading ? (
          <div className="flex justify-center my-2">
            <Pagination
              showTotal={(total, range) =>
                `Showing ${range[0]} to ${range[1]} of ${total} items`
              }
              current={currentPage}
              pageSize={itemsPerPage}
              total={data?.length}
              onChange={handlePageChange}
            />
          </div>
        ) : (
          ""
        )}
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

export default ServicesAndPortsDrawer;
