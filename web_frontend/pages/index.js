import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MainLayout from "../layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  footer: {
    "& .container-footer": {
      marginLeft: "0",
    },
    "& .container-footer img": {
      width: "800px ",
      marginTop: "2px",
    },
  },
  header: {
    minHeight: "100vh",
    alignItems: "center",
    display: "flex",
    "& h1": {
      color: "var(--secondary)",
      fontSize: "35px",
      "& span": {
        color: "var(--primary)",
      },
      ["@media (min-width : 1200px)"]: {
        fontSize: "75px",
      },
    },

    ["@media (min-width : 1200px)"]: {
      padding: "20px  15vw",
    },
  },

  headerArt: {
    height: "50vh",
    "& img ": {
      height: "1005",
      width: "100%",
      objectFit: "contain",
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <MainLayout active="home">
      <header className={classes.header}>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <h1>
              Make your
              <br /> next project
              <br /> A <span>Masterpiece</span>
            </h1>
            <Typography>
              i'm a full stack web and mobile developer were all About bringing
              your imaginations to life
            </Typography>
          </Grid>

          <Grid item lg={6}>
            <div className={classes.headerArt}>
              <img src="/img/devs.png" />
            </div>
          </Grid>
        </Grid>
      </header>
      <footer className={classes.footer}>
        <Container disableGutters className="container-footer">
          <img src="/img/icons_art.png" />
        </Container>
      </footer>
    </MainLayout>
  );
}
