import React from 'react'
import './coupon.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Coinscounter from '../../components/coinscounter/Coinscounter'
import SearchIcon from '@mui/icons-material/Search';

import SelectLabels from '../../components/filter/Filter'

import CouponList from '../../components/couponBlock/CouponList'

const Coupon = () => {
  return (
    <div className='coupon'>
      <Sidebar />
      <div className="couponContainer">
        <Navbar />
        <div className="top">
          <h2>Coupon Store</h2>
          <p>Redeem your bincoins for amazing deals !!!</p>
          <Coinscounter />
        </div>
        <div className="center">
          <div className="searchsection">
            <SearchIcon className='icon' />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="filter">
            <SelectLabels />
            
          </div>
          


        </div>
        <div className="bottom">
          <CouponList />
        </div>
      </div>
    </div>
  )
}

export default Coupon