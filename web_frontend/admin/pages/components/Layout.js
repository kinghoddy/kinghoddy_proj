import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { content } from "./Navigator";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Content from "./Content";
const useStyles = makeStyles({
  root: {
    transition: "all 0.3s",
    "& 	.MuiAppBar-positionFixed": {
      boxShadow: "none",
      transition: "all 0.3s",
    },

    "& .MuiListItem-root :hover": {
      transition: "all 0.3s",
      background: "#f90",
      borderRadius: "20px",
      color: "#Fff",
    },
    "& .MuiTypography-h6": {
      transition: "all 0.3s",
      fontSize: "17px",
      fontWeight: "900",
      color: "#f90",
      display: "none",

      ["@media (min-width:1200px)"]: {
        transition: "all 0.3s",
        fontSize: "30px",
        color: "#fff",
        fontWeight: "900",
        color: "#f90",
        display: "block",
      },
    },
    ["@media (min-width:1200px)"]: {
      transition: "all 0.3s",
      "& .MuiTypography-h4 img": {
        display: "none",
      },
    },
  },
});

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/img/logo_text.png" alt="/logo" />
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {content.map((text, index) => (
          <ListItem sx={{ marginTop: " 10px" }} root key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>

              <a href={text.url}>
                <ListItemText />
                {text.title}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            background: "#3636cb",
            boxShadow: "none",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              {" "}
              <Typography variant="h4">
                <img src="/img/logo_text.png" />
              </Typography>
              <Typography variant="h6">
                Admin-<span>Panel</span>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,

            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Content />
        </Box>
      </Box>
    </div>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
};

export default Layout;
