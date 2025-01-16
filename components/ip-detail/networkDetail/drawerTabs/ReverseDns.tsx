import React from "react";
import Skeleton from "react-loading-skeleton";

const ReverseDns = ({ firstReverseDnsValue, loading, error }: any) => {
  return (
    <div className="rounded-xl bg-white-bg p-3">
      <p className="text-xs font-inter border p-3 rounded-xl">
        {loading ? (
          <Skeleton height={17} width={50} />
        ) : (
          <div className="text-xs">
            {firstReverseDnsValue}
            {firstReverseDnsValue === null && <p>Data not found</p>}
          </div>
        )}
        {!loading && error && <p className="text-xs">Data not found </p>}
      </p>
    </div>
  );
};

export default ReverseDns;
