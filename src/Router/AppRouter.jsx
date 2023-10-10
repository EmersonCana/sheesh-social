import React from "react";
import Store from "../pages/Store";
import Home from "../pages/Home";
import People from "../pages/People";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import HomeTemplate from "../components/templates/HomeTemplate";
import NotFound from "../pages/NotFound";

export default function AppRouter({ children }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeTemplate />}>
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/people" element={<People />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
}
