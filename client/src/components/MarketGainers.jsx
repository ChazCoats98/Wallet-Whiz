import { useQuery } from "@apollo/client";
import { MARKETGAINERS } from "../utils/queries";
import data

const MarketGainers = () => {
    const { loading, error, data } = useQuery(MARKETGAINERS);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data.fetchMarketGainers)

    return (
        <div className='gainers-display'>
            {data.fetchMarketGainers.slice(0, 5).map((MarketGainers) => {
                return (
                <div className='gainers' key={MarketGainers._id}>
                    <h2>{MarketGainers.symbol}</h2>
                    <h3>{MarketGainers.name}</h3>
                    <h3>Gain: <span className='income-text'>+${Math.round(MarketGainers.change*100)/100}</span></h3>
                    <h3>Gain Percentage: <span className='income-text'>+{Math.round(MarketGainers.changesPercentage*100)/100}%</span></h3>
                </div>
                )
            })}
        </div>
    )
}

export default MarketGainers;