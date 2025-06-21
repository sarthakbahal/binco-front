import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homecontainer">
          <Navbar />
          <div className="widgets">
            <Widget type="coins" />
            <Widget type="streak" />
            <Widget type="recycled" />
            <Widget type="carbon" />
            
          </div>
          <div className="charts">
            <Chart />
            <Featured />
          
          </div>

        </div>
    </div>
  )
}

export default Home