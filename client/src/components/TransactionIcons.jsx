import { FaCar } from "react-icons/fa";

const TransactionIcon = (category) => {
    console.log(category.category)
    if (category.category == 'TRANSPORTATION') {
        console.log(category)
        return (
            <FaCar />
        )
    }
}

export default TransactionIcon;