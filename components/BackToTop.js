import React, { useState, useEffect } from "react";

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
      className={"topButton fixed bottom-5 right-5 rounded-xl cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110".concat(
        " ",
        isVisible ? "block" : "hidden"
      )}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      Hi
    </button>
  );
}
