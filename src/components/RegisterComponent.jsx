import { Form, Button } from "react-bootstrap";

const RegisterComponent = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Insert name" />
      </Form.Group>
      <Form.Group controlId="formBasicSurname">
        <Form.Control type="text" placeholder="Insert surname" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" label="Check me out" />
      </Form.Group>
      <Form.Group>
        <p>date of birth</p>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterComponent;
