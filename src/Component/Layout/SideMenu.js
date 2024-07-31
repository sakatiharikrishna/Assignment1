import React, { useState } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap'; // Import Bootstrap components
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

// Define your items with icons
const items = [

  { text: 'Dashboard', disabled: true, icon: <RiDashboardHorizontalFill style={{ marginRight: "10px" }}/> },
  { text: 'Assets', action: true, hasSubmenu: true, submenu: ['Submenu item 1', 'Submenu item 2', 'Submenu item 3'], icon: <LiaFileMedicalAltSolid style={{ marginRight: "10px" }}/> },
  { text: 'Incidents', action: true, icon: <MdDesignServices style={{ marginRight: "10px" }} /> },
  { text: 'Services', action: true, icon: <MdMiscellaneousServices style={{ marginRight: "10px" }}/> },
  { text: 'Request', action: true, icon: <RiMessage2Line style={{ marginRight: "10px" }}/> },
  { text: 'Users', action: true, hasSubmenu: true, submenu: ['Submenu item 1', 'Submenu item 2', 'Submenu item 3'], icon: <FaUsersBetweenLines style={{ marginRight: "10px" }}/> },
  { text: 'Reports', action: true, hasSubmenu: true, submenu: ['Submenu item 1', 'Submenu item 2', 'Submenu item 3'], icon: <FaRegListAlt style={{ marginRight: "10px" }}/> },
];


const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (

    <div className="container " style={{ background: "#1b2535", height: window.innerHeight + "px" }} >
      <div style={{ background: "#1b2535" }}>
        <h4 style={{ color: 'black', fontWeight: "bold", color: 'white', border: "none",  margin: "auto", height:"100px",lineHeight:"100px",textAlign:"center",width:"100%"}}>Vajra</h4>
        <ListGroup style={{ background: "transparent", color: 'white', border: "none", height: (window.innerHeight - 300) + "px" }}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListGroup.Item style={{ background: "transparent", color: 'white', border: "none" }}
                disabled={item.disabled}
                action={item.action}
                onClick={item.hasSubmenu ? () => setOpen(!open) : undefined}
                aria-controls={item.hasSubmenu ? 'submenu' : undefined}
                aria-expanded={item.hasSubmenu ? open : undefined}
              >
                {item.icon}{item.text}
              </ListGroup.Item>
              {item.hasSubmenu && (
                <Collapse in={open}>
                  <ListGroup id="submenu" className="pl-4" style={{ background: "transparent", color: 'white', border: "none" }}>
                    {item.submenu.map((subitem, subindex) => (
                      <ListGroup.Item key={subindex} style={{ background: "transparent", color: 'white', border: "none" }}  >{subitem}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </ListGroup>

      </div>
      <div>
        <button type="button" class="btn btn-outline-dark" style={{ float: "right", borderRadius: "38px", width: "60%", margin: "auto", textAlign: "left", border: "solid 1px #fff", margin: "20px 20%", color: "#fff" }}><FaHeadset style={{ marginRight: "10px", }} />Contact us</button>
        <button type="button" class="btn btn-outline-dark" style={{ float: "right", borderRadius: "38px", width: "60%", margin: "auto", textAlign: "left", border: "solid 1px #fff", margin: "20px 20%", color: "#fff" }}><MdOutlineLogout style={{ marginRight: "10px" }} />Log Out</button>
      </div>
    </div>
  );
};

export default SideMenu;
