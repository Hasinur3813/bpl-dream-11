import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowPlayers from "./ShowPlayers";
import Newslater from "./Newsletter";
import Footer from "./Footer";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const getCredit = () => {
    setCredit((prevCredit) => prevCredit + 3075700);
    toast.success("Congrats! You got free credits!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Navbar credit={credit} />
      <Header getCredit={getCredit} />
      <main>
        <ShowPlayers credit={credit} players={players} setCredit={setCredit} />
        <Newslater />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
