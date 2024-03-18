import CurrencyFormat from 'react-currency-format';

const BalanceTotal = (data) => {
    let balance =0;



    data.data.forEach(account => {
        balance += account.balance
    });

    

    return (
        <div>
            <CurrencyFormat className='dashboard-header' displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator='.' decimalScale={2} fixedDecimalScale={true} value={balance}/>
        </div>
    )
}

export default BalanceTotal;