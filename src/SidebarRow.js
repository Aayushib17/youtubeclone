import React from 'react'
import"./sidebarRow.css";
import HomeIcon from '@mui/icons-material/Home';
import Sidebar from './Sidebar';

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow__icon" />
      <h2 className='sidebarRow__icon'>{title}</h2>
    </div>
  );
}

export default SidebarRow;
