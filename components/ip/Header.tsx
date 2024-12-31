import React from "react";
import BreadCrums from "../BreadCrums";

const Header = () => {
  const breadData = [
    { name: "Home", href: "/" },
    { name: "IP Address", href: "" },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-between py-3">
        <BreadCrums data={breadData} />
        <p>IP Address</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 bg-white-bg rounded-lg">
        <input
          type="text"
          placeholder="35.192.128.142"
          className="px-4 py-3 bg-gray-bg m-2 rounded-lg lg:w-[90%]"
        />
        <button className="text-sm px-6 py-3 lg:w-[10%] text-gray-bg font-semibold bg-ip-button-grad m-2 rounded-lg">
          Add IP
        </button>
      </div>
    </div>
  );
};

export default Header;
