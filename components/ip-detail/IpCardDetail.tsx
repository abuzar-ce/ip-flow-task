import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const IpCardDetail = () => {
  return (
    <div className="flex flex-col gap-3 h-full rounded-2xl bg-white-bg p-4">
      <div className="flex flex-shrink-0">
        <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
          IP WHOIS
        </p>
        <button className="text-lg">
          <RiExternalLinkLine className="text-purple-900" />
        </button>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">IP Address</span>
        <span className="text-xs">192.168.4.2</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Owner</span>
        <span className="">Google</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Country</span>
        <span className="text-xs">Pakistan</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">Geolocation</span>
        <span className="text-xs">Lahore, Punjab</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">ISP</span>
        <span className="text-xs">Telecommunication</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="text-xs">ASN</span>
        <span className="text-xs">351055</span>
      </div>
    </div>
  );
};

export default IpCardDetail;
