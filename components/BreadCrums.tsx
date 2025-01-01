import React from "react";
import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

interface BreadCrumsProps {
  data: BreadcrumbItem[];
}

const BreadCrums: React.FC<BreadCrumsProps> = ({ data }) => {
  return (
    <div className="flex gap-1 items-center">
      {data.map((item, i) =>
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
