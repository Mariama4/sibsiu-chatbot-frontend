import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Context from "../utils/context";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Pie, PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const random_rgba = () => {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",1)";
};

const ChartFrameUses = observer(() => {
  const { statistic } = useContext(Context);
  const labels = [
    ...new Set(
      statistic.frameLog.map((element, index) => {
        return element.frame_id;
      })
    ),
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: labels.map((element) =>
          statistic.frameLog.reduce((previousValue, currentValue) => {
            if (element == currentValue.frame_id) {
              return previousValue + 1;
            }
            return previousValue;
          }, 0)
        ),
        backgroundColor: labels.map((element) => random_rgba()),
        // borderColor: labels.map((element) => random_rgba()),
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container className="mt-3 mb-3 px-5" fluid>
      <Doughnut data={data} />
    </Container>
  );
});

export default ChartFrameUses;
