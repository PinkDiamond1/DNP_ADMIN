import React from "react";
// Icons
import ContactSupport from "Icons/ContactSupport";
import { NavLink } from "react-router-dom";
import { rootPath as reportPath } from "pages/support";

const Report = () => {
  return (
    <NavLink className="tn-dropdown-toggle no-a-style" to={reportPath}>
      <ContactSupport />
    </NavLink>
  );
};

export default Report;
