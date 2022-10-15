import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import BotConfiguration from "../components/BotConfiguration";
import Loading from "../components/Loading";
import Context from "../utils/context";
import { Reload } from "../http/botConfigurationApi";
import { observer } from "mobx-react-lite";

const Home = observer(() => {
  const { botConfiguration, frame } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Home - SIBSIU";

    Reload()
      .then((data) => {
        botConfiguration.setSetting(data.result[0]);
      })
      .finally(() => setLoading(false));
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <Container
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ width: "100vh", height: "80vh" }}
      fluid
    >
      <BotConfiguration data={botConfiguration} />
    </Container>
  );
});

export default Home;
