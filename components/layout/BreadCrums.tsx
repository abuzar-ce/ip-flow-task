import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

interface BreadCrumsProps {
  data: BreadcrumbItem[];
  loading: any;
  error: any;
}

const BreadCrums: React.FC<BreadCrumsProps> = ({ data, loading, error }) => {
  return (
    <div className="flex gap-1 items-center">
      {data.map((item, i) =>
        item.href ? (
          <span key={i} className="text-sm text-gray-600">
            <Link href={item.href}> {item.name}</Link> &gt;
          </span>
        ) : loading ? (
          <Skeleton height={17} width={100} key={i} />
        ) : (
          <>
            <span key={i} className="text-sm font-semibold">
              {item.name}
            </span>
            {!loading && error && (
              <p className="text-sm font-semibold mb-1">N/A </p>
            )}
          </>
        )
      )}
    </div>
  );
};

export default BreadCrums;
