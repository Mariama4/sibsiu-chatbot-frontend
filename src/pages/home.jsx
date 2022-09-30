import React, { useState, useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import BotConfiguration from "../components/BotConfiguration";
import Loading from "../components/Loading";
import Context from "../utils/context";
import { Reload } from "../http/botConfigurationApi";
import BotLog from "../components/BotLog";
import TelegramUserLog from "../components/TelegramUserLog";

const Home = () => {
  const { botConfiguration } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Home - SIBSIU";
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
    <Container className="d-flex flex-row justify-content-between align-items-around pt-5">
      <BotConfiguration data={botConfiguration} />
      <BotLog />
      <TelegramUserLog />
    </Container>
  );
};

export default Home;
