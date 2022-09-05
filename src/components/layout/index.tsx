import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../search-form/SearchForm";
import { Button } from "../../ui/button/index";

export function Layout(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchForm style={{ backgroundColor: "red" }} />
      <Button color="blue">hi</Button>
      <Outlet />
    </Suspense>
  );
}
