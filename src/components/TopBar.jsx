import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = ({ prop }) => (
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">{prop}</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
export default TopBar;
