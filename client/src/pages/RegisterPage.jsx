import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Logo2 from '../assets/WalletWhizIconnbg.png'
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  return (
    <div className="pageBox">
        <div className="formBoxAlign">
          <div className="form">
            <Link to='/' style={{ textDecoration: 'none'}}>
              <div className='logo-box'>
                <img className='headerLogo' src={Logo2} />
                <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
              </div>
            </Link>
            <div className='cards'>
            <h3 className="formBoxHeader">Register</h3>
            <RegisterForm />
            </div>
          </div>
      </div>
    </div>
  );
};

export default RegisterPage;
