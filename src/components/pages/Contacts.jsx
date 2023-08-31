import { useState } from "react";

function Contacts() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleFormSubmit(e) {
    // send an email to me
    // clear form
    const emailAddress = "elenagurchinskaia@gmail.com";
    // create a mailto link
    e.preventDefault();
  }
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name-input">Name *</label>
      <input
        type="text"
        id="name-input"
        placeholder="Your Name..."
        onChange={handleInputChange}
      ></input>
      <label>Email Address *</label>
      <input
        type="text"
        id="email-input"
        placeholder="Your Email..."
        onChange={handleInputChange}
      ></input>
      <label>Message *</label>
      <input
        type="text"
        id="message-input"
        placeholder="Your Message..."
        onChange={handleInputChange}
      ></input>
      <button type="submit" id="submit-button">
        Submit
      </button>
    </form>
  );
}
export default Contacts;
