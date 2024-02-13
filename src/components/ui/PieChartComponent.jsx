"use client";
import Chart from "chart.js/auto";
import React, { useRef, useEffect } from "react";

const PieChartComponent = ({ data }) => {
  const canvas = useRef();
  const { donatedAmount, amount, collectedAmount } = data;
  console.log(donatedAmount, amount, collectedAmount);
  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart("myChart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Total Amount", "CollectedAmount", "Your Donation"],
        datasets: [
          {
            label: "Donation Details",
            data: [amount, collectedAmount, donatedAmount],
            backgroundColor: ["pink", "blue", "purple"],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Donation Statistics",
          },
        },
      },
    });
  }, []);

  return (
    <div className="container">
      <canvas id="myChart" ref={canvas}></canvas>
    </div>
  );
};

export default PieChartComponent;
