import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iujqg49",
        "template_0rzvnew",
        form.current,
        "1nN_isGY_HNc59pqh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          console.log(submitted);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form px-10 py-12 mx-12 lg:w-full w-auto rounded-3xl">
      {submitted ? (
        <div className="flex items-start flex-col gap-4 md:gap-6">
          <div className="form-header text-3xl md:text-4xl font-bold">
            Thank you!
          </div>
          <div className="text-xl md:text-2xl">We'll be in touch soon.</div>
          <button
            className="form-button tracking-wider w-fit align-middle justify-center rounded-2xl mt-2"
            onClick={() => setSubmitted(false)}
          >
            Send a New Form!
          </button>
        </div>
      ) : (
        <div className="flex items-start flex-col gap-4 md:gap-6">
          <p className="text-xl md:text-2xl">Have a question?</p>
          <p className="form-header text-3xl md:text-4xl font-bold">
            Send a message!
          </p>
          <form
            action=""
            ref={form}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-3 md:gap-4 w-full"
          >
            <p className="text-lg md:text-xl">Name:</p>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name:"
              className="text-sm py-3 px-4 rounded-3xl outline-none focus:outline-none text-gray-600"
              required
            />
            <p className="text-lg md:text-xl">Email:</p>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email:"
              className="text-sm py-3 px-4 rounded-3xl outline-none focus:outline-none h-10 text-gray-600"
              required
            />
            <p className="text-lg md:text-xl">Message:</p>
            <textarea
              name="message"
              placeholder="What would you like to tell me?"
              className="text-sm py-3 px-4 rounded-3xl outline-none focus:outline-none min-h-fit text-gray-600"
              required
            ></textarea>

            <button
              type="submit"
              className="form-button tracking-wider w-fit align-middle justify-center rounded-2xl mt-2"
            >
              Send it!
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
