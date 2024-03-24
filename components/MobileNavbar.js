import React, { useState, useEffect } from "react";
import Image from "next/image";
import toggleIcon from "../public/toggle.svg";

export default function MobileNavbar() {
  const experience = () => document.querySelector("#experience");
  const projects = () => document.querySelector("#projects");
  const contact = () => document.querySelector("#contact");

  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!toggled);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      console.log(window.scrollY);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={"fixed flex flex-col w-full items-center z-[100] bg-gray-900 overflow-hidden transition-all duration-150 ".concat(
        toggled ? " max-h-[242px]" : "max-h-[80px]"
      )}
    >
      <div className="w-[90%] flex flex-row justify-between items-center py-4 h-[80px]">
        {isVisible ? (
          <div className="text-white text-2xl ml-2 font-semibold">
            Alec Situ
          </div>
        ) : (
          <div className="text-white text-2xl ml-2 font-semibold">Welcome!</div>
        )}

        <button
          onClick={toggle}
          className="border-2 border-[var(--primary-blue)] rounded-lg p-2"
        >
          <Image src={toggleIcon} width={30} />
        </button>
      </div>
      <div
        onClick={() => {
          experience().scrollIntoView({ block: "center", behavior: "smooth" });
          experience().scrollIntoView({ block: "center", behavior: "smooth" });
        }}
        className="mobile-navbar-element"
      >
        Experience
      </div>
      <div
        onClick={() => {
          projects().scrollIntoView({ block: "center", behavior: "smooth" });
          projects().scrollIntoView({ block: "center", behavior: "smooth" });
        }}
        className="mobile-navbar-element"
      >
        Projects
      </div>
      <div
        onClick={() => {
          contact().scrollIntoView({ block: "center", behavior: "smooth" });
          contact().scrollIntoView({ block: "center", behavior: "smooth" });
        }}
        className="mobile-navbar-element border-b-2 border-b-[var(--secondary-blue)]"
      >
        Contact
      </div>
    </div>
  );
}
