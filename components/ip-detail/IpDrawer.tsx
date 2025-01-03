import { Drawer } from "antd";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

const IpDrawer = ({ title, drawer, setDrawer, children }: any) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const onClose = () => {
    setDrawer(false);
  };
  return (
    <Drawer
      width={isMobile ? "90%" : "70%"}
      onClose={onClose}
      open={drawer}
      closable={false}
      className="!bg-[#FBF6FF] !font-inter"
    >
      <div className="flex justify-between items-center bg-white py-2 px-5 rounded-[15px]">
        <p className="text-xl font-semibold">{title}</p>
        <button
          onClick={onClose}
          className="bg-red-50 text-red-500 text-lg rounded-full p-1"
        >
          <IoClose />
        </button>
      </div>
      <div className="mt-6">{children}</div>
    </Drawer>
  );
};

export default IpDrawer;
