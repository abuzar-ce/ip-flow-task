import React from "react";
import Skeleton from "react-loading-skeleton";

const HeaderCard = ({
  number,
  title,
  numColor,
  loading,
  error,
}: {
  number: number;
  title: string;
  numColor: string;
  loading: any;
  error: any;
}) => {
  return (
    <div
      className="flex flex-col mb-2 p-4 rounded-2xl bg-white  w-full"
      style={{ backgroundColor: `${numColor}20` }}
    >
      {loading ? (
        <Skeleton height={40} width={60} />
      ) : (
        <div
          className="text-lg sm:text-[35px] font-semibold w-full p-2"
          style={{ color: numColor }}
        >
          {number ? number : 0}
        </div>
      )}
      {!loading && error && (
        <p className="text-lg sm:text-[35px] font-semibold mb-1">N/A </p>
      )}

      <p className="text-xs p-2 " style={{ color: numColor }}>
        {title}
      </p>
    </div>
  );
};

export default HeaderCard;
