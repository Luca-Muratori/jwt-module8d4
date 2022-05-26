import { Navbar, Nav, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button variant="primary">Sign in</Button>
          <Button variant="secondary">Sign up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
