import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Home() {
  const mystyle =({

    Appbar:{
      background:'transparent',boxShadow:'none',color:'black',

    },
    button:{
      color:'white',
      width:'120px',
      background:'blue',
      borderRadius:'14px',
      border:'none',
      height:'30px'
      ,fontSize:'10px',
      fontWeight:'700',
      marginTop:'-2%',
      

    }
  })
 
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
    <AppBar position="static" style={mystyle.Appbar} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           KING HODDY
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem style={{width:'300px'}} onClick={handleCloseNavMenu}>
                  <Typography >hfhfhfh</Typography>
                </MenuItem>
           
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
              KING HODDY
          </Typography>
          <Box style={{right:'0',position:'absolute',marginTop:'15px',marginRight:'90px'}} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
           <Typography style={{marginRight:'40px',fontSize:'13px',color:'#f90'}} >
             Home
           </Typography>
           <Typography style={{marginRight:'40px',fontSize:'13px',}} >
              My Project
           </Typography>
           <Typography style={{marginRight:'70px',fontSize:'13px',}} >
             Skills
           </Typography>
           <Button  style={mystyle.button} >
             Contact Me
           </Button>
           
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
