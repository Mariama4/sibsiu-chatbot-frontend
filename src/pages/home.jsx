import React from "react";
import { Container } from "react-bootstrap";
import BotConfiguration from "../components/BotConfiguration";

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center p-5">
      <BotConfiguration />
    </Container>
  );
};

export default Home;
