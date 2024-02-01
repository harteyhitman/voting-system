import React, { useState } from 'react'



const ToggleMin = () => {
  const [activeLink, setActiveLink] = useState(null);


  const handleLinkClick = (link) => {
    setActiveLink(link);

    const elements = document.querySelectorAll('.toggle-min div');
    elements.forEach((element) => {
      const isClickedElement = element.getAttribute('data-link') === link;
      element.style.background = isClickedElement ? '#0CBB5C' : '';
      element.style.color = isClickedElement ? '#FFFFFF' : '';
    });
  }


  return (
    <div className="toggle-min" >
      
 <div
 
        onClick={() => 
          handleLinkClick("/Login/Admin")
       }
        data-link="/Login/Admin"
        className="user"
      >
        User
     
        
      </div>
      <div
        onClick={() => 
          handleLinkClick("/Login/Admin/UserAccount")
       }
        data-link="/Login/Admin/UserAccount"
        className="admin"
      >
        Admin
       
        
      </div>
    </div>
  );
};

export default ToggleMin;
