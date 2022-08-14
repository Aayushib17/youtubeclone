import React from 'react'
import "./Recommendedvideos.css"
import VideoCard from "./VideoCard";
function Recommendedvideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard 
         title="XYZ"
         views="2.3M"
         timestamp="3 days ago"
         channelImage="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400"
         channel="ABC"
        image="https://images.pexels.com/photos/5648357/pexels-photo-5648357.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
        <VideoCard
        title="XYZ"
         views="2.3M"
         timestamp="3 days ago"
         channelImage="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
         channel="ABC"
        image="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400" 
        />
        <VideoCard title="XYZ"
         views="2.3M"
         timestamp="3 days ago"
         channelImage="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400"
         channel="ABC"
        image="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <VideoCard title="XYZ"
         views="2.3M"
         timestamp="3 days ago"
         channelImage="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400"
         channel="ABC"
        image="https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <VideoCard 
        title="XYZ"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400"
        channel="ABC"
       image="https://images.pexels.com/photos/12502186/pexels-photo-12502186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <VideoCard 
        title="XYZ"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
        channel="ABC"
       image="https://images.pexels.com/photos/821948/pexels-photo-821948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <VideoCard 
        title="XYZ"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
        channel="ABC"
       image="https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <VideoCard 
        title="XYZ"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
        channel="ABC"
       image="https://images.pexels.com/photos/1537636/pexels-photo-1537636.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <VideoCard 
        title="XYZ"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
        channel="ABC"
       image="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&w=400"/>
      </div>
    
  
    </div>
  );
}

export default Recommendedvideos;
