export const reactChartData = (labelName) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: labelName,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const listing = [200, 400, 300, 100, 600, 700, 300, 500, 500, 700, 100, 600];
  const listing1 = [100, 600, 700, 300, 500, 200, 400, 300, 500, 700, 100, 600];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Earnings",
        data: listing,
        //  backgroundColor: "rgba(255, 99, 12, 0.7)",

        backgroundColor: [
          "rgba(25, 159, 64, 0.2)",
          "rgba(54, 162, 35, 0.2)",
          "rgba(55, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(55, 99, 32, 0.2)",
          "rgba(25, 206, 86, 0.2)",
          "rgba(153, 102, 25, 0.2)",
          "rgba(75, 192, 19, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 6, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 12, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 25, 1)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderWidth: 5,
      },
      {
        label: "Sales",
        data: listing1,
        // backgroundColor: "rgba(53, 162, 35, 0.5)",

        backgroundColor: [
          "rgba(55, 99, 132, 0.2)",
          "rgba(5, 162, 235, 0.2)",
          "rgba(255, 06, 86, 0.2)",
          "rgba(75, 19, 192, 0.2)",
          "rgba(53, 102, 255, 0.2)",
          "rgba(255, 159, 4, 0.2)",
          "rgba(255, 26, 86, 0.2)",
          "rgba(75, 12, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return { data, labels, listing, listing1, options };
};
