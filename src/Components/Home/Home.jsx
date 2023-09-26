import { useLoaderData } from "react-router-dom";
import DonationCards from "../DonationCards/DonationCards";
import Header from "../Header/Header";

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <Header></Header>
      <DonationCards datas={datas}></DonationCards>
    </div>
  );
};

export default Home;
