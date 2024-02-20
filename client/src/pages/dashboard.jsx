import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import PlaidAccounts from '../components/PlaidAccounts';
import PlaidTransactions from '../components/PlaidTransactions';
import SpendingChart from '../components/SpendingChart';
import ResponsiveAppBar from '../components/nav';

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
          <div className="balance-grid-box">
          <h2 className="headerText dashboardHeader">Hello {user.username || user.email}!</h2>
            <div className="container">
              <h3 className="headerText" id="accountsHeader">
                ACCOUNTS
              </h3>             
              <PlaidAccounts />
            </div>
          </div>
            <div className="transactions-grid-box">
              <h2 className="headerText">
                TRANSACTION HISTORY
              </h2>
                <PlaidTransactions />
            </div>
          <div className='chart-grid-box'>
          <h2 className="headerText" id="spending">
                MONTHLY SPENDING
              </h2>
                <SpendingChart />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
