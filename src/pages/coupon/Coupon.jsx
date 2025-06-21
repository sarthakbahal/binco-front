import React from 'react'
import './coupon.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Coinscounter from '../../components/coinscounter/Coinscounter'
import SearchIcon from '@mui/icons-material/Search';
import MultipleSelectPlaceholder from '../../components/filter/Filter'

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
          <div className="menu">
            <MultipleSelectPlaceholder />
            
          </div>
          <div className="filter">

          </div>


        </div>
        <div className="bottom">
          coupons
        </div>
      </div>
    </div>
  )
}

export default Coupon