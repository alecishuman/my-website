import React from "react";

export default function Navbar() {
  const experience = () => document.querySelector("#experience");
  const projects = () => document.querySelector("#projects");
  const contact = () => document.querySelector("#contact");

  return (
    <div className="fixed flex flex-row align-middle justify-end w-full pr-2 py-6 z-10 bg-gray-900">
      {/* shrink while scrolling name */}
      {/* <a href="" className="navbar-element xl:text-lg px-4 xl:px-6">
        About
      </a> */}

      <div
        onClick={() =>
          experience().scrollIntoView({ block: "end", behavior: "smooth" })
        }
        className="navbar-element xl:text-lg px-4 xl:px-6 transition-all"
      >
        Experience
      </div>
      <div
        onClick={() =>
          projects().scrollIntoView({ block: "end", behavior: "smooth" })
        }
        className="navbar-element xl:text-lg px-4 xl:px-6"
      >
        Projects
      </div>
      <div
        onClick={() =>
          contact().scrollIntoView({ block: "end", behavior: "smooth" })
        }
        className="navbar-element xl:text-lg px-4 xl:px-6"
      >
        Contact
      </div>
    </div>
  );
}
