import {Link} from 'react-router-dom';
import './Links.css';

const Links = () => {


  return (
    <div className="link-container">
      <Link to="/jerky">Jerky</Link>
      <Link to="/redbull">Redbull</Link>
      <Link to="/doritos">Doritos</Link>
    </div>
  )
}

export default Links