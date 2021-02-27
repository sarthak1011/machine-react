import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import {Input } from "antd";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const change = (e) => {
    if (!e.target.value) {
      setFilteredPlayers(players);
      return;
    }
    const filteredData = players.filter((item) => {
      return ["TName", "PFName"].some((key) => {
          
        const regex = new RegExp(`${e.target.value.trim()}`, "gi");
        return regex.test(item[key].toLowerCase());
      });
    });
    setFilteredPlayers(filteredData);
  };

  const api = async () => {
    let {data} = await axios.get("https://api.npoint.io/d6bd0efc05639084eb17");
    let play = data.playerList;
    play.sort(function (a, b) {
      return a.Value - b.Value;
    });
    setPlayers(play);
    setFilteredPlayers(play);
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <>
      <Input
        placeholder="Search Player Name or Team Name"
        className="w-50 my-5"
        onChange={change}
      />

      <div className="row">
        {filteredPlayers &&
          filteredPlayers.map((player, id) => (
            <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4">
              <Cards player={player} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Main;
