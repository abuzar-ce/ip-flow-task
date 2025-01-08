import React from "react";
import Skeleton from "react-loading-skeleton";

const WafStatus = ({ whatWafIpResultDetail, loading, error }: any) => {
  return (
    <div className="rounded-xl bg-white-bg p-3">
      <p className="text-xs font-inter border p-3 rounded-xl">
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          whatWafIpResultDetail?.results?.["identified firewall"] && (
            <span className="text-xs">
              {whatWafIpResultDetail?.results?.["identified firewall"]}
            </span>
          )
        )}

        {!loading && error && <p className="text-xs">Data not found </p>}
      </p>
    </div>
  );
};

export default WafStatus;
