import Detail from "@/components/ip-detail/Detail";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  const token = params.slug;
  return (
    <div className="px-5 lg:px-10 bg-gray-bg min-h-svh max-w-[1440px] mx-auto">
      <p>this is slug {token}</p>
      <Detail ip={token} />
    </div>
  );
};

export default page;
