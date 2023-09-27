import DonationCard from "../DonationCard/DonationCard";
import PropTypes from "prop-types";

const DonationCards = ({ datas, search }) => {
  const filteredData = search
    ? datas.filter((item) => item.category.includes(search))
    : datas;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-20 w-11/12 mx-auto">
      {filteredData?.map((data) => (
        <DonationCard data={data} key={data.id}></DonationCard>
      ))}
    </div>
  );
};
DonationCards.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      details_img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      category_bg: PropTypes.string.isRequired,
      card_bg: PropTypes.string.isRequired,
      text_button_bg: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  search: PropTypes.string.isRequired,
};

export default DonationCards;
