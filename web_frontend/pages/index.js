import * as React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AppBar from "@mui/material/AppBar";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";
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
import Animator from "../components/Animator";
import Section, { SectionHeader } from "../components/Section";
import Skills from "../components/Home/Skills";

const useStyles = makeStyles({
  sectioncontainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",

    ["@media (min-width : 1200px)"]: {
      flexDirection: "row",
      textAlign: "center",

      justifyContent: "space-around",
    },
  },
  header: {
    paddingTop: 50,
    position: "relative",
    overflow: "hidden",
    "& h1": {
      color: "var(--secondary)",
      fontSize: "45px",
      "& span": {
        color: "var(--primary)",
      },
      ["@media (min-width : 1200px)"]: {
        fontSize: "75px",
      },
    },
    "& .bottom_art": {
      width: "70%",
      ["@media (min-width : 1200px)"]: {
        width: "50%",
      },
    },
    "& .container": {
      padding: "15vh  20px",

      ["@media (min-width : 1200px)"]: {
        padding: "17vh  15vw",
      },
    },
  },

  headerArt: {
    height: "100vh",
    display: "none",
    position: "absolute",
    top: "-17%",
    right: "-17%",
    "& img ": {
      height: "100%",
      // width: "100%",
      // objectFit: "contain",
    },
    ["@media (min-width : 760px)"]: {
      display: "block",
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <MainLayout active="home">
      <header className={classes.header}>
        <Grid container alignItems="center" spacing={4} className="container">
          <Animator variant="slide" direction="left" delay={800} timeout={1000}>
            <Grid item md={6}>
              <h1>
                Make your
                <br /> next project
                <br /> A <span>Masterpiece</span>
              </h1>
              <Typography color="textSecondary">
                I&apos; m a full stack web and mobile developer were all About
                bringing your imaginations to life
              </Typography>
            </Grid>
          </Animator>

          <Animator variant="fade" delay={100} timeout={500}>
            <Grid item md={6}>
              <div className={classes.headerArt}>
                <img src="/img/header_art.png" />
              </div>
            </Grid>
          </Animator>
        </Grid>
        <img className="bottom_art" src="/img/icons_art.png" />
      </header>
      <Section>
        <SectionHeader title="Our Services" subTitle="what we offer" />
        <div className={classes.sectioncontainer}>
          <Grid item lg={4}>
            <img src="/img/icon1.png" />
            <h3>Mobile Development</h3>
            <p>
              The best astonishing mobile apps with
              <br /> high quality users deserv.
            </p>
          </Grid>
          <Grid item lg={4}>
            <img src="/img/icon2.png" />
            <h3>Websites Development</h3>
            <p>
              Innovative & creative website to spread
              <br /> your message and to express yourself.
            </p>
          </Grid>
          <Grid item lg={4}>
            <img src="/img/icon3.png" />
            <h3>UI/UX Design</h3>
            <p>
              We provide the best UI/UX Design by
              <br /> followingthe latest trends of the market.
            </p>
          </Grid>
        </div>
      </Section>

      <Section style={{ background: "#f7f7f7" }}>
        {/* Add the about me here and complete the skills */}
        <Skills />
      </Section>
    </MainLayout>
  );
}
