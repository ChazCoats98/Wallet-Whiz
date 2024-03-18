import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo2 from '../assets/WalletWhizIconnbg.png'
import Auth from '../utils/auth'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
    <div>
    {Auth.loggedIn() ? (
      <div className="navbar-li">
    <Toolbar disableGutters  className="nav-box">
    <Link to='/dashboard' style={{ textDecoration: 'none'}}>
      <Box className='logo-box' sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}>
        <img className='header-logo-li' src={Logo2}/>
        <Typography
            variant="h6"
            noWrap
            component="a"
            className='header-title-li'
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
        <motion.span style={{ color: "black" }} className='list-text-li'>
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
    </Toolbar>
    </div>
    ) : (
          <div className='navbar'>
            <Toolbar>
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
                <span style={{ color: "black" }} className='list-text'>
                    {page}
                  </span>
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
          </Toolbar>
        </div>
      )}
    </div>
  );
}
export default ResponsiveAppBar;