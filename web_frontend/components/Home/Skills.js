import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { SectionHeader } from "../Section";

const useStyles = makeStyles({
  root: {
    background: "#0044C6",
    borderRadius: 20,
    padding: "40px",
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SectionHeader color="#fff" title="My Skills" subTitle="skills" />
    </div>
  );
}

export default Skills;
