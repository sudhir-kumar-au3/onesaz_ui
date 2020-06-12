import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "center",
    [theme.breakpoints.down('sm')]:{
      display: "flex"
    }
    
  },
  textHead:{
    textAlign: "center", paddingTop: "5%",
    [theme.breakpoints.down('sm')]: {
      fontSize:"inherit"
    }
  },
  textSm:{
    fontSize:"18px",
    lineHeight:"200%",
    color: "rgba(49,69,106,0.7)",
    [theme.breakpoints.down('sm')]:{
      fontSize:"inherit",
    }
  }
}));
function SubHeader() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography
        component="h4"
        variant="h4"
        className={classes.textHead}
      >
        What do You Want to <span style={{ color: "#08C5A7" }}>Learn</span>{" "}
        Today?
        <Box
          padding={3}
          className={classes.textSm}
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
