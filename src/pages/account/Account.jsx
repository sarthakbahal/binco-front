import React from 'react'
import './account.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import EditProfileBox from '../../components/editprofile/Editprofile'

const Account = () => {
  return (
    <div className='account'>
        <Sidebar />
        <div className="account__container">
            <Navbar />

            <div className="heading">
                <h1>Account</h1>
                <p>Manage your account settings and set preferences</p>
            </div>
            
            <div className="acc">
             <EditProfileBox />
              

            </div>
            
            
        </div>
    </div>
  )
}

export default Account