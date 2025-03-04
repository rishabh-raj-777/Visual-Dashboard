import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import "./ChartComponent.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const ChartComponent = ({ data }) => {
  if (data.length === 0) return <p>No data available</p>;

  const years = data.map((item) => item.year);
  const intensity = data.map((item) => item.intensity);
  const likelihood = data.map((item) => item.likelihood);
  const relevance = data.map((item) => item.relevance);

  return (
    <div className="chart-container">
      <h4>📈 Intensity over Years</h4>
      <Line
        data={{
          labels: years,
          datasets: [
            {
              label: "Intensity",
              data: intensity,
              borderColor: "aqua",
              fill: false,
            },
          ],
        }}
      />

      <h4>📊 Likelihood Distribution</h4>
      <Bar
        data={{
          labels: years,
          datasets: [
            {
              label: "Likelihood",
              data: likelihood,
              backgroundColor: "#FF6384",
            },
          ],
        }}
      />

      <h4>🟢 Relevance Breakdown</h4>
      <Pie
        data={{
          labels: years,
          datasets: [
            {
              label: "Relevance",
              data: relevance,
              backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartComponent;
