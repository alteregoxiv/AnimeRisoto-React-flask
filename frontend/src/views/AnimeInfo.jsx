import "../App.css";
import Naavbar from "../components/Naavbar";
import { useLocation } from "react-router";
import { Container, Col, Row } from "react-bootstrap";

const AnimeInfo = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <Naavbar />
      {
        <div class="infodiv">
          <div class="upperinfodiv"></div>

          <div class="lowerinfodiv">
            <Container>
              <Row>
                <Col sm={4}>
                  {
                    <div class="lowerinfoimg">
                      <img src={data.images.jpg.image_url} />
                    </div>
                  }
                </Col>
                <Col sm={8}>
                  {
                    <div class="lowerinfodata">
                      <h1>Title: {data.title}</h1>
                    </div>
                  }
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      }
    </>
  );
};

export default AnimeInfo;
