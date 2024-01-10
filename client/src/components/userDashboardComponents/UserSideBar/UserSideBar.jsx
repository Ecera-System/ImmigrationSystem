import './UserSideBar.css';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArticleIcon from '@mui/icons-material/Article';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserSideBar({closeNavInfo}) {
    const {user} = useSelector(state=>state.user);
    const [toggleMenu, setToggleMenu] = useState(false);

    const onNavClick = () =>{
        setToggleMenu(false); 
        closeNavInfo(false)
    }
    return (
        <div className='mainContainer'>
            {
                toggleMenu ? 
                <CloseIcon onClick={()=>{setToggleMenu(false); closeNavInfo(false)}} className='toggleMenuIcon' />:
                <ListIcon onClick={()=>{setToggleMenu(true); closeNavInfo(true)}} className='toggleMenuIcon' />
            }
        <div className={toggleMenu ? 'sideBarContainer showSideBar' : 'sideBarContainer hideSideBar'}>
            <div className='userInfo'>
                <AccountCircleIcon className='profileIcon' />
                <p className={!toggleMenu && 'hideOnMobile'} >{user?.role}</p>
                <h1 className={!toggleMenu && 'hideOnMobile'} >{user?.name}</h1>
            </div>
            <div className='navs'>
                <Link to={'/user-dashboard/profile'} onClick={onNavClick}>
                    <PersonOutlineIcon />
                    <h2 className={!toggleMenu && 'hideOnMobile'} >My Profile</h2>
                </Link>
                <Link to={'/user-dashboard/doc-manage'} onClick={onNavClick}>
                    <ArticleIcon />
                    <h2 className={!toggleMenu && 'hideOnMobile'} >Doc. Management</h2>
                </Link>
                <Link to={'/user-dashboard/app-process'} onClick={onNavClick}>
                    <AutorenewIcon />
                    <h2 className={!toggleMenu && 'hideOnMobile'} >Application Process</h2>
                </Link>
                <Link to={'/user-dashboard/app-status'} onClick={onNavClick}>
                    <AccessTimeIcon />
                    <h2 className={!toggleMenu && 'hideOnMobile'} >Application Status</h2>
                </Link>
                <Link to={'/user-dashboard/book-appointment'} onClick={onNavClick}>
                    <EditCalendarIcon />
                    <h2 className={!toggleMenu && 'hideOnMobile'} >Appointment Booking</h2>
                </Link>
                <Link to={'/user-dashboard/payment'} onClick={onNavClick}>
                    <AttachMoneyIcon />
                    <h2 className={!toggleMenu && 'hideOnMobile'} >Payment</h2>
                </Link>
            </div>
            <div className='logout'>
                <LogoutIcon />
                <h2 className={!toggleMenu && 'hideOnMobile'} >Logout</h2>
            </div>
        </div>
        </div>
    )
}

export default UserSideBar;
