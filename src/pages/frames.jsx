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
    const fetchData = async () => {
      return await getFrames();
    };
    fetchData()
      .then((d) => {
        frame.setFrames(d["frames"]);
      })
      .finally(() => setLoading(false));
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <FrameList list={frame} />
    </Container>
  );
});

export default Frames;
