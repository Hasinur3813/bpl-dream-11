import bannerLogo from "../assets/banner-main.png";
import PropTypes from "prop-types";
import bannerBg from "../assets/bg-shadow.png";

const Header = ({ getCredit }) => {
  return (
    <div className="container mx-auto px-2 mt-20 sm:mt-24 lg:mt-28">
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="hero bg-center bg-[length:100%_100%]  bg-no-repeat bg-black py-16 mt-2 rounded-3xl "
      >
        <div className="hero-content text-neutral-content text-center">
          <div className=" flex flex-col justify-center gap-y-4">
            <img
              className="w-1/2 sm:w-1/3 lg:w-1/6 mx-auto mb-2"
              src={bannerLogo}
              alt=""
            />

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-lg md:text-2xl font-medium text-[#FFFFFFB3]">
              Beyond Boundaries Beyond Limits
            </p>

            <div className="mt-3">
              <button
                onClick={getCredit}
                type="button"
                className="text-white btn font-bold ring-1 ring-white bg-gradient-to-r from-pink-500 to-orange-300 ring-offset-8 ring-offset-black"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  getCredit: PropTypes.func.isRequired,
};

export default Header;
