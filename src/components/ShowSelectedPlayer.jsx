import { useEffect, useState } from "react";
import ListedPlayer from "./ListedPlayer";
import PropTypes from "prop-types";

const ShowSelectedPlayer = ({
  players,
  selectedPlayerId,
  handleRemovePlayer,
  setSelectedBtn,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    const filteredPlayer = players.filter((player) => {
      return selectedPlayerId.some((id) => player.playerId === id);
    });

    setSelectedPlayer(filteredPlayer);
  }, [players, selectedPlayerId]);

  return (
    <div className="mt-8">
      {selectedPlayer.length === 0 && (
        <h1 className="text-center text-3xl my-5">No Players Found!</h1>
      )}
      <div className="space-y-2 transition-all duration-200">
        {selectedPlayer.map((p) => (
          <ListedPlayer
            key={p.playerId}
            player={p}
            handleRemovePlayer={handleRemovePlayer}
          />
        ))}
      </div>

      <button
        onClick={() => setSelectedBtn("available")}
        type="button"
        className="bg-secondaryColor rounded-xl px-5 py-3 text-base font-bold ring-2 ring-gray-200 ring-offset-4 ring-offset-white mt-8 ms-1"
      >
        Add More Player
      </button>
    </div>
  );
};

ShowSelectedPlayer.propTypes = {
  players: PropTypes.array.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired,
  selectedPlayerId: PropTypes.array.isRequired,
  setSelectedBtn: PropTypes.func.isRequired,
};

export default ShowSelectedPlayer;
