import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Logo from "../assets/BlueTechtonicaWord.png";
import Logo from "../assets/ForgetMeNot logo.png";

function MyNavBar(props) {
  return (
    <>
      <Navbar data-testid="navbar" bg="white" variant="white" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="100"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav.Link href="/loves">All Your Loves </Nav.Link>
          <Nav.Link>Add A Love</Nav.Link>
          <Nav.Link href="/family">Family</Nav.Link>
          <Nav.Link href="/friends">Friends</Nav.Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Sarah</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
