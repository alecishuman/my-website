import React from "react";
import styles from "../styles/footer.module.css";

import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="w-auto border-t-2 border-t-white">
      <div className="footer-container flex flex-row justify-items-center align-middle mt-12">
        <h1 className="text-8xl px-12 border-r-2 border-r-white">ALEC SITU</h1>
        <div className="flex-col flex px-12 border-r-2 border-r-white">
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
      </div>
      <div className="copyright flex flex-row justify-center text-white text-sm">
        Made by Alec Situ
      </div>
    </footer>
  );
}
