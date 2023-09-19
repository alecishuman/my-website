import useWindowSize from "@rooks/use-window-size";
import { useEffect, useState } from "react";

export default function Star() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const starSize = Math.random() * 3 + 1;
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);
  const starStyle = {
    position: "absolute",
    left: Math.floor(Math.random() * (windowWidth - 40) + 20),
    top: Math.floor(Math.random() * (windowHeight - 40) + 20),
    width: starSize,
    height: starSize,
    padding: starSize,
    borderRadius: starSize,
    backgroundColor: "white",
    opacity: 0.7,
    zIndex: "0",
  };
  return <div className="star" style={starStyle}></div>;
}
