import ResponsiveAppBar from "../../components/nav";
import MarketGainersTable from "../../components/MarketGainersTable";
import MarketLosersTable from "../../components/MarketLosersTable";
import { useQuery } from "@apollo/client";
import { MARKETGAINERS } from "../../utils/queries";
import { MARKETLOSERS } from "../../utils/queries";
import ComponentLoader from "../../components/ComponentLoader";




const Stocks = () => {
    const { loading: gainerLoading, error: gainerError, data: gainerData } = useQuery(MARKETGAINERS);
    const { loading: loserLoading, error: loserError, data: loserData } = useQuery(MARKETLOSERS);
    if (gainerLoading || loserLoading) return <ComponentLoader />
    if (gainerError || loserError) return <p>Error: {gainerError.message || loserError.message}</p>

    return (
        <div className='page-box'>  
            <div className='nav-no-animation'>
                <ResponsiveAppBar />
            </div>
            <div className='main-container'>
                <div className='table-align'>
                    <MarketGainersTable data={gainerData}/>
                </div>
                <div className='table-align'>
                    <MarketLosersTable data={loserData}/>
                </div>
            </div>
        </div>
    )
}

export default Stocks;