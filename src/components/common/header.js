import React, { useState } from "react";
import { useAuth } from "../../config/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";

function Header(props) {
  const { logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  const handleClose = () => {
    setShowLogout(false);
  };
  const handlerDrawer = () => {
    if (props.open) {
      props.handleDrawerClose();
    } else {
      props.handleDrawerOpen();
    }
  };
  return (
    <div className="bg-primary px-4 py-6 text-white flex justify-between fixed w-[100%] z-[10000]">
      <span className="pl-2">
        <MenuIcon style={{ color: "#ffffff" }} onClick={handlerDrawer} />
      </span>
      <>
        <PersonIcon
          id="basic-button"
          style={{ color: "#ffffff" }}
          onClick={() => setShowLogout(!showLogout)}
        />
        {showLogout && (
          <div
            className="absolute right-[2px] top-[35px] bg-[#fff] shadow-md"
            open={showLogout}
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                position: "absolute",
                right: 0,
                left: "80% !important",
                top: "50px",
              },
            }}
          >
            <MenuItem onClick={logout}>Logout</MenuItem>
          </div>
        )}
      </>
    </div>
  );
}

export default Header;
