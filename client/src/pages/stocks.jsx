import ResponsiveAppBar from "../components/nav";
import { useEffect, useState } from "react";
import MarketGainers from "../components/MarketGainers";




const Stocks = () => {


    return (
        <div className='page-box'>  
            <div className='nav-no-animation'>
                <ResponsiveAppBar />
            </div>
            <div className='main-container'>
                <MarketGainers />
                <div className='main-grid'></div>
            </div>

        </div>
    )
}

export default Stocks;