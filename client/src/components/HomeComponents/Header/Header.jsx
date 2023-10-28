import React, { useState } from 'react';
import './Header.css';
import eceraSystemLogo from '../../../assets/images/eceraSystemLogo.png';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='headerContainer'>
      <MenuIcon onClick={()=>setOpenMenu(!openMenu)} className='hamBarMenu' />
        <Link to={'/'} className="logo">
            <img src={eceraSystemLogo} alt="ECERA" />
        </Link> 
        <ul className={!openMenu ? 'navs': 'navs openNavs'}>
            <li tabIndex={'0'}><Link to={'/'}>Home</Link></li>
            <li tabIndex={'0'}><Link to={'/about'}>About Us</Link></li>
            <li tabIndex={'0'}><Link to={'/contact'}>Contact Us</Link></li>
            <li tabIndex={'0'}><Link to={'/services'}>Our Services</Link></li>
            <li tabIndex={'0'}><Link to={'/dashboard'}>Dashboard</Link></li>
            <li tabIndex={'0'}><Link to={'/support'}>Support & Asst.</Link></li>
        </ul>
        <Link to={'/authentication'} className="authIcon">
            <PersonIcon className='icon' />
        </Link>
    </div>
  )
}

export default Header