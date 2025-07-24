import { Box, Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const HomePage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div style={{ padding: "5px" }}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
              <Button
                onClick={() => setGameQuery({} as GameQuery)}
                marginLeft={5}
              >
                Reset Filters
              </Button>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
};
export default HomePage;
