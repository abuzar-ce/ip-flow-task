import React from "react";
import Header from "./Header";
import IPtable from "./IPtable";

const MainCom = () => {
  return (
    <div className="px-5 lg:px-10 bg-gray-bg min-h-svh max-w-[1440px] mx-auto">
      <Header />
      <IPtable />
    </div>
  );
};

export default MainCom;
