import { Skeleton } from "antd";
import React from "react";

const Vpn = ({ vpnStatus, loading, error }: any) => {
  return (
    <div className="rounded-xl bg-white-bg p-3">
      {loading ? (
        <Skeleton />
      ) : (
        <span className="text-xs">
          {vpnStatus && (
            <div className="flex justify-between border p-3 rounded-xl">
              <p className="text-xs font-inter">{vpnStatus}</p>
              <p
                className={`text-xs font-inter  ${
                  vpnStatus
                    ? "text-[#69BC5B] bg-[#EEF8ED] py-1 px-2 rounded-full"
                    : "text-[#EE1600] bg-[#FDE7EE] py-1 px-2 rounded-full"
                }`}
              >
                {vpnStatus ? "Yes" : "No"}
              </p>
            </div>
          )}
        </span>
      )}
      {!loading && error && <p className="text-xs">Data not found </p>}
    </div>
  );
};

export default Vpn;
