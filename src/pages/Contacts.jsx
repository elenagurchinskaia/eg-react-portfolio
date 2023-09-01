import { useState } from "react";
import ContactForm from "../components/ContactForm";
import { validateEmail } from "../utils/helper";
import emailjs from "emailjs-com";

function Contacts() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!input.name || !input.email || !input.message) {
      setFormMessage("All fields are required.");
      return;
    }
    // send message to my email address using emailjs.com
    emailjs
      .sendForm(
        "service_2f4a7w9",
        "template_sn24tv3",
        e.target,
        "SAr6zD1n2ioYzmO7-"
      )
      .then(
        (result) => {
          console.log(result.text);
          // clear form after submission
          setInput({
            name: "",
            email: "",
            message: "",
          });

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
  // ------------------------------- handle input change ---------------------------------- //
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "email") {
      const isValid = validateEmail(value);
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
      setInput({ ...input, [name]: value });
    }
  }
  return (
    <>
      <h1>Contacts</h1>
      {/* // ------------------------------- render ---------------------------------- // */}
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
