import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-6 md:mt-10 w-11/12 mx-auto">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <img
            className="w-48"
            src={`https://i.ibb.co/kSwhbDf/Logo.png`}
            alt=""
          />
        </div>
        <div>
          <ul className="flex flex-row gap-4 mt-4 md:mt-0 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
