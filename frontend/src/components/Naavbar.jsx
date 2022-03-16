import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../redux/login/action";
import { useNavigate } from "react-router";
import "./Naavbar.css";
import { useEffect, useState } from "react";

const Naavbar = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(loginInitiate("false"));
    console.log(login.loggedin);
    localStorage.setItem("logg", false);
    navigate("/login");
  };

  const [ offset , setOffset ] = useState(false)

  const navScroll = () => {
    if(window.scrollY>=2){
      setOffset(true)
    }
    else{
      setOffset(false)
    }
  }

  window.addEventListener('scroll' , navScroll)

  return (
    <>
      {login.loggedin === "true" ? (
        <Navbar
          bg="dark"
          expand="lg"
          variant="dark"
          fixed="top"
          className={offset ? "naavbar colorchange" : "naavbar"}
        >
          <Container fluid>
            <Navbar.Brand href="/">AR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/animelist">AnimeList</Nav.Link>
                <Nav.Link href="/login">LogIn</Nav.Link>
                <Button className="btn btn-danger" onClick={handleClick}>
                  LogOut
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          bg="dark"
          expand="lg"
          variant="dark"
          fixed="top"
          className={offset ? "naavbar colorchange" : "naavbar"}
        >
          <Container fluid>
            <Navbar.Brand href="/">AR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/login">LogIn</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Naavbar;
