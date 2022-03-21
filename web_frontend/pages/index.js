import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const mystyle = {
    Appbar: {
      background: "transparent",
      boxShadow: "none",
      color: "black",
    },
    button: {
      color: "white",
      width: "120px",
      background: "blue",
      borderRadius: "14px",
      border: "none",
      height: "30px",
      fontSize: "10px",
      fontWeight: "700",
      marginTop: "-2%",
    },
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MainLayout>
      <h1>Hello world</h1>
    </MainLayout>
  );
}
