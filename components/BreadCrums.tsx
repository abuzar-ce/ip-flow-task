import React from "react";
import Link from "next/link";

const BreadCrums = ({ data }: any) => {
  return (
    <div className="flex gap-1 items-center">
      {data.map((item: any, i: number) =>
        item.href ? (
          <span key={i} className="text-sm text-gray-600">
            <Link href={item.href}> {item.name}</Link> &gt;
          </span>
        ) : (
          <span key={i} className="text-sm font-semibold">
            {item.name}
          </span>
        )
      )}
    </div>
  );
};

export default BreadCrums;
