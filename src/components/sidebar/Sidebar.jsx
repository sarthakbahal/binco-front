import React from 'react'
import './sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RestoreIcon from '@mui/icons-material/Restore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  
    const closeSidebar = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
        closeSidebar();
    };
    
  
  
  
  return (
    <div className='sidebar'>
       
       <span className="close" onClick={closeSidebar}>
              <CancelIcon className='icon' />
       </span>
       
        <div className="top">
            <span className="logo">BinCo</span>
        </div>
        <div className="center">
            <ul>
                <p className="title">Main Menu</p>
                <li onClick={() => handleNavigation('/user/dashboard')}>
                    <GridViewIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li onClick={() => handleNavigation('/user/coupon')}>
                    <LocalOfferIcon className='icon' />
                    <span>Coupon Store</span>
                </li>
                <li onClick={() => handleNavigation('/user/owned')}>
                    <ReceiptIcon className='icon' />
                    <span>Owned Coupons</span>
                </li>
                <li onClick={() => handleNavigation('/user/history')}>
                    <RestoreIcon className='icon' />
                    <span>History</span>
                </li>

                <p className="title">Support</p>
                <li onClick={() => handleNavigation('/user/account')}>
                    <AccountBoxIcon className='icon' />
                    <span>Account</span>
                </li>
                <li onClick={() => handleNavigation('/user/help')}>
                    <HelpOutlineIcon className='icon' />
                    <span>Help Center</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
            <div className="pfp">
                <img 
                    src="https://th.bing.com/th/id/OIP.Os3dloCTc-JUqOagtZOXVAHaHr?w=178&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
                    alt="Profile"
                    className='avatar'
                
                
                />
            </div>
            <div className="info">
                <span className="name">John Doe</span>
                <span className="email">jhondoe@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar