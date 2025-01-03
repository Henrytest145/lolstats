import { useContext, useEffect, useState } from "react";
import UserContext from "../../utilities/globalContext";
import { Game } from "../../types/games";

const PlayerGames = () => {
  const userContext = useContext(UserContext);
  const { user, games, setGames } = userContext;

  const [isLoading, setIsLoading] = useState(true); // Para manejar el estado de carga

  if (!user) {
    throw new Error("User must be defined");
  }

  useEffect(() => {
    const fetchGames = async () => {
      console.log("Fetching games for player:", user.puuid);

      try {
        const server = localStorage.getItem("server");
        const gamesResponse = await fetch(
          `http://localhost:3000/api/games/${user.puuid}/${server}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!gamesResponse.ok) {
          throw new Error(`Failed to fetch games: ${gamesResponse.status}`);
        }

        const gamesList = await gamesResponse.json();
        console.log("Games fetched:", gamesList);
        
        setGames(gamesList);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setIsLoading(false); // Indica que terminó la carga
      }
    };

    fetchGames();
  }, [setGames, user.puuid]); // Dependencias necesarias

  return (
    <>
      {isLoading ? ( // Mientras está cargando
        <p>Loading games...</p>
      ) : games && games.length > 0 ? ( // Cuando hay datos en games
        games.map((game: Game) => (
          <div key={game.info.gameId}>
            <h1>{game.info.gameMode}</h1>
          </div>
        ))
      ) : ( // Si no hay datos
        <p>No games found.</p>
      )}
    </>
  );
};

export default PlayerGames;
