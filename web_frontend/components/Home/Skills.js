import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { SectionHeader } from "../Section";
import Progress from '../Progress'
const useStyles = makeStyles({
  root: {
    background: "#0044C6",
    borderRadius: 20,
    padding: "40px",
    marginTop:'50px',
    height:'100%',
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SectionHeader color="#fff" title="My Skills" subTitle="skills" />
      <Progress/>
    </div>
  );
}

export default Skills;
