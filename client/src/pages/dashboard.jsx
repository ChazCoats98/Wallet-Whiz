import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import { ACCOUNTS } from '../utils/queries';
import PlaidAccounts from '../components/PlaidAccounts';
import PlaidTransactions from '../components/PlaidTransactions';
import SpendingChart from '../components/SpendingChart';
import ResponsiveAppBar from '../components/nav';
import BalanceTotal from '../components/balanceTotal';
import userPlaceholder from '../assets/user-placeholder.png';

function Dashboard() {
  const { loading, error, data } = useQuery(USER);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const user = data.user;
  return (
    <div className='pageBox'>
      <div className="nav-no-animation">
                <ResponsiveAppBar />
            </div>
      <div className='dashboard-container'>
        <div className="dashboard-grid">
          <div className='header-grid-box'>
            <div className='header-greeting'>
              <img className='placeholder-img' src={userPlaceholder} />
              <h2 className="header-text dashboard-header greeting">Welcome back, {user.username || user.email}!</h2>
            </div>
            <div>
              <h2 className='header-text dashboard-header'>Total Balance</h2>
              <BalanceTotal />
            </div>
          </div>
          <div className="balance-grid-box">
            <div className='header-box'>
              <h3 className="header-text sub-header">
                ACCOUNTS
              </h3>             
            </div>
              <PlaidAccounts />
          </div>
            <div className="transactions-grid-box">
              <div className='header-box'>
                <h2 className="header-text sub-header">
                  TRANSACTION HISTORY
                </h2>
              </div>
                <PlaidTransactions />
            </div>
          <div className='chart-grid-box'>
            <div className='header-box'>
              <h2 className="header-text sub-header">
                MONTHLY SPENDING
              </h2>
            </div>
            <div className='chart-align'>
                <SpendingChart />
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
