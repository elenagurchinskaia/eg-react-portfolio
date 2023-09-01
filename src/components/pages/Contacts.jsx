import { useState } from "react";
import ContactForm from "../ContactForm";
import { validateEmail } from "../../utils/helper";
import emailjs from "emailjs-com";
// import { set } from "mongoose";
// import { response } from "express";
// import Contacts from "./components/pages/Contacts";

function Contacts() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    // subject: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!input.name || !input.email || !input.message) {
      setFormMessage("All fields are required.");
      return;
    }
    // send an email to me
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormMessage("Your message was sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setFormMessage(
            "Your message was not sent. Please email me at elena@gmail.com"
          );
        }
      );
  }

  // window.location.href = mailtoLink;

  console.log("form", {
    name: input.name,
    email: input.email,
    message: input.message,
  });

  // clear form after submission
  setInput({
    name: "",
    email: "",
    message: "",
  });
}

function handleInputChange(e) {
  const { name, value } = e.target;
  if (name === "email") {
    const isValid = validateEmail(e.target.value);
    console.log(isValid);
    if (!isValid) {
      setFormMessage("Your email is invalid.");
    } else {
      setFormMessage("");
    }
  } else {
    if (!value.length) {
      setFormMessage(`${name} is required.`);
    } else {
      setFormMessage("");
    }
  }
  if (!formMessage) {
    // setInput({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [name]: value });
  }
  // }
  return (
    <>
      <h1>Contacts</h1>
      {/* <form onSubmit={handleFormSubmit}>
        <label htmlFor="name-input">Name *</label>
        <input
          type="text"
          id="name-input"
          placeholder="Your Name..."
          value={input.name}
          onChange={handleInputChange}
        ></input>
        <label>Email Address *</label>
        <input
          type="text"
          id="email-input"
          value={input.email}
          placeholder="Your Email..."
          onChange={handleInputChange}
        ></input>
        <label>Message *</label>
        <input
          type="text"
          id="message-input"
          placeholder="Your Message..."
          value={input.message}
          onChange={handleInputChange}
        ></input>
        <button type="submit" id="submit-button">
          Submit
        </button>
      </form> */}

      <ContactForm
        input={input}
        setInput={setInput}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        formMessage={formMessage}
      />
    </>
  );
}
export default Contacts;
