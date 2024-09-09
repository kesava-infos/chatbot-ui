import React, { useState, useEffect } from "react";
import Menu from "./components/common/menu";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./config/AuthContext";
function Layout() {
  const pathName = useLocation().pathname;
  const [width, setWidth] = useState(64);
  useEffect(() => {
    // const { isAuth } = useAuth();
    // console.log(isAuth)
  }, []);
  return (
    <>
      {pathName !== "/" && (
        <>
          <Menu update={setWidth} />
        </>
      )}
      <div
        className={
          pathName !== "/"
            ? width === 64
              ? "pl-[64px] pt-12"
              : "pl-[240px] pt-12"
            : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
