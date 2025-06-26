import React, { useState } from 'react'
import './navbar.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import TollIcon from '@mui/icons-material/Toll';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector('.sidebar').classList.toggle('open');
  }



  return (
    <div className='navbar'>



      <div className="wrapper">

        <div className="hamburger" onClick={toggleMenu}>
          <MenuOpenIcon className='icon' />
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