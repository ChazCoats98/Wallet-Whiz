import { useState } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';
import '../App.css';
import Logo2 from '../assets/WalletWhizIconnbg.png'
import Auth from '../utils/auth'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const pages = ['Features', 'About us', 'contributors'];
const pagesLI = ['personal finances', 'stocks', 'account']
const stockPages = [{ page: 'Market watch', link: '/stocks'},{ page:'My portfolio', link: '/stocks/portfolio'}]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const stocks = useMatch('/stocks');
  const stocksPortfolio = useMatch('/stocks/portfolio');

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
      <div>
      <div className="navbar-li">
    <Toolbar disableGutters  className="nav-box">
    <Link to='/personal finances' style={{ textDecoration: 'none'}}>
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
      <NavLink to={`/${page}`} key={page} className={({ isActive, isPending }) =>
      isPending ? "list-text li pending" : isActive ? "active" : "list-text li"
    }>
        {page}
      </NavLink>
    ))}
  </Box>
  <Box className='btn-box' sx={{ display: { xs: 'none', md: 'flex'}}}>
    <div className='btn-align separate'>
        <Button variant='contained' disableElevation className='login-button' onClick={Auth.logout}>Logout</Button>
    </div>
  </Box>
    </Toolbar>
    </div>
    <div>
      {stocks || stocksPortfolio ? (
        <div className='sub-nav'>
          {stockPages.map((stockPage) => (
            <NavLink to={stockPage.link} key={stockPage} end className={({ isActive }) =>
            isActive ? "active" : "list-text li"
          }>{stockPage.page}</NavLink>
          ))}
        </div>
      ): (null)}
    </div>
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
                <span key={page} style={{ color: "black" }} className='list-text'>
                    {page}
                  </span>
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