import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Comment,
  Dashboard,
  DirectionsBike,
  GroupOutlined,
  LocalShipping,
  MenuSharp,
  NewReleases,
  PersonAdd,
  PersonOutline,
} from "@mui/icons-material";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { makeStyles } from "@mui/styles";
import Auth from "./Auth";
const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  drawer: {
    ["@media (min-width : 760px)"]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  listItem: {
    borderRadius: "0 20px 20px 0",
    color: "#fffa",
    "&:hover": {
      background: "#f94a",
    },
    "&.Mui-selected": {
      background: "#f946",
      color: "#f90",
      "&:hover": {
        background: "#f94a",
      },
    },
  },
  menuButton: {
    marginRight: 20,
    ["@media (min-width : 760px)"]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar

  drawerPaper: {
    width: drawerWidth,
    background: "#023",
  },
  content: {
    flexGrow: 1,
    background: "#f5f7f7",
    minHeight: "100vh",
    maxWidth: "100%",
    padding: "20px 10px",
    "& .children": {
      // background: "#fff",
      // borderRadius: 15,
      marginTop: 30,
      // overflow: "hidden",
    },
    ["@media (min-width : 1200px)"]: {
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "30px 40px",
    },
  },

  spinner: {
    height: "100%",
    width: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    background: "#fff5",
    justifyContent: "center",
  },
});
function MainLayout({ children, loading, badge, description, title, route }) {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);
  const routes = [
    {
      icon: <Dashboard color="inherit" />,
      label: "Dashboard",
      active: route === "dashboard",
      href: "/",
    },
    {
      icon: <LocalShipping color="inherit" />,
      label: "Projects",
      active: route === "projects",
      href: "/projects",
    },

    {
      icon: <PersonAdd color="inherit" />,
      label: "Users",
      active: route === "users",
      href: "/users",
    },

    {
      icon: <PersonAdd color="inherit" />,
      label: "Reviews",
      active: route === "reviews",
      href: "/reviews",
    },
  ];
  const drawer = (
    <List style={{ paddingRight: 10 }}>
      {routes.map((cur) => (
        <Link href={cur.href} key={cur.href}>
          <ListItem button selected={cur.active} className={classes.listItem}>
            <ListItemIcon style={{ color: "inherit" }}>{cur.icon}</ListItemIcon>
            <ListItemText primary={cur.label} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
  React.useEffect(() => {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) setIsLoggedIn(true);
    //   else setIsLoggedIn(false);
    // });
  }, []);

  const logout = () => {
    // firebase.auth().signOut();
    // .then(() => setIsLoggedIn(false));
  };

  return (
    <div className={classes.root}>
      <Head>
        <title> {title} Admin | KingHoddy</title>
        <meta name="description" property={description} />
      </Head>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={() => setOpen(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <img
              src="/img/logo_text.png"
              style={{ height: 140, objectFit: "cover", width: 240 }}
            />
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Box p={2}>
              <img
                src="/img/logo_text.png"
                style={{ marginTop: 30, width: "80%" }}
              />
              <Typography
                variant="body2"
                style={{ color: "#fffd", marginBottom: 20 }}
              >
                Admin Console
              </Typography>
            </Box>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {isLoggedIn && (
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <IconButton
                edge="start"
                size="small"
                onClick={() => setOpen(!open)}
                className={classes.menuButton}
              >
                <MenuSharp />
              </IconButton>
              <Box flex={1}>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h4"
                    style={{ fontWeight: 700, textTransform: "capitalize" }}
                  >
                    {title || route}
                    <span style={{ paddingLeft: 10, color: "#05d" }}>
                      {badge}
                    </span>
                  </Typography>
                  <Button
                    style={{
                      marginLeft: "auto",
                      borderRadius: 10,

                      textTransform: "capitalize",
                    }}
                    startIcon={<PersonOutline />}
                    variant="contained"
                    disableElevation
                    color="secondary"
                    onClick={logout}
                    size="large"
                  >
                    Logout{" "}
                  </Button>
                </Box>
                {description && (
                  <Typography color="textSecondary" variant="body2">
                    {description}
                  </Typography>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        )}
        <div className="children">{isLoggedIn ? children : <Auth />}</div>
        {loading && (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        )}
      </main>
    </div>
  );
}

export default MainLayout;
