
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Grid, Box,Drawer, Toolbar, List, IconButton} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import logo from '../imagenes/logosote.png';





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  
  
}

));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#E2A0FF',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-start',
}));



  

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
 

  return (
    
    <Grid container sx={{ display: 'flex' }}>
     
      <AppBar className="navbar" elevation={0} open={open}>
        <Toolbar style={{ justifyContent:'space-between'}}>
        <img src={logo} alt=""
        style={{width:"80px",
         height:"auto"}} ></img>
   
     
          <IconButton 
          
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{...(open && { display:'none' }) }}
          >
            <Box className="menuhamburger" >
            <MenuIcon  sx={{width:'2.8rem', height:'auto'}}/>
            </Box> 
         </IconButton>
          
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
           <ListItemButton>
            <a href=""> Aviso Legal</a>
           </ListItemButton>
           <ListItemButton>
           <a href="">Sobre Nosotras</a>
           </ListItemButton>
        </List>
      </Drawer>
          
         <Box className="menu" style={{ width:"50vw", display:"flex", justifyContent: 'space-around',alignItems:"end", backgroundColor:'red'}}>
       <a href="#">Sobre nosaltres</a>
       <a href="#">Artistes</a>
       <a href="#">Espais</a>
       <a href="#">Events</a>
       </Box>
  
  
    
    </Grid>
  );
}






{/*import {Grid} from "@mui/material";
import {useState} from "react";
import MenuButton from "./MenuButton";


function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (

    
    <Grid container sx={{marginTop: "-1.25rem",
      height: "15vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>Logo</h2>
      <Grid container className="Navbar" open={open} 
      style={{ maxWidth:" 600px",display: 'flex', justifyContent: 'space-around'}}>
      <a href="#">Artistes</a>
      <a href="#">Espais</a>
      <a href="#">Events</a>
      <a href="#">Sobre nosaltres</a>
      </Grid>
    
      <MenuButton open={open} handleClick={handleClick} />
     
    </Grid>


     
     
    
     
  
  );
}

export default Header;

*/}