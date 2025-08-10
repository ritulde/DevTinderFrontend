import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Body = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};
