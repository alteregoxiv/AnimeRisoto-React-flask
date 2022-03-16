import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import {
  loginSuccess,
  loginInitiate,
  passwordError,
  emailError,
} from "../redux/login/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from "yup";

const Loginform = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const handleValidationsError = (validationError) => {
    dispatch(emailError(""));
    dispatch(passwordError(""));

    validationError.inner.forEach((err) => {
      if (err.path === "email") {
        dispatch(emailError(err.errors[0]));
      }
      if (err.path === "password") {
        dispatch(passwordError(err.errors[0]));
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailError(""));
    dispatch(passwordError(""));
    const invalidCred = document.getElementsByClassName("invalidCred")[0];
    const data = { email: email, password: password };
    if (email === "eve.holt@reqres.in" && password === "cityslicka") {
      invalidCred.innerHTML = "";
      dispatch(loginSuccess("true"));
      console.log(login.loggedin);
      localStorage.setItem("logg", true);
    } else {
      invalidCred.innerHTML = "Invalid Credentials";
    }

    validationSchema
      .validate({ email, password }, { abortEarly: false })
      .catch((err) => handleValidationsError(err));
  };

  return (
    <>
      {localStorage.getItem("logg") === "true" ? (
        <h1>Already logged in</h1>
      ) : (
        <Container style={{ "margin-top": "5%" }}>
          <Row>
            <Col
              sm={6}
              style={{
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "border-right": "1px solid",
              }}
            >
              <h1>Welcome To AR</h1>
            </Col>
            <Col
              sm={6}
              style={{
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
              }}
            >
              <Card
                border="primary"
                style={{ width: "18rem", height: "30rem" }}
              >
                <Card.Header>LogIn</Card.Header>
                <Card.Body>
                  <Card.Title>Login to proceed</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Text
                        className="emailerror"
                        style={{ color: "red" }}
                      >
                        {login.emailerror}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Form.Text
                        className="passworderror"
                        style={{ color: "red" }}
                      >
                        {login.passworderror}
                      </Form.Text>
                    </Form.Group>

                    <Form.Text
                      className="invalidCred"
                      style={{
                        position: "absolute",
                        top: "80%",
                        left: "8%",
                        color: "red",
                      }}
                    ></Form.Text>

                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        width: "90%",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        margin: "5%",
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Loginform;
