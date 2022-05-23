import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { SectionHeader } from "../Section";
import Progress from "../Progress";
const useStyles = makeStyles({
  root: {
    background: "#0064dc",
    borderRadius: 20,
    padding: "40px",
    marginTop: "50px",
    height: "100%",
    ["@media (min-width : 1200px)"]: {
      padding: "100px 5vw 60px",
      borderRadius: 50,
    },
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SectionHeader
        style={{ marginBottom: 50 }}
        color="#fff"
        title="My Skills"
        subTitle="skills"
      />
      <Progress />
    </div>
  );
}

export default Skills;
