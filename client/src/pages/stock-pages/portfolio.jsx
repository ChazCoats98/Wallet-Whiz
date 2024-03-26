import ResponsiveAppBar from "../../components/nav";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { IconButton, Paper, InputBase, Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { FETCH_STOCKS_BY_TICKER } from "../../utils/mutations";
import { USER, STOCKS } from "../../utils/queries";
import ComponentLoader from "../../components/ComponentLoader";

const Portfolio = () => {
    const {exit, setExit} = useState(false);
    const {loading: userLoading, error: userError, data: userData} = useQuery(USER);
    const {loading: stocksLoading, error: stocksError, data: stocksData} = useQuery(STOCKS);
    const [fetchStocks] = useMutation(FETCH_STOCKS_BY_TICKER);
    if (userLoading || stocksLoading) return (<ComponentLoader />)
    if (userError) return (<p>Error: {userError.message}</p>)
    console.log(stocksData)
  if (!userLoading && exit === false) {
      fetchStocks({
          variables: {
              input: 'AAPL',
              userId: userData.user._id
          }
      })
    setExit(true)
  }
  
  
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