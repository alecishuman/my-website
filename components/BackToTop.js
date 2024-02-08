import React, { useState, useEffect } from "react";
import Image from "next/image";
import upCursor from "../public/up_cursor.svg";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      console.log(window.scrollY);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={"topButton z-20 fixed bottom-5 right-5 rounded-2xl cursor-pointer opacity-100 lg:opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-110".concat(
        " ",
        isVisible ? "block" : "hidden"
      )}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <Image src={upCursor} alt="up cursor" width={50} />
    </button>
  );
}
