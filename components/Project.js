import React from "react";
import styles from "../styles/Home.module.css";

export default function Project(props) {
  return (
    <div className="bg-blue-300 w-96 flex-col p-2">
      <h2 className="underline">{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
