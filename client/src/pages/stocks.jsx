import ResponsiveAppBar from "../components/nav";
import { useEffect, useState } from "react";




const Stocks = () => {
  

    return (
        <div className='page-box'>  
            <div className='nav-no-animation'>
                <ResponsiveAppBar />
            </div>
            <div className='main-container'>
                <div className='main-grid'></div>
            </div>

        </div>
    )
}

export default Stocks;