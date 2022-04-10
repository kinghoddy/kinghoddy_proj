import * as React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
=======
import { LinearProgress, Box, Grid, Typography } from "@mui/material";
>>>>>>> 4c9e09ba4a1eb10309a74625564ca3488a5a78fa
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
const progress = [
  {
    title: "Web Frontend",
    skill1: "NEXT JS",
    skill2: "HTML & CSS",
    skill3: "REACT JS",
    skill4: "JAVASCRIPT",
  },
  {
    title: "Mobile & Backend Development",
    skill1: "REACT NATIVE",
    skill2: "IONIC",
  
  },
  {
    title: "Personal Skills",
    skill1: "ENGLISH",
    skill2: "TEAMWORK",
    skill3: "COMMUNICATION",
    skill4: "ADAPTATION",
  },
];


const useStyles = makeStyles({
<<<<<<< HEAD
  section: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      background: "#f90",
    },
    "& .css-3rq6cm-MuiTypography-root ": {
      Width: "300px",
    },
    marginTop: "30px",
  },
});
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography>{`${Math.round(props.value)}%`}</Typography>
      </Box>
=======
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
>>>>>>> 4c9e09ba4a1eb10309a74625564ca3488a5a78fa
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const classes = useStyles();

<<<<<<< HEAD
  return (
    <div className={classes.section}>
      <Grid container spacing={10}>
        {progress.map((cur) => (
          <Grid item lg={4} xs={12}>
            <Typography variant="h7" color="white">
              {cur.title}
            </Typography>
            <Typography
              style={{ maxWidth: "80vw" }}
              color="white"
              variant="body2"
            >
              {cur.skill1}
              <LinearProgressWithLabel value={100} sx={{ height: "6.2px" }} />
            </Typography>
            <Typography
              style={{ maxWidth: "80vw" }}
              color="white"
              variant="body2"
            >
              {cur.skill2}
              <LinearProgressWithLabel value={90} sx={{ height: "6.2px" }} />
            </Typography>
            <Typography
              style={{ maxWidth: "80vw" }}
              color="white"
              variant="body2"
            >
              {cur.skill3}
              <LinearProgressWithLabel value={100} sx={{ height: "6.2px" }} />
            </Typography>
            <Typography
              style={{ maxWidth: "80vw" }}
              color="white"
              variant="body2"
            >
              {cur.skill4}
              <LinearProgressWithLabel value={90} sx={{ height: "6.2px" }} />
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
=======
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
        <LinearProgressWithLabel {...progress.mobile} />
      </Grid>
    </Grid>
>>>>>>> 4c9e09ba4a1eb10309a74625564ca3488a5a78fa
  );
}
