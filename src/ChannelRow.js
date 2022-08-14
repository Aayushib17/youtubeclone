import React from 'react';
import './ChannelRow.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import Avatar from '@mui/material/Avatar';

function ChannelRow( {
image,
Channel,
subs,
noOfVideos,
description,
verified,
})
{
  return (
    <div className="ChannelRow">
      <Avatar className="ChannelRow__logo" 
      alt={Channel} 
      src={image} 
      sx={{ width: 76, height: 76 }}/>
          <div className="ChannelRow__text">
            <h4>{Channel} {verified && <VerifiedIcon />}</h4>
            <p>{subs} subscribers • {noOfVideos} Videos
            </p> 
            <p>{description}</p>
          </div>
    </div>
  );
}

export default ChannelRow;
