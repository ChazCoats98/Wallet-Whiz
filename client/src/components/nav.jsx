import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/walletWhiz logo2.png';
import Logo2 from '../assets/WalletWhizIconnbg.png'
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

const pages = ['Features', 'About us', 'contributors'];
const pagesLI = ['personal finances', 'stocks', 'account']
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
    <Toolbar disableGutters  className="nav-box">
  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: {xs: 'space-between', md: 'none'} }}>
    <img className='header-logo' src={Logo2}/>
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
            Wallet<span>Whiz</span>
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
    {Auth.loggedIn() ? (
    <>
    <Link to='/dashboard' style={{ textDecoration: 'none'}}>
      <Box className='logo-box' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}>
        <img className='header-logo' src={Logo2}/>
        <Typography
            variant="h6"
            noWrap
            component="a"
            className='header-title'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Wallet<span style={{ color: 'black' }}>Whiz</span>
        </Typography>
      </Box>
    </Link>
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', marginRight: '20px', marginLeft: '20px'}}>
    {pagesLI.map((page) => (
      <Link to={`/${page}`} key={page}>
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <motion.span style={{ color: "black" }} className='list-text'>
        {page}
        </motion.span>
      </Button>
      </Link>
    ))}
  </Box>
  <Box className='btn-box' sx={{ display: { xs: 'none', md: 'flex'}}}>
    <div className='btn-align separate'>
        <Button variant='contained' disableElevation className='login-button' onClick={Auth.logout}>Logout</Button>
    </div>
  </Box>
    </>
    ) : (
      <>
      <Link to='/' style={{ textDecoration: 'none'}}>
      <Box className='logo-box' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}>
        <img className='header-logo' src={Logo2}/>
        <Typography
            variant="h6"
            noWrap
            component="a"
            className='header-title'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Wallet<span style={{ color: 'black' }}>Whiz</span>
        </Typography>
      </Box>
    </Link>
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center'}}>
    {pages.map((page) => (
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <motion.span style={{ color: "black" }} className='list-text'>
        {page}
        </motion.span>
      </Button>
    ))}
  </Box>
  <Box className='btn-box' sx={{ display: { xs: 'none', md: 'flex'}}}>
    <div className='btn-align separate'>
      <Link to='/login'>
        <Button variant='contained' disableElevation className='login-button'>Login</Button>
      </Link>
    </div>
    <div className='btn-align'>
      <Link to='/register'>
        <Button variant='contained' disableElevation className='register-button'>Register</Button>
      </Link>
    </div>
  </Box>
    </>
    )}
</Toolbar>
  </div>
  );
}
export default ResponsiveAppBar;