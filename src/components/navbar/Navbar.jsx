import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TollIcon from '@mui/icons-material/Toll';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="hamburger">
          <MenuOpenIcon className='icon' />
        </div>

        <div className="search">
          <SearchIcon className='icon' />
          <input type="text" placeholder="Search..."  />
        </div>

        <div className="items">
          <div className="item">
            <NotificationsIcon className='icon' />
          </div>
          <div className="item">
            <DarkModeIcon className='icon' />
          </div>
          <div className="item">
            <TollIcon className='icon' />
            846
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar