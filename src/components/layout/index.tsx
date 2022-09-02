import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../search-form/SearchForm";
const benji: User = {
  name: "benja",
};

export function Layout(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchForm style={{ backgroundColor: "red" }} />
      <Outlet />
    </Suspense>
  );
}
