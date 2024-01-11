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
                        Managing your money can be hard and time-consuming<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        Let WalletWhiz do the heavy lifting for you. WalletWhiz makes it quick and easy to keep an eye on
                        your finances, so you can spend more time on what matters
                    </p>
                    <Link to='/register'>
                    <Button variant='contained' disableElevation type='submit'>Register</Button>
                    </Link>
                </div>
                    <img className='laptop' src={laptop}></img>
            </div>
                </div>
            <div className='about1'>
                <div className='pageTextBox'>
                    <h2 className="headerText">Why use WalletWhiz?</h2>
                    <p className="descriptionSubText">
                        Managing your money can be hard and time-consuming<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        Let WalletWhiz do the heavy lifting for you. WalletWhiz makes it quick and easy to keep an eye on
                        your finances, so you can spend more time on what matters
                    </p>
                </div>
            </div>
            <div className='about2'>

            </div>
        </div>
    );
}

export default homepage;