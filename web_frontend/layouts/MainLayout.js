import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
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

const useStyles = makeStyles({
  root: {
    background: "#777",
  },
});

function MainLayout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src="/img/logo/logo_text.png" />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem style={{ width: "300px" }}>
                  <List>
                    <Typography
                      style={{
                        marginRight: "40px",
                        fontSize: "13px",
                        color: "#f90",
                      }}
                    >
                      Home
                    </Typography>
                  </List>
                  <List>
                    <Typography
                      style={{ marginRight: "40px", fontSize: "13px" }}
                    >
                      My Project
                    </Typography>
                  </List>
                  <Typography style={{ marginRight: "70px", fontSize: "13px" }}>
                    Skills
                  </Typography>
                  <Button>Contact Me</Button>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              style={{ color: "#f90" }}
            >
              KING HODDY
            </Typography>
            <Box
              style={{
                right: "0",
                position: "absolute",
                marginTop: "15px",
                marginRight: "90px",
              }}
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
            >
              <Typography
                style={{ marginRight: "40px", fontSize: "13px", color: "#f90" }}
              >
                Home
              </Typography>
              <Typography style={{ marginRight: "40px", fontSize: "13px" }}>
                My Project
              </Typography>
              <Typography style={{ marginRight: "70px", fontSize: "13px" }}>
                Skills
              </Typography>
              <Button>Contact Me</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {children}
    </div>
  );
}

export default MainLayout;
