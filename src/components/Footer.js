import React from "react";
import "../assets/footer.css";
import {
  Container,
  Box,
  makeStyles,
  Toolbar,
  Button,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import image from "../assets/onesaz.9123f763.png";
import SubFooter from "./SubFooter";
import { Link } from "react-router-dom";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  signout: {
    // margin: "10px",
    paddingLeft: "20px",
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  },
  img: {
    width: "150px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "90px",
      height: "25px",
      marginLeft: "-5px",
    },
  },
  btnBox:{
    [theme.breakpoints.down('sm')]:{
      display: "flex-col",
      marginRight: "10px"
    }
  }
}));
const themes = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: "10px",
        padding: "20px",
      },
    },
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        style={{ height: "22%", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
      >
        <Container maxWidth="md">
          <Toolbar>
            <Typography className={classes.title}>
              <img src={image} className={classes.img} alt="logo"></img>
            </Typography>
           <Box className={classes.btnBox}>
           <MuiThemeProvider theme={themes}>
              <Button color="inherit">
                <Link
                  to="/home/aboutus"
                  className="link-text"
                  style={{ textDecoration: "none" }}
                >
                  About us
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/home/products"
                  className="link-text"
                  style={{ textDecoration: "none" }}
                >
                  Product
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/concepts/contact"
                  className="link-text"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </Button>
              <ExitToAppRoundedIcon
                style={{ color: "#08C5A7" }}
                className={classes.signout}
              ></ExitToAppRoundedIcon>{" "}
              <span style={{ paddingTop: "-10px" }}>
                <Button color="inherit" className="sign-out">Sign out</Button>
              </span>
            </MuiThemeProvider>
           </Box>
          </Toolbar>
          <hr style={{ background: "#EFF2F4", opacity: "0.3" }}></hr>
        </Container>
      </Box>
      <SubFooter></SubFooter>
    </React.Fragment>
  );
}

export default Footer;
