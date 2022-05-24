import { Summarize } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { Refresh } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { Analytics } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const items = [
  {
    title:"Generate Report",
    icon:<Analytics/>,

  },
  {
    title:"Quick Search",
    icon:<Search/>,

  },
  {
    title:"Summary",
    icon:<Summarize/>,

  },
  {
    title:"Message",
    icon:<Mail/>,

  },
  {
    title:"Settings",
    icon:<Settings/>,

  },
]
const useStyles = makeStyles({
  root: {
    "& .MuiButton-root": {
      transition: "all 0.3s",
      background: "#f90",
      width: "100px",
      fontSize: "10px",
      fontWeight: "900",
      color: "#fff",
      ["@media (min-width:1200px)"]: {
        width: "150px",
        fontSize: "12px",
      },
    },
    "& .MuiTypography-h5": {
      fontSize: "20px",
      transition: "all 0.3s",
    color:"#f90",
      ["@media (min-width:1200px)"]: {
        fontSize: "35px",
        
      },
     
    },
    "& .MuiGrid-item": {
      transition: "all 0.3s",
      display:"flex",
      alignItems:"center",
      marginTop:"10px",
      justifyContent:"space-between",  
      flexDirection:"column",
        ["@media (min-width:1200px)"]: {
          display:"flex",
          flexDirection:"row",
        },
  },
 
}});
function Content() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        <Grid container justifyContent="space-between" flexDirection="row">
          <Typography variant="h5">Dashboard</Typography>

          <Button root>Refresh<Refresh/></Button>
        </Grid>
      </header>
      <section  style={{marginTop:"20px"}} >
      <Grid item  >
        {items.map((cur , index)=> (

 <Card sx={{width:"300px",marginTop:"10px",transition: "all 0.3s", }} key={index} >
   <CardContent>
     <Typography sx={{color:"#f90"}} >{cur.title}</Typography>
     <Icon sx={{color:"#f90"}} >{cur.icon}</Icon>
   </CardContent>
 </Card>

        ))}
         </Grid>
       
      </section>
    </div>
  );
}

export default Content;
