import { React, useRef } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import laptop from '../assets/laptop.png'
import ResponsiveAppBar from '../components/nav';
import { motion, useScroll, useTransform } from 'framer-motion';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

function Homepage() {
    const navRef = useRef(null);
    const aboutCards = document.querySelector('.about-card');

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
                    <Button variant='contained' disableElevation type='submit'>Register</Button>
                    </Link>
                </div>
                    <img className='laptop' src={laptop} ref={navRef}></img>
            </div>
                </div>
            <div className='about1'>
                <h2 className='headerText blackText'>What do we bring to the table?</h2>
                <div className='grid-box'>
                    <div className='about-card'>
                        <CreditCardIcon fontSize='large' className='icons'/>
                        <h4>Balance Tracking</h4>
                        <p>See an up-to-date display of your balances across multiple accounts.</p>
                    </div>
                    <div className='about-card'>
                        <ShoppingCartIcon fontSize='large' className='icons'/>
                        <h4>Purchase History</h4>
                        <p>Track purchases with up-to-date purchase</p>
                    </div>
                    <div className='about-card'>
                        <QueryStatsIcon fontSize='large' className='icons'/>
                        <h4>Analytics</h4>
                    </div>
                    <div className='about-card'></div>
                    <div className='about-card'></div>
                    <div className='about-card'></div>
                </div>
                </div>
            <div className='about2'>
                <div className='framer'>
                    <div className='demo-box'></div>
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
        </div>
    );
}

export default Homepage;