import React from "react";

export default function Navbar() {
  const experience = () => document.querySelector("#experience");
  const timeline = () => document.querySelector("#timeline");
  const contact = () => document.querySelector("#contact");
  // TODO: Add sliding active element for <navbar></navbar>
  return (
    <div className="fixed flex flex-row align-middle justify-end w-full pr-2 py-6 z-10 bg-gray-900">
      {/* shrink while scrolling name */}
      {/* <a href="" className="navbar-element xl:text-lg px-4 xl:px-6">
        About
      </a> */}

      <div
        onClick={() => {
          experience().scrollIntoView({ block: "center", behavior: "smooth" });
          experience().scrollIntoView({ block: "center", behavior: "smooth" });
        }}
        className="navbar-element xl:text-lg mx-2 xl:mx-3 px-4 xl:px-5 rounded-xl py-2 hover:cursor-pointer"
      >
        Projects
      </div>
      <div
        onClick={() => {
          timeline().scrollIntoView({ block: "center", behavior: "smooth" });
          timeline().scrollIntoView({ block: "center", behavior: "smooth" });
        }}
        className="navbar-element xl:text-lg mx-2 xl:mx-3 px-4 xl:px-5 rounded-xl py-2 hover:cursor-pointer"
      >
        Timeline
      </div>
      <div
        onClick={() => {
          contact().scrollIntoView({ block: "center", behavior: "smooth" });
          contact().scrollIntoView({ block: "center", behavior: "smooth" });
        }}
        className="navbar-element xl:text-lg mx-2 xl:mx-3 px-4 xl:px-5 rounded-xl py-2 hover:cursor-pointer"
      >
        Contact
      </div>
    </div>
  );
}
