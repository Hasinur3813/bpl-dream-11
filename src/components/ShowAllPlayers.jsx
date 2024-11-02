import Player from "./Player";
import PropTypes from "prop-types";

const ShowAllPlayers = ({ players, credit, handleChoosePlayer }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
      {players.map((player) => (
        <Player
          key={player.playerId}
          {...player}
          credit={credit}
          handleChoosePlayer={handleChoosePlayer}
        />
      ))}
    </div>
  );
};

ShowAllPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};

export default ShowAllPlayers;
