import React from "react";

const BotCollection = ({ bots, enlistBot }) => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const botListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const botItemStyle = {
    width: "23%",
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1>Bot Collection</h1>
      <div style={botListStyle}>
        {bots.map((bot) => (
          <div
            style={botItemStyle}
            key={bot.id}
            onClick={() => enlistBot(bot)}
          >
            <h2>{bot.name}</h2>
            <p>ID: {bot.id}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
