import { Link } from "react-router-dom";
import Logo2 from '../assets/WalletWhizIconnbg.png'

function errorPage() {
    <div className='formAlign'>
         <Link to='/' style={{ textDecoration: 'none'}}>
              <div className='logo-box'>
                <img className='headerLogo' src={Logo2} />
                <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
              </div>
            </Link>
    </div>
}

export default errorPage;