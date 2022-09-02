import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Suspense fallback={null}>
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  );
}

const root = createRoot(document.querySelector(".root"));
root.render(<App />);
