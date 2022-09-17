import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/index";
import { Layout } from "../components/layout";
import { Publicar } from "../pages/publicar";
import { Reportadas } from "../pages/reportadas";
import { Datos } from "../pages/datos";
import { Password } from "../pages/password";
import { Email } from "../pages/email/email";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="datos" element={<Datos />} />
        <Route path="reportadas" element={<Reportadas />} />
        <Route path="publicar" element={<Publicar />} />
        <Route path="email" element={<Email />} />
        <Route path="password" element={<Password />} />
      </Route>
    </Routes>
  );
}
