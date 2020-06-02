import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { NavLink, Route } from "react-router-dom";
import JeeMainsContent from "./JeeMainsContent";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    paddingTop: "5%",
  },
  span: {
    color: "#08C5A7",
  },
}));
function JeeMains() {
  const classes = useStyles();
  return (
    <div>
      <Box
        fontSize="18px"
        lineHeight="200%"
        padding={3}
        className={classes.root}
      >
        <NavLink
          to="/home/jeemains/allexams"
          activeClassName="active-link"
          style={{
            textDecoration: "none",
            color: "rgba(49,69,106,0.7)",
            opacity: "0.5",
          }}
          className="nav-link"
        >
          <span className={classes.span}>9</span> All Exams
        </NavLink>
        <NavLink
          to="/home/jeemains/previousexams"
          activeClassName="active-link"
          style={{
            textDecoration: "none",
            color: "rgba(49,69,106,0.7)",
            opacity: "0.5",
          }}
          className="nav-link"
        >
          <span className={classes.span}>3</span> Previous Exams
        </NavLink>
        <NavLink
          to="/home/jeemains/currentexams"
          activeClassName="active-link"
          style={{
            textDecoration: "none",
            color: "rgba(49,69,106,0.7)",
            opacity: "0.5",
          }}
          className="nav-link"
        >
          <span className={classes.span}>1</span> Current Exams
        </NavLink>
        <NavLink
          to="/home/jeemains/upcomingexams"
          activeClassName="active-link"
          style={{
            textDecoration: "none",
            color: "rgba(49,69,106,0.7)",
            opacity: "0.5",
          }}
          className="nav-link"
        >
          <span className={classes.span}>5</span> Upcoming Exams
        </NavLink>
        <hr style={{ background: "#D1D9E6" }}></hr>
      </Box>
      <Route path="/home/jeemains/allexams"><JeeMainsContent></JeeMainsContent></Route>
    </div>
  );
}

export default JeeMains;
