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

const ChartTelegramBotUsers = observer(() => {
  const { statistic } = useContext(Context);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Появление новых пользователей за месяц",
      },
    },
  };

  const labels = Array.from(Array(32).keys());
  labels.shift();
  const currentMonth = new Date().getMonth();
  const data = {
    labels,
    datasets: [
      {
        label: "Пользователи",
        data: labels.map((label) =>
          statistic.telegramBotUsers.reduce((previousValue, currentValue) => {
            let date = new Date(currentValue.createdAt);
            let day = date.getDate();
            let month = date.getMonth();
            if (month != currentMonth) {
              return previousValue;
            }
            if (day == label) {
              return previousValue + 1;
            }
            return previousValue;
          }, 0)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container className="shadow mt-3 mb-3" fluid>
      <h3>Новые пользователи чат-бота:</h3>
      <Bar options={options} data={data} />
    </Container>
  );
});

export default ChartTelegramBotUsers;
