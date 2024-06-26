import React, { useState, useEffect } from "react";

import gmail from "../public/gmail.svg";
import linkedin from "../public/linkedin_icon.svg";
import phone from "../public/phone.svg";

import ContactForm from "./ContactForm";
import ContactMethod from "./ContactMethod";
import MobileContactForm from "./MobileContactForm";

export default function Footer() {
  // Window width
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const contacts = [
    {
      name: "LinkedIn",
      image: linkedin,
      link: "https://www.linkedin.com/in/alec-situ/",
    },
    { name: "aasitu@gmail.com", image: gmail },
    { name: "(236) 518-2397", image: phone },
    // Add more logos as needed
  ];
  return (
    <div className="page footer-container flex flex-row items-center justify-center  max-lg:pt-40">
      <footer className="h-fit w-10/12 max-w-[1000px] mt-12 flex flex-col justify-center">
        {windowWidth > 640 ? <ContactForm /> : <MobileContactForm />}

        <div className="flex flex-col sm:flex-row w-full max-sm:items-end justify-center mt-10 max-lg:mt-[60px] max-lg:mb-20 gap-4">
          {contacts.map((contact) => {
            return contact.link ? (
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <ContactMethod name={contact.name} image={contact.image} />
              </a>
            ) : (
              <ContactMethod name={contact.name} image={contact.image} />
            );
          })}
        </div>
      </footer>
    </div>
  );
}
