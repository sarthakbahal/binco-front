import React from 'react'
import './couponblock.scss'
import TollIcon from '@mui/icons-material/Toll';




const Couponblock = ({coupons}) => {
    return (
        <div className='couponblock'>
            <img src={coupons.imageUrl} alt="coupon" />

            <div className="center">
                <div className="left">
                    <h3>{coupons.title}</h3>
                    <p>{coupons.restaurant}</p>
                    <span className='Rating'>
                        <span className='rating'>⭐{coupons.rating}</span>
                        <span className='expiry'>Expiry : {coupons.expiry}</span>
                    </span>
                </div>
                <div className="right">
                    <span className='category'>{coupons.category}</span>
                    <span className='coins'>
                        <TollIcon className='icon' />
                        {coupons.coins} /-
                    </span>
                </div>
            </div>

            <button className='redeem'>Redeem Now !</button>
        </div>
    )
}

export default Couponblock