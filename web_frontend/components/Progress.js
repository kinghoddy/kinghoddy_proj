import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const classes = useStyles();

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
  );
}
