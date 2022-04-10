import React from "react";
import {} from "@mui/material";
import Head from "next/head";

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

function MainLayout({ active, title, description, children }) {
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
      <Head>
        <title> {title} | King Hoddy</title>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            "I' m a full stack web and mobile developer were all About bringing your imaginations to life"
          }
        />
      </Head>
      <Toolbar active={active} routes={routes} logo="/img/logo/logo_text.png" />

      {children}
    </div>
  );
}

export default MainLayout;
