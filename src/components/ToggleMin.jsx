import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleMin = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="toggle-min">
      <Link
        to="/Login/Admin"
        onClick={() => handleLinkClick("/Login/Admin")}
        style={{
          background: activeLink === "/Login/Admin" ? "green" : "",
          color: "white",
        }}
      >
        <div>Admin</div>
      </Link>
      <Link
        to="/Login/Admin/UserAccount"
        onClick={() => handleLinkClick("/Login/Admin/UserAccount")}
        style={{
          background:
            activeLink === "/Login/Admin/UserAccount" ? "green" : "",
          color: "white",
        }}
      >
        <div>User</div>
      </Link>
    </div>
  );
};

export default ToggleMin;
