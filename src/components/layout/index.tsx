import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../search-form/SearchForm";
const benji: User = {
  name: "benja",
};
import css from "./layout.css";

export function Layout(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchForm style={css.root} />
      <Outlet />
    </Suspense>
  );
}
