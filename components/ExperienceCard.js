import React from "react";
import Image from "next/image";

export default function ExperienceCard(props) {
  // Remove card, change to normal background assimilation
  // Add images
  return (
    <div className="experience-card flex flex-col gap-4 p-8 rounded-lg">
      {/* <div className="flex justify-center w-full mt-6 mb-6">
        <Image src={props.logo} alt="logo" width={64} />
      </div> */}
      <div className="experience-title text-3xl font-semibold">
        {props.title}
      </div>
      {props.company && (
        <div className="text-lg text-[#6FC3FF] font-semibold">
          {props.company}
        </div>
      )}
      <div className="italic flex text-end text-sm text-gray-500">
        {props.time}
      </div>
      <div className="text-sm text-gray-100">{props.mobile}</div>
    </div>
  );
}
