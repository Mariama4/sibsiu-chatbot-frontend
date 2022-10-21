import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Context from "../utils/context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const random_rgba = () => {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",1)";
};

const ChartTelegramBotUsers = observer(() => {
  const { statistic } = useContext(Context);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = [
    ...new Set(
      statistic.telegramBotUsers.map((element, index) => {
        return element.createdAt.split("T").shift();
      })
    ),
  ].sort();
  const users = [
    ...labels.map((label) =>
      statistic.telegramBotUsers.reduce((previousValue, currentValue) => {
        if (currentValue.createdAt.split("T").shift() == label) {
          return previousValue + 1;
        } else {
          return previousValue;
        }
      }, 0)
    ),
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Пользователи",
        data: users,
        backgroundColor: labels.map((element) => random_rgba()),
        borderColor: labels.map((element) => random_rgba()),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className=" mt-3 mb-3" fluid>
      <Bar options={options} data={data} />
    </Container>
  );
});

export default ChartTelegramBotUsers;
