"use client";
import React, { useState } from "react";
import Header from "./Header";
import IPtable from "./IPtable";

const MainCom = () => {
  const userId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  return (
    <div className="px-5 lg:px-10 bg-gray-bg min-h-svh max-w-[1440px] mx-auto">
      <Header userId={userId} setRefetchTrigger={setRefetchTrigger} />
      <IPtable userId={userId} refetchTrigger={refetchTrigger} />
    </div>
  );
};

export default MainCom;
