import {Link} from 'react-router-dom';
import React from 'react';
import './style.css'

const Jerky = () => {
  return (
    <div className="statement">
      <h3>A Jerky a day keeps the protein in belly.🍖</h3>
      <Link to="/">Vending Machine</Link>
    </div>
  )
}

export default Jerky;