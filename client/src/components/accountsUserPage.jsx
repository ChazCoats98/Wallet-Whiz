import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ACCOUNTS, USER } from '../../src/utils/queries';
import { UPDATE_USERNAME, UPDATE_EMAIL } from '../../src/utils/mutations';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'; 
import Divider from '@mui/material/Divider';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import userPlaceholder from '../assets/user-placeholder.png';

const UserAccounts = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    const { loading: accountsLoading, error: accountsError, data: accountsData } = useQuery(ACCOUNTS);

    const [updateUsername] = useMutation(UPDATE_USERNAME);
    const [updateEmail] = useMutation(UPDATE_EMAIL);

    const [updateField, setUpdateField] = useState(null);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleUpdateClick = (field) => {
        setUpdateField(field);
    }

    const handleCloseClick = () => {
        setUpdateField(null);
    };
    
    const handleSave = async () => {
        if (updateField === 'username') {
            await updateUsername({ variables: { userId: userData.user._id, username: newUsername } });
        } else if (updateField === 'email') {
            await updateEmail({ variables: { userId: userData.user._id, email: newEmail } });
        }
        
        window.location.reload();
    };
    
    if (userLoading || accountsLoading) return <p>Loading...</p>
    if (userError || accountsError) return <p>Error: {userError?.message || accountsError?.message}</p>
    
    const user = userData.user;
    const accounts = accountsData.accounts;

    return (
        <div key={user._id}>
            <img src={userPlaceholder} />
            <h3 className="headerText sub-header">{user.username || user.email}&apos;s Profile</h3>
            <div className="container">
                <div className='user-details-container'>
                    <div className='user-box-left'>
                        <Avatar />
                        <div className='user-details-box'>
                            <h3>Username: </h3>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    <Button variant='contained' disableElevation onClick={() => handleUpdateClick('username')}>Change Username</Button>
                </div>
                {updateField === 'username' && (
                    <ListItem>
                    <TextField
                        label='New Username'
                        value={newUsername}
                        variant='outlined'
                        onChange={(e) => setNewUsername(e.target.value)}
                        />
                            <CloseIcon color='error' onClick={handleCloseClick} style={{ cursor: 'pointer' }} />
                        </ListItem>
                )}
                <div className='user-details-container'>
                    <div className='user-box-left'>
                        <AlternateEmailIcon className='transaction-icons' />
                        <div className='user-details-box'>
                            <h3>Email: </h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <Button variant='contained' disableElevation onClick={() => handleUpdateClick('email')}>Change Email</Button>
                    </div>
                {updateField === 'email' && (
                    <ListItem>
                    <TextField
                        label='New Email'
                        value={newEmail}
                        variant='outlined'
                        onChange={(e) => setNewEmail(e.target.value)}
                        />
                            <CloseIcon color='error' onClick={handleCloseClick} style={{ cursor: 'pointer' }} />
                        </ListItem>
                )}
                <div className='user-details-container'>
                    <div className='user-box-left'>
                        <AccessTimeIcon className='transaction-icons'/>
                        <div className='user-details-box'>
                            <h3>Account created: </h3>
                            <p>{user.createdAt}</p>
                        </div>
                    </div>
                </div>
                <div className='user-detailsContainer'>
                    <div className='user-box-left'>
                            <AccountBalanceIcon className='transaction-icons'/>
                            <div className='user-details-box'>
                                <h3>Linked banks: </h3>
                                <div className='accounts-map-box'>
                                    {accounts.map((account) => (
                                        <p  key={account._id}>{account.accountName}</p>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
                <Divider variant="inset" />
                {updateField && (
                    <Button variant='contained' disableElevation onClick={handleSave}>Save</Button>
                )}
            </div>
        </div>
    );
};

export default UserAccounts;