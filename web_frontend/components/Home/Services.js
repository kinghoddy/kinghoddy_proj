import { Grid, Typography } from "@mui/material";
import React from "react";

function Services() {
  const services = [
    {
      img: "/img/icon1.png",
      title: "Mobile Development",
      body: "The best astonishing mobile apps with high quality users deserve",
    },
    {
      img: "/img/icon2.png",
      title: "Website Development",
      body: "Innovative & creative website to spread your message and to express yourself.",
    },

    {
      img: "/img/icon3.png",
      title: "UI/UX Design",
      body: "We provide the best UI/UX Design by followingthe latest trends of the market.",
    },
  ];

  return (
    <Grid container spacing={10}>
      {services.map((cur) => (
        <Grid item lg={4} style={{ textAlign: "center" }} key={cur.title}>
          <img src={cur.img} />
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            {cur.title}
          </Typography>
          <Typography style={{ maxWidth: "80vw" }} color="#888" variant="body2">
            {cur.body}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
export default Services;
