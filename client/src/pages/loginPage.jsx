import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/WalletWhizIconnbg.png'

function LoginPage() {
    return (
        <div className="pageBox">
                    <div className="formBoxAlign">
                        <div className='form'>
                            <div className='logo-box'>
                                <img className='headerLogo' src={Logo2} />
                                <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
                            </div>
                            <div className="cards" id="loginBox">
                                <h3 className="formBoxHeader">Login</h3>
                                <LoginForm />
                            </div>
                            <div className="registerButtonBox">
                                <h3 className="registerHeader">Not yet managing your money? Register here</h3>
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
