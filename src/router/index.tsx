import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { PageTwo } from "../pages/PageTwo";
import { PageThree } from "../pages/pageThree";
import { Home } from "../pages/Home";
import { Layout } from "../components/layout";

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
