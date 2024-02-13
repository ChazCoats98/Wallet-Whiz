import { React, useRef } from 'react';
import Button from '@mui/material/Button';
import LoginForm from '../components/LoginForm';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import laptop from '../assets/laptop.png'
import laptop2 from '../assets/laptop-2.png'
import ResponsiveAppBar from '../components/nav';
import { motion, useScroll, useTransform } from 'framer-motion';

function Homepage() {
    const navRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: navRef,
        offset: ["end", "start"],
    });

    const slideUp = useTransform(scrollYProgress, [0, 1], ['50px', '0px'])
    const height = useTransform(scrollYProgress, [0, 1], ['200px', '85px'])
    const boxShadow = useTransform(scrollYProgress, [0, 1], ["none", "0px 8px 18px -6px rgba(0, 0, 0, 0.2)"]);
    const opacity = useTransform(scrollYProgress, [.3, .5], [0, 1]);

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
                    <img className='laptop' src={laptop2}></img>
            </div>
                </div>
            <div className='about1' ref={navRef}>
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

export default Homepage;