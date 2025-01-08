import { sslInfo } from "@/lib/ipData";
import React from "react";

const SslInfo = ({ sslyzeipData }: any) => {
  // console.log("SSLinfo", JSON.parse(sslyzeipData));
  const parsedData = JSON.parse(sslyzeipData);
  console.log("hahaha", parsedData);
  console.log("data thaaaaaaaaa", JSON.stringify(parsedData, null, 2));

  return (
    <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5">
      <div className="overflow-x-auto ">
        <table className="w-full px-3 ">
          <thead className="w-full px-3  divide-y divide-gray-100">
            <tr>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Name
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Values
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 w-full text-xs">
            {sslInfo.map((item: any, i: number) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-drawer-bg" : "bg-white"
                } border-b`}
              >
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.name}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {loading ? (
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
          )} */}
      </div>
    </div>
  );
};

export default SslInfo;
