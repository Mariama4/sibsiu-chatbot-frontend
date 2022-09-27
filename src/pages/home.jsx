import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import BotConfiguration from "../components/BotConfiguration";
import Loading from "../components/Loading";
import Context from "../utils/context";
import { Reload } from "../http/botConfigurationApi";

const Home = () => {
  const { botConfiguration } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      return await Reload();
    };
    fetchData()
      .then((d) => {
        botConfiguration.setSetting(d.configuration[0]);
      })
      .finally(() => setLoading(false));
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <Container className="d-flex justify-content-center align-items-center p-5">
      <BotConfiguration data={botConfiguration} />
    </Container>
  );
};

export default Home;
