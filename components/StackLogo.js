import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function StackLogo(props) {
  return (
    <div className="logo">
      {/* <Image
        src={require(`../public/tech-stack/${props.logo}`)}
        className="w-[75%] text-white"
        alt="logo"
      /> */}
      {props.name}
    </div>
  );
}
