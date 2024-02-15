import { React, useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import laptop from '../assets/laptop.png'
import laptop2 from '../assets/laptop-2.png'
import ResponsiveAppBar from '../components/nav';
import { motion, useScroll, useTransform } from 'framer-motion';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Cellphone from '../assets/cellphone.png';

function Homepage() {
    const navRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: navRef,
        offset: ["start", "end"],
    });

    const slideUp = useTransform(scrollYProgress, [0, .1], ['50px', '0px'])
    const height = useTransform(scrollYProgress, [0, .1], ['200px', '85px'])
    const boxShadow = useTransform(scrollYProgress, [0, .1], ["none", "0px 8px 18px -6px rgba(0, 0, 0, 0.2)"]);
    const opacity = useTransform(scrollYProgress, [0, .1], [0, 1]);


    return (
        <div className="pageBox">
            <motion.div
    id="nav-bg"
    style={{ height: height }}
    transition={{
        ease: "easeIn"
    }}
    >
        <motion.div 
        className="contacts-top-box"
        style={{ y: slideUp }}
        transition={{
        ease: "easeIn"
        }}
        >
        </motion.div>
        <motion.nav
        style={{ y: slideUp }}
        transition={{
        ease: "easeIn"
        }}
        >
        <ResponsiveAppBar />
        </motion.nav>
    </motion.div>
    <motion.div
    className="fade-bg"
    style={{ opacity: opacity,
    height: height,
    boxShadow: boxShadow,
    }}
    ></motion.div>
    <div className='pageBox'>
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
                    <Button variant='contained' disableElevation type='submit' className='register-button'>Register</Button>
                    </Link>
                </div>
                    <img className='laptop' src={laptop2}></img>
            </div>
                </div>
            <div className='about1'>
                <h2 className='headerText blackText'>What do we bring to the table?</h2>
                <div className='grid-box'>
                    <div className='card-wrapper'>
                        <div className='about-card'>
                            <div className='front'>
                                <CreditCardIcon fontSize='large' className='icons'/>
                                <h4>Balance Tracking</h4>
                            </div>
                            <div className='back'>
                                <h4>Balance tracking</h4>
                                <p>WalletWhiz can connect to multiple accounts at once, 
                                    allowing you to see live balances across all accounts.
                                </p>
                            </div>
                    </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='about-card'>
                            <div className='front'>
                                <ShoppingCartIcon fontSize='large' className='icons'/>
                                <h4>Purchase History</h4>
                            </div>
                            <div className='back'>
                                <h4>Purchase History</h4>
                                <p> Did you know WalletWhiz can display live purchases? 
                                    We also categorize your purchases, so you can know what you spend on the most.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='about-card'>
                            <div className='front'>
                            <   QueryStatsIcon fontSize='large' className='icons'/>
                                <h4>Analytics</h4>
                            </div>
                            <div className='back'>
                                <h4>Analytics</h4>
                                <p>WalletWhiz has a few methods to display your spending data,
                                    so you can easily track and manage your spending.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='about-card'>
                            <div className='front'>
                                <CreditCardIcon fontSize='large' className='icons'/>
                                <h4>Balance Tracking</h4>
                            </div>
                            <div className='back'></div>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='about-card'>
                            <div className='front'>
                                <CreditCardIcon fontSize='large' className='icons'/>
                                <h4>Balance Tracking</h4>
                            </div>
                            <div className='back'></div>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='about-card'>
                            <div className='front'>
                                <CreditCardIcon fontSize='large' className='icons'/>
                                <h4>Balance Tracking</h4>
                            </div>
                            <div className='back'></div>
                        </div>
                    </div>
                </div>
                </div>
            <div className='about2'>
                <div className='framer'>
                    <div className='demo-box'>
                        <img src={Cellphone} className='cellphone'/>
                    </div>
            <div className='pageTextBox'>
                    <h2 className="aboutText blackText">Who are we?</h2>
                    <p className="aboutSubText blackText">
                        We get that your future is important to you, Thats why WalletWhiz<br />
                        Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                        WalletWhiz gives you the tools to manage your money with ease <br />
                        so you can spend time on what really matters. 
                    </p>
                </div>
                </div>
            </div>
            <footer className='footer'>
            <div className='pageTextBox'>
                        <h2 className="headerText">Plan for the future.</h2>
                        <p className="descriptionSubText">
                            We get that your future is important to you, Thats why WalletWhiz<br />
                            Your time is precious to you, why waste it on hours of book-keeping and stressful budgeting<br />
                            WalletWhiz gives you the tools to manage your money with ease <br />
                            so you can spend time on what really matters. 
                        </p>
                    </div>
            </footer>
                </div>
            </div>
        
    );
}

export default Homepage;