import React, { useState } from "react"; 
import Menu from "./components/common/menu";
import { Outlet, useLocation } from "react-router-dom";
function Layout() {
  const pathName = useLocation().pathname;
  const [width, setWidth] = useState(64); 
  return (
    <>
      {
        pathName !== "/" && <> <Menu update={setWidth}/> </>
      }
      <div className={width === 64 ? "pl-[64px]": "pl-[240px]"}>

        <Outlet />
      </div>
    </>
  );
}

export default Layout;