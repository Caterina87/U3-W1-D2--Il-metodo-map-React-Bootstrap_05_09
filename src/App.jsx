import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllBooks from "./components/AllBooks";
import { Container } from "react-bootstrap";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <Container>
      <TopBar prop="React Library" />
      <Welcome />
      {/* <AllBooks /> */}
      <SingleBook />
      <BookList />
      <MyFooter />
    </Container>
  );
}

export default App;
