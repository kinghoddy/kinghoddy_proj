import * as React from "react";

import Typography from "@mui/material/Typography";

import MainLayout from "../layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import Animator from "../components/Animator";
import Section, { SectionHeader } from "../components/Section";
import Skills from "../components/Home/Skills";
import AboutMe from "../components/Home/AboutMe";
import Services from "../components/Home/Services";

const useStyles = makeStyles({
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
        fontSize: "55px",
      },

      ["@media (min-width : 1500px)"]: {
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
        padding: "20vh  15vw",
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
    <MainLayout active="home" title="Home ">
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
        <Services />
      </Section>

      <Section style={{ background: "#f7f7f7" }}>
        {/* Add the about me here and complete the skills */}
        <AboutMe />
        <Skills />
      </Section>
    </MainLayout>
  );
}
