import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box, Drawer, Grid,Toolbar, CssBaseline, List, IconButton, ListItemButton} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import logo from '../imagenes/logosoteblanco.png';
import { Link } from 'react-router-dom';
import Menu from './Menu';



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
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#E2A0FF',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-start',
}));

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Grid container>
      <CssBaseline />
      <AppBar className="navbar" position="fixed" elevation={0} open={open}>

        <Toolbar style={{ justifyContent:'space-between'}}>
        <Link to="/homepage">
        <img  src={logo} alt=""
        style={{width:"80px",
        height:"auto"}} ></img>
        </Link>

        <Menu />  

  
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{...(open && { display:'none' }) }}
          >

            <Box className="menuhamburger">

            <MenuIcon sx={{width:'4rem', height:'4rem'}}/>
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
          
           <ListItemButton >
            <a className='links-menu-hamburger'  href='/avislegal'> Avís Legal</a>
           </ListItemButton>
           <ListItemButton>
           <a className='links-menu-hamburger'  href='/sobrenosaltres'>Sobre Nosaltres</a>
           </ListItemButton>
           <ListItemButton>
            <a className='links-menu-hamburger'   href='/elmeuperfil'> El meu perfil</a>
           </ListItemButton>
           <ListItemButton>
            <a className='links-menu-hamburger'  href='/artistes'> Artistes</a>
           </ListItemButton>
           <ListItemButton>
            <a className='links-menu-hamburger'   href='/espais'> Espais</a>
           </ListItemButton>
           <ListItemButton>
            <a className='links-menu-hamburger'  href='/esdeveniments'> Esdeveniments</a>
           </ListItemButton>
        
        </List>
      
      </Drawer>
     
      </Grid>
  );
}






