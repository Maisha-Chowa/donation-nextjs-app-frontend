"use client";
import Chart from "chart.js/auto";
import React, { useRef, useEffect } from "react";

const PieChartComponent = ({ data, title }) => {
  const canvas = useRef();
  const chartInstance = useRef(null);
  const { donatedAmount, amount, collectedAmount } = data;

  useEffect(() => {
    const ctx = canvas.current;

    if (chartInstance.current === null) {
      chartInstance.current = new Chart(ctx, {
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
              text: title, // Use the dynamically passed title
            },
          },
        },
      });
    } else {
      chartInstance.current.data.datasets[0].data = [
        amount,
        collectedAmount,
        donatedAmount,
      ];
      if (chartInstance.current.options.title) {
        chartInstance.current.options.title.text = title; // Update the title dynamically
      } else {
        chartInstance.current.options.title = { display: true, text: title }; // Initialize title if not present
      }
      chartInstance.current.update();
    }
  }, [amount, collectedAmount, donatedAmount, title]);

  return (
    <div className="container">
      <canvas ref={canvas}></canvas>
    </div>
  );
};

export default PieChartComponent;
