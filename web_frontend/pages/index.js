import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Card from '@mui/material/Card';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuItem from "@mui/material/MenuItem";
import MainLayout from "../layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import CssBaseline from '@mui/material/CssBaseline';



const useStyles = makeStyles({
 footer:{
'& .container-footer':{
  marginLeft:"0",
},
'& .container-footer img':{
  width:'800px ',
  marginTop:'2px'
}
}
,
  header: {

    display:'flex',
      
      justifyContent:"space-between",
    
    "& h1": {
      color: "var(--secondary)",
     fontSize:'35px',
     
     marginTop:'200px'
     
    },
    "& p":{
      fontSize:'13px',
    },
    "& span":{
      color:'var(--primary)'
    },
    "& .container":{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:'0'
     
    },
    "& .container img":{
      width:'500px',
      height:'340px',
     
      marginTop:'250px'
  
    },
    "& .image-container":{
      marginTop:'-10% ',
    
     width:'600px',
  
    
     height:'600px',
      backgroundImage: `url(${"/img/curved.png"})`,
      backgroundRepeat: 'no-repeat',
      
      backgroundSize: 'cover ',
 
      
      
     
     
    },
    
  
   
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div >
    <MainLayout>
      <header className={classes.header}  >

      <Container disableGutters className="container" >
      <Typography  >
     
        <h1>Make your<br/> next project<br/> A <span>Masterpiece</span> </h1>   
        <p>i'm a full stack web and mobile developer were all<br/> About bringing your imaginations to life</p>
        </Typography>
            
<Box className="image-container" >
     <img src="/img/devs.png"/>
     </Box> 
      </Container>
    
    </header>
<footer  className={classes.footer} >
      <Container disableGutters className="container-footer" >
<img src="/img/icons_art.png"/>
      </Container>
      </footer>
    </MainLayout>
    </div>
  );
}
