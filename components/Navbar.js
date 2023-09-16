import React from "react";

export default function Navbar() {
  return (
    <div className="fixed flex flex-row align-middle justify-end w-full pr-2 py-6">
      {/* shrink while scrolling name */}
      <a href="" className="navbar-element xl:text-lg px-4 xl:px-6">
        Projects
      </a>
      <a href="" className="navbar-element xl:text-lg px-4 xl:px-6">
        About
      </a>
      <a href="" className="navbar-element xl:text-lg px-4 xl:px-6">
        Contact
      </a>
    </div>
  );
}
