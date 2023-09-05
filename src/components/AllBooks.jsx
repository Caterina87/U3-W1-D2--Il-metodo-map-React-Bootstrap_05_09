import { Card, Col, Row, Button } from "react-bootstrap";
import fantasy from "../Data/books/fantasy.json";

const AllBooks = () => {
  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant="top" src={book.img} style={{ heigh: "200px", objectFit: "content" }} />
              <Card.Body>
                <Card.Title>{book.title} </Card.Title>
                <Card.Text>{book.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllBooks;
