import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";

export function Layout(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar></Navbar>
      <Outlet />
    </Suspense>
  );
}
