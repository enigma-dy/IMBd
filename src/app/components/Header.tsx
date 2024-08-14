import React from "react";

import DesktopNav from "../components/DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Header;
