import React from "react";
import {
  Box,
  Container,
} from "@material-ui/core";
import { Route} from "react-router-dom";
import JeeMains from "./JeeMains";
import SubHeader from "./SubHeader";

function Home() {
  return (
    <React.Fragment>
      <Box
        style={{ backgroundColor: "rgba(236,240,243,0.8)", height: "150vh" }}
      >
        <Container maxWidth="md">
          <SubHeader></SubHeader>
          <Box component="div">
            <Route path="/home/jeemains">
              <JeeMains></JeeMains>
            </Route>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Home;
