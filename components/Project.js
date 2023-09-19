import React from "react";

export default function Project(props) {
  return (
    <div className="project flex-col p-4 w-80 rounded-lg">
      <div className="flex-row justify-between items-center flex">
        <div className="flex flex-col gap-1">
          <div className="underline text-xl">{props.title}</div>
          <div className="text-sm">{props.company}</div>
        </div>
        <div className="italic flex text-end text-sm text-gray-500">
          {props.time}
        </div>
      </div>
      <div>{props.description}</div>
    </div>
  );
}
