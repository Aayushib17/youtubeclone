import React from 'react'
import "./VideoRow.css";
function VideoRow({views, subs, description, timestamp, Channel, title, image})
 {
  
    return (
    <div className="VideoRow">
      <img src={image} alt=""/>
      <div class="VideoRow__text">
      <h3>{title}</h3>
      <p className="VideoRow__headline">
      {Channel} • {" "}
      <span className="VideoRow__subs">
      <span className="VideoRow__subsNumber">{subs} </span>
      </span>{" "}
    {views} views • {timestamp}
      </p>
      <p className="VideoRow__description">{description}</p>
      </div>
    </div>
    );
}

export default VideoRow

