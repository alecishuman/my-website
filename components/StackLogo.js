import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function StackLogo(props) {
  return (
    <div className="w-32 h-32 bg-[var(--primary-gray)] rounded-[50%] p-4 flex justify-center items-center">
      <Image
        src={require(`../public/tech-stack/${props.logo}`)}
        className="w-[75%] text-white"
        alt="logo"
      />
    </div>
  );
}
