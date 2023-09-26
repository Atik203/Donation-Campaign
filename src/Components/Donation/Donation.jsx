import { useEffect, useState } from "react";
import DonationCard from "./Card";
const Donation = () => {
  const [datas, setData] = useState([]);
  const [dataLength, setDataLength] = useState(2);
  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation"));
    if (DonationItems) {
      setData(DonationItems);
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4 my-16 w-11/12 mx-auto">
        {datas.slice(0, dataLength).map((data) => (
          <DonationCard data={data} key={data.id}></DonationCard>
        ))}
      </div>
      <div
        className={dataLength == datas.length ? `hidden` : `text-center mt-8`}
      >
        <button
          onClick={() => setDataLength(datas.length)}
          className="btn btn-primary bg-[#009444] text-white"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
