import { Grid, Typography } from "@mui/material";
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
        <Typography variant="body2" style={{ lineHeight: 1.8 }} color="#777">
          Hi human, I&apos;m john. As a passionate front-end developer , I
          prefer to run my own business rather than routine office work. Such
          lifestyle helps me enjoy my favorite hobbie - traveling. Being able to
          do your job in every corner of our planet is amazing
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
