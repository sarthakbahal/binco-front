import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import TollIcon from '@mui/icons-material/Toll';
import './transactionblock.scss';

const TransactionBlock = ({ transaction }) => {
  return (
    <div className="transaction-block">
      
      <div className="info">
        {transaction.type === "recycling" ? (
            <RecyclingIcon style={{ color: "#38b000" }} />
        ) : (
            <TollIcon style={{ color: "#ffbe0b" }} />
        )}

        <div className="details">
            <div className="desc">{transaction.description}</div>
            <div className="date">{transaction.date}</div>
        </div>

      </div>
      

      <div className="amount" style={{color: transaction.type === "recycling" ? "#008000" : "#d00000"}}>{transaction.amount}</div>
    </div>
  );
};

export default TransactionBlock;