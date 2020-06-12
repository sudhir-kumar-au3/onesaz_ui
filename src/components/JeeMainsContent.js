import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ExamCard from "./ExamCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
    overflowX: "auto",
    height: "90vh",
    [theme.breakpoints.down('sm')]: {
      height: "70vh"
    }
  },
}));
function JeeMainsContent() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data
          ? data.map((item, index) => {
              return (
                <Grid item xs={12} sm={4} key={index}>
                  <ExamCard key={index}></ExamCard>
                </Grid>
              );
            })
          : "Loading..."}
      </Grid>
    </div>
  );
}

export default JeeMainsContent;
