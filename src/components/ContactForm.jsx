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
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="name"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={input.email}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          value={input.message}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
