import { useQuery } from '@apollo/client';
import { ACCOUNTS } from '../utils/queries';
import CurrencyFormat from 'react-currency-format';
import PlaidIcon from './PlaidIcons';
import ComponentLoader from './ComponentLoader';

const PlaidAccounts = () => {
    const { loading, error, data } = useQuery(ACCOUNTS);

    if (loading) return <ComponentLoader />
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.accounts.map((account) => (
                <div className='map-container balances' key={account._id}>
                    <div className='display-left'>
                        <PlaidIcon className='transaction-icons' data={account.accountName}/>
                    <h4 className='balance-header'>{account.accountName}</h4>
                    </div>
                    <CurrencyFormat className='account-balance' displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={account.balance}/>
                </div>
            ))}
        </div>
    );
};

export default PlaidAccounts;