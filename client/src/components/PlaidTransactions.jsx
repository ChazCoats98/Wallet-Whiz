import React from 'react';
import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Divider from '@mui/material/Divider';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';
import TransactionIcon from './TransactionIcons';

const PlaidTransactions = () => {
    const { loading, error, data } = useQuery(TRANSACTIONS);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data);



    return (
        <div>
            {data.transactions.map((transaction) => (
                <div className='map-container transactions' key={transaction._id}>
                    <div className='transactionInner'>
                        <div>
                            <TransactionIcon category={transaction.category} />
                            <h2>{transaction.merchantName}</h2>
                            <CurrencyFormat className='blackText' displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={transaction.amount}/>
                        </div>
                    <p>{moment(transaction.date).format('MMMM Do YYYY')}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlaidTransactions;