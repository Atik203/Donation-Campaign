import { useEffect, useState } from "react";
import DonationCard from "./Card";
const Donation = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation"));
    if (DonationItems) {
      setData(DonationItems);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4 my-16 w-11/12 mx-auto">
      {datas.map((data) => (
        <DonationCard data={data} key={data.id}></DonationCard>
      ))}
    </div>
  );
};

export default Donation;
