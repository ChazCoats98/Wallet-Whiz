import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import AccountButton from '../components/AccountButton';
import UserAccounts from "../components/UserAccounts";
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import ResponsiveAppBar from '../components/nav';

function User() {
    const { loading, error, data} = useQuery(USER);

    return (
        <div className="page-box">
            <div className="nav-no-animation">
                <ResponsiveAppBar />
            </div>
            <div className="form-box-align">
                <div className="form">
                    <UserAccounts />
                    <AccountButton />
                    {data && data.user && !data.user.plaidAccessToken && (
                    <PlaidButton userId={data.user._id} />
                )}
                </div>
            </div>
        </div>
    );
}

export default User;
