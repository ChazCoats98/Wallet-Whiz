import { useQuery, useMutation } from '@apollo/client';
import { USER, ACCOUNTS, TRANSACTIONS } from '../utils/queries';
import { useEffect } from 'react';
import { FETCH_PLAID_DATA } from '../utils/mutations';
import PlaidAccounts from '../components/PlaidAccounts';
import PlaidTransactions from '../components/PlaidTransactions';
import SpendingChart from '../components/SpendingChart';
import ResponsiveAppBar from '../components/nav';
import BalanceTotal from '../components/balanceTotal';
import userPlaceholder from '../assets/user-placeholder.png';
import ComponentLoader from '../components/ComponentLoader';

function Dashboard() {
  const [fetchPlaidData] = useMutation(FETCH_PLAID_DATA);

  const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    useEffect(() => {
        if (!userLoading && !userError && userData && userData.user && userData.user.plaidAccessToken) {
            fetchPlaidData({
                variables: {
                    accessToken: userData.user.plaidAccessToken
                }
            });
        }
    }, [])


  const { loading: accountsLoading, error: accountsError, data: accountsData } = useQuery(ACCOUNTS);
  const { loading: transactionLoading, error: transactionError, data: transactionData } = useQuery(TRANSACTIONS);
  if (userLoading || accountsLoading || transactionLoading) return <ComponentLoader />
  if (userError || accountsError || transactionError) return <p>Error: {userError.message || accountsError.message || transactionError.message}</p>

  const user = userData.user;
  const accounts = accountsData.accounts;
  const transactions = transactionData.transactions;

  return (
    <div className='page-box'>
      <div className="nav-no-animation">
                <ResponsiveAppBar />
            </div>
      <div className='main-container'>
        <div className='main-grid'>
          <div className='header-grid-box'>
            <div className='header-greeting'>
              <img className='placeholder-img' src={userPlaceholder} />
              <h2 className='header-text dashboard-header greeting'>Welcome back, {user.username || user.email}!</h2>
            </div>
            <div>
              <h2 className='header-text dashboard-header'>Total Balance</h2>
              <BalanceTotal data={accounts}/>
            </div>
          </div>
          <div className="balance-grid-box">
            <div className='header-box'>
              <h3 className="header-text sub-header">
                ACCOUNTS
              </h3>             
            </div>
              <PlaidAccounts data={accounts}/>
          </div>
            <div className="transactions-grid-box">
              <div className='header-box'>
                <h2 className="header-text sub-header">
                  TRANSACTION HISTORY
                </h2>
              </div>
                <PlaidTransactions data={transactions}/>
            </div>
          <div className='chart-grid-box'>
            <div className='header-box'>
              <h2 className="header-text sub-header">
                MONTHLY SPENDING
              </h2>
            </div>
            <div className='chart-align'>
                <SpendingChart data={transactions}/>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
