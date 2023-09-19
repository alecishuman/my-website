import React from "react";

export default function Project(props) {
  return (
    <div className="project flex flex-col gap-2 p-8 rounded-lg">
      <div className="underline text-2xl">{props.title}</div>
      <div className="text-sm">{props.company}</div>
      <div className="italic flex text-end text-sm text-gray-500">
        {props.time}
      </div>
      <div>{props.description}</div>
    </div>
  );
}
