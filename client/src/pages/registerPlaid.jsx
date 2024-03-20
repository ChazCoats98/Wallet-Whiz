import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import { useQuery, useMutation } from '@apollo/client';
import { USER } from '../utils/queries';
import { FETCH_PLAID_DATA } from '../utils/mutations';
import Logo2 from '../assets/WalletWhizIconnbg.png'
import PlaidButton from '../components/PlaidButton'
import ComponentLoader from '../components/ComponentLoader';

const RegisterPlaid = () => {
    const { loading, error, data} = useQuery(USER);
    const [fetchPlaidData] = useMutation(FETCH_PLAID_DATA);
    if (loading) return <ComponentLoader />
  if (error) return <p>Error: {error}</p>
    console.log(data);

    if (data.user.plaidAccessToken) {
        fetchPlaidData({
            variables: {
                    accessToken: data.user.plaidAccessToken
                }
        });

        window.location.assign('/personal finances');
    } else {

        return (
            <div className="page-box">
                        <div className="form-box-align">
                            <div className='form'>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <div className='logo-box'>
                                        <img className='header-logo' src={Logo2} />
                                        <h3 className="header-title">Wallet<span style={{ color: 'black'}}>Whiz</span></h3>
                                    </div>
                                </Link>
                                <div className="cards" id="login-box">
                                    <h3 className="form-box-header">Looks like you haven&apos;t connected a bank account yet.
                                    would you like to do that now?</h3>
                                    <PlaidButton />
                                </div>
                                <div className="register-button-box">
                                    <h3 className="register-header">No thanks. Take me to the stocks page.</h3>
                                    <Link to='/stocks'>
                                        <Button variant='contained' disableElevation>
                                            Stocks
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default RegisterPlaid;