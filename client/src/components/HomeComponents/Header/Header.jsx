import React from 'react';
import './Header.css';
import eceraSystemLogo from '../../../assets/images/eceraSystemLogo.png';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='headerContainer'>
        <Link to={'/'} className="logo">
            <img src={eceraSystemLogo} alt="ECERA" />
        </Link> 
        <ul className='navs'>
            <li tabIndex={'0'}><Link>Home</Link></li>
            <li tabIndex={'0'}><Link>About Us</Link></li>
            <li tabIndex={'0'}><Link>Contact Us</Link></li>
            <li tabIndex={'0'}><Link>Our Services</Link></li>
            <li tabIndex={'0'}><Link>Dashboard</Link></li>
            <li tabIndex={'0'}><Link>Support & Asst.</Link></li>
        </ul>
        <Link to={'/authentication'} className="authIcon">
            <PersonIcon className='icon' />
        </Link>
    </div>
  )
}

export default Header