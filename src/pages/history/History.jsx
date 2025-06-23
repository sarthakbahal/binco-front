import React from 'react'
import './history.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import Featured from '../../components/featured/Featured'


const History = () => {
    return (
        <div className='history'>
            <Sidebar />
            <div className="historycontainer">
                <Navbar />

                <h2>Coupon History</h2>
                <p>View your coupon history here.</p>

                <div className="status">
                    <div className="box">
                        <h2 style={{ color: '#70e000' }}>1000</h2>
                        <p>Total Earned</p>
                    </div>
                    <div className="box">
                        <h2 style={{ color: 'red' }}>154</h2>
                        <p>Total Spent</p>
                    </div>
                    <div className="box">
                        <h2 style={{ color: '#ffaa00' }}>846</h2>
                        <p>Net Balance</p>
                    </div>

                </div>


                <div className="searchsec">
                    <div className="search">
                        <SearchIcon className='icon' />
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="sorter">
                        <select
                            name="filter"
                            id="filter"
                            
                        >
                            <option value="">All Types</option>
                            <option value="active">Earnings</option>
                            <option value="expired">Purchases</option>
                            
                        </select>

                        <select
                            name="time"
                            id="time"
                            
                        >
                            <option value="">All Time</option>
                            <option value="today">Today</option>
                            <option value="week">This week</option>
                            <option value="month">This month</option>
                            <option value="year">This year</option>
                        </select>


                    </div>
                </div>

                <div className="history-content">
                    <Featured />
                </div>

            </div>
        </div>
    )
}

export default History