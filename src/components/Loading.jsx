import { Container } from "react-bootstrap";
import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
      fluid
    >
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Container>
  );
};

export default Loading;
