import { Card, Col, Row } from "react-bootstrap";
import scifi from "../Data/books/scifi.json";

const SingleBook = () => {
  const firstBook = scifi[0];

  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={firstBook.img} style={{ heigh: "200px", objectFit: "content" }} />
          <Card.Body>
            <Card.Title>{firstBook.title} </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default SingleBook;
