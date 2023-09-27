import PropTypes from "prop-types";

const Card = ({ data }) => {
  const {
    img,
    id,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    price,
  } = data;

  return (
    <div
      className="flex flex-col md:flex-row rounded-md"
      style={{ background: category_bg }}
    >
      <div>
        <figure>
          <img src={img} className="w-full" />
        </figure>
      </div>
      <div className="ml-5 text-left mt-5" style={{ color: text_button_bg }}>
        <button
          className="border-none px-2 text-center rounded-md"
          style={{ background: card_bg }}
        >
          {category}
        </button>
        <h2 className="card-title mb-2 font-bold text-2xl mt-2 text-black">
          {title}
        </h2>
        <h4 className="font-medium">${price}</h4>
        <button
          className="btn btn-primary text-sm border-none mb-3 md:mb-0 mt-2 text-white
        "
          style={{ background: text_button_bg }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    category_bg: PropTypes.string.isRequired,
    card_bg: PropTypes.string.isRequired,
    text_button_bg: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Card;
