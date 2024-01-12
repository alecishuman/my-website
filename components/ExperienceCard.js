import React from "react";
import Image from "next/image";

export default function ExperienceCard(props) {
  return (
    <div className="experience-card flex flex-col gap-2 p-8 rounded-lg w-11/12">
      <div className="flex justify-center w-full mb-4">
        <Image src={props.logo} alt="logo" width={64} />
      </div>
      <div className="experience-title text-2xl font-semibold">
        {props.title}
      </div>
      {props.company && <div className="text-sm">{props.company}</div>}
      <div className="italic flex text-end text-sm text-gray-500">
        {props.time}
      </div>
      <div className="flex flex-col gap-1">
        {props.activities.map((activity) => (
          <div className="flex">
            <span className="mr-2">&#8226;</span>
            <div className="inline text-sm">{activity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
