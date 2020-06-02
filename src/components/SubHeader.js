import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "center",
  },
}));
function SubHeader() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography
        component="h4"
        variant="h4"
        style={{ textAlign: "center", paddingTop: "5%" }}
      >
        What do You Want to <span style={{ color: "#08C5A7" }}>Learn</span>{" "}
        Today?
        <Box
          fontSize="18px"
          lineHeight="200%"
          padding={3}
          style={{ color: "rgba(49,69,106,0.7)" }}
        >
          Select course type to continue
        </Box>
      </Typography>
      <Box className={classes.root}>
        <NavLink
          to="/home/jeemains"
          activeClassName="active-tab"
          style={{ textDecoration: "none" }}
          className="NavStyle"
        >
          Jee Mains
        </NavLink>
        <NavLink
          to="/home/jeeAdvance"
          activeClassName="active-tab"
          style={{ textDecoration: "none" }}
          className="NavStyle"
        >
          Jee Advance
        </NavLink>
        <NavLink
          to="/home/custom"
          activeClassName="active-tab"
          style={{ textDecoration: "none" }}
          className="NavStyle"
        >
          Custom
        </NavLink>
        <NavLink
          to="/home/neet"
          activeClassName="active-tab"
          style={{ textDecoration: "none" }}
          className="NavStyle"
        >
          Neet
        </NavLink>
      </Box>
    </React.Fragment>
  );
}
export default SubHeader;
