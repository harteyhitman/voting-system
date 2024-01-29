import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ToggleMin = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const navigate = useNavigate();


  return (
    <div className="toggle-min" >
      <div onClick={() => handleLinkClick("/Login/Admin")}
        style={{
          background: activeLink === "/Login/Admin" ? "#0CBB5C" : "",
          color: activeLink === "/Login/Admin" ? "#FFFFFF" : "",}} className="user">User </div>


      <div onClick={() => handleLinkClick("/Login/Admin/UserAccount")}
        style={{
          background: activeLink === "/Login/Admin/UserAccount" ? "#0CBB5C" : "",
          color: activeLink === "/Login/Admin" ? "#FFFFFF" : "",}} className="admin">Admin</div>

    </div>
  );
};

export default ToggleMin;
