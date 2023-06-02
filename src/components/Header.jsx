import React from "react";
import almaLogo from "../assets/images/alma-logo.png";

function Header() {
  return (
    <div className="flex sticky top-0 left-0 right-0 items-center justify-center w-full py-[15px] px-8 bg-white shadow-lg sm:justify-start sm:px-8">
      <nav>
        <img
          src={almaLogo}
          alt="images/alma-logo.png"
          className="w-[145px] h-[38px]"
        />
      </nav>
    </div>
  );
}

export default Header;
