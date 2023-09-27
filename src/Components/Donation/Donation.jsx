import { useEffect, useState } from "react";
import DonationCard from "./Card";

const Donation = () => {
  const [datas, setData] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation"));
    if (DonationItems) {
      setData(DonationItems);
    }
  }, []);

  return (
    <div>
      {datas.length === 0 ? (
        <div className="text-center text-3xl font-bold mt-40">
          <h1>You have not donated yet.</h1>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4 my-16 w-11/12 mx-auto">
            {datas.slice(0, dataLength).map((data) => (
              <DonationCard data={data} key={data.id}></DonationCard>
            ))}
          </div>
          {datas.length >= 4 && (
            <div
              className={
                dataLength === datas.length ? `hidden` : `text-center mt-8`
              }
            >
              <button
                onClick={() => setDataLength(datas.length)}
                className="btn btn-primary bg-[#009444] text-white"
              >
                See All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
