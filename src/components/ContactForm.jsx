import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ContactForm({
  input,
  setInput,
  handleInputChange,
  handleFormSubmit,
}) {
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name..."
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address *</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Your Email Address..."
          value={input.email}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          placeholder="Your Message..."
          value={input.message}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn btn-black">
        Submit
      </Button>
    </Form>
  );
}
