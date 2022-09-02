import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { PageTwo } from "../pages/PageTwo";
import { PageThree } from "../pages/PageThree";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<PageTwo />} />
        <Route path="/item/:itemName" element={<PageThree />} />
      </Route>
    </Routes>
  );
}
