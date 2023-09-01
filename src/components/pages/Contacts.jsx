import { useState } from "react";
import ContactForm from "../ContactForm";
import { validateEmail } from "../utils/helpers";
// import Contacts from "./components/pages/Contacts";

function Contacts() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
function 

  function handleFormSubmit(e) {
    e.preventDefault();
    // send an email to me
    const emailAddress = "elenagurchinskaia@gmail.com";
    // create a mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=Message from ${input.name}&body=${input.message}`;

    window.location.href = mailtoLink;

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

    setInput({ ...input, [name]: value });
  }
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
      />
    </>
  );
}
export default Contacts;
