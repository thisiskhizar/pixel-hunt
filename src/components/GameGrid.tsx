import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  
  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Text>{game.name}</Text>
          </li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
