import React from "react";
import {
  Box,
  Container,
  makeStyles
} from "@material-ui/core";
import { Route} from "react-router-dom";
import JeeMains from "./JeeMains";
import SubHeader from "./SubHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(236,240,243,0.8)",
    height: "150vh",
    [theme.breakpoints.down('sm')]: {
      width: "100vw",
      height:"130vh"
    }
  },

}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        className={classes.root}
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
