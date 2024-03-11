import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ACCOUNTS, USER } from '../utils/queries';
import { UPDATE_USERNAME, UPDATE_EMAIL } from '../utils/mutations';
import Avatar from '@mui/material/Avatar'; 
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TextField from '@mui/material/TextField';
import { Dialog } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import UserImage from './UserImage';
import SaveIcon from '@mui/icons-material/Save';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const UserAccounts = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    const { loading: accountsLoading, error: accountsError, data: accountsData } = useQuery(ACCOUNTS);

    const [updateUsername] = useMutation(UPDATE_USERNAME);
    const [updateEmail] = useMutation(UPDATE_EMAIL);

    const [updateField, setUpdateField] = useState(null);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [ Xemail, setXemail ] = useState(600);
    const [ Xuser, setXuser ] = useState(600);

    const handleUpdateClick = (field) => {
        if (field === 'username') {
            setXuser(0);
        setUpdateField(field);
        } else if (field === 'email') {
            setXemail(0);
            setUpdateField(field);
        }
    }

    const handleCloseClick = () => {
        setXemail(600);
        setXuser(600);
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
            <div className='user-header'>
                <UserImage props={user}/>
                <h3 className="headerText sub-header">{user.username || user.email}&apos;s Profile</h3>
            </div>
            <div className="container">
                <div className='user-details-container'>
                    <div className='user-display'>
                    <div className='user-box-left'>
                        <Avatar className='user-icons' />
                        <div className='user-details-box'>
                            <h3>Username: </h3>
                            <p>{user.username}</p>
                        </div>
                    <EditIcon className='edit-icons' onClick={() => handleUpdateClick('username')}/>
                    </div>
                    </div>
                    <motion.div animate={{ x: Xuser }} className='update-container' id='username'>
                    <TextField
                        label='New Username' 
                        value={newUsername}
                        variant='outlined'
                        onChange={(e) => setNewUsername(e.target.value)}
                        />
                            <div className='button-divider'>
                                <CloseIcon onClick={handleCloseClick} className='close-button'/>
                            </div>
                            <div className='button-divider'>
                                <SaveIcon onClick={handleSave} className='save-button' />
                            </div>
                    </motion.div>
                </div>
                <div className='user-details-container'>
                    <div className='user-box-left'>
                        <EmailIcon className='user-icons' fontSize='large' />
                        <div className='user-details-box'>
                            <h3>Email: </h3>
                            <p>{user.email}</p>
                        </div>
                    <EditIcon className='edit-icons' onClick={() => handleUpdateClick('email')}/>
                    </div>
                    <motion.div animate={{ x: Xemail }} className='update-container' id='email'>
                    <TextField
                        label='New Email'
                        value={newEmail}
                        variant='outlined'
                        onChange={(e) => setNewEmail(e.target.value)}
                        />
                            <div className='button-divider'>
                                <CloseIcon onClick={handleCloseClick} className='close-button'/>
                            </div>
                            <div className='button-divider'>
                                <SaveIcon onClick={handleSave} className='save-button' />
                            </div>
                    </motion.div>
                </div>
                <div className='user-details-container'>
                    <div className='user-box-left'>
                            <AccessTimeIcon className='user-icons' fontSize='large'/>
                            <div className='user-details-box'>
                                <h3>Account created: </h3>
                                <p>{user.createdAt}</p>
                            </div>
                    </div>
                </div>
                <div className='user-details-container'>
                    <div className='user-box-left'>
                        <AccountBalanceIcon className='user-icons' fontSize='large'/>
                        <div className='user-details-box'>
                            <h3>Linked Banks: </h3>
                            <div className='account-name-box'>
                                {accounts.map((account) => (
                                    <p key={account._id}>{account.accountName}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccounts;