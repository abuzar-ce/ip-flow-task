import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "@/assets/ceo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 max-w-[1440px] mx-auto mt-5 lg:mt-2">
      <p className="text-primary">Attack Insights</p>
      <div className="flex items-center justify-between gap-6 my-1">
        <IoIosNotificationsOutline className="text-primary text-2xl" />
        <button className="px-5 py-2 text-primary text-sm border border-primary rounded-lg">
          Feedback
        </button>
        <button className="px-5 py-2 text-primary text-sm">Docs</button>
        <button className="px-5 py-2 text-primary text-sm">Changelog</button>
        <Image
          src={logo}
          height={30}
          width={30}
          className="rounded-full"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
