import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import PlaidButton from '../components/PlaidButton';
import AccountButton from '../components/AccountButton';
import UserAccounts from "../components/accountsUserPage";
import { useQuery } from '@apollo/client';
import { USER } from '../utils/queries';
import ResponsiveAppBar from '../components/nav';

function User() {
    const { loading, error, data} = useQuery(USER);

    return (
        <div className="pageBox">
            <div className="nav-no-animation">
                <ResponsiveAppBar />
            </div>
            <div className="formBoxAlign">
                <div className="form user-container">
                    <UserAccounts />
                        <AccountButton />
                    {data && data.user && !data.user.plaidAccessToken && (
                    <PlaidButton userId={data.user._id} />
                )}
                </div>
            </div>
        </div>
    );
};

export default User;
