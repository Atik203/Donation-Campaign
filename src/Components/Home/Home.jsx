import { useLoaderData } from "react-router-dom";
import DonationCards from "../DonationCards/DonationCards";
import Header from "../Header/Header";
import { useState } from "react";
const Home = () => {
  const datas = useLoaderData();
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header search={search} setSearch={setSearch}></Header>
      <DonationCards datas={datas} search={search}></DonationCards>
    </div>
  );
};

export default Home;
