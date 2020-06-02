import React from "react";
import "../assets/header.css";
import image from "../assets/onesaz.9123f763.png";
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
import { NavLink } from "react-router-dom";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  people: {
    background: "#EFF2F4",
    margin: "10px",
    padding: "10px",
    boxShadow: "-8px -8px 20px #FFFFFF, 8px 8px 20px #D1D9E6",
    borderRadius: "50px",
  },
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
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box style={{ height: "10%", paddingTop: "0.5rem" }}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography className={classes.title}>
              <img src={image} width="150px" height="40px" alt="logo"></img>
            </Typography>
            <MuiThemeProvider theme={themes}>
              <Button color="inherit">
                <NavLink
                  to="/home"
                  activeClassName="active"
                  className="link-text"
                  style={{textDecoration: "none"}}

                >
                  Exams
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink
                  to="/concepts"
                  activeClassName="active"
                  className="link-text"
                  style={{textDecoration: "none"}}
                >
                  Concepts
                </NavLink>
              </Button>
              <Box color="inherit" className={classes.people}>
                <PermIdentityOutlinedIcon
                  style={{ color: "#08C5A7" }}
                ></PermIdentityOutlinedIcon>
              </Box>
            </MuiThemeProvider>
          </Toolbar>
        </Container>
      </Box>
    </div>
  );
}

export default Header;
