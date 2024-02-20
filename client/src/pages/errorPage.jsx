import { Link } from "react-router-dom";
import Logo2 from '../assets/WalletWhizIconnbg.png'

function ErrorPage() {
    return (
    <div className='error-box'>
         <Link to='/' style={{ textDecoration: 'none'}}>
              <div className='logo-box'>
                <img className='headerLogo' src={Logo2} />
                <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
              </div>
            </Link>
            <div className="error-body">
                <h1>Whoops!</h1>
                <p>Looks like we couldn&apos;t find this page</p>
            </div>
    </div>
    )
}

export default ErrorPage;