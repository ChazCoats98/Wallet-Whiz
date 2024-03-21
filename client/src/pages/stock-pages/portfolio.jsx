import ResponsiveAppBar from "../../components/nav";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { IconButton, Paper, InputBase, Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { FETCH_STOCK_BY_TICKER } from "../../utils/queries";
import ComponentLoader from "../../components/ComponentLoader";

const Portfolio = () => {
    const {userInput, setUserInput} = useState('AAPL');
    const {loading, error, data} = useQuery(FETCH_STOCK_BY_TICKER, {variables: {input: "AAPL"}});
    if (loading) return <ComponentLoader />
    if (error) return <p>Error: {error.message}</p>
    
    const getUserValue = (e) => {
        const value = e.target.value
        setUserInput(value)
    }

    const stocks = [];
    console.log(userInput);

    console.log(data)
    return (
        <div className='page-box'>
            <div className='nav-no-animation'>
                <ResponsiveAppBar />
            </div>
            <div className='main-container'>
                <h1>Portfolio Page</h1>
                <div className='search-container'>
                    <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search by ticker' }}
                        />
                        <Divider />
                        <IconButton type='submit' aria-label='search'>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;