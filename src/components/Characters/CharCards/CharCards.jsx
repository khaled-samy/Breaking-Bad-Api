import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../../App.css';
import './CharCards.css';

const CharCards = (props) => {
  const { result } = props;
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="...Search for character"
      />
<div className="char-cards-container" >
  

      {result.length ? (
        result
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => {
            return (
              <div className="char-card" key={item.char_id}>
                <Link to={`/characters/${item.char_id}`}>
                  <img src={item.img} alt={item.name} />
                </Link>
                  <p className="name">{item.name}</p>
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

export default CharCards;
