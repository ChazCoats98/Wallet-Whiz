import { useQuery } from "@apollo/client";
import { MARKETGAINERS } from "../utils/queries";

const MarketGainers = () => {
    const { loading, error, data } = useQuery(MARKETGAINERS);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data.fetchMarketGainers)

    return (
        <div>
            {data.fetchMarketGainers.map((MarketGainers) => {
                return (
                <div className='map-container transactions' key={MarketGainers._id}>
                    <h2>{MarketGainers.symbol}</h2>
                </div>
                )
            })}
        </div>
    )
}

export default MarketGainers;