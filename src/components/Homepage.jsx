import { Jumbotron, Button } from "react-bootstrap";
const Homepage = () => {
  return (
    <Jumbotron>
      <h1>Welcome to the homepage</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Sign in</Button>
        <Button variant="secondary">Sign up</Button>
      </p>
    </Jumbotron>
  );
};

export default Homepage;
