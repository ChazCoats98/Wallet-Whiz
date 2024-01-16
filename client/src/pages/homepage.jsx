import React from 'react';
import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import laptop from '../assets/laptop.png'

function homepage() {
    return (
        <div className="pageBox">
            <div className="pageInner">
                <div className="framer">
                <div className="pageTextBox">
                    <h2 className="headerText blackText">Why use WalletWhiz?</h2>
                    <p className="descriptionSubText blackText">
                    Managing your money can be hard, WalletWhiz makes it easy.<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        WalletWhiz gives you the tools to manage your money with ease <br />
                        so you can spend time on what really matters. 
                    </p>
                    <Link to='/register'>
                    <Button variant='contained' disableElevation type='submit'>Register</Button>
                    </Link>
                </div>
                    <img className='laptop' src={laptop}></img>
            </div>
                </div>
            <div className='about1'>
                <div className='framer'>
                <div className='pageTextBox'>
                    <h2 className="headerText">Stay on top of your spending.</h2>
                    <p className="descriptionSubText">
                        WalletWhiz helps you track and categorize your spending<br />
                        so you can know exactly what you're spending your money on<br />
                        WalletWhiz gives you the tools to manage your money with ease <br />
                        so you can spend time on what really matters. 
                    </p>
                </div>
                </div>
            </div>
            <div className='about2'>
                <div className='framer'>
            <div className='pageTextBox'>
                    <h2 className="headerText blackText">Plan for the future.</h2>
                    <p className="descriptionSubText blackText">
                        We get that your future is important to you, Thats why WalletWhiz<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        WalletWhiz gives you the tools to manage your money with ease <br />
                        so you can spend time on what really matters. 
                    </p>
                </div>
                </div>
            </div>
            <div className='about1'>
            <div className='pageTextBox'>
                    <h2 className="headerText blackText">Plan for the future.</h2>
                    <p className="descriptionSubText blackText">
                        We get that your future is important to you, Thats why WalletWhiz<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        WalletWhiz gives you the tools to manage your money with ease <br />
                        so you can spend time on what really matters. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default homepage;