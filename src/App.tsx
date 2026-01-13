import { Box, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Box bg="bg" color="fg" minH="100vh">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        {/* NAV */}
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        {/* ASIDE */}
        <GridItem
          area="aside"
          bg="bg.subtle"
          display={{ base: "none", lg: "block" }}
          p={4}
        >
          Aside
        </GridItem>

        {/* MAIN */}
        <GridItem area="main" p={4}>
          Main
        </GridItem>
      </Grid>
    </Box>
  )
}

export default App
