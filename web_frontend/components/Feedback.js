import { makeStyles } from "@mui/styles";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Grid, Typography } from "@mui/material";
const feedback = [
  {
    url: "/img/icon1.png",
    caption: "hello world",
    caption1: "i am kim jay olawaleadeit@gmai4l.c  ",
  },
  {
    url: "/img/icon2.png",
    caption: "welcome to kimjay pro",
    caption1: "hdhdhhd",
  },
  {
    url: "/img/icon3.png",
    caption: "welcome to kimjay pro",
    caption1: "hdhdhhd",
  },
];
const img = "/img/wave.png";
const useStyles = makeStyles({
  root: {
    backgroundImage: `url('${img}')`,
    width: "100%",
    height: "450px",
    backgroundSize: "cover",
    display : "flex",
    alignItems  : "center",
    flexDirection:"column",
    justifyContent : "center",
    backgroundRepeat: "no-repeat",
    ["@media (min-width:1200px)"]: {
      height: "600px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 600px",
    },
    '& .react-slideshow-container':{
      width:'300px',
      ["@media (min-width:1200px)"]: {
      width:"700px"
      },
    },
    '& .react-slideshow-container .default-nav ':{
color:'white',
background:'transparent'
    },
    "& .each-slide" : {
       flexDirection:'column',
       display:'flex',
       alignItems:'center',

    },
    "& h1": { alignContent: "center" },
  },
});
function Feedback() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
    <Typography variant="h4"color="white" style={{fontWeight:'700'}} >
      Feedback
 
    </Typography>
    <Typography variant="h6" >
    <img src="/img/divider.png" width="70px"></img>
    </Typography>
      
          <Slide >
            {feedback.map((slideImage, index) => (
              <div className="each-slide" key={index}>
   
                  <img src={slideImage.url} />
                  <Typography  color="white"  >{slideImage.caption}</Typography>

                  <Typography  color="white" >{slideImage.caption1}</Typography>
              </div>
            ))}
          </Slide>
    
      
    </div>
  );
}

export default Feedback;
