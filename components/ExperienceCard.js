import React from "react";
import Image from "next/image";

export default function ExperienceCard(props) {
  return (
    <div className="experience-card flex flex-col gap-3 rounded-lg pb-8">
      {props.logo && (
        <div className="flex w-full mb-4 overflow-hidden">
          <Image
            src={require(`../public/${props.page}`)}
            className="w-full rounded-t-lg"
            alt="page image"
          />
        </div>
      )}

      <div
        className={"experience-title text-xl font-semibold px-8 ".concat(
          !props.logo && "pt-8"
        )}
      >
        {props.title}
      </div>
      {props.company && (
        <div className="text-lg text-[#6FC3FF] font-semibold px-8">
          {props.company}
        </div>
      )}
      <div className="italic flex text-end text-sm text-gray-500 px-8">
        {props.time}
      </div>
      <div className="text-sm text-gray-100 px-8">{props.mobile}</div>
      {props.link && (
        <a
          href={props.link}
          className="experience-link px-4 py-2 mt-2 mx-8 mb-8 rounded-xl w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more
        </a>
      )}
    </div>
  );
}
