import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentsIcon from '@mui/icons-material/Payments';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const PlaidIcon = (data) => {
    if (data.data == 'TRANSPORTATION') {
        return (
            <DirectionsCarIcon fontSize='large' className={data.className}/>
        )
    } else if (data.data == 'TRAVEL') {
        return (
            <FlightTakeoffIcon fontSize='large' className={data.className}/>
        )
    } else if (data.data == 'INCOME') {
        return (
            <PaidIcon fontSize='large' className={data.className} />
        )
    } else if (data.data == 'LOAN_PAYMENTS') {
        return (
            <PaymentsIcon fontSize='large' className={data.className} />
        )
    } else if (data.data == 'FOOD_AND_DRINK') {
        return (
            <FastfoodIcon fontSize='large' className={data.className} />
        )
    } else if (data.data == 'GENERAL_MERCHANDISE') {
        return (
            <ShoppingBagIcon fontSize='large' className={data.className} />
        )
    } else if (data.data == 'Plaid Saving') {
        return (
            <SavingsIcon fontSize='large' className={data.className} />
        )
    } else if (data.data == 'Plaid Checking') {
        return (
            <AccountBalanceWalletIcon fontSize='large' className={data.className} />
        )
    } else if (data.data == 'OTHER') {
        return (
            <CreditCardIcon fontSize='large' className={data.className} />
        )
    }
}

export default PlaidIcon;