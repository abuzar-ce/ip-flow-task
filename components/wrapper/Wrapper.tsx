"use client";
import React from "react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Wrapper = ({ child }: any) => {
  return (
    <>
      <Header />
      <Provider store={store}>{child}</Provider>
    </>
  );
};

export default Wrapper;
