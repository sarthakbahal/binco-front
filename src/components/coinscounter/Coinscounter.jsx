import React from 'react'
import './coinscounter.scss'
import TollIcon from '@mui/icons-material/Toll';


const coins = 846; 

const Coinscounter = () => {
  return (
    <div className='coinscounter'>
      <TollIcon className='icon' />
      {coins}
      <span className='text'>Bincoins Available</span>
    </div>
  )
}

export default Coinscounter