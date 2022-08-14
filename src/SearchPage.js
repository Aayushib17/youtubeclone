import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className="SearchPage">
        <div className="SearchPage__filter">
        <TuneIcon />  
        <h2>FILTER</h2>
        </div>
        <hr />
        
<ChannelRow 
image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="700k"
noOfVideos={367}
description="Bob Boilen | August 12, 2022 I'd been entertained and enchanted by the many of the 150 or so small concerts Andrew Bird ..."
/>
<hr />
<VideoRow 
image="https://images.pexels.com/photos/1652299/pexels-photo-1652299.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="679k"
noOfVideos={367}
description="Bob Boilen | August 12, 2022 I'd been entertained and enchanted by the many of the 150 or so small concerts Andrew Bird ..."
/>
<VideoRow 
image="https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="345k"
noOfVideos={367}
description="Lovejoy Perform LIVE At Brighton Electric Studio (ft.TommyInnit) hello, this would have been out a hell of a lot sooner if school ."
/>
<VideoRow 
image="https://images.pexels.com/photos/167378/pexels-photo-167378.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="367k"
noOfVideos={367}
description="The Chainsmokers and Halsey perform “Closer” live at the 2016 MTV Video Music Awards at Madison Square Garden in New "
/>
<VideoRow 
image="https://images.pexels.com/photos/3990842/pexels-photo-3990842.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="230k"
noOfVideos={367}
description="Livestream Recording of Imagine Dragons ƎVOLVE World Tour at the Lollapalooza Berlin Set List "
/>
<VideoRow 
image="https://images.pexels.com/photos/1845085/pexels-photo-1845085.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="870k"
noOfVideos={367}
description="For new music, the latest Tiny Desk (home) concerts and more, sign up for the NPR Music newsletter, sent weekly: ..."
/>
<VideoRow 
image="https://images.pexels.com/photos/1864637/pexels-photo-1864637.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="440k"
noOfVideos={367}
description="For new music, the latest Tiny Desk (home) concerts and more, sign up for the NPR Music newsletter, sent weekly: ..."
/>
<VideoRow 
image="https://images.pexels.com/photos/167523/pexels-photo-167523.jpeg?auto=compress&cs=tinysrgb&w=400"
Channel="Tom"
verified
subs="210k"
noOfVideos={367}
description="I wanted to create some other content too along with music videos, so I decided to put together a compilation of the most lit"
/>
         
    </div>
  );
}

export default SearchPage;
