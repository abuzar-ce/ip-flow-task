import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const IpCard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-3 mb-5">
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
        <div className="flex flex-col gap-3 h-full rounded-2xl bg-white-bg p-4">
          <div className="flex flex-shrink-0">
            <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
              Services and Ports
            </p>
            <button className="text-lg">
              <RiExternalLinkLine className="text-purple-900" />
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Open Ports</span>
            <span className="text-xs">12</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Collections</span>
            <span className="text-xs">12</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Services Running</span>
            <span className="text-xs">22</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Misconfigurations</span>
            <span className="text-xs">8</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-full rounded-2xl bg-white-bg p-4">
          <div className="flex flex-shrink-0">
            <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
              Vulnerabilities and Threats
            </p>
            <button className="text-lg">
              <RiExternalLinkLine className="text-purple-900" />
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Reputation Score</span>
            <span className="text-[#69BC5B] font-bold bg-[#EEF8ED] px-2 rounded-full text-xs">
              0/100
            </span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Known Vulnerabilities</span>
            <span className="text-xs">350</span>
          </div>
        </div>
        <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
          <div className="flex flex-shrink-0">
            <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
              Network Details
            </p>
            <button className="text-lg">
              <RiExternalLinkLine className="text-purple-900" />
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">VPN /Proxy Detection status</span>
            <span className="text-[#EE1600] bg-[#FDE7EE] px-2 rounded-full text-xs">
              No
            </span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">CIDR</span>
            <span className="text-xs">35.192.0.0/12</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Reverse DNS</span>
            <span className="break-words overflow-hidden text-xs">
              142.128.195.35.bc.googleusercontent.com
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
          <div className="flex flex-shrink-0">
            <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
              Technologies
            </p>
            <button className="text-lg">
              <RiExternalLinkLine className="text-purple-900" />
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">CMS</span>
            <span className="text-xs">WordPress</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">WAF Status</span>
            <span className="text-[#EE1600] bg-[#FDE7EE] px-2 rounded-full text-xs">
              Cloud Flare
            </span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">SSL/TLS Info</span>
            <span className="text-xs">TLS 1.2</span>
          </div>
        </div>
        <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
          <div className="flex flex-shrink-0">
            <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap ">
              Historical Data
            </p>
            <button className="text-lg">
              <RiExternalLinkLine className="text-purple-900" />
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs font-inter">192.168.4.2</span>
            <span className="text-xs"></span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Last Scan</span>
            <span className="text-xs">12-02-2024</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">No. of Scans</span>
            <span className="text-xs">21</span>
          </div>
        </div>
        <div className="flex flex-col gap-3  h-full rounded-2xl bg-white-bg p-4">
          <div className="flex flex-shrink-0">
            <p className="text-xs font-bold w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap">
              Dark Web Analysis
            </p>
            <button className="text-lg">
              <RiExternalLinkLine className="text-purple-900" />
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Dark Web Mentions</span>
            <span className="text-xs">5</span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Breach Status</span>
            <span className="text-[#69BC5B] font-bold bg-[#EEF8ED] px-2 rounded-full text-xs">
              Active
            </span>
          </div>
          <div className="flex  justify-between gap-3">
            <span className="text-xs">Last Detected</span>
            <span className="text-xs">2023-10-01</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpCard;
