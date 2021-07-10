//import useState hook to create menu collapse state
import React, { useState } from "react";
import {
    Link,
} from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {IoIosPeople} from "react-icons/io"
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css"


const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [homeActive, setHomeActive] = useState(true)
    const [memberActive, setMemberActive] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  const homeMenu = () => {
    setHomeActive(true)
    setMemberActive(false)
  };

  const memberMenu = () => {
    setHomeActive(false)
    setMemberActive(true)
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          {/* <div className="logotext"> */}
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div> */}
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={homeActive} onClick={homeMenu} icon={<FiHome />}>
                  <Link to="/">Home</Link>
              </MenuItem>

              <MenuItem active={memberActive} onClick={memberMenu} icon={<IoIosPeople />}>
                  <Link to="/member">Members</Link>
              </MenuItem>
              {/* <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
