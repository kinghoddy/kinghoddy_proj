import * as React from "react";
import PropTypes from "prop-types";
import { LinearProgress, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  progress: {
    height: 8,
    background: "var(--secondary)",
    "& 	.MuiLinearProgress-bar": {
      background: "#fa0",
    },
  },
  content: {
    color: "#fff",
    marginBottom: 17,
    "& .title": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      "& p": {
        textTransform: "uppercase",
        fontSize: 13,
      },
    },
  },
});
function LinearProgressWithLabel({ title, content }) {
  const classes = useStyles();
  return (
    <Box marginBottom={4}>
      <Typography
        variant="body2"
        style={{ color: "#fff", fontWeight: 700, marginBottom: 15 }}
      >
        {title}
      </Typography>
      {content.map((item) => (
        <div key={item.label} className={classes.content}>
          <div className="title">
            <p>{item.label}</p>
            <Typography>{`${Math.round(item.value)}%`}</Typography>
          </div>
          <LinearProgress
            className={classes.progress}
            variant="determinate"
            value={item.value}
          />
        </div>
      ))}
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const classes = useStyles();

  const progress = {
    web: {
      title: "Web frontend",
      content: [
        {
          label: "React Js",
          value: 80,
        },
        {
          label: "HTML and CSS",
          value: 100,
        },
        {
          label: "Next Js",
          value: 80,
        },
        {
          label: "Javascript",
          value: 80,
        },
      ],
    },
    mobile: {
      title: "Mobile Application",
      content: [
        {
          label: "React Js",
          value: 80,
        },
      ],
    },
    backend: {
      title: "Backend Development",
      content: [
        {
          label: "Node Js",
          value: 70,
        },
      ],
    },
    skills: {
      title: "Personal Skills",
      content: [
        {
          label: "English",
          value: 100,
        },
        {
          label: "Teamworks",
          value: 100,
        },
        {
          label: "Communication",
          value: 90,
        },
    
      ],
    },
  };

  const test = { ...progress.web };
  console.log(test);

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} lg={4}>
        <LinearProgressWithLabel {...progress.web} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <LinearProgressWithLabel {...progress.mobile} />
        <LinearProgressWithLabel {...progress.backend} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <LinearProgressWithLabel {...progress.skills} />
      </Grid>
    </Grid>
  );
}