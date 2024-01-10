import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

<div className="container loginBoxesContainer">
                    <div className="formBoxAlign">
                        <h3 className="tagline">Already a user?</h3>
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