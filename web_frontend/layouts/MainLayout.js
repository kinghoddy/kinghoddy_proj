import React from "react";
import {
  AppBar,
  Container,
  Typography,
  Box,
  Menu,
  IconButton,
  List,
  Button,
  MenuItem,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "../components/Toolbar";
import { Home } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    color: "black",
  },
  button: {
    background: "blue",
    color: "white",
    marginTop: "-2%",
  },
});

function MainLayout({ active, children }) {
  const classes = useStyles();

  const routes = [
    {
      href: "/",
      icon: <Home />,
      label: "home",
    },
    {
      href: "/",
      icon: <Home />,
      label: "Projects",
    },
    {
      href: "/",
      icon: <Home />,
      label: "Skills",
    },
  ];
  return (
    <div>
      <Toolbar active={active} routes={routes} logo="/img/logo/logo_text.png" />

      {children}
    </div>
  );
}

export default MainLayout;
