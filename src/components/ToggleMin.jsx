import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleMin = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="toggle-min">
    <Link
      to="/Login/Admin"
      onClick={() => handleLinkClick("/Login/Admin")}
      style={{
        color: "white",
        background: activeLink === "/Login/Admin" ? "#0CBB5C" : " ",
      }}
    >
      <div>Admin</div>
    </Link>
    <Link
      to="/Login/Admin/UserAccount"
      onClick={() => handleLinkClick("/Login/Admin/UserAccount")}
      style={{
        color: "white",
        background: activeLink === "/Login/Admin/UserAccount" ? "#0CBB5C" : " ",
      }}
    >
      <div>User</div>
    </Link>
  </div>
  );
};

export default ToggleMin;
