import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const [donateData, setDonateData] = useState([]);

  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation")) || [];
    if (DonationItems) {
      setDonateData(DonationItems);
    }
  }, []);

  const yourDonations = donateData.length;
  const TotalDonation = 12;

  const data = [
    ["Task", "Percentage"],
    ["Your Donation", (yourDonations / TotalDonation) * 100],
    ["Total Donation", ((TotalDonation - yourDonations) / TotalDonation) * 100],
  ];

  const options = {
    legend: { position: "bottom" },
    slices: {
      0: { color: "#00C49F" },
      1: { color: "#FF444A" },
    },
  };

  return (
    <Chart
      chartType="PieChart"
      options={options}
      data={data}
      width={"100%"}
      height={"500px"}
    />
  );
};

export default Statistics;
