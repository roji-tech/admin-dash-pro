import React from "react";
import "./chart.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { reactChartData } from "./chartData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ title }) => {
  const ChBar = reactChartData("Orders");
  const ChDoughnut = reactChartData("Earnings");

  const { data: Brdata ,  options: Boptions } = ChBar;
  const { data: Dodata, options: Doptions } = ChDoughnut;

  return (
    <div className="chart">
      <div className="doughnut">
        <div className="title">{title}</div>
        <Doughnut options={Doptions} data={Dodata} />;
      </div>
      <div className="chart-bar">
        <div className="title">{title}</div>
        <Bar className="chart-bar" options={Boptions} data={Brdata} />;
      </div>
    </div>
  );
};

export default Chart;
