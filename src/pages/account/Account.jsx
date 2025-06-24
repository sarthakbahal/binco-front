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

              <div className="accstats">
                <h3>Account Statistics :</h3>
                <div className="since">
                  <p>Account created on:</p>
                  <span>01/01/2023</span>
                </div>
                <div className="total">
                  <p>Total recycled:</p>
                  <span>150</span>
                </div>
                <div className="earned">
                  <p>Total binCoins earned:</p>
                  <span>300</span>
                </div>
                <div className="streak">
                  <p>Current streak:</p>
                  <span>5 days</span>
                </div>

              </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default Account