import React from "react";
import styles from "../styles/Home.module.css";

import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="w-auto bg-black text-blue-300 flex flex-row">
      <div className="flex-col flex p-2">
        <h2 className="text-lg">Contact Method: </h2>
        <span>Email: aasitu@gmail.com</span>
        <span>Phone: +1 (236)-518-2397</span>
        <a
          href="https://www.linkedin.com/in/alec-situ/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </div>
      <ContactForm />
    </footer>
  );
}
