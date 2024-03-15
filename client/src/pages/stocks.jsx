import ResponsiveAppBar from "../components/nav";
import { useEffect, useState } from "react";
import MarketGainersTable from "../components/MarketGainersTable";
import MarketLosersTable from "../components/MarketLosersTable";




const Stocks = () => {


    return (
        <div className='page-box'>  
            <div className='nav-no-animation'>
                <ResponsiveAppBar />
            </div>
            <div className='main-container'>
                <MarketGainersTable />
                <MarketLosersTable />
                
            </div>

        </div>
    )
}

export default Stocks;