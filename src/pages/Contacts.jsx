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
  // message state variable
  const [formMessage, setFormMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    // send message to my email address using emailjs.com
    try {
      const result = await emailjs.sendForm(
        "service_2f4a7w9",
        "template_sn24tv3",
        e.target,
        "SAr6zD1n2ioYzmO7-"
      );
      console.log(result.text);

      // clear form after submission
      setInput({
        name: "",
        email: "",
        message: "",
      });

      // check if the email was sent successfully
      if (result.status === 200) {
        setFormMessage("Your message was sent successfully!");
      } else {
        setFormMessage(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.log(error);
      setFormMessage(
        "There was an error sending message. Please email me at elena@gmail.com"
      );
    }
  };

  const validateFields = () => {
    if (!input.name || !input.email || !input.message) {
      setFormMessage("All fields are required.");
      return false;
    }

    if (!validateEmail(input.email)) {
      setFormMessage("Please enter a valid email address.");
      return false;
    }

    return true;
  };
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
      {formMessage && <div>{formMessage}</div>}
    </>
  );
}
export default Contacts;
