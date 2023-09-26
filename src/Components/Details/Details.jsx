import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const findData = datas.find((data) => data.id === id);
    setData(findData);
  }, []);

  const { details_img, price, title, description, text_button_bg } = data;

  const overlayStyle = {
    background: "rgba(11, 11, 11, 0.50)",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  };

  const handleDonation = () => {
    const AddedDonation = [];

    const DonationItems = JSON.parse(localStorage.getItem("donation"));

    if (!DonationItems) {
      AddedDonation.push(data);
      localStorage.setItem("donation", JSON.stringify(AddedDonation));
    } else {
      AddedDonation.push(...DonationItems, data);
      localStorage.setItem("donation", JSON.stringify(AddedDonation));
    }

    toast.success("Donated Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-11/12 mx-auto my-28">
      <div className="relative flex justify-center items-center rounded-lg">
        <img src={details_img} className="w-full md:w-11/12" />
        <div
          className="absolute flex items-end justify-start h-24 md:h-28 w-full md:w-11/12 mx-auto"
          style={overlayStyle}
        >
          <button
            onClick={handleDonation}
            className="btn btn-primary text-base md:text-lg text-white border-none ml-10 mb-8"
            style={{ background: text_button_bg }}
          >
            Donate ${price}
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-16">
        <h3 className="text-4xl text-left font-bold">{title}</h3>
        <p className="text-base text-justify text-[#0B0B0BB2] mt-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Details;
