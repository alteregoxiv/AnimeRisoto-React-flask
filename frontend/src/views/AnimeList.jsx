import "../App.css";
import "./AnimeList.css";
import { useState, useEffect } from "react";
import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { createSearchParams, useSearchParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Naavbar from "../components/Naavbar";
import Animecard from "../components/Animecard";

import { Container, Col, Row } from "react-bootstrap";

const AnimeList = () => {
  const notifysuccess = () =>
    toast.success("Data Fetch Successful", { theme: "colored" });
  const notifyfailure = () =>
    toast.error("Data Fetch Unsuccessful", { theme: "colored" });

  const [resp, setResp] = useState([]);
  const [animename, setAnimename] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams(createSearchParams({ title: animename }));
    fetch("http://localhost:5000/anime?title=" + animename)
      .then((res) => res.json())
      .then((res) => {
        setResp(res.data);
        console.log(resp[0]);
        notifysuccess();
      })
      .catch((err) => {
        console.log(err);
        notifyfailure();
      });
  };

  useEffect(() => {
    setAnimename(searchParams.get("title"));

    fetch("http://localhost:5000/anime?title=" + searchParams.get("title"))
      .then((res) => res.json())
      .then((res) => {
        setResp(res.data);
        notifysuccess();
      })
      .catch((err) => {
        console.log(err);
        notifyfailure();
      });
  }, []);

  return (
    <>
      <Naavbar />
      {
        <div class="main">
          <div class="sidebar">
            <Form
              className="d-flex"
              onSubmit={handleSubmit}
              style={{ margin: "2%" }}
            >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={animename}
                onChange={(e) => setAnimename(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </div>

          <div class="list">
            {resp !== "" ? (
              <Container>
                <Row xs={2}>
                  {resp.map((i) => {
                    return (
                      <>
                        <Col sm>
                          <Animecard data={i} />
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Container>
            ) : (
              <>
                <h1>Loading...</h1>
              </>
            )}
          </div>
        </div>
      }
      <ToastContainer />
    </>
  );
};

export default AnimeList;
