import PropTypes from "prop-types";
import { useState } from "react";
import ShowAllPlayers from "./ShowAllPlayers";
import ShowSelectedPlayer from "./ShowSelectedPlayer";
import { toast } from "react-toastify";

const ShowPlayers = ({ players, credit, setCredit }) => {
  const [selecetedBtn, setSelectedBtn] = useState("available");
  const [selectedPlayerId, setSelectedPlayerId] = useState([]);

  const handleSelectBtn = (target) => {
    setSelectedBtn(target);
  };

  const handleChoosePlayer = (id, biddingPrice) => {
    if (credit >= biddingPrice) {
      if (selectedPlayerId.includes(id)) {
        toast.warn("Player already selected.", {
          autoClose: 2000,
          position: "top-center",
        });
      } else if (selectedPlayerId.length >= 6) {
        toast.error("You can not add more than 6 players!", {
          autoClose: 2000,
          position: "top-center",
        });
      } else {
        setSelectedPlayerId([...selectedPlayerId, id]);
        setCredit((prevCredit) => prevCredit - parseInt(biddingPrice));

        toast.success("Successfully added player.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } else {
      toast.error("Not enough credit. First claim some free credits.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleRemovePlayer = (playerId) => {
    setSelectedPlayerId(selectedPlayerId.filter((id) => id !== playerId));
  };

  return (
    <section className="mt-16 py-4 pb-16">
      <div className="container mx-auto px-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div>
            <h3 className="text-xl md:text-xl lg:text-2xl font-bold">
              {selecetedBtn === "available"
                ? "Available Players"
                : `Selected Player (${selectedPlayerId.length}/6)`}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => handleSelectBtn("available")}
              type="button"
              className={`${
                selecetedBtn === "available" && "bg-secondaryColor"
              } px-5 py-2 text-lg text-[#13131399] border-t border-b border-l rounded-tl-xl rounded-bl-xl`}
            >
              Available
            </button>

            <button
              onClick={() => handleSelectBtn("selected")}
              type="button"
              className={`${
                selecetedBtn === "selected" && "bg-secondaryColor"
              } px-5 py-2 text-lg text-[#13131399] border-t border-b border-r rounded-tr-xl rounded-br-xl`}
            >
              Selected({selectedPlayerId.length})
            </button>
          </div>
        </div>

        {selecetedBtn === "available" && (
          <ShowAllPlayers
            players={players}
            credit={credit}
            handleChoosePlayer={handleChoosePlayer}
          />
        )}
        {selecetedBtn === "selected" && (
          <ShowSelectedPlayer
            players={players}
            selectedPlayerId={selectedPlayerId}
            setSelectedPlayerId={setSelectedPlayerId}
            handleRemovePlayer={handleRemovePlayer}
            setSelectedBtn={setSelectedBtn}
          />
        )}
      </div>
    </section>
  );
};

ShowPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired,
  setCredit: PropTypes.func.isRequired,
};
export default ShowPlayers;
