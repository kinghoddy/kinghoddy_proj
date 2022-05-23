import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: "10vh 20px",
    ["@media (min-width : 1200px)"]: {
      padding: "15vh 15vw",
    },
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    "& .sub": {
      display: "flex",
      marginBottom: 10,
      alignItems: "center",
      "& span": {
        height: 2,
        width: 20,
        margin: "0 15px",
        background: "var(--primary)",
      },
      "& h3": {
        color: "inherit",
        fontSize: 12,
        textTransform: "uppercase",
        fontWeight: 300,
      },
    },
    "& h2": {
      fontSize: 40,
      color: "inherit",
    },
  },
});

function Section({ children, id = "", style = {} }) {
  const classes = useStyles();
  return (
    <section id={id} className={classes.root} style={style}>
      {children}
    </section>
  );
}

export const SectionHeader = ({ title, subTitle, color = "#000", style }) => {
  const classes = useStyles();
  return (
    <div className={classes.sectionHeader} style={{ color, ...style }}>
      <div className="sub">
        <span />
        <h3>{subTitle}</h3>
        <span />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default Section;
