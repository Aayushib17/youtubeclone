import React, { useState } from 'react'
import './Header.css'
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Icon from '@mui/material/Icon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import {Link} from "react-router-dom";
/*
/import SwitchUnstyled from '@mui/base/SwitchUnstyled';
*/
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
      <MenuIcon/>
      <Link to="/">
      
      <img
      className="header__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/508px-YouTube_Logo_2017.svg.png" alt=""
      /></Link>
      </div>
      <div className="header__input">
    <input onChange={(e) => setInputSearch(e.target.value)} 
    value={inputSearch} 
    placeholder="Search" 
    type="text"
    />
    <Link to={`/search/${inputSearch}`}>
       <SearchIcon className="header__inputButton" />
       </Link>
       </div>
       <div className="header__icons">
       <VideoCallIcon />
       <AppsIcon />
       <NotificationsIcon />
    
       <Avatar alt="Cindy Baker" 
       src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
       />
    </div>
    </div>

    
  );
}

export default Header
