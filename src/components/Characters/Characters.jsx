import React from 'react'
import CharCards from './CharCards/CharCards';
import "./Characters.css";

const Characters = ({char}) => {

  return (<>
            <h1 className='page-title'>Characters</h1>
            <CharCards result={char} />
  </>);
}

export default Characters;