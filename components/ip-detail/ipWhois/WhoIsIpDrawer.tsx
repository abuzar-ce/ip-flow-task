import React from "react";

const WhoIsIpDrawer = ({ detail, loading, error }: any) => {
  const data = detail?.response?.parsed_rawdata;
  // console.log("data", data);

  return (
    <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5">
      <div className="overflow-x-auto ">
        <table className="w-full px-3 ">
          <thead className="w-full px-3  divide-y divide-gray-100">
            <tr>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                Name
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider">
                Values
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 w-full text-gray-500 text-xs">
            {Object?.entries(data)?.map(([key, value], index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-drawer-bg" : "bg-white"
                } border-b`}
              >
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center ">
                  {key}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center ">
                  {typeof value === "string" ? value : JSON.stringify(value)}
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
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

export default WhoIsIpDrawer;
