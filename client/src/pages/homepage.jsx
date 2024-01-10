import React from 'react';
import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import laptop from '../assets/laptop.png'

function homepage() {
    return (
        <div className="pageBox">
            <div className="container pageInner">
                <div className="container pageTextBox">
                    <h2 className="headerText">Why use WalletWhiz?</h2>
                    <p className="descriptionSubText">
                        Managing your money can be hard and time-consuming<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        Let WalletWhiz do the heavy lifting for you. WalletWhiz makes it quick and easy to keep an eye on
                        your finances, so you can spend more time on what matters
                    </p>
                </div>
                    <img src={laptop}></img>
            </div>
        </div>
    );
}

export default homepage;