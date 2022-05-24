import React from "react";
import { makeStyles } from "@mui/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

import TwitterIcon from "@mui/icons-material/Twitter";
const useStyles = makeStyles({
  root: {
    "& .MuiGrid-container": {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      ["@media (min-width:1200px)"]: {
        flexDirection: "row",
      },
      "& span": {
        height: 2,
        width: 20,
        margin: "6 1px",
        color: "#f90",
      },
    },

    "& 	.MuiTypography-body1": {
      color: "#999",
      fontSize: "15px",
      marginTop: "19px",
      ["@media (min-width:1200px)"]: {
        fontSize: "18px",
      },
    },
    marginTop: "100px",
  },
  section: {
    "& span": {
      color: "#f90",
    },
    "& .MuiGrid-container": {
      width: "350px",
      color: "#fff",
      textAlign: "center",
      ["@media (min-width:1200px)"]: {
        width: "550px",
      },
    },
    "& .MuiTypography-body1": {
      fontSize: "13px",

      fontWeight: "200",
      ["@media (min-width:1200px)"]: {
        fontSize: "15px",
      },
    },
    marginTop: "100px",
    background: "#333",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid sx={{ width: "300px" }}>
            <Typography variant="h5">
              <span>-</span>
              Contacts
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "700", marginTop: "10px" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1">
              <PhoneIcon sx={{ color: "#f90", fontSize: "18px" }} />
              +234 808 904 0350
            </Typography>

            <Typography variant="body1">
              <AccessTimeIcon sx={{ color: "#f90", fontSize: "18px" }} />
              Mon - Sat 8.00 - 18.00. Sunday CLOSED
            </Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
      </div>
      <div className={classes.section}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", marginTop: "30px", marginBottom: "20px" }}
          >
            King<span>Hoddy</span>
          </Typography>
          <Typography variant="body1">
            Every user like a potential buyer or partner, uses the Internet to
            search for information about goods and services.
          </Typography>
          <Grid sx={{ marginTop: "20px" }}>
            <FacebookIcon sx={{ color: "#f90", margin: "10px" }} />
            <InstagramIcon sx={{ color: "#f90", margin: "10px" }} />
            <TwitterIcon sx={{ color: "#f90", margin: "10px" }} />
            <GoogleIcon sx={{ color: "#f90", margin: "10px" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
