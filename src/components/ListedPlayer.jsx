import PropTypes from "prop-types";

const ListedPlayer = ({ player, handleRemovePlayer }) => {
  return (
    <div className="flex justify-between items-center p-6 rounded-2xl border">
      {/* left content */}
      <div className="flex gap-x-3 items-center">
        <img
          className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-box object-cover"
          src={player.image}
          alt=""
        />

        <div className="flex flex-col ">
          <h3 className="text-base md:text-xl font-semibold">{player.name}</h3>
          <p className="text-sm md:text-base text-[#13131399]">
            {player.battingType}
          </p>
          <p className=" sm:hidden text-red-500 font-bold text-xs">
            -${player.biddingPrice}
          </p>
        </div>
      </div>

      {/* right content */}
      <div className="flex gap-5">
        <p className="hidden sm:block text-red-500 font-bold sm:text-base lg:text-lg">
          -${player.biddingPrice}
        </p>
        <svg
          onClick={() => handleRemovePlayer(player.playerId)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-5 md:size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

ListedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired,
};

export default ListedPlayer;
