import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import {
  Boardview,
  CalendarView,
  ListView,
  Navbar,
  Sidebar,
} from "../components/layout";

const Home = () => {
  const [tab, setTab] = useState("listview");
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "280px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5} marginY={7}>
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main" paddingTop={8}>
        <Navbar tab={tab} setTab={setTab} />
        {tab === "listview" && <ListView />}
        {tab === "oardview" && <Boardview />}
        {tab === "calendarview" && <CalendarView />}
      </GridItem>
    </Grid>
  );
};

export default Home;
