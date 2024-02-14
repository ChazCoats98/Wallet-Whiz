import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/walletWhiz logo2.png';
import Auth from '../utils/auth'
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
import AdbIcon from '@mui/icons-material/Adb';
import { motion, useTransform } from 'framer-motion';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
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
    <div className="navbar">
    <Toolbar disableGutters  className="mini-nav-box">
  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: {xs: 'space-between', md: 'none'} }}>
    <img className='headerLogo' src={Logo}/>
    <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className='header-title'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            Wallet<span style={{ color: 'black', marginRight: "100px"}}>Whiz</span>
          </Typography>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      className="menu-box"
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
        display: { xs: 'block', md: 'none' }
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography className="menu-items" textAlign="center">
          {page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
  <div className='logo-box'>
    <img className='headerLogo' src={Logo}/>
    <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className='header-title'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Wallet<span style={{ color: 'black', marginRight: "60px" }}>Whiz</span>
    </Typography>
  </div>
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
    {pages.map((page) => (
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <motion.span style={{ color: "black" }} className='listText'>
        {page}
        </motion.span>
      </Button>
    ))}
  </Box>
</Toolbar>
  </div>
  );
}
export default ResponsiveAppBar;