import DonationCard from "../DonationCard/DonationCard";

const DonationCards = ({ datas }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-20 w-11/12 mx-auto">
      {datas?.map((data) => (
        <DonationCard data={data} key={data.id}></DonationCard>
      ))}
    </div>
  );
};

export default DonationCards;
