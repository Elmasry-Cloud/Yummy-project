import React from "react";
import NavbarYummy from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavbarYummy />
      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  );
}
