"use client";
import React, { ReactNode } from "react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface WrapperProps {
  child: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ child }: any) => {
  return (
    <>
      <Header />
      <Provider store={store}>{child}</Provider>
    </>
  );
};

export default Wrapper;
