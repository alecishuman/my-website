import React from "react";

import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <div className="page footer-container flex flex-row items-center justify-center">
      <footer className="h-fit w-5/6 mt-12 flex flex-col justify-evenly lg:flex-row">
        <ContactForm />
        <div className="socials-contact flex flex-col gap-4 lg:gap-6 py-9 mx-12 w-full max-lg:w-auto bg-black">
          <p className="form-header text-3xl md:text-4xl">Or....</p>
          <p className="text-3xl md:text-4xl font-bold">Find my socials!</p>
        </div>
      </footer>
    </div>
  );
}
