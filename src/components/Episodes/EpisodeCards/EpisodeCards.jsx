import React, { useState } from "react";
import './EpisodeCards.css'

const EpisodeCards = (props) => {
  const { episode } = props;
  const [category, setCategory] = useState("All");
  return (
    <>
      <select className="seasons" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="1">Season1</option>
        <option value="2">Season2</option>
        <option value="3">Season3</option>
        <option value="4">Season4</option>
      </select>
      <div className="episode-container">
      {episode.length ? (
        episode
          .filter((item) =>
            category === "All" ? item : item.season === category
          )
          .map((item) => {
            return (

              <div className="episode-card">
                <p className="episode">Title : {item.title}</p>
                <p className="episode">Episode : {item.episode}</p>
                <p className="episode"> Season : {item.season}</p>
                <p className="episode">Date : {item.air_date}</p>
              </div>
            );
          })
      ) : (
        <div class="louder-container">
        <div class="loader"></div>
      </div>
      )}
      </div>
    </>
  );
};

export default EpisodeCards;
