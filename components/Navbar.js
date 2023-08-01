import React from "react";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className="flex flex-row align-middle justify-end w-full pr-2">
      <a href="" className="px-4 py-6">
        Projects
      </a>
      <a href="" className="px-4 py-6">
        About
      </a>
      <a href="" className="px-4 py-6">
        Contact
      </a>
    </div>
  );
}
