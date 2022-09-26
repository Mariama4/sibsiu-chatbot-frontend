import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
