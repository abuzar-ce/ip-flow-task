import React from "react";

const ServicesAndPortsDrawer = ({ detail, loading, error }: any) => {
  const data = detail?.ports;
  // console.log(detail);

  return (
    <div className="bg-white-bg rounded-2xl overflow-hidden h-auto flex flex-col gap-5">
      <div className="overflow-x-auto ">
        <table className="w-full px-3 ">
          <thead className="w-full px-3  divide-y divide-gray-100">
            <tr>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Port
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                State
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Service
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Version
              </th>
              <th className="px-6 sm:px-3 py-3  text-center text-sm font-semibold  tracking-wider ">
                Misconfiguration
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 w-full text-gray-500 text-xs">
            {detail?.ports?.map((item: any, i: number) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-drawer-bg" : "bg-white"
                } border-b`}
              >
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.port}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.state}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.service}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.version}
                </td>
                <td className="px-6 sm:px-3 py-4 whitespace-nowrap text-center w-1/4">
                  {item.misconfiguration}
                </td>
              </tr>
            ))}
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

export default ServicesAndPortsDrawer;
