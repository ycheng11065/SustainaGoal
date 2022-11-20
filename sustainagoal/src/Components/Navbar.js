import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Payment from "./Payment"
import "./Navbar.scss";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navContainer" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" color="green">Sustainagoal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link className="headerLink" href="/goals">GOALS</Nav.Link>
            <Nav.Link className="headerLink" href="/journey">YOUR JOURNEY</Nav.Link>
            <Nav.Link className="headerLink" href="/profile">PROFILE</Nav.Link>
            <Nav.Link className="headerLink">
              <Payment />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;