import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import UserAccounts from "../components/UserAccounts";
import ResponsiveAppBar from '../components/nav';

function User() {
    return (
        <div className="page-box">
            <div className="nav-no-animation">
                <ResponsiveAppBar />
            </div>
            <div className="form-box-align">
                <div className="form">
                    <UserAccounts />
                </div>
            </div>
        </div>
    );
}

export default User;
