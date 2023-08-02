import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
