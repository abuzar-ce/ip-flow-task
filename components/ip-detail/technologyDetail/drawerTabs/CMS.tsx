import { technology } from "@/lib/ipData";
import React from "react";
import Skeleton from "react-loading-skeleton";

const CMS = ({ ipCmsEekResultDetail, loading, error }: any) => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <div className="bg-white-bg rounded-2xl ">
        <p className="font-inter font-bold text-[16px] py-2 bg-drawer-bg px-5 rounded-t-2xl">
          CMS
        </p>

        <div className="flex flex-col bg-white-bg gap-2 py-3 rounded-b-2xl">
          {loading ? (
            <Skeleton height={17} width={50} />
          ) : (
            <span className="text-xs px-5">
              {ipCmsEekResultDetail?.data?.result?.cms_name !== null &&
              ipCmsEekResultDetail?.data?.result?.cms_name !== ""
                ? ipCmsEekResultDetail?.data?.result?.cms_name
                : "Data not found"}
            </span>
          )}
          {!loading && error && <p className="text-xs">Data not found </p>}
        </div>
      </div>
    </div>
  );
};

export default CMS;
