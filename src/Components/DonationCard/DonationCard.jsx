const DonationCard = ({ data }) => {
  const { img, id, title, category, category_bg, card_bg, text_button_bg } =
    data;

  return (
    <div
      className="rounded-lg cursor-pointer"
      style={{ background: category_bg }}
    >
      <figure>
        <img src={img} className="w-full" />
      </figure>
      <div className="ml-4 mt-5" style={{ color: text_button_bg }}>
        <button
          className="border-none px-2 text-center rounded-md"
          style={{ background: card_bg }}
        >
          {category}
        </button>
        <h2 className="card-title mb-4 font-medium text-xl mt-3">{title}</h2>
      </div>
    </div>
  );
};

export default DonationCard;
