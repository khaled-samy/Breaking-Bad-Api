import React from 'react'
import EpisodeCards from './EpisodeCards/EpisodeCards';
import "./Episodes.css";

const Episodes = ({episode}) => {
  
  return <>
            <h1 className='episode-title' >Episodes</h1>
            <EpisodeCards episode={episode}/>
  </>;
}

export default Episodes;