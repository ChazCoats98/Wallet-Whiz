import { useQuery } from '@apollo/client';
import { ACCOUNTS } from '../utils/queries';
import CurrencyFormat from 'react-currency-format';

const BalanceTotal = () => {
    const { loading, error, data } = useQuery(ACCOUNTS);
    let balance =0;

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    data.accounts.forEach(account => {
        balance += account.balance
    });

    

    return (
        <div>
            <CurrencyFormat className='dashboard-header' displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={balance}/>
        </div>
    )
}

export default BalanceTotal;