import React from "react";
import { Card } from "antd";
const { Meta } = Card;
var dateFormat = require("dateformat");

const Cards = ({ player }) => {
  return (
    <Card
      className="d-inline-block my-3"
      hoverable
      style={{
        maxWidth: 240,
        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
      }}
      cover={<img alt="example" width="100%" src={`images/${player.Id}.jpg`} />}
    >
      <Meta title={player.PFName} description={player.SkillDesc} />
      <Meta description={`$ ${player.Value}`} />
      <Meta
        description={`Up Coming Match:${player.UpComingMatchesList[0].CCode} vs ${player.UpComingMatchesList[0].VsCCode}`}
      />
      <Meta
        description={`Next Match Time:${dateFormat(
          player.UpComingMatchesList[0].MDate,
          "dddd, mmmm , yyyy, h:MM:ss TT"
        )}`}
      />
    </Card>
  );
};

export default Cards;
