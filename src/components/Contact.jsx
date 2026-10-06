import { useState } from "react";
import emailjs from "emailjs-com";
import { profile } from "../data/profile";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setStatus({ type: "error", text: "Please fill in every field." });
      return;
    }
    if (!EMAIL_RE.test(values.email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    setStatus({ type: "sending", text: "Sending…" });
    try {
      await emailjs.sendForm(
        "service_2f4a7w9",
        "template_sn24tv3",
        form,
        "SAr6zD1n2ioYzmO7-"
      );
      setValues({ name: "", email: "", message: "" });
      setStatus({ type: "success", text: "Thanks! Your message was sent." });
    } catch {
      setStatus({
        type: "error",
        text: `Something went wrong. Please email me at ${profile.email}.`,
      });
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Let&apos;s talk</h2>
      <p className="lede">
        Open to new opportunities. Email{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a> or use the form.
      </p>
      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            value={values.message}
            onChange={onChange}
            required
          />
        </label>
        <button
          className="btn"
          type="submit"
          disabled={status.type === "sending"}
        >
          Send message
        </button>
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.text}
        </p>
      </form>
    </section>
  );
}
