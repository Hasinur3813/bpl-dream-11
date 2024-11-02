import PropTypes from "prop-types";

const Player = ({
  playerId,
  name,
  country,
  image,
  role,
  battingType,
  bowlingType,
  biddingPrice,
  handleChoosePlayer,
}) => {
  return (
    <div className="card card-compact bg-base-100 hover:shadow-xl shadow-sm p-6 border">
      <figure>
        <img
          className="w-full object-cover h-64 rounded-2xl"
          src={image}
          alt="name"
        />
      </figure>

      <div className=" mt-3">
        <h2 className="card-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          {name}
        </h2>

        <div className="flex justify-between items-center mt-4">
          <h4 className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span className="text-base text-gray-500 opacity-75">
              {country}
            </span>
          </h4>
          <span className="rounded-lg bg-[#1313130D] px-4 py-2 text-sm">
            {role}
          </span>
        </div>

        <hr className="my-4" />

        <h4 className="text-base font-bold">Rating</h4>

        <div className="flex justify-between items-center mt-4">
          <h4 className="text-sm md:text-base font-semibold">{battingType}</h4>
          <h4 className="text-sm text-[#131313B3]">{bowlingType}</h4>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h4 className=" text-sm sm:text-base font-semibold">
            Price: ${biddingPrice}
          </h4>
          <button
            onClick={() => handleChoosePlayer(playerId, biddingPrice)}
            type="button"
            className="px-1 sm:px-4 py-2 rounded-lg text-sm border"
          >
            Choose Player
          </button>
        </div>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  battingType: PropTypes.string.isRequired,
  bowlingType: PropTypes.string.isRequired,
  biddingPrice: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
  playerId: PropTypes.string.isRequired,
};

export default Player;
