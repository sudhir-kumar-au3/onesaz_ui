import React from "react";
import "../assets/footer.css";

import {
  Container,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
  icon: {
    background: "#EFF2F4",
    margin: "10px",
    padding: "10px",
    boxShadow: "-8px -8px 20px #FFFFFF, 8px 8px 20px #D1D9E6",
    borderRadius: "50px",
    [theme.breakpoints.down('sm')]:{
      marginRight: "7px",
      padding: "7px",
    }
  },
  bottomIcon: {
    background: "#EFF2F4",
    margin: "-48px 10px 10px 0",
    padding: "10px",
    boxShadow: "-8px -8px 20px #FFFFFF, 8px 8px 20px #D1D9E6",
    borderRadius: "50px",
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  },
}));

function SubFooter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box style={{ height: "22%", padding: "0.8rem, 0" }}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography className="title">
              &copy;2020 Onesaz. All rights reserved.
            </Typography>

            <Box color="inherit" className={classes.icon}>
              <TwitterIcon
                style={{ color: "#08C5A7" }}
                fontSize="small"
              ></TwitterIcon>
            </Box>
            <Box color="inherit" className={classes.icon}>
              <FacebookIcon
                style={{ color: "#08C5A7" }}
                fontSize="small"
              ></FacebookIcon>
            </Box>
            <Box color="inherit" className={classes.icon}>
              <YouTubeIcon
                style={{ color: "#08C5A7" }}
                fontSize="small"
              ></YouTubeIcon>
            </Box>
          </Toolbar>
        </Container>
      </Box>
      <Box color="inherit" display="flex" justifyContent="flex-end">
        <Box p={1} className={classes.bottomIcon}>
          <ArrowUpwardIcon
            style={{ color: "#08C5A7" }}
            fontSize="small"
          ></ArrowUpwardIcon>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default SubFooter;
