import PropTypes from "prop-types";

const Banner = ({ search, setSearch }) => {
  const background = {
    backgroundImage: `url("https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3xBaGZ25QE7mfVsX2iYWhhpFQCea1heVhQpRuuNJ23BA4FdafFthgLKZg")`,
    width: "100%",
    height: "70vh",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    opacity: "0.2",
  };

  return (
    <div className="">
      <div className="relative" style={background}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-32 md:mt-28 lg:mt-0">
            I Grow By Helping People In Need
          </h1>
          <div className="flex justify-center items-center mt-4 md:mt-6 lg:mt-10 mb-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearch(e.target.name.value);
              }}
            >
              <input
                type="search"
                placeholder="Search here..."
                id="searchInput"
                name="name"
                className="bg-base-100 border-2 border-[#DEDEDE] px-4 w-48 md:w-80 h-12 md:h-14 rounded-lg"
              />
            </form>
            <button
              type="submit"
              onClick={() =>
                setSearch(document.getElementById("searchInput").value)
              }
              className="btn btn-primary bg-[#FF444A] rounded-lg h-10 md:h-14 px-6 text-white border-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Banner;
