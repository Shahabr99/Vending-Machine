import {Link} from 'react-router-dom';
import React from 'react';
import './style.css'

const Doritos = () => {
  return (
    <div className='statement'>
      <h3>A Pack of Doritos especially the COD edition is good for your belly.😋</h3>
      <Link to="/">Vending Machine</Link>
    </div>
  )
}

export default Doritos;