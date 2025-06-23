import React from 'react'
import Couponblock from './Couponblock'
import './couponlist.scss'
import Ownedcoupon from './Ownedcoupon';

const coupons = [
  {
    title: "50% Off on Food",
    restaurant: "Restaurant Name",
    rating: 4.5,
    expiry: "12/12/2023",
    category: "Food",
    coins: 100,
    imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain"
  },
  {
    title: "Free Burger at new Cafe",
    restaurant: "Restaurant Name 2",
    rating: 4.0,
    expiry: "15/12/2023",
    category: "Electronics",
    coins: 200,
    imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain"
  },
  {
    title: "Buy 1 Get 1 Free",
    restaurant: "Restaurant Name 3",
    rating: 4.8,
    expiry: "20/12/2023",
    category: "Food",
    coins: 150,
    imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain"
  },
  {
    title: "10% Off on Electronics",
    restaurant: "Electronics Store",
    rating: 4.2,
    expiry: "25/12/2023",
    category: "Electronics",
    coins: 80,
    imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain"
  },
  {
    title: "Free Dessert with Meal",
    restaurant: "Restaurant Name 4",
    rating: 4.6,
    expiry: "30/12/2023",
    category: "Food",
    coins: 120,
    imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain"
  }
];


export const CouponList = () => {
  return (
    <div className="coupon-list">
      {coupons.map((coupon, idx) => (
        <Couponblock key={idx} coupons={coupon} />
      ))}
    </div>
  )
}

const ownedCoupons = [{
  title: "50% Off on Food",
  restaurant: "Restaurant Name",
  rating: 4.5,
  expiry: "12/12/2023",
  category: "Food",
  coins: 100,
  imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain",
  status: "active"
}, {
  title: "Free Burger at new Cafe",
  restaurant: "Restaurant Name 2",
  rating: 4.0,
  expiry: "15/12/2023",
  category: "Electronics",
  coins: 200,
  imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain",
  status: "expired"
}, {
  title: "Buy 1 Get 1 Free",
  restaurant: "Restaurant Name 3",
  rating: 4.8,
  expiry: "20/12/2023",
  category: "Food",
  coins: 150,
  imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain",
  status: "redeemed"
}, {
  title: "10% Off on Electronics",
  restaurant: "Electronics Store",
  rating: 4.2,
  expiry: "25/12/2023",
  category: "Electronics",
  coins: 80,
  imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain",
  status: "active"
}, {
  title: "Free Dessert with Meal",
  restaurant: "Restaurant Name 4",
  rating: 4.6,
  expiry: "30/12/2023",
  category: "Food",
  coins: 120,
  imageUrl: "https://th.bing.com/th/id/OIP.aHL8FcpnqhbE7oHIJVmQhQHaFb?rs=1&pid=ImgDetMain",
  status: "expired"
}];


export const OwnedCouponList = ({ statusFilter = "" }) => {
  // Filter coupons based on status if a filter is selected
  const filteredCoupons = statusFilter
    ? ownedCoupons.filter(coupon =>
      coupon.status.toLowerCase() === statusFilter.toLowerCase()
    )
    : ownedCoupons;

  return (
    <div className="owned-coupon-list">
      {filteredCoupons.length > 0 ? (
        filteredCoupons.map((coupon, idx) => (
          <Ownedcoupon key={idx} ownedcoupons={coupon} />
        ))
      ) : (
        <div className="no-coupons">
          <p>No coupons found with {statusFilter} status.</p>
        </div>
      )}
    </div>
  )
}


