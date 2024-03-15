import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/queries';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';
import PlaidIcon from './PlaidIcons';

const PlaidTransactions = () => {
    const { loading, error, data } = useQuery(TRANSACTIONS);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data);


    return (
        <div>
            {data.transactions.map((transaction) => {
                if (transaction.amount > 0) {
                    return (
                        <div className='map-container transactions' key={transaction._id}>
                    <div className='transaction-inner'>
                        <div className='display-left'>
                            <PlaidIcon className='transaction-icons' data={transaction.category} />
                            <div>
                                <h2>{transaction.merchantName}</h2>
                                <CurrencyFormat className='expense-text' displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={transaction.amount * -1}/>
                            </div>
                        </div>
                    <p>{moment(transaction.date).format('MMMM Do YYYY')}</p>
                    </div>
                </div>
                    )
                } else if (transaction.amount <= 0) {
                    return (
                        <div className='map-container transactions' key={transaction._id}>
                        <div className='transaction-inner'>
                            <div className='display-left'>
                                <PlaidIcon className='transaction-icons' data={transaction.category} />
                                <div>
                                    <h2>{transaction.merchantName}</h2>
                                    <CurrencyFormat className='income-text' displayType={'text'} thousandSeparator={true} prefix={'+$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={transaction.amount * -1}/>
                                </div>
                            </div>
                        <p>{moment(transaction.date).format('MMMM Do YYYY')}</p>
                        </div>
                    </div>
                    )
                }
            }
            )}
        </div>
    );
};

export default PlaidTransactions;