import React from "react";

function Navbar() {
  return (
    <div className="w-full px-20 py-8">
      <div className="logo"></div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About us", "Insights"].map((item, index) => (
          <a key={index} className="text-md capitalize font-regular">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
