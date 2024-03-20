import { Chart, registerables } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from '@apollo/client';
import { TRANSACTIONS } from '../utils/queries';
import ComponentLoader from "./ComponentLoader";
Chart.register(...registerables);
Chart.defaults.plugins.legend.title.font = 'Oswald';

const SpendingChart = (data) => {
    const accessToken = data.accessToken;
    console.log(data);
    const { loading: transactionLoading, error: transactionError, data: transactionData } = useQuery(TRANSACTIONS, {variables: {accessToken}});
    if (transactionLoading) return <ComponentLoader />
    if (transactionError) return <p>Error: {transactionError.message}</p>

    const transactions = transactionData.transactions || [];

    const categoryAmount = transactions.reduce((acc, transaction) => {
        const category = transaction.category;
        if (transaction.amount >= 0) {
            acc[category] = (acc[category] || 0) + transaction.amount;
        }
        return acc;
    }, {});

    const categories = Object.keys(categoryAmount);
    const amount = Object.values(categoryAmount);
    const totalSum = amount.reduce((sum, value) => sum + value, 0);

    const categoriesFormatted = [];

    categories.forEach((category) => {
        const categoryFormat = category.replaceAll('_', ' ').toLowerCase();
        categoriesFormatted.push(categoryFormat);
    })
    console.log(categoriesFormatted);

    const Options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label;
                        const value = context.parsed;
                        const percentage = ((value / totalSum) * 100).toFixed(2) + '%';
                        return `${label}: ${percentage}`;
                    }
                }
            }
        },
    };

    const chartData = {
        labels: categoriesFormatted,
        datasets: [
            {
                data: amount,
                fontColor: "black",
                backgroundColor: [
                    'rgb(194, 184, 217)',
                    'rgb(217, 207, 184)',
                    'rgb(139, 127, 166)',
                    'rgb(166, 127, 139)',
                ],
            },
        ],
    };

    return (
        <div className="container spendingChart">
            <Doughnut data={chartData} options={Options} updateMode="resize" />
        </div>
    );
};

export default SpendingChart;
