import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((bots) => {
        setBots(bots);
      });
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots((prevEnlistedBots) => [
        ...prevEnlistedBots,
        { ...bot },
      ]);
    }
  };

  const removeFromArmy = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  const releaseBot = (botId) => {
    // Call the backend API to delete the bot
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot from the backend");
        }
      })
      .catch((error) => {
        console.error(error);
        // You may want to handle the error in a way that makes sense for your application
      });

    // Release the bot from the army
    removeFromArmy(botId);
  };

  return (
    <div>
      <YourBotArmy
        enlistedBots={enlistedBots}
        removeFromArmy={removeFromArmy}
        releaseBot={releaseBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotsPage;
