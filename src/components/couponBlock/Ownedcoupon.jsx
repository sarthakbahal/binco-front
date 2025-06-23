import React from 'react'
import './ownedcoupon.scss'

import QrCodeIcon from '@mui/icons-material/QrCode';


const Ownedcoupon = ({ownedcoupons}) => {
    
    const stat = ownedcoupons.status.toLowerCase();
    
    // Define status color based on status
    const getStatusColor = () => {
        switch (stat) {
            case 'active':
                return '#70e000'; // Green
            case 'expired':
                return 'red'; // Red
            case 'redeemed':
                return '#FF9800'; // Orange
            default:
                return '#70e000'; // Default color
        }
    };
    
    return (
        <div className='ownedcoupon'>

            <img src={ownedcoupons.imageUrl} alt="coupon" />

            <div className="center">
                
                <div className="place">
                    <div className="info">
                        <h3>{ownedcoupons.title}</h3>
                        <p>{ownedcoupons.restaurant}</p>
                    </div>
                    <span className="status" style={{color: getStatusColor()}}>{ownedcoupons.status}</span>
                </div>

                <div className="highs">
                    <span className='category'>{ownedcoupons.category}</span>
                    <span className='rating'>⭐{ownedcoupons.rating}</span>
                    
                </div>


                <div className="paid">
                    <span>Paid:</span>
                    <span className='coins'>
                        {ownedcoupons.coins} binCoins 
                    </span>

                </div>

                <div className="expy">
                    <span>Expiry:</span>
                    <span className='expiry'>{ownedcoupons.expiry}</span>
                </div>

                <button className="qr">
                    <QrCodeIcon className='icon' />
                    <span>Show QR Code</span>
                </button>
                
                
                
                
                
            </div>

            

            
        </div>
    )
}

export default Ownedcoupon