import React from "react";
import { Input } from "antd";
import nav_icon from "../assets/nav_icon.png";
import sync from "../assets/sync.png";
import bell from "../assets/icon.png";
import notification from "../assets/bell.png";
import user from "../assets/user.png";
// import { icons } from "antd/es/image/PreviewGroup";
const { Search } = Input;

const Topbar = () => {
  const handleSearch = (value) => {
    console.log("Searched:", value);
  };

  return (
    <div className="header_container">
      <div className="navbar_icon_conatiner">
        <img src={nav_icon} alt="nav_icon" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="nav_h1">Inventry </h3>
          <h3>Managgement System</h3>
        </div>
      </div>
      <div className="search">
        <Search
          placeholder="Search here"
          onSearch={handleSearch}
          style={{ paddingTop: 15 }}
        />
      </div>
      <div className="sync_container">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img src={sync} alt="sdd" style={{ width: 25, height: 25 }} />
          <div className="sync_text">
            <h4 className="nav_h1">Last Sync</h4>
            <span>a few sec ago</span>
          </div>
        </div>

        <div className="user_container">
          <img src={notification} alt="fd" style={{ width: 40, height: 40 }} />
          <img src={bell} alt="hj" style={{ width: 25, height: 25 }} />

          <div className="user">
            <img src={user} alt="" />
            <h4>Abhinash Pandy</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
