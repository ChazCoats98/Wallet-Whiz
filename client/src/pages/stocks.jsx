import ResponsiveAppBar from "../components/nav";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { MARKETGAINERS } from "../utils/queries";




const Stocks = () => {
    const { loading, error, data } = useQuery(MARKETGAINERS);
    console.log(data);

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