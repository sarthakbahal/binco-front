import React from 'react'
import './featured.scss'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CachedIcon from '@mui/icons-material/Cached';
import TransactionBlock from '../transblock/Transactionblock';

const Featured = () => {
    const transactions = [
        { type: "recycling", description: "Plastic bottles recycled", amount: "5 kg", date: "2023-10-01" },
        { type: "purchase", description: "New reusable bag", amount: "10.00", date: "2023-10-02" },
        { type: "recycling", description: "Glass bottles recycled", amount: "3 kg", date: "2023-10-03" },
        { type: "purchase", description: "Eco-friendly detergent", amount: "15.00", date: "2023-10-04" },
        { type: "recycling", description: "Cardboard recycled", amount: "10 kg", date: "2023-10-05" },
        { type: "purchase", description: "Organic produce", amount: "25.00", date: "2023-10-06" },
    ]; 


   return (
    <div className='featured'>
        <div className="top">
            <h2 className='title'>Recent Transactions</h2>
            <ReceiptLongIcon className='icon' />
        </div>
        <div className="center">
            <p>Your latest recycling and purchase activity</p>
            <div className="btns">
                <FilterAltIcon className='btn' />
                <CachedIcon className='btn' />
            </div>
        </div>
        
        <div className="bottom">
            {transactions.map((transaction, index) => (
                <TransactionBlock key={index} transaction={transaction} />
            ))}
        </div>
    </div>
  )
}

export default Featured