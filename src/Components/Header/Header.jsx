import Banner from "./Banner/Banner";

const Header = ({ search, setSearch }) => {
  return (
    <div className="mt-2">
      <Banner search={search} setSearch={setSearch}></Banner>
    </div>
  );
};

export default Header;
