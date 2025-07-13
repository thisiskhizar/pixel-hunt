import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
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
        <GridItem area="nav" bg="orange.300">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="pink.300" paddingX={5}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="green.300">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
