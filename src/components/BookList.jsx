import { Card, Col, Row, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";
import scifi from "../Data/books/scifi.json";

const BookList = () => {
  return (
    <Row>
      {scifi.map((book, index) => {
        <SingleBook key={index} book={book} />;
        return (
          <Col xs={6} md={3} key={book.asin}>
            <Card>
              <Card.Img variant="top" src={book.img} style={{ objectFit: "content" }} />
              <Card.Body>
                <Card.Title>{book.title} </Card.Title>
                <Card.Text>{book.price} $</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default BookList;
