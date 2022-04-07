import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  section:{
 
    '& h1':{
      fontSize:'12px',
      marginBottom:'8px',
      marginTop:'20px',
      textAlign:"center",
      ["@media (min-width:1200px)"]:{
        textAlign:"start", 
        },
    },
    '& p':{
fontSize:'10px',

    },
'& .css-5xe99f-MuiLinearProgress-bar1':{
  background:'#f90',
  
  
}
,
'& .css-ahj2mt-MuiTypography-root':{
fontSize:'11px'
},
display:"flex",
flexDirection:"column",
color:'white',
justifyContent:'center',
alignItems:'center',
marginTop:'30px',
marginBottom:'40px',
["@media (min-width:1200px)"]:{
flexDirection:'row',
justifyContent:'space-around'
},
  },
})
function LinearProgressWithLabel(props) {
  
  return (
  

  
    <Box sx={{ display: 'flex', alignItems: 'center' }}  >
      <Box sx={{ width: '100%', mr: 1 }}  >
        <LinearProgress variant="determinate"   {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography  >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const classes = useStyles();
  
  return (
    <section  className={classes.section}  >
    <div className={classes.container} >
      <h1>Web Frontend</h1>
    <Box sx={{ width: '250px' }}  >
      <p>NEXT JS</p>
      <LinearProgressWithLabel value={90}  sx={{ height:"6px"}}  />
    </Box>
    <Box sx={{ width: '250px' }}  >
      <p>HTML&CSS</p>
      <LinearProgressWithLabel value={100} sx={{ height:"6px"}} />
    </Box>
    <Box sx={{ width: '250px' }}  >
      <p>REACT</p>
      <LinearProgressWithLabel value={90}  sx={{ height:"6px"}}  />
    </Box>
    <Box sx={{ width: '250px' }}  >
      <p>JAVASCRIPT</p>
      <LinearProgressWithLabel value={90} sx={{ height:"6.2px"}}  />
    </Box>
    </div>
    <div className={classes.container2} >
      <h1>Mobile Application</h1>
    <Box sx={{ width: '250px' }}  >
      <p>REACTNATIVE</p>
      <LinearProgressWithLabel value={80}  sx={{ height:"6px"}}  />
    </Box>
   <div>
     <h1>Backend Development</h1>
    <Box sx={{ width: '250px' }}  >
      <p>NODE JS</p>
      <LinearProgressWithLabel value={80}  sx={{ height:"6.2px"}}/>
    </Box>
    </div>
    </div>
    <div className={classes.container3} >
      <h1>Personal Skills</h1>
    <Box sx={{ width: '250px' }}  >
      <p>ENGLISH</p>
      <LinearProgressWithLabel value={100} sx={{ height:"6px"}} />
    </Box>
    <Box sx={{ width: '250px' }}   >
      <p>TEAMWORK</p>
      <LinearProgressWithLabel value={100}  sx={{ height:"6px"}} />
    </Box>
    <Box sx={{ width: '250px' }}   >
      <p>COMMUNICATION</p>
      <LinearProgressWithLabel value={90}sx={{ height:"6.2px"}}/>
    </Box>
    
    </div>
  </section>
  );
}
