import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/WalletWhizIconnbg.png'

function LoginPage() {
    return (
        <div className="page-box">
                    <div className="form-box-align">
                        <div className='form'>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <div className='logo-box'>
                                    <img className='header-logo' src={Logo2} />
                                    <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
                                </div>
                            </Link>
                            <div className="cards" id="login-box">
                                <h3 className="form-box-header">Login</h3>
                                <LoginForm />
                            </div>
                            <div className="register-button-box">
                                <h3 className="register-header">Not a user yet? Register here</h3>
                                {Auth.loggedIn() ? (null) : (
                                <Link to='/register'>
                                <Button variant="contained" disableElevation>Register</Button>
                                </Link>)}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default LoginPage;
