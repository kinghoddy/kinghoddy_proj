import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { SectionHeader } from "../Section";

function AboutMe() {
  return (
    <Grid container alignItems="center">
      <Grid item lg={6} xs={12}>
        <img src="img/profile_picture.png" style={{ width: "100%" }} />
      </Grid>
      <Grid item lg={6} xs={12} className="About">
        <SectionHeader
          style={{ alignItems: "flex-start" }}
          title="About me"
          subTitle="who am i"
        />
        <Typography variant="h6">
          I am Noel, a web & mobile developer with 3 Years of Experience
        </Typography>
        <Typography
          variant="body2"
          style={{ marginBottom: 40, lineHeight: 1.8 }}
          color="#777"
        >
          As a passionate developer , I always concerned with attaining 100%
          costumer sertisfaction. I use modern design structures with minimum
          errors nnd bugs, because i dont belief in a bugless code.
        </Typography>

        <Button color="secondary" size="large" variant="contained">
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
