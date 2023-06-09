import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/LOGO2.jpeg";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function MyNavBar(props) {
  const { isAuthenticated, user, logout } = useAuth0();
  useEffect(() => {
    if (isAuthenticated === true) {
      fetch("/api/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("From the post ", data);
        });
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <Navbar data-testid="navbar" bg="white" variant="white" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="150"
              // width="280"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />{" "}
          </Navbar.Brand>
          <Link className="nav-link" to="/profile">
            Your Profile
          </Link>
          {/* <Nav.Link>Add A Love</Nav.Link> */}
          <Link className="nav-link" to="/family">
            Family
          </Link>
          <Link className="nav-link" to="/friends">
            Friends
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button className="logout" onClick={() => logout()}>
                Log Out
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
