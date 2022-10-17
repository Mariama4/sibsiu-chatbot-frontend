import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getFrames } from "../http/frameApi";
import Context from "../utils/context";
import Loading from "../components/Loading";
import FrameList from "../components/FrameList";
import { observer } from "mobx-react-lite";

const Frames = observer(() => {
  const { frame } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Frames - SIBSIU";
    getFrames()
      .then((data) => {
        frame.setFrames(data["result"]);
      })
      .finally(() => setLoading(false));
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <FrameList />
    </Container>
  );
});

export default Frames;
