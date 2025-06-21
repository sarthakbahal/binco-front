import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const data = [
    { month: 'Jan' , recycled: 2},
    { month: 'Feb' , recycled: 3},
    { month: 'Mar' , recycled: 6},
    { month: 'Apr' , recycled: 4},
    { month: 'May' , recycled: 5},
    { month: 'Jun' , recycled: 8},
    { month: 'Jul' , recycled: 7},
    { month: 'Aug' , recycled: 9},
    { month: 'Sep' , recycled: 3},
    { month: 'Oct' , recycled: 5},
    { month: 'Nov' , recycled: 2},
    { month: 'Dec' , recycled: 1}
];


const Chart = () => {
   


    return (
        <div className='chart'>
            
            <div className="top">
                <TrendingUpIcon className='icon' />
                <div className="info">

                    <h3 className="title">Your Recycling Activity</h3>
                    <p className="desc">Moniter your monthly recycling habits</p>
                </div>

            </div>
            

            <div className="graph">

                <ResponsiveContainer width="100%" aspect={3/2}>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="recycled" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        
                        </defs>
                        <XAxis dataKey="month"  />
                        <YAxis label={{value:"Kilograms Recycled", offset:13,angle:-90, position:"insideLeft" }} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="recycled" stroke="#8884d8" fillOpacity={1} fill="url(#recycled)" />
                        
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    )
}

export default Chart