import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({ data }) => {
  const { img, id, title, category, category_bg, card_bg, text_button_bg } =
    data;

  return (
    <Link to={`/Details/${id}`}>
      <div
        className="rounded-lg cursor-pointer h-80"
        style={{ background: category_bg }}
      >
        <figure>
          <img src={img} className="w-full" />
        </figure>
        <div className="ml-4 mt-6" style={{ color: text_button_bg }}>
          <button
            className="border-none px-2 text-center rounded-md"
            style={{ background: card_bg }}
          >
            {category}
          </button>
          <h2 className="card-title mb-4 font-medium text-xl mt-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
};
DonationCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    category_bg: PropTypes.string.isRequired,
    card_bg: PropTypes.string.isRequired,
    text_button_bg: PropTypes.string.isRequired,
  }).isRequired,
};

export default DonationCard;
