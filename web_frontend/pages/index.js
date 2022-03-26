import * as React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AppBar from "@mui/material/AppBar";
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import Card from "@mui/material/Card";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MainLayout from "../layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  

  footer: {
    "& .container-footer": {
      marginLeft: "0",
    },
    "& .container-footer img": {
      width: "800px ",
      marginTop: "2px",
    },
  },
  section1:{
   marginTop:'50px',
textAlign:'center',

marginLeft:'50px',
marginRight:'50px',
'& .css-i4bv87-MuiSvgIcon-root':{
  color:'#f90',
  fontSize:'15px',
 fontWeight:'900'
  
},
'& h1':{
  fontSize:'15px',
  fontWeight:'300',
  
  
},
'& h2':{
  fontSize:'50px',

  marginTop:'-1%'

},
  },
sectioncontainer:{
  textAlign:'center',
  display:'flex',
  flexDirection:'column',

["@media (min-width : 1200px)"]: {
  flexDirection:'row',
  textAlign:'center',

  justifyContent:'space-around',
},

},
 header: {
    minHeight: "100vh",
    alignItems: "center",
    display: "flex",
    "& h1": {
      color: "var(--secondary)",
      fontSize: "35px",
      "& span": {
        color: "var(--primary)",
      },
      ["@media (min-width : 1200px)"]: {
        fontSize: "75px",
      },
    },

    ["@media (min-width : 1200px)"]: {
      padding: "20px  15vw",
    },
  },

  headerArt: {
    height: "50vh",
    "& img ": {
      height: "1005",
      width: "100%",
      objectFit: "contain",
    },
  },

});

export default function Home() {
  const classes = useStyles();

  return (
    <MainLayout active="home">
      <header className={classes.header}>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <h1>
              Make your
              <br /> next project
              <br /> A <span>Masterpiece</span>
            </h1>
            <Typography>
              i'm a full stack web and mobile developer were all About bringing
              your imaginations to life
            </Typography>
          </Grid>

          <Grid item lg={6}>
            <div className={classes.headerArt}>
              <img src="/img/devs.png" />
            </div>
          </Grid>
        </Grid>
      </header>
      <footer className={classes.footer}>
        <Container disableGutters className="container-footer">
          <img src="/img/icons_art.png" />
        </Container>
       
     
      </footer>
      <section className={classes.section1} >
        <h1>
         <RemoveIcon/>   TONS OF AWESOME SERVICES <RemoveIcon/>
        </h1>
        <h2>Our Services</h2>
      <div className={classes.sectioncontainer} >
        <Grid item lg={4}><img src="/img/icon1.png"/>
        <h3>Mobile Development</h3>
        <p>The best astonishing mobile apps with<br/> high quality users deserv.</p>
        
        </Grid>
        <Grid item lg={4}><img src="/img/icon2.png"/>
        <h3>Websites Development</h3>
        <p>Innovative & creative website to spread<br/> your message and to express yourself.</p>
        </Grid>
        <Grid item lg={4}><img src="/img/icon3.png"/>
        <h3>UI/UX Design</h3>
        <p>We provide the best UI/UX Design by<br/>  followingthe latest trends of the market.</p></Grid>
        </div>
      </section>
    </MainLayout>
  );
}
