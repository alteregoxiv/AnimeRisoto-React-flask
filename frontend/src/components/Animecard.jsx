import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Animecard = (props) => {
  const { data } = props;
  const redirectlink = `/animelist/info/${data.mal_id}`;
  const navigate = useNavigate();

  const getInfo = () => {
    navigate(redirectlink, { state: data });
  };

  return (
    <>
      <Card style={{ width: "18rem" , margin: "2%"}}>
        <Card.Img variant="top" src={data.images.jpg.image_url} />
        <Card.Body>
          <Card.Title>{data.title.slice(0 , 25)}</Card.Title>
          <Card.Text>{data.synopsis.slice(0 , 100) + "..."}</Card.Text>
          <Button variant="primary" onClick={getInfo}>
            INFO
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Animecard;
