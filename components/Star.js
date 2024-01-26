import useWindowSize from "@rooks/use-window-size";
import { useEffect, useState, memo } from "react";

function Star() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const delay = Math.random() * 2;
  const starSize = Math.random() * 2 + 2.7;
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);
  const starStyle = {
    position: "absolute",
    left: Math.floor(Math.random() * (windowWidth - 20) + 20),
    top: Math.floor(Math.random() * (windowHeight - 40) + 40),
    width: starSize,
    height: starSize,
    borderRadius: "50%",
    backgroundColor: "white",
    zIndex: "0",
    boxShadow:
      "0 0 5px rgba(255, 255, 255, 1), 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4)",
    animation: `glow 2s infinite ${delay}s`,
  };
  return <div className="star" style={starStyle}></div>;
}

export default memo(Star);
