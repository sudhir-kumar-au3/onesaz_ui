import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "180%",
    color: "rgba(49,69,106,0.5)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "small",
      lineHeight: "inherit",
    },
  },

  header: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "160%",
    color: "#31456A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "inherit",
    },
  },
  content: {
    padding: theme.spacing(2),
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "175%",
    color: "rgba(49, 69, 106, 0.5)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "inherit",
    },
  },
}));
function ExamCard() {
  const classes = useStyles();
  return (
    <Card className="size">
      <CardActionArea>
        <CardContent>
          <Typography className={classes.header}>Inverse Proportion</Typography>
        </CardContent>
        <hr
          style={{
            borderColor: "#08C5A7",
            width: "53px",
            textAlign: "left",
            marginLeft: 20,
          }}
        ></hr>
      </CardActionArea>
      <CardActions>
        <Box className={classes.paper}>
          Type :{" "}
          <span
            style={{
              color: "#08C5A7",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Jee Mains
          </span>
        </Box>
        <Box className={classes.paper}>
          Paper:{" "}
          <span
            style={{
              color: "#08C5A7",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            1
          </span>
        </Box>
      </CardActions>
      <Box component="div" style={{ marginTop: "-20px" }}>
        <Typography className={classes.content}>
          <p>
            Available from:{" "}
            <span style={{ color: "rgba(49, 69, 106, 0.7)" }}>01.05.2019</span>
          </p>
          <p>
            Ends on:{" "}
            <span style={{ color: "rgba(49, 69, 106, 0.7)" }}>01.05.2020</span>
          </p>
        </Typography>
      </Box>
      <Grid container justify="center">
        <Button className="startBtn">Start</Button>
      </Grid>
    </Card>
  );
}
export default ExamCard;
