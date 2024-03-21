import ResponsiveAppBar from "../../components/nav";
import { useQuery } from "@apollo/client";
import { FETCH_STOCK_BY_TICKER } from "../../utils/queries";
import ComponentLoader from "../../components/ComponentLoader";

const Portfolio = () => {
    const {loading, error, data} = useQuery(FETCH_STOCK_BY_TICKER, {variables: {input: 'AAPL'}});
    if (loading) return <ComponentLoader />
    if (error) return <p>Error: {error.message}</p> 

    console.log(data)
    return (
        <div className='page-box'>
            <div className='nav-no-animation'>
                <ResponsiveAppBar />
            </div>
            <h1>Portfolio Page</h1>
        </div>
    )
}

export default Portfolio;