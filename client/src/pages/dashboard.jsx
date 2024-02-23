import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 
import PlaidAccounts from '../components/PlaidAccounts';
import PlaidTransactions from '../components/PlaidTransactions';
import SpendingChart from '../components/SpendingChart';
import ResponsiveAppBar from '../components/nav';
import BalanceTotal from '../components/balanceTotal';
import userPlaceholder from '../assets/user-placeholder.png';
import { getCurrentUser } from 'aws-amplify/auth';


async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}

function Dashboard(props) {
  console.log(props);
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
              <h2 className="headerText dashboard-header">Welcome back,  </h2>
            </div>
            <div>
              <h2 className='headerText dashboard-header'>Total Balance</h2>
            </div>
          </div>
          <div className="balance-grid-box">
            <div className='header-box'>
              <h3 className="headerText sub-header" id="accountsHeader">
                ACCOUNTS
              </h3>             
            </div>
          </div>
            <div className="transactions-grid-box">
              <div className='header-box'>
                <h2 className="headerText sub-header">
                  TRANSACTION HISTORY
                </h2>
              </div>
            </div>
          <div className='chart-grid-box'>
            <div className='header-box'>
              <h2 className="headerText sub-header">
                MONTHLY SPENDING
              </h2>
            </div>
            <div className='chart-align'>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
