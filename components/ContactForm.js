import React, { useState } from "react";

const FORM_ENDPOINT = "http://localhost:3000/"; // TODO - update to the correct endpoint

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className=" flex flex-col gap-5">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div className="contact-form flex items-start flex-col gap-4 md:gap-6 px-10 py-12 mx-12 lg:w-full w-auto rounded-3xl">
      <p className="text-xl md:text-2xl">Have a question?</p>
      <p className="form-header text-3xl md:text-4xl font-bold">
        Send a message!
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className=" flex flex-col gap-3 md:gap-4 w-full"
      >
        <p className="text-lg md:text-xl">Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Enter your name:"
          className="py-2 px-4 rounded-3xl outline-none focus:outline-none text-gray-600"
          required
        />
        <p className="text-lg md:text-xl">Email:</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email:"
          className="py-2 px-4 rounded-3xl outline-none focus:outline-none h-10 text-gray-600"
          required
        />
        <p className="text-lg md:text-xl">Message:</p>
        <textarea
          name="message"
          placeholder="What would you like to tell me?"
          className="py-2 px-4 rounded-3xl outline-none focus:outline-none min-h-fit text-gray-600"
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
  );
}
