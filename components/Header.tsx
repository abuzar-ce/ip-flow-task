import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "@/assets/ceo.png";
import Image from "next/image";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Setting
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logout
        </a>
      ),
    },
  ];
  return (
    <div className="flex justify-between items-center px-5 max-w-[1440px] mx-auto mt-5 lg:mt-2">
      <p className="text-primary">Attack Insights</p>
      <HiMenuAlt3
        size={30}
        className="lg:hidden cursor-pointer text-primary"
        onClick={() => setDrawerOpen(true)}
      />
      <div className="hidden  lg:flex items-center justify-between gap-6 my-1">
        <IoIosNotificationsOutline className="text-primary text-2xl" />
        <button className="px-5 py-2 text-primary text-sm border border-primary rounded-lg">
          Feedback
        </button>
        <button className="px-5 py-2 text-primary text-sm">Docs</button>
        <button className="px-5 py-2 text-primary text-sm">Changelog</button>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Image
                src={logo}
                height={30}
                width={30}
                className="rounded-full hover:cursor-pointer"
                alt="logo"
              />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* Side Drawer for Mobile and Tablet */}
      <div
        className={`fixed top-0 right-0 w-64 bg-gray-50 h-full shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`} // Show on mobile and tablet
      >
        <div className=" p-4">
          <AiOutlineClose
            size={30}
            className="cursor-pointer text-primary"
            onClick={() => setDrawerOpen(false)}
          />
          <nav className="p-4 space-y-4">
            <Image
              src={logo}
              height={30}
              width={30}
              className="rounded-full hover:cursor-pointer"
              alt="logo"
            />
            <a href="#" className="block text-primary">
              Feedback
            </a>
            <a href="#" className="block text-primary">
              Docs
            </a>
            <a href="#" className="block text-primary">
              Changelog
            </a>
            <a href="#" className="block text-primary">
              Profile
            </a>
            <a href="#" className="block text-primary">
              Setting
            </a>
            <a href="#" className="block text-primary">
              Logout
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
