import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Context from "../utils/context";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const random_rgba = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
};

const ChartFrameUses = observer(() => {
  const { statistic, frame } = useContext(Context);
  const labels = [
    ...new Set(
      frame.frames.map((element, index) => {
        return element.data.frame_id;
      })
    ),
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: labels.map((element) =>
          statistic.frameLog.reduce((previousValue, currentValue) => {
            if (element == currentValue.frame_id) {
              return previousValue + 1;
            }
            return previousValue;
          }, 0)
        ),
        backgroundColor: labels.map((element) => random_rgba()),
        borderColor: labels.map((element) => random_rgba()),
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container className="shadow mt-3 mb-3 px-5" fluid>
      <h3>Статистика использования фреймов:</h3>
      <Pie data={data} />
    </Container>
  );
});

export default ChartFrameUses;
